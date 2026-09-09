"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import SiteHeader from "@/components/SiteHeader";

const included = [
  {
    number: "01",
    title: "A route built around you",
    text: "We choose the places, route and pace around what you actually want from the trip.",
  },
  {
    number: "02",
    title: "Every detail considered",
    text: "Accommodation, transport, activities, restaurants and the details that make a trip work.",
  },
  {
    number: "03",
    title: "A plan you can actually use",
    text: "No giant spreadsheet of options. One considered plan, laid out clearly and ready to book.",
  },
];

const examples = [
  "Multi-country adventures",
  "Long-term backpacking trips",
  "Honeymoons & special occasions",
  "Road trips",
  "Island-hopping",
  "Trips with complicated logistics",
];

const planItems = [
  "Personal consultation",
  "Complete route",
  "Day-by-day itinerary",
  "Accommodation recommendations",
  "Transport between stops",
  "Activities & experiences",
  "Restaurant recommendations",
  "Estimated trip costs",
  "Booking links",
  "Interactive trip map",
  "Useful local tips",
  "One round of revisions",
];

export default function BespokePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travellers, setTravellers] = useState("");
  const [budget, setBudget] = useState("");
  const [tripDetails, setTripDetails] = useState("");
  const [website, setWebsite] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submitEnquiry = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (
      !name.trim() ||
      !email.trim() ||
      !destination.trim() ||
      !tripDetails.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/bespoke-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          destination: destination.trim(),
          dates: dates.trim(),
          travellers: travellers.trim(),
          budget,
          tripDetails: tripDetails.trim(),
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to send your enquiry."
        );
      }

      setSuccess(true);

      setName("");
      setEmail("");
      setDestination("");
      setDates("");
      setTravellers("");
      setBudget("");
      setTripDetails("");
      setWebsite("");
    } catch (err) {
      console.error("Bespoke enquiry error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

      {/* HEADER */}

      <div className="relative z-50 h-[82px] shrink-0 bg-[#f5f3ee] sm:h-[92px]">
        <SiteHeader />
      </div>

      {/* HERO */}

      <section className="bg-[#111] text-white">

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/45">
            OUTBOUND. BESPOKE
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[100px]">
            YOUR TRIP.
            <br />
            COMPLETELY
            <br />
            YOURS.
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              A fully curated travel plan built around you.
              Your dates, your budget, your interests and the
              way you actually want to travel.
            </p>

            <div className="shrink-0">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Bespoke planning
              </p>

              <p className="mt-1 text-4xl font-black tracking-[-0.04em] text-white">
                From £129
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">

          <div>

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Not just another itinerary
            </p>

            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] text-black md:text-7xl">
              SOME TRIPS
              <br />
              NEED MORE
              <br />
              THAN A GUIDE.
            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-xl leading-relaxed text-black/65">
              Maybe you're travelling for three months. Maybe
              you're trying to fit five countries into two weeks.
              Maybe it's a once-in-a-lifetime trip and you don't
              want to get it wrong.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-black/65">
              That's where bespoke planning comes in. We take
              the research, decisions and logistics off your hands
              and turn them into one considered trip.
            </p>

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="bg-[#e7e2d8] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              What we do
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-black md:text-7xl">
              FROM IDEA
              <br />
              TO DEPARTURE.
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {included.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white p-8 md:p-10"
              >

                <p className="text-sm font-bold text-black/30">
                  {item.number}
                </p>

                <h3 className="mt-16 text-2xl font-black tracking-[-0.03em] text-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-black/55">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHAT'S INCLUDED */}

      <section className="bg-[#111] px-6 py-24 text-white md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Your plan
            </p>

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] text-white md:text-7xl">
              EVERYTHING
              <br />
              SORTED.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/55">
              We handle the planning so you can concentrate on
              looking forward to the trip.
            </p>

          </div>

          <div className="rounded-3xl bg-[#1b1b1b] p-7 sm:p-9 md:p-10">

            <div className="grid gap-0 sm:grid-cols-2">

              {planItems.map((item, index) => (
                <div
                  key={item}
                  className={`border-b border-white/10 py-5 ${
                    index % 2 === 0 ? "sm:mr-5" : "sm:ml-5"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <span className="text-xs text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-white/75">
                      {item}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PERFECT FOR */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Perfect for
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-black md:text-7xl">
              WHEN THE
              <br />
              TRIP IS BIG.
            </h2>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">

            {examples.map((example) => (
              <div
                key={example}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <p className="font-bold tracking-[-0.02em] text-black">
                  {example}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ENQUIRY */}

      <section
        id="start-planning"
        className="bg-[#e7e2d8] px-6 py-24 md:px-10 md:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">

          {/* LEFT */}

          <div className="md:sticky md:top-10">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Start planning
            </p>

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] text-black md:text-7xl">
              TELL US
              <br />
              ABOUT
              <br />
              YOUR TRIP.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-black/55">
              Give us the basics and we'll review your trip before
              getting back to you with the next steps.
            </p>

            <div className="mt-10">

              <p className="text-4xl font-black tracking-[-0.05em] text-black">
                From £129
              </p>

              <p className="mt-2 text-sm text-black/45">
                Final price depends on the complexity of your trip.
              </p>

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[2rem] bg-white p-7 sm:p-10 md:p-12">

            {success ? (
              <div className="py-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl text-white">
                  ✓
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                  Enquiry received
                </p>

                <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl">
                  WE'LL BE IN TOUCH.
                </h3>

                <p className="mt-6 max-w-lg leading-relaxed text-black/55">
                  Thanks for getting in touch. Your bespoke trip
                  enquiry has been sent successfully. We'll review
                  everything and get back to you with the next steps.
                </p>

                <Link
                  href="/"
                  className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/75"
                >
                  Back to OUTBOUND →
                </Link>

              </div>
            ) : (
              <form onSubmit={submitEnquiry}>

                <div className="mb-10">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    Your enquiry
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-black sm:text-4xl">
                    Let's start with the basics.
                  </h3>

                </div>

                {/* SPAM PROTECTION */}

                <div
                  className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    Website
                  </label>

                  <input
                    id="website"
                    type="text"
                    value={website}
                    onChange={(event) =>
                      setWebsite(event.target.value)
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-black"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className="w-full rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base text-black outline-none transition placeholder:text-black/30 focus:border-black"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-black"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="w-full rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base text-black outline-none transition placeholder:text-black/30 focus:border-black"
                    />

                  </div>

                </div>

                {/* DESTINATION */}

                <div className="mt-5">

                  <label
                    htmlFor="destination"
                    className="mb-2 block text-sm font-bold text-black"
                  >
                    Where are you thinking of going? *
                  </label>

                  <input
                    id="destination"
                    type="text"
                    value={destination}
                    onChange={(event) =>
                      setDestination(event.target.value)
                    }
                    placeholder="e.g. Japan, Southeast Asia, Italy + Greece..."
                    required
                    className="w-full rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base text-black outline-none transition placeholder:text-black/30 focus:border-black"
                  />

                </div>

                {/* DATES + TRAVELLERS */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="dates"
                      className="mb-2 block text-sm font-bold text-black"
                    >
                      Approximate dates
                    </label>

                    <input
                      id="dates"
                      type="text"
                      value={dates}
                      onChange={(event) =>
                        setDates(event.target.value)
                      }
                      placeholder="e.g. June–July 2027"
                      className="w-full rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base text-black outline-none transition placeholder:text-black/30 focus:border-black"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="travellers"
                      className="mb-2 block text-sm font-bold text-black"
                    >
                      Number of travellers
                    </label>

                    <input
                      id="travellers"
                      type="text"
                      value={travellers}
                      onChange={(event) =>
                        setTravellers(event.target.value)
                      }
                      placeholder="e.g. 2"
                      className="w-full rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base text-black outline-none transition placeholder:text-black/30 focus:border-black"
                    />

                  </div>

                </div>

                {/* BUDGET */}

                <div className="mt-5">

                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-bold text-black"
                  >
                    Approximate budget
                  </label>

                  <select
                    id="budget"
                    value={budget}
                    onChange={(event) =>
                      setBudget(event.target.value)
                    }
                    className="w-full appearance-none rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base text-black outline-none transition focus:border-black"
                  >

                    <option value="">
                      Select a budget
                    </option>

                    <option value="Under £2,000">
                      Under £2,000
                    </option>

                    <option value="£2,000–£5,000">
                      £2,000–£5,000
                    </option>

                    <option value="£5,000–£10,000">
                      £5,000–£10,000
                    </option>

                    <option value="£10,000+">
                      £10,000+
                    </option>

                    <option value="Not sure yet">
                      Not sure yet
                    </option>

                  </select>

                </div>

                {/* TRIP DETAILS */}

                <div className="mt-5">

                  <label
                    htmlFor="tripDetails"
                    className="mb-2 block text-sm font-bold text-black"
                  >
                    Tell us about the trip *
                  </label>

                  <textarea
                    id="tripDetails"
                    value={tripDetails}
                    onChange={(event) =>
                      setTripDetails(event.target.value)
                    }
                    placeholder="What do you want to do? What have you already planned? What don't you want? Tell us as much as you like..."
                    required
                    rows={7}
                    className="w-full resize-none rounded-2xl border-2 border-black/10 bg-[#f5f3ee] p-5 text-base leading-relaxed text-black outline-none transition placeholder:text-black/30 focus:border-black"
                  />

                </div>

                {/* ERROR */}

                {error && (
                  <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5">

                    <p className="text-sm font-bold text-red-700">
                      Something went wrong
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-red-600">
                      {error}
                    </p>

                  </div>
                )}

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-7 w-full rounded-full px-7 py-5 text-sm font-bold transition ${
                    loading
                      ? "cursor-not-allowed bg-black/20 text-black/40"
                      : "bg-black text-white hover:bg-black/75"
                  }`}
                >
                  {loading
                    ? "Sending enquiry..."
                    : "Start planning →"}
                </button>

                <p className="mt-5 text-center text-xs leading-relaxed text-black/35">
                  No payment is required at this stage. We'll
                  review your trip and get back to you with the
                  next steps.
                </p>

              </form>
            )}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="px-6 pb-24 pt-24 md:px-10 md:pb-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
            Questions
          </p>

          <h2 className="mb-10 text-5xl font-black tracking-[-0.05em] text-black md:text-6xl">
            GOOD TO KNOW.
          </h2>

          <div className="divide-y divide-black/10 border-y border-black/10">

            {[
              {
                question: "How does bespoke planning work?",
                answer:
                  "You tell us about your trip, what you want from it and any constraints you have. We'll then discuss the trip with you before building the plan.",
              },
              {
                question: "Is £129 the final price?",
                answer:
                  "£129 is the starting price. More complex trips may cost more depending on the number of destinations, travellers and level of planning required.",
              },
              {
                question: "Do you book everything for me?",
                answer:
                  "The plan includes recommendations and booking links. You remain in control of the final bookings and payments.",
              },
              {
                question: "Can I change the itinerary?",
                answer:
                  "Yes. Your bespoke plan includes one round of revisions so we can refine the trip before you book.",
              },
            ].map((item) => (
              <div key={item.question} className="py-7">

                <h3 className="text-lg font-bold text-black">
                  {item.question}
                </h3>

                <p className="mt-3 max-w-3xl leading-relaxed text-black/55">
                  {item.answer}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-black px-6 py-12 text-white md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            <div>

              <Link
                href="/"
                className="text-3xl font-black tracking-[-0.08em] text-white"
              >
                OUTBOUND.
              </Link>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
                Travel planning for people who want to get out there.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-white/50">

              <Link
                href="/destinations"
                className="hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/guides"
                className="hover:text-white"
              >
                Travel Guides
              </Link>

              <Link
                href="/build-my-trip"
                className="hover:text-white"
              >
                Build My Trip
              </Link>

              <Link
                href="/bespoke"
                className="hover:text-white"
              >
                Bespoke
              </Link>

              <Link
                href="/about"
                className="hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30">
            © {new Date().getFullYear()} OUTBOUND. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}