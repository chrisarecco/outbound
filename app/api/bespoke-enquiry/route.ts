import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      destination,
      dates,
      travellers,
      budget,
      tripDetails,
      website,
    } = data;

    // Honeypot spam protection
    if (website) {
      return Response.json({
        success: true,
      });
    }

    if (
      !name ||
      !email ||
      !destination ||
      !tripDetails
    ) {
      return Response.json(
        {
          error:
            "Name, email, destination and trip details are required.",
        },
        {
          status: 400,
        }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const outboundEmail =
      process.env.OUTBOUND_EMAIL;

    if (!outboundEmail) {
      console.error(
        "OUTBOUND_EMAIL is missing."
      );

      return Response.json(
        {
          error:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Send enquiry to OUTBOUND.
     */

    const { data: emailData, error } =
      await resend.emails.send({
        from: "OUTBOUND <onboarding@resend.dev>",
        to: [outboundEmail],
        replyTo: email,
        subject: `New bespoke enquiry — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111; max-width: 700px; margin: 0 auto;">

            <h1 style="font-size: 30px; margin-bottom: 8px;">
              New OUTBOUND Bespoke Enquiry
            </h1>

            <p style="color: #777; margin-top: 0;">
              A new bespoke travel enquiry has been submitted.
            </p>

            <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;" />

            <h2 style="font-size: 20px;">
              Customer
            </h2>

            <p>
              <strong>Name</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email</strong><br />
              ${escapeHtml(email)}
            </p>

            <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;" />

            <h2 style="font-size: 20px;">
              Trip
            </h2>

            <p>
              <strong>Destination</strong><br />
              ${escapeHtml(destination)}
            </p>

            <p>
              <strong>Dates</strong><br />
              ${escapeHtml(dates || "Not specified")}
            </p>

            <p>
              <strong>Travellers</strong><br />
              ${escapeHtml(travellers || "Not specified")}
            </p>

            <p>
              <strong>Budget</strong><br />
              ${escapeHtml(budget || "Not specified")}
            </p>

            <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;" />

            <h2 style="font-size: 20px;">
              Trip brief
            </h2>

            <div style="background: #f5f3ee; padding: 20px; border-radius: 12px; white-space: pre-wrap;">
              ${escapeHtml(tripDetails)}
            </div>

            <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;" />

            <p style="font-size: 13px; color: #777;">
              Reply directly to this email to contact the customer.
            </p>

          </div>
        `,
      });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return Response.json(
        {
          error: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Send confirmation to customer.
     */

    const {
      error: confirmationError,
    } = await resend.emails.send({
      from: "OUTBOUND <onboarding@resend.dev>",
      to: [email],
      subject:
        "OUTBOUND. We received your bespoke enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111; max-width: 650px; margin: 0 auto;">

          <h1 style="font-size: 34px; letter-spacing: -2px;">
            OUTBOUND.
          </h1>

          <p style="font-size: 12px; font-weight: bold; letter-spacing: 2px; color: #888;">
            BESPOKE TRAVEL PLANNING
          </p>

          <div style="margin-top: 45px;">

            <h2 style="font-size: 30px; letter-spacing: -1px;">
              We've got your trip.
            </h2>

            <p>
              Hi ${escapeHtml(name)},
            </p>

            <p>
              Thanks for getting in touch with OUTBOUND.
              We've received your bespoke trip enquiry and
              will review the details you've sent us.
            </p>

            <p>
              We'll be in touch with the next steps shortly.
            </p>

          </div>

          <div style="margin-top: 35px; background: #f5f3ee; padding: 24px; border-radius: 16px;">

            <p style="margin-top: 0;">
              <strong>Destination</strong>
            </p>

            <p>
              ${escapeHtml(destination)}
            </p>

            <p>
              <strong>Dates</strong>
            </p>

            <p>
              ${escapeHtml(dates || "Not specified")}
            </p>

            <p>
              <strong>Travellers</strong>
            </p>

            <p>
              ${escapeHtml(travellers || "Not specified")}
            </p>

          </div>

          <p style="margin-top: 45px; color: #888; font-size: 13px;">
            OUTBOUND. — Travel planning, rethought.
          </p>

        </div>
      `,
    });

    if (confirmationError) {
      console.error(
        "Confirmation email error:",
        confirmationError
      );

      // The enquiry itself succeeded, so don't
      // tell the customer their submission failed.
    }

    return Response.json({
      success: true,
      id: emailData?.id,
    });

  } catch (error) {
    console.error(
      "Bespoke enquiry error:",
      error
    );

    return Response.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}


/*
 * Escape user input before inserting it into HTML.
 */

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}