import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const guidePrices: Record<string, string> = {
  thailand: "price_1UDrumLIPTWCzqpTtBQG5boq",
  vietnam: "price_1UDrv9LIPTWCzqpTZ1Iem3zT",
  indonesia: "price_1UDrvTLIPTWCzqpTo55jIxjg",
  japan: "price_1UDrvoLIPTWCzqpT0x2vNbYm",
  philippines: "price_1UDrw3LIPTWCzqpTruwX5ayv",
  australia: "price_1UDrwKLIPTWCzqpTMBpQ3p0S",
};

const guideNames: Record<string, string> = {
  thailand: "Thailand Travel Guide",
  vietnam: "Vietnam Travel Guide",
  indonesia: "Indonesia Travel Guide",
  japan: "Japan Travel Guide",
  philippines: "Philippines Travel Guide",
  australia: "Australia's East Coast Travel Guide",
};

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is missing.");
      return Response.json(
        { error: "Stripe is not configured correctly." },
        { status: 500 }
      );
    }

    const data = await request.json();

    const guide = String(data.guide || "").toLowerCase().trim();
    const email = String(data.email || "").trim();

    if (!guide) {
      return Response.json(
        { error: "Guide is required." },
        { status: 400 }
      );
    }

    if (!email) {
      return Response.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const priceId = guidePrices[guide];
    const guideName = guideNames[guide];

    if (!priceId || !guideName) {
      return Response.json(
        { error: "Invalid travel guide selected." },
        { status: 400 }
      );
    }

    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    console.log("Creating guide checkout session");
    console.log("Guide:", guide);
    console.log("Price ID:", priceId);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      customer_email: email,

      metadata: {
        guide,
        guideName,
        customerEmail: email,
      },

      success_url: `${origin}/guides/${guide}?success=true&session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${origin}/guides/${guide}?cancelled=true`,

      billing_address_collection: "auto",

      allow_promotion_codes: true,
    });

    return Response.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Guide Stripe checkout error:", error);

    if (error instanceof Stripe.errors.StripeError) {
      return Response.json(
        {
          error:
            error.message ||
            "Stripe was unable to create the checkout session.",
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        error: "Unable to create checkout session. Please try again.",
      },
      { status: 500 }
    );
  }
}