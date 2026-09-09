import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

const GUIDE_PRICES: Record<string, string> = {
  thailand: "price_1UDmP1LEJD8lGtcNdQxBTRWi",
  vietnam: "price_1UDmRRLEJD8lGtcNcXQgW87A",
  indonesia: "price_1UDmSJLEJD8lGtcNVvwRzzLJ",
  japan: "price_1UDmT7LEJD8lGtcNgiAhhgb8",
  philippines: "price_1UDmU5LEJD8lGtcNbQ0qPSjD",
  australia: "price_1UDmUtLEJD8lGtcNLVOs51qc",
};

const GUIDE_NAMES: Record<string, string> = {
  thailand: "Thailand",
  vietnam: "Vietnam",
  indonesia: "Indonesia",
  japan: "Japan",
  philippines: "The Philippines",
  australia: "Australia's East Coast",
};

const GUIDE_FILES: Record<string, string> = {
  thailand: "thailand.pdf",
  vietnam: "vietnam.pdf",
  indonesia: "indonesia.pdf",
  japan: "japan.pdf",
  philippines: "philippines.pdf",
  australia: "australia.pdf",
};

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature", {
      status: 400,
    });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);

    return new Response("Invalid signature", {
      status: 400,
    });
  }

  if (event.type !== "checkout.session.completed") {
    return new Response("Event received", {
      status: 200,
    });
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session;

    const metadata = session.metadata || {};

    console.log("=================================");
    console.log("STRIPE CHECKOUT COMPLETED");
    console.log("Session:", session.id);
    console.log("Metadata:", metadata);
    console.log("=================================");

    /*
     * ============================================================
     * DETECT WHETHER THIS IS A TRAVEL GUIDE PURCHASE
     * ============================================================
     */

    let purchasedGuide = "";

    if (metadata.product_type === "travel_guide") {
      purchasedGuide = metadata.guide?.toLowerCase() || "";
    }

    /*
     * Also check the actual Stripe price.
     * This protects us if metadata is missing.
     */

    if (!purchasedGuide) {
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        {
          limit: 10,
        }
      );

      for (const item of lineItems.data) {
        const priceId =
          typeof item.price === "string"
            ? item.price
            : item.price?.id;

        const matchingGuide = Object.entries(GUIDE_PRICES).find(
          ([, guidePriceId]) => guidePriceId === priceId
        );

        if (matchingGuide) {
          purchasedGuide = matchingGuide[0];
          break;
        }
      }
    }

    /*
     * ============================================================
     * TRAVEL GUIDE PURCHASE
     * ============================================================
     */

    if (purchasedGuide && GUIDE_NAMES[purchasedGuide]) {
      const guideName = GUIDE_NAMES[purchasedGuide];
      const filename = GUIDE_FILES[purchasedGuide];

      const customerEmail =
        session.customer_details?.email ||
        metadata.email ||
        "";

      if (!customerEmail) {
        console.error(
          "Guide purchase has no customer email."
        );

        return new Response("Missing customer email", {
          status: 400,
        });
      }

      const guideUrl =
        `https://outbound-travel.com/guides/${filename}`;

      console.log("GUIDE PURCHASE DETECTED");
      console.log("Guide:", purchasedGuide);
      console.log("Customer:", customerEmail);
      console.log("PDF:", guideUrl);

      /*
       * Fetch the PDF from the deployed website.
       */

      const pdfResponse = await fetch(guideUrl);

      if (!pdfResponse.ok) {
        console.error(
          "Could not fetch PDF:",
          pdfResponse.status,
          pdfResponse.statusText
        );

        return new Response("Could not fetch guide PDF", {
          status: 500,
        });
      }

      const pdfArrayBuffer = await pdfResponse.arrayBuffer();
      const pdfBuffer = Buffer.from(pdfArrayBuffer);

      console.log(
        `PDF downloaded successfully: ${pdfBuffer.length} bytes`
      );

      /*
       * Send the guide to the customer.
       */

      const emailResult = await resend.emails.send({
        from: "OUTBOUND <trips@outbound-travel.com>",
        to: customerEmail,
        subject: `Your OUTBOUND ${guideName} guide is ready ✈️`,
        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #111111;">

            <div style="padding: 40px 0 25px;">
              <div style="font-size: 22px; font-weight: 800; letter-spacing: -1px;">
                OUTBOUND.
              </div>
            </div>

            <div style="background: #f4f4f0; padding: 40px; border-radius: 24px;">

              <div style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #777777; margin-bottom: 15px;">
                YOUR GUIDE IS READY
              </div>

              <h1 style="font-size: 38px; line-height: 1.05; margin: 0 0 20px; letter-spacing: -1.5px;">
                ${guideName}
              </h1>

              <p style="font-size: 17px; line-height: 1.6; color: #555555;">
                Thanks for choosing OUTBOUND.
                Your travel guide is attached to this email and is ready to use.
              </p>

              <p style="font-size: 17px; line-height: 1.6; color: #555555;">
                Inside you'll find practical route advice, destination
                recommendations and the information you need to plan a better trip.
              </p>

              <div style="margin-top: 30px; padding: 20px; background: #ffffff; border-radius: 16px;">
                <strong>Your guide</strong><br />
                ${guideName}<br /><br />

                <strong>Format</strong><br />
                PDF
              </div>

            </div>

            <div style="padding: 30px 0; font-size: 13px; line-height: 1.6; color: #888888;">
              If you have any problems accessing your guide, simply reply to
              this email and we'll help you out.

              <br /><br />

              OUTBOUND.<br />
              Travel planning, rethought.
            </div>

          </div>
        `,
        attachments: [
          {
            filename,
            content: pdfBuffer,
          },
        ],
      });

      console.log(
        "Guide email sent successfully:",
        emailResult
      );

      return new Response("Guide delivered", {
        status: 200,
      });
    }

    /*
     * ============================================================
     * PERSONALISED TRIP
     * ============================================================
     *
     * IMPORTANT:
     * We only enter this section if this actually looks like
     * a personalised trip purchase.
     */

    const isPersonalisedTrip =
      Boolean(metadata.destination) ||
      Boolean(metadata.tripDetails) ||
      Boolean(metadata.travelStyle) ||
      Boolean(metadata.pace);

    if (!isPersonalisedTrip) {
      console.error(
        "Unrecognised Stripe checkout. No email sent."
      );

      return new Response("Unrecognised checkout", {
        status: 200,
      });
    }

    const customerEmail =
      session.customer_details?.email ||
      metadata.email ||
      "";

    const customerName = metadata.name || "";

    if (!customerEmail) {
      console.error(
        "Personalised trip has no customer email."
      );

      return new Response("Missing customer email", {
        status: 400,
      });
    }

    const tripSummary = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: 0 auto; color: #111111;">

        <h1>New OUTBOUND personalised trip</h1>

        <p><strong>Customer:</strong> ${customerName}</p>

        <p><strong>Email:</strong> ${customerEmail}</p>

        <hr />

        <h2>Trip details</h2>

        <p><strong>Destination:</strong> ${
          metadata.destination || "Not specified"
        }</p>

        <p><strong>Unsure destination:</strong> ${
          metadata.unsureDestination || "No"
        }</p>

        <p><strong>Dates:</strong> ${
          metadata.dates || "Not specified"
        }</p>

        <p><strong>Duration:</strong> ${
          metadata.duration || "Not specified"
        }</p>

        <p><strong>Travellers:</strong> ${
          metadata.travellers || "Not specified"
        }</p>

        <p><strong>Traveller count:</strong> ${
          metadata.travellerCount || "Not specified"
        }</p>

        <p><strong>Budget:</strong> ${
          metadata.budget || "Not specified"
        }</p>

        <p><strong>Flights included:</strong> ${
          metadata.flightsIncluded || "Not specified"
        }</p>

        <p><strong>Interests:</strong> ${
          metadata.interests || "Not specified"
        }</p>

        <p><strong>Other interests:</strong> ${
          metadata.otherInterests || "None"
        }</p>

        <p><strong>Travel style:</strong> ${
          metadata.travelStyle || "Not specified"
        }</p>

        <p><strong>Pace:</strong> ${
          metadata.pace || "Not specified"
        }</p>

        <p><strong>Additional trip details:</strong></p>

        <p>
          ${metadata.tripDetails || "None provided"}
        </p>

        <hr />

        <p>
          Payment completed successfully through Stripe.
        </p>

      </div>
    `;

    await resend.emails.send({
      from: "OUTBOUND <trips@outbound-travel.com>",
      to: process.env.OUTBOUND_EMAIL!,
      subject: `New paid trip — ${
        metadata.destination || "Destination TBD"
      }`,
      html: tripSummary,
    });

    await resend.emails.send({
      from: "OUTBOUND <trips@outbound-travel.com>",
      to: customerEmail,
      subject: "Your OUTBOUND trip is being planned ✈️",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #111111;">

          <div style="padding: 40px 0 25px;">
            <div style="font-size: 22px; font-weight: 800; letter-spacing: -1px;">
              OUTBOUND.
            </div>
          </div>

          <div style="background: #f4f4f0; padding: 40px; border-radius: 24px;">

            <div style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #777777; margin-bottom: 15px;">
              PAYMENT RECEIVED
            </div>

            <h1 style="font-size: 38px; line-height: 1.05; margin: 0 0 20px; letter-spacing: -1.5px;">
              Your trip is being planned.
            </h1>

            <p style="font-size: 17px; line-height: 1.6; color: #555555;">
              Thanks for choosing OUTBOUND.
              We've received your payment and your trip details.
            </p>

            <p style="font-size: 17px; line-height: 1.6; color: #555555;">
              We'll now start building your personalised itinerary around
              your destination, dates, budget and travel style.
            </p>

            <div style="margin-top: 30px; padding: 20px; background: #ffffff; border-radius: 16px;">
              <strong>Destination:</strong><br />
              ${metadata.destination || "We'll confirm this with you"}
              <br /><br />

              <strong>Delivery:</strong><br />
              Your personalised itinerary will be prepared within 48 hours.
            </div>

          </div>

          <div style="padding: 30px 0; font-size: 13px; line-height: 1.6; color: #888888;">
            If you have any questions, reply to this email and we'll help you out.
            <br /><br />
            OUTBOUND.<br />
            Travel planning, rethought.
          </div>

        </div>
      `,
    });

    console.log(
      `Personalised trip confirmation sent to ${customerEmail}`
    );

    return new Response("Trip processed", {
      status: 200,
    });
  } catch (error) {
    console.error(
      "Stripe webhook processing error:",
      error
    );

    return new Response("Webhook processing failed", {
      status: 500,
    });
  }
}