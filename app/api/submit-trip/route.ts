import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      destination,
      dates,
      duration,
      budget,
      travellers,
      travellerCount,
      flightsIncluded,
      interests,
      otherInterests,
      travelStyle,
      pace,
      tripDetails,
      name,
      email,
    } = data;

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "OUTBOUND <onboarding@resend.dev>",
      to: [process.env.OUTBOUND_EMAIL!],
      subject: `New OUTBOUND trip enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h1>New OUTBOUND Trip Enquiry</h1>

          <hr />

          <h2>Customer</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <h2>Trip</h2>

          <p><strong>Destination:</strong> ${
            destination || "Not specified"
          }</p>

          <p><strong>Dates:</strong> ${
            dates || "Not specified"
          }</p>

          <p><strong>Duration:</strong> ${
            duration || "Not specified"
          }</p>

          <p><strong>Travellers:</strong> ${
            travellers || "Not specified"
          }</p>

          <p><strong>Number of travellers:</strong> ${
            travellerCount || "Not specified"
          }</p>

          <p><strong>Budget:</strong> ${
            budget || "Not specified"
          }</p>

          <p><strong>Flights included:</strong> ${
            flightsIncluded || "Not specified"
          }</p>

          <p><strong>Interests:</strong> ${
            interests || "None selected"
          }</p>

          <p><strong>Other interests:</strong> ${
            otherInterests || "None specified"
          }</p>

          <p><strong>Travel style:</strong> ${
            travelStyle || "Not specified"
          }</p>

          <p><strong>Pace:</strong> ${
            pace || "Not specified"
          }</p>

          <h2>Additional details</h2>

          <p>${
            tripDetails || "No additional details provided."
          }</p>

          <hr />

          <p>
            This enquiry was submitted through the OUTBOUND Build My Trip form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: emailData?.id,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}