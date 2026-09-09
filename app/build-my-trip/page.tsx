"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

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

const durations = [
  "Under 7 days",
  "7–14 days",
  "2–4 weeks",
  "1 month+",
];

const travellerTypes = [
  "Solo",
  "Couple",
  "Friends",
  "Family",
];

const budgets = [
  "Under £750",
  "£750–£1,500",
  "£1,500–£2,500",
  "£2,500–£5,000",
  "£5,000+",
];

const travelStyles = [
  {
    title: "Backpacker",
    description: "Social, flexible and value-focused.",
  },
  {
    title: "Mid-range",
    description: "Comfortable without overspending.",
  },
  {
    title: "Luxury",
    description: "Premium stays, experiences and comfort.",
  },
];

const paces = [
  {
    title: "Slow & relaxed",
    description: "Fewer places, more time in each.",
  },
  {
    title: "Balanced",
    description: "A mix of seeing things and downtime.",
  },
  {
    title: "See as much as possible",
    description: "Maximum experiences and destinations.",
  },
];

export default function BuildMyTrip() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [destination, setDestination] = useState("");
  const [unsureDestination, setUnsureDestination] = useState(false);

  const [dates, setDates] = useState("");
  const [duration, setDuration] = useState("");

  const [travellers, setTravellers] = useState("");
  const [travellerCount, setTravellerCount] = useState("");

  const [budget, setBudget] = useState("");
  const [flightsIncluded, setFlightsIncluded] = useState("");

  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    []
  );
  const [otherInterests, setOtherInterests] = useState("");

  const [travelStyle, setTravelStyle] = useState("");
  const [pace, setPace] = useState("");

  const [tripDetails, setTripDetails] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const totalSteps = 7;

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
      return (
        name.trim() !== "" &&
        email.trim() !== "" &&
        email.includes("@")
      );
    }

    return false;
  };

  const nextStep = () => {
    if (!canContinue()) return;

    setError("");

    if (step < totalSteps) {
      setStep((current) => current + 1);
    }
  };

  const previousStep = () => {
    setError("");

    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  const submitTrip = async () => {
    if (!canContinue()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tripData: {
            destination,
            unsureDestination,
            dates,
            duration,
            travellers,
            travellerCount,
            budget,
            flightsIncluded,
            selectedInterests,
            otherInterests,
            travelStyle,
            pace,
            tripDetails,
            name,
            email,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(
          data.error || "Unable to start checkout."
        );
      }

      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  };

  const progress = (step / totalSteps) * 100;

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">

      {/* HEADER */}
      <div className="relative z-50 h-[82px] shrink-0 bg-[#f5f3ee] sm:h-[92px]">
        <SiteHeader />
      </div>

      {/* FORM */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-8 md:px-10 md:pt-12">

        {/* FORM HEADER */}

        <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/10 pb-6">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              OUTBOUND. PERSONAL TRIP PLANNING
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
              Build my trip
            </h1>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
              Step
            </p>

            <p className="mt-1 text-lg font-black">
              {step} <span className="text-black/20">/</span>{" "}
              {totalSteps}
            </p>
          </div>

        </div>

        {/* PROGRESS */}

        <div className="mb-14">

          <div className="h-1 rounded-full bg-black/10">
            <div
              className="h-1 rounded-full bg-black transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-black/30">
            <span>Brief</span>
            <span>Preferences</span>
            <span>Payment</span>
          </div>

        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              01 — Destination
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Where do you want to go?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/50">
              Already know where you're going? Tell us.
              Not sure yet? We can work from the type of trip
              you're looking for.
            </p>

            <div className="mt-10">

              <input
                type="text"
                value={destination}
                disabled={unsureDestination}
                onChange={(event) =>
                  setDestination(event.target.value)
                }
                placeholder="e.g. Thailand, Japan, Italy..."
                className="w-full border-b-2 border-black bg-transparent py-5 text-2xl font-medium outline-none placeholder:text-black/20 disabled:opacity-25 sm:text-3xl"
              />

            </div>

            <button
              type="button"
              onClick={() => {
                const next = !unsureDestination;

                setUnsureDestination(next);

                if (next) {
                  setDestination("");
                }
              }}
              className={`mt-7 rounded-full border-2 px-6 py-3.5 text-sm font-bold transition ${
                unsureDestination
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white hover:border-black"
              }`}
            >
              {unsureDestination
                ? "✓ Help me choose"
                : "I'm not sure yet"}
            </button>

            {unsureDestination && (
              <div className="mt-7 rounded-2xl bg-white p-6">

                <p className="font-bold">
                  No problem.
                </p>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/50">
                  We'll use your budget, interests, dates and
                  travel style to help shape the destination and
                  route.
                </p>

              </div>
            )}

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              02 — Timing
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              When are you going?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/50">
              Exact dates are ideal, but approximate dates are
              completely fine.
            </p>

            <input
              type="text"
              value={dates}
              onChange={(event) =>
                setDates(event.target.value)
              }
              placeholder="e.g. 10–24 June 2027"
              className="mt-10 w-full border-b-2 border-black bg-transparent py-5 text-2xl font-medium outline-none placeholder:text-black/20 sm:text-3xl"
            />

            <div className="mt-12">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                How long have you got?
              </p>

              <div className="grid gap-3 sm:grid-cols-2">

                {durations.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDuration(option)}
                    className={`rounded-2xl border-2 p-6 text-left font-bold transition ${
                      duration === option
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black"
                    }`}
                  >
                    <div className="flex items-center justify-between">

                      <span>{option}</span>

                      {duration === option && (
                        <span>✓</span>
                      )}

                    </div>
                  </button>
                ))}

              </div>

            </div>

          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              03 — Travellers
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Who's coming?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/50">
              This helps us recommend the right accommodation,
              activities and pace.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              {travellerTypes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTravellers(option)}
                  className={`rounded-2xl border-2 p-6 text-left transition ${
                    travellers === option
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white hover:border-black"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xl font-black">
                      {option}
                    </span>

                    {travellers === option && (
                      <span>✓</span>
                    )}

                  </div>

                </button>
              ))}

            </div>

            <div className="mt-8 max-w-sm">

              <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Number of travellers
              </label>

              <input
                type="number"
                min="1"
                max="50"
                value={travellerCount}
                onChange={(event) =>
                  setTravellerCount(event.target.value)
                }
                placeholder="e.g. 2"
                className="w-full rounded-2xl border-2 border-black/10 bg-white p-5 text-xl outline-none focus:border-black"
              />

            </div>

          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              04 — Budget
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              What's your trip budget?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/50">
              Give us a rough total budget so we can make
              recommendations that are actually realistic.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              {budgets.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBudget(option)}
                  className={`rounded-2xl border-2 p-6 text-left font-bold transition ${
                    budget === option
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white hover:border-black"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span>{option}</span>

                    {budget === option && (
                      <span>✓</span>
                    )}

                  </div>

                </button>
              ))}

            </div>

            <div className="mt-12">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Does that budget include flights?
              </p>

              <div className="grid gap-3 sm:grid-cols-2">

                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setFlightsIncluded(option)
                    }
                    className={`rounded-2xl border-2 p-6 text-left font-bold transition ${
                      flightsIncluded === option
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <span>{option}</span>

                      {flightsIncluded === option && (
                        <span>✓</span>
                      )}

                    </div>

                  </button>
                ))}

              </div>

            </div>

          </div>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              05 — Interests
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              What are you actually into?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/50">
              Pick everything that sounds like you. You can
              choose as many as you want.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {interests.map((interest) => {
                const selected =
                  selectedInterests.includes(interest);

                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() =>
                      toggleInterest(interest)
                    }
                    className={`rounded-full border-2 px-5 py-3.5 text-sm font-bold transition sm:px-6 sm:py-4 sm:text-base ${
                      selected
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black"
                    }`}
                  >
                    {selected && (
                      <span className="mr-2">✓</span>
                    )}

                    {interest}
                  </button>
                );
              })}

            </div>

            <div className="mt-10">

              <label className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Anything else?
              </label>

              <textarea
                value={otherInterests}
                onChange={(event) =>
                  setOtherInterests(event.target.value)
                }
                placeholder="e.g. scuba diving, surfing, local food, photography..."
                rows={4}
                className="w-full resize-none rounded-2xl border-2 border-black/10 bg-white p-5 text-base leading-relaxed outline-none focus:border-black"
              />

            </div>

          </div>
        )}

        {/* STEP 6 */}

        {step === 6 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              06 — Travel style
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              How should the trip feel?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/50">
              We want to build the trip you'd actually enjoy,
              not a generic itinerary.
            </p>

            <div className="mt-10">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Your travel style
              </p>

              <div className="grid gap-3">

                {travelStyles.map((style) => (
                  <button
                    key={style.title}
                    type="button"
                    onClick={() =>
                      setTravelStyle(style.title)
                    }
                    className={`rounded-2xl border-2 p-6 text-left transition ${
                      travelStyle === style.title
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black"
                    }`}
                  >

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <h3 className="text-lg font-black">
                          {style.title}
                        </h3>

                        <p
                          className={`mt-2 text-sm leading-relaxed ${
                            travelStyle === style.title
                              ? "text-white/55"
                              : "text-black/45"
                          }`}
                        >
                          {style.description}
                        </p>

                      </div>

                      {travelStyle === style.title && (
                        <span>✓</span>
                      )}

                    </div>

                  </button>
                ))}

              </div>

            </div>

            <div className="mt-12">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Your ideal pace
              </p>

              <div className="grid gap-3">

                {paces.map((option) => (
                  <button
                    key={option.title}
                    type="button"
                    onClick={() =>
                      setPace(option.title)
                    }
                    className={`rounded-2xl border-2 p-6 text-left transition ${
                      pace === option.title
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white hover:border-black"
                    }`}
                  >

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <h3 className="text-lg font-black">
                          {option.title}
                        </h3>

                        <p
                          className={`mt-2 text-sm leading-relaxed ${
                            pace === option.title
                              ? "text-white/55"
                              : "text-black/45"
                          }`}
                        >
                          {option.description}
                        </p>

                      </div>

                      {pace === option.title && (
                        <span>✓</span>
                      )}

                    </div>

                  </button>
                ))}

              </div>

            </div>

          </div>
        )}

        {/* STEP 7 */}

        {step === 7 && (
          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              07 — Final details
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Tell us anything else.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/50 sm:text-lg">
              This is where you can give us the details that make
              your trip different. Must-do experiences, places
              you've already found, things you don't want, special
              occasions or anything else we should know.
            </p>

            <textarea
              value={tripDetails}
              onChange={(event) =>
                setTripDetails(event.target.value)
              }
              placeholder="Tell us everything..."
              rows={7}
              className="mt-10 w-full resize-none rounded-2xl border-2 border-black/10 bg-white p-6 text-base leading-relaxed outline-none focus:border-black sm:text-lg"
            />

            {/* CONTACT */}

            <div className="mt-12">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Your details
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Your name"
                    className="w-full rounded-2xl border-2 border-black/10 bg-white p-5 text-base outline-none focus:border-black"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border-2 border-black/10 bg-white p-5 text-base outline-none focus:border-black"
                  />

                </div>

              </div>

            </div>

            {/* PRODUCT SUMMARY */}

            <div className="mt-12 rounded-[2rem] bg-black p-7 text-white sm:p-9">

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    OUTBOUND. PERSONAL TRIP
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                    Your trip, figured out.
                  </h3>

                </div>

                <div className="sm:text-right">

                  <p className="text-5xl font-black tracking-[-0.06em]">
                    £39.99
                  </p>

                  <p className="mt-1 text-xs text-white/35">
                    One-off payment
                  </p>

                </div>

              </div>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">

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
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"
                  >

                    <span className="text-sm font-black text-white/70">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-white/70">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <div className="mt-7 border-t border-white/10 pt-6">

                <p className="text-sm leading-relaxed text-white/45">
                  Once payment is complete, we'll use your brief
                  to build your personalised trip.
                </p>

              </div>

            </div>

          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">

            <p className="text-sm font-bold text-red-700">
              Something went wrong
            </p>

            <p className="mt-1 text-sm leading-relaxed text-red-600">
              {error}
            </p>

          </div>
        )}

        {/* NAVIGATION */}

        <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-8">

          <button
            type="button"
            onClick={previousStep}
            disabled={step === 1 || loading}
            className={`text-sm font-bold transition ${
              step === 1 || loading
                ? "cursor-not-allowed text-black/15"
                : "text-black hover:opacity-50"
            }`}
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!canContinue()}
              className={`rounded-full px-8 py-4 text-sm font-bold transition ${
                canContinue()
                  ? "bg-black text-white hover:bg-black/75"
                  : "cursor-not-allowed bg-black/10 text-black/30"
              }`}
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={submitTrip}
              disabled={!canContinue() || loading}
              className={`rounded-full px-8 py-4 text-sm font-bold transition ${
                canContinue() && !loading
                  ? "bg-black text-white hover:bg-black/75"
                  : "cursor-not-allowed bg-black/10 text-black/30"
              }`}
            >
              {loading
                ? "Preparing checkout..."
                : "Review & pay £39.99 →"}
            </button>
          )}

        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-black/30">
          Secure payment via Stripe · Your trip isn't built until
          payment is complete.
        </p>

      </section>

      {/* BOTTOM CTA */}

      <section className="border-t border-black/10 bg-white">

        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/30">
                OUTBOUND.
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-[0.95] tracking-[-0.05em] sm:text-4xl">
                LESS TIME PLANNING.
                <span className="block text-black/20">
                  MORE TIME TRAVELLING.
                </span>
              </h2>

            </div>

            <Link
              href="/guides"
              className="shrink-0 rounded-full bg-black px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-black/75"
            >
              Browse travel guides →
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-black/10 bg-[#f5f3ee]">

        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div>

              <Link
                href="/"
                className="text-2xl font-black tracking-[-0.08em]"
              >
                OUTBOUND.
              </Link>

              <p className="mt-3 text-sm text-black/40">
                Travel planning, rethought.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium sm:grid-cols-3">

              <Link
                href="/destinations"
                className="hover:opacity-50"
              >
                Destinations
              </Link>

              <Link
                href="/guides"
                className="hover:opacity-50"
              >
                Travel Guides
              </Link>

              <Link
                href="/build-my-trip"
                className="hover:opacity-50"
              >
                Build My Trip
              </Link>

              <Link
                href="/bespoke"
                className="hover:opacity-50"
              >
                Bespoke
              </Link>

              <Link
                href="/about"
                className="hover:opacity-50"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:opacity-50"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="hover:opacity-50"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="hover:opacity-50"
              >
                Terms
              </Link>

              <Link
                href="/refunds"
                className="hover:opacity-50"
              >
                Refunds
              </Link>

            </div>

          </div>

          <div className="mt-8 border-t border-black/10 pt-6 text-xs text-black/40">
            © {new Date().getFullYear()} OUTBOUND. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}