import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const metadata = session.metadata || {};

      const customerEmail =
        session.customer_details?.email ||
        metadata.email ||
        "";

      const customerName =
        metadata.name ||
        session.customer_details?.name ||
        "Customer";

      await resend.emails.send({
        from: "OUTBOUND <trips@outbound-travel.com>",
        to: [process.env.OUTBOUND_EMAIL!],
        subject: `PAID TRIP — ${customerName}`,
        html: `
          <h1>New OUTBOUND Personalised Trip</h1>

          <p><strong>Payment received: £39.99</strong></p>

          <h2>Customer</h2>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>

          <h2>Trip brief</h2>
          <p><strong>Destination:</strong> ${metadata.destination || "Not provided"}</p>
          <p><strong>Dates:</strong> ${metadata.dates || "Not provided"}</p>
          <p><strong>Duration:</strong> ${metadata.duration || "Not provided"}</p>
          <p><strong>Travellers:</strong> ${metadata.travellers || "Not provided"}</p>
          <p><strong>Number of travellers:</strong> ${metadata.travellerCount || "Not provided"}</p>
          <p><strong>Budget:</strong> ${metadata.budget || "Not provided"}</p>
          <p><strong>Flights included:</strong> ${metadata.flightsIncluded || "Not provided"}</p>
          <p><strong>Interests:</strong> ${metadata.interests || "Not provided"}</p>
          <p><strong>Travel style:</strong> ${metadata.travelStyle || "Not provided"}</p>
          <p><strong>Pace:</strong> ${metadata.pace || "Not provided"}</p>

          <h2>What would make this trip perfect?</h2>
          <p>${metadata.tripDetails || "Not provided"}</p>

          <hr />

          <p><strong>Stripe session:</strong> ${session.id}</p>
        `,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);

    return NextResponse.json(
      { error: "Webhook error" },
      { status: 400 }
    );
  }
}