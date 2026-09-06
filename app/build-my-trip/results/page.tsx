"use client";

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
];

export default function BuildMyTrip() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [travellers, setTravellers] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [travelStyle, setTravelStyle] = useState("");
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

  const nextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const submitTrip = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f3ee] text-black">
        <header className="flex items-center justify-between px-6 py-6 md:px-10">
          <a
            href="/"
            className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
          >
            OUTBOUND.
          </a>

          <a
            href="/destinations"
            className="text-sm font-semibold hover:opacity-50"
          >
            Explore destinations →
          </a>
        </header>

        <section className="mx-auto flex min-h-[calc(100vh-100px)] max-w-4xl flex-col justify-center px-6 py-16 text-center md:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
            We've got it
          </p>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            YOUR TRIP.
            <span className="block text-black/25">STARTS HERE.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-black/60">
            Thanks {name || "for getting in touch"}. We've got everything we
            need to start thinking about your trip.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-black p-8 text-left text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              What happens next
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="font-black">01</span>
                <p className="text-white/70">
                  We'll review what you're looking for.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="font-black">02</span>
                <p className="text-white/70">
                  We'll work out the best route and ideas for your trip.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="font-black">03</span>
                <p className="text-white/70">
                  We'll be in touch about turning it into your complete trip
                  plan.
                </p>
              </div>
            </div>
          </div>

          <a
            href="/"
            className="mx-auto mt-10 rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-black/75"
          >
            Back to OUTBOUND →
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">
      <header className="flex items-center justify-between px-6 py-6 md:px-10">
        <a
          href="/"
          className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
        >
          OUTBOUND.
        </a>

        <a
          href="/destinations"
          className="text-sm font-semibold hover:opacity-50"
        >
          Explore destinations →
        </a>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-100px)] max-w-4xl flex-col justify-center px-6 py-16 md:px-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em]">
            <span>Build my trip</span>
            <span>Step {step} of 7</span>
          </div>

          <div className="h-1 w-full rounded-full bg-black/10">
            <div
              className="h-1 rounded-full bg-black transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
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
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Vietnam, Thailand, Australia..."
              className="w-full border-b-2 border-black bg-transparent py-5 text-2xl outline-none placeholder:text-black/25 md:text-4xl"
            />

            <p className="mt-5 text-sm text-black/45">
              Not sure yet? Tell us what kind of trip you're looking for.
            </p>
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
              placeholder="e.g. June 2027"
              className="w-full border-b-2 border-black bg-transparent py-5 text-2xl outline-none placeholder:text-black/25 md:text-4xl"
            />
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Trip length & budget
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              How long are you going for?
            </h1>

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
                  className={`rounded-2xl border-2 p-6 text-left text-xl font-bold transition ${
                    duration === option
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white hover:border-black"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <p className="mb-3 mt-10 text-sm font-bold uppercase tracking-[0.15em]">
              Budget
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Under £750",
                "£750–£1,500",
                "£1,500–£2,500",
                "£2,500+",
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
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Travellers
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Who's coming?
            </h1>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Solo", "Couple", "Friends", "Family"].map((option) => (
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
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Your trip
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              What are you into?
            </h1>

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
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Your style
            </p>

            <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              What would make this trip perfect?
            </h1>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {["Backpacker", "Mid-range", "Luxury"].map((style) => (
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

            <textarea
              value={tripDetails}
              onChange={(e) => setTripDetails(e.target.value)}
              placeholder="Tell us anything else that matters — must-see places, things you want to avoid, your ideal pace, or anything else..."
              rows={5}
              className="w-full resize-none rounded-2xl border-2 border-black/10 bg-white p-6 text-lg outline-none focus:border-black"
            />
          </div>
        )}

        {/* STEP 7 */}
        {step === 7 && (
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Last thing
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

            <p className="mt-5 text-sm leading-relaxed text-black/45">
              We'll use your answers to understand what you're looking for and
              get in touch about your trip.
            </p>
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

          {step < 7 ? (
            <button
              onClick={nextStep}
              className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-black/75"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={submitTrip}
              disabled={!name || !email}
              className={`rounded-full px-8 py-4 text-sm font-bold text-white transition ${
                !name || !email
                  ? "cursor-not-allowed bg-black/20"
                  : "bg-black hover:bg-black/75"
              }`}
            >
              Send my trip →
            </button>
          )}
        </div>
      </section>
    </main>
  );
}