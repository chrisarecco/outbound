import Stripe from "stripe";
import { NextResponse } from "next/server";

console.log(
  "Stripe secret key loaded:",
  Boolean(process.env.STRIPE_SECRET_KEY)
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { tripData } = await req.json();

    if (!tripData?.email || !tripData?.name) {
      return NextResponse.json(
        { error: "Missing customer details." },
        { status: 400 }
      );
    }

    const origin =
      req.headers.get("origin") || "https://outbound-travel.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],

      customer_email: tripData.email,

      success_url: `${origin}/build-my-trip/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/build-my-trip`,

      metadata: {
        name: String(tripData.name).slice(0, 500),
        email: String(tripData.email).slice(0, 500),
        destination: String(tripData.destination || "").slice(0, 500),
        unsureDestination: String(
          tripData.unsureDestination || false
        ).slice(0, 500),
        dates: String(tripData.dates || "").slice(0, 500),
        duration: String(tripData.duration || "").slice(0, 500),
        travellers: String(tripData.travellers || "").slice(0, 500),
        travellerCount: String(tripData.travellerCount || "").slice(0, 500),
        budget: String(tripData.budget || "").slice(0, 500),
        flightsIncluded: String(
          tripData.flightsIncluded || ""
        ).slice(0, 500),
        interests: JSON.stringify(
          tripData.selectedInterests || []
        ).slice(0, 500),
        otherInterests: String(
          tripData.otherInterests || ""
        ).slice(0, 500),
        travelStyle: String(tripData.travelStyle || "").slice(0, 500),
        pace: String(tripData.pace || "").slice(0, 500),
        tripDetails: String(tripData.tripDetails || "").slice(0, 500),
      },
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
  console.error("Stripe checkout error:", error);

  const message =
    error instanceof Error
      ? error.message
      : "Unknown Stripe error";

  return NextResponse.json(
    { error: message },
    { status: 500 }
  );
}
}