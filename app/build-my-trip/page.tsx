"use client";

import Link from "next/link";
import { useState } from "react";

const interests = [
  "Beaches",
  "Nightlife",
  "Adventure",
  "Food",
  "Culture",
  "Nature",
  "Luxury",
  "Meeting people",
  "Road trips",
  "Wellness",
];

export default function BuildMyTrip() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [destination, setDestination] = useState("");
  const [unsureDestination, setUnsureDestination] = useState(false);
  const [dates, setDates] = useState("");
  const [duration, setDuration] = useState("");
  const [travellers, setTravellers] = useState("");
  const [travellerCount, setTravellerCount] = useState("");
  const [budget, setBudget] = useState("");
  const [flightsIncluded, setFlightsIncluded] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [otherInterests, setOtherInterests] = useState("");
  const [travelStyle, setTravelStyle] = useState("");
  const [pace, setPace] = useState("");
  const [tripDetails, setTripDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const toggleInterest = (interest: string) => {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest]
    );
  };

  const canContinue = () => {
    if (step === 1) {
      return unsureDestination || destination.trim() !== "";
    }

    if (step === 2) {
      return dates.trim() !== "" && duration !== "";
    }

    if (step === 3) {
      return travellers !== "" && travellerCount !== "";
    }

    if (step === 4) {
      return budget !== "" && flightsIncluded !== "";
    }

    if (step === 5) {
      return (
        selectedInterests.length > 0 ||
        otherInterests.trim() !== ""
      );
    }

    if (step === 6) {
      return travelStyle !== "" && pace !== "";
    }

    if (step === 7) {
      return tripDetails.trim() !== "";
    }

    if (step === 8) {
      return (
        name.trim() !== "" &&
        email.trim() !== "" &&
        email.includes("@")
      );
    }

    return false;
  };

  const nextStep = () => {
    if (step < 8 && canContinue()) {
      setStep((current) => current + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((current) => current - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const submitTrip = async () => {
    if (!canContinue()) return;

    setLoading(true);

    /*
      Stripe will be connected here.

      The trip brief should only be sent to OUTBOUND
      after successful payment has been confirmed by Stripe.
    */

    await new Promise((resolve) => setTimeout(resolve, 500));

    setLoading(false);
    setSubmitted(true);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f3ee] text-black">

        <header className="flex items-center justify-between px-6 py-6 md:px-10">
          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
          >
            OUTBOUND.
          </Link>

          <Link
            href="/destinations"
            className="text-sm font-semibold hover:opacity-50"
          >
            Explore destinations →
          </Link>
        </header>

        <section className="mx-auto max-w-5xl px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
              Trip brief complete
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              YOUR TRIP.
              <span className="block text-black/25">
                BUILT AROUND YOU.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/60">
              We&apos;ve got everything we need to build a personalised
              travel plan around your dates, budget, style and priorities.
            </p>

          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

            <div className="rounded-3xl bg-white p-7 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                OUTBOUND Personalised Trip
              </p>

              <div className="mt-4 flex items-end gap-3">
                <p className="text-5xl font-black tracking-[-0.05em]">
                  £39.99
                </p>

                <p className="pb-1 text-sm text-black/45">
                  one-off
                </p>
              </div>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/60">
                A complete trip plan built around the information
                you&apos;ve just given us.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Personalised route",
                  "Day-by-day itinerary",
                  "Accommodation recommendations",
                  "Transport between stops",
                  "Activities & experiences",
                  "Restaurant recommendations",
                  "Estimated trip costs",
                  "Booking links",
                  "Interactive trip map",
                  "Useful local tips",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-[#f5f3ee] px-4 py-4"
                  >
                    <span className="font-black">
                      ✓
                    </span>

                    <span className="text-sm font-bold">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <button
                onClick={() =>
                  alert(
                    "Stripe checkout will be connected here next."
                  )
                }
                className="mt-8 w-full rounded-full bg-black px-8 py-5 text-sm font-bold text-white transition hover:bg-black/75"
              >
                Continue to payment →
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-black/40">
                Secure payment via Stripe. We won&apos;t start building
                your personalised trip until payment is complete.
              </p>

            </div>

            <div className="rounded-3xl bg-black p-7 text-white md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                What happens next
              </p>

              <div className="mt-8 space-y-8">

                <div>
                  <p className="text-xs font-black text-white/35">
                    01
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    Complete payment
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Secure your personalised trip plan for £39.99.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black text-white/35">
                    02
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    We build your trip
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    We use your brief to create your route,
                    itinerary, recommendations and map.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black text-white/35">
                    03
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    Your plan is delivered
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    You receive your complete OUTBOUND trip plan by
                    email.
                  </p>
                </div>

              </div>

            </div>

          </div>

          <p className="mt-8 text-sm text-black/45">
            Your trip brief is ready. Payment is required before we
            begin building your personalised plan.
          </p>

        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">

      <header className="flex items-center justify-between px-6 py-6 md:px-10">

        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
        >
          OUTBOUND.
        </Link>

        <Link
          href="/destinations"
          className="text-sm font-semibold hover:opacity-50"
        >
          Explore destinations →
        </Link>

      </header>

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-16">

        <div className="mb-12">

          <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em]">
            <span>
              Build my trip
            </span>

            <span>
              Step {step} of 8
            </span>
          </div>

          <div className="h-1 w-full rounded-full bg-black/10">

            <div
              className="h-1 rounded-full bg-black transition-all duration-300"
              style={{
                width: `${(step / 8) * 100}%`,
              }}
            />

          </div>

        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Destination
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Where are you thinking about going?
            </h1>

            <input
              type="text"
              value={destination}
              disabled={unsureDestination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Vietnam, Thailand, Australia..."
              className="w-full border-b-2 border-black bg-transparent py-5 text-2xl outline-none placeholder:text-black/25 disabled:opacity-30 md:text-4xl"
            />

            <button
              onClick={() => {
                const next = !unsureDestination;

                setUnsureDestination(next);

                if (next) {
                  setDestination("");
                }
              }}
              className={`mt-6 rounded-full border-2 px-6 py-3 text-sm font-bold transition ${
                unsureDestination
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white hover:border-black"
              }`}
            >
              I&apos;m not sure yet
            </button>

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Timing
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              When are you going?
            </h1>

            <input
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              placeholder="e.g. 10–20 June 2027"
              className="w-full border-b-2 border-black bg-transparent py-5 text-2xl outline-none placeholder:text-black/25 md:text-4xl"
            />

            <p className="mb-3 mt-10 text-sm font-bold uppercase tracking-[0.15em]">
              How long have you got?
            </p>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Under 7 days",
                "7–14 days",
                "2–4 weeks",
                "1 month+",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setDuration(option)}
                  className={`rounded-2xl border-2 p-5 text-left font-bold transition ${
                    duration === option
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Travellers
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Who&apos;s coming?
            </h1>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Solo",
                "Couple",
                "Friends",
                "Family",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setTravellers(option)}
                  className={`rounded-2xl border-2 p-6 text-left text-xl font-bold transition ${
                    travellers === option
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}

            </div>

            <input
              type="number"
              min="1"
              value={travellerCount}
              onChange={(e) => setTravellerCount(e.target.value)}
              placeholder="Number of travellers"
              className="mt-8 w-full rounded-2xl border-2 border-black/10 bg-white p-6 text-xl outline-none focus:border-black"
            />

          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Budget
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              What&apos;s your trip budget?
            </h1>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Under £750",
                "£750–£1,500",
                "£1,500–£2,500",
                "£2,500–£5,000",
                "£5,000+",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setBudget(option)}
                  className={`rounded-2xl border-2 p-5 text-left font-bold transition ${
                    budget === option
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}

            </div>

            <p className="mb-3 mt-10 text-sm font-bold uppercase tracking-[0.15em]">
              Does that include flights?
            </p>

            <div className="grid gap-4 sm:grid-cols-2">

              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  onClick={() => setFlightsIncluded(option)}
                  className={`rounded-2xl border-2 p-5 text-left font-bold transition ${
                    flightsIncluded === option
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Interests
            </p>

            <h1 className="mb-3 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              What are you into?
            </h1>

            <p className="mb-8 text-black/45">
              Pick as many as you like.
            </p>

            <div className="flex flex-wrap gap-3">

              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`rounded-full border-2 px-6 py-4 text-lg font-bold transition ${
                    selectedInterests.includes(interest)
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {interest}
                </button>
              ))}

            </div>

            <div className="mt-10">

              <label className="mb-3 block text-sm font-bold uppercase tracking-[0.15em]">
                Other
              </label>

              <textarea
                value={otherInterests}
                onChange={(e) => setOtherInterests(e.target.value)}
                placeholder="Anything else you're interested in?"
                rows={4}
                className="w-full resize-none rounded-2xl border-2 border-black/10 bg-white p-6 text-lg outline-none focus:border-black"
              />

            </div>

          </div>
        )}

        {/* STEP 6 */}

        {step === 6 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Travel style
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              How do you like to travel?
            </h1>

            <div className="grid gap-4 sm:grid-cols-3">

              {[
                "Backpacker",
                "Mid-range",
                "Luxury",
              ].map((style) => (
                <button
                  key={style}
                  onClick={() => setTravelStyle(style)}
                  className={`rounded-2xl border-2 p-5 text-lg font-bold transition ${
                    travelStyle === style
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {style}
                </button>
              ))}

            </div>

            <p className="mb-3 mt-10 text-sm font-bold uppercase tracking-[0.15em]">
              What pace suits you?
            </p>

            <div className="grid gap-4 sm:grid-cols-3">

              {[
                "Slow & relaxed",
                "Balanced",
                "See as much as possible",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setPace(option)}
                  className={`rounded-2xl border-2 p-5 text-left font-bold transition ${
                    pace === option
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* STEP 7 */}

        {step === 7 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Make it yours
            </p>

            <h1 className="mb-5 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              What would make this trip perfect?
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-black/50">
              Tell us about must-do experiences, places you already
              have in mind, things you want to avoid, or anything
              else that matters.
            </p>

            <textarea
              value={tripDetails}
              onChange={(e) => setTripDetails(e.target.value)}
              placeholder="e.g. We want a mix of beaches and nightlife, don't want to move hotels every night, and we'd love to do a diving trip..."
              rows={7}
              className="w-full resize-none rounded-2xl border-2 border-black/10 bg-white p-6 text-lg outline-none focus:border-black"
            />

          </div>
        )}

        {/* STEP 8 */}

        {step === 8 && (
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Your details
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Where should we send your trip?
            </h1>

            <div className="space-y-5">

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border-2 border-black/10 bg-white p-6 text-xl outline-none focus:border-black"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-2xl border-2 border-black/10 bg-white p-6 text-xl outline-none focus:border-black"
              />

            </div>

            <div className="mt-7 rounded-2xl bg-white p-6">

              <p className="font-black">
                Personalised trip planning — £39.99
              </p>

              <p className="mt-2 text-sm leading-relaxed text-black/50">
                You&apos;ll review the product and complete secure
                payment before we begin building your trip.
              </p>

            </div>

          </div>
        )}

        {/* NAVIGATION */}

        <div className="mt-12 flex items-center justify-between">

          <button
            onClick={previousStep}
            disabled={step === 1}
            className={`text-sm font-bold ${
              step === 1
                ? "cursor-not-allowed opacity-20"
                : "hover:opacity-50"
            }`}
          >
            ← Back
          </button>

          {step < 8 ? (
            <button
              onClick={nextStep}
              disabled={!canContinue()}
              className={`rounded-full px-8 py-4 text-sm font-bold text-white transition ${
                canContinue()
                  ? "bg-black hover:bg-black/75"
                  : "cursor-not-allowed bg-black/20"
              }`}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={submitTrip}
              disabled={!canContinue() || loading}
              className={`rounded-full px-8 py-4 text-sm font-bold text-white transition ${
                canContinue() && !loading
                  ? "bg-black hover:bg-black/75"
                  : "cursor-not-allowed bg-black/20"
              }`}
            >
              {loading
                ? "Preparing..."
                : "Continue to payment →"}
            </button>
          )}

        </div>

      </section>
    </main>
  );
}