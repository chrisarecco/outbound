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

      // Email OUTBOUND with the paid trip brief
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

      // Confirmation email to the customer
      if (customerEmail) {
        await resend.emails.send({
          from: "OUTBOUND <trips@outbound-travel.com>",
          to: [customerEmail],
          subject: "Your OUTBOUND trip is being planned ✈️",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
              
              <h1 style="font-size: 36px; margin-bottom: 10px;">
                You're going places.
              </h1>

              <p style="font-size: 18px; color: #555;">
                Hi ${customerName},
              </p>

              <p style="font-size: 16px; line-height: 1.6; color: #555;">
                We've received your payment and your OUTBOUND trip is now being prepared.
              </p>

              <div style="background: #f5f3ee; padding: 24px; border-radius: 16px; margin: 30px 0;">
                
                <p style="font-weight: bold; margin-top: 0;">
                  Your Personalised Trip
                </p>

                <p style="color: #555; line-height: 1.6;">
                  We'll build your trip around your destination, dates, budget,
                  interests and travel style.
                </p>

                <p style="color: #555; line-height: 1.6;">
                  Your plan includes your route, day-by-day itinerary,
                  accommodation recommendations, transport, activities,
                  restaurants, estimated costs, booking links and useful local tips.
                </p>

              </div>

              <h2 style="font-size: 22px;">
                What happens next?
              </h2>

              <p style="color: #555; line-height: 1.6;">
                We'll prepare your personalised itinerary and send it to you by
                email within 48 hours.
              </p>

              <p style="margin-top: 35px; color: #555;">
                Thanks for choosing OUTBOUND.
              </p>

              <p style="font-weight: bold;">
                OUTBOUND.
              </p>

            </div>
          `,
        });
      }
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