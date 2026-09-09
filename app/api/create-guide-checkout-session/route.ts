import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const GUIDE_PRICES: Record<string, string> = {
  thailand: "price_1UDmP1LEJD8lGtcNdQxBTRWi",
  vietnam: "price_1UDmRRLEJD8lGtcNcXQgW87A",
  indonesia: "price_1UDmSJLEJD8lGtcNVvwRzzLJ",
  japan: "price_1UDmT7LEJD8lGtcNgiAhhgb8",
  philippines: "price_1UDmU5LEJD8lGtcNbQ0qPSjD",
  australia: "price_1UDmUtLEJD8lGtcNLVOs51qc",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const guide = body?.guide;
    const email = body?.email;

    if (!guide || typeof guide !== "string") {
      return NextResponse.json(
        { error: "Invalid guide." },
        { status: 400 }
      );
    }

    const guideKey = guide.toLowerCase();

    if (!GUIDE_PRICES[guideKey]) {
      return NextResponse.json(
        { error: `Guide not found: ${guideKey}` },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is missing.");

      return NextResponse.json(
        { error: "Stripe configuration is missing." },
        { status: 500 }
      );
    }

    const origin =
      req.headers.get("origin") || "https://outbound-travel.com";

    console.log("Creating guide checkout:", {
      guide: guideKey,
      email,
      price: GUIDE_PRICES[guideKey],
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: GUIDE_PRICES[guideKey],
          quantity: 1,
        },
      ],

      customer_email: email.trim(),

      success_url: `${origin}/guides/success?guide=${guideKey}&session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/guides/${guideKey}`,

      metadata: {
        product_type: "travel_guide",
        guide: guideKey,
        email: email.trim(),
      },
    });

    console.log("Guide checkout created:", session.id);

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("GUIDE CHECKOUT ERROR:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to create checkout session.";

    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 500,
      }
    );
  }
}