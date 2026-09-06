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
    text: "Accommodation, transport, activities, restaurants and the little details that make a trip work.",
  },
  {
    number: "03",
    title: "A plan you can actually use",
    text: "No giant spreadsheet of options. One considered plan, with everything laid out clearly.",
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

export default function BespokePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-[#111] text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#222] via-[#111] to-black" />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative z-10 w-full px-6 pb-14 pt-40 md:px-10 md:pb-20">

          <div className="mx-auto max-w-7xl">

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              OUTBOUND Bespoke
            </p>

            <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[100px]">
              YOUR TRIP.
              <br />
              COMPLETELY
              <br />
              YOURS.
            </h1>

            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <p className="max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
                A fully curated travel plan built around you. Your dates,
                your budget, your interests and the way you actually want
                to travel.
              </p>

              <div className="shrink-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  Bespoke planning
                </p>

                <p className="mt-1 text-4xl font-black">
                  From £129
                </p>
              </div>

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

            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl">
              SOME TRIPS
              <br />
              NEED MORE
              <br />
              THAN A GUIDE.
            </h2>
          </div>

          <div className="max-w-xl">

            <p className="text-xl leading-relaxed text-black/65">
              Maybe you're travelling for three months. Maybe you're trying
              to fit five countries into two weeks. Maybe it's a once-in-a-
              lifetime trip and you don't want to get it wrong.
            </p>

            <p className="mt-6 text-xl leading-relaxed text-black/65">
              That's where bespoke planning comes in. We take the research,
              decisions and logistics off your hands and turn them into one
              considered trip.
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

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
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

                <h3 className="mt-16 text-2xl font-black tracking-[-0.03em]">
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

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              Your plan
            </p>

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
              EVERYTHING
              <br />
              SORTED.
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/50">
              We handle the planning so you can concentrate on looking forward
              to the trip.
            </p>

          </div>


          <div className="rounded-3xl bg-[#1b1b1b] p-7 sm:p-9 md:p-10">

            <div className="grid gap-0 sm:grid-cols-2">

              {[
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
              ].map((item, index) => (
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


      {/* GOOD FOR */}
      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Perfect for
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
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
                <p className="font-bold tracking-[-0.02em]">
                  {example}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* PRICING */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl bg-[#d9ff3f] p-8 sm:p-10 md:p-14">

            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                  Bespoke travel planning
                </p>

                <h2 className="mt-4 max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                  YOUR NEXT TRIP,
                  <br />
                  DONE PROPERLY.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                  Tell us what you're thinking and we'll come back to you with
                  the next steps.
                </p>

              </div>


              <div className="md:text-right">

                <p className="text-4xl font-black">
                  From £129
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex w-full rounded-full bg-black px-7 py-4 text-center text-sm font-bold text-white transition hover:scale-[1.02] sm:w-auto"
                >
                  Start planning →
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FAQ */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">

        <div className="mx-auto max-w-4xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
            Questions
          </p>

          <h2 className="mb-10 text-5xl font-black tracking-[-0.05em] md:text-6xl">
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

                <h3 className="text-lg font-bold">
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

              <div className="text-3xl font-black tracking-[-0.08em]">
                OUTBOUND.
              </div>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
                Travel planning for people who want to get out there.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-white/50">

              <a href="/destinations" className="hover:text-white">
                Destinations
              </a>

              <a href="/guides" className="hover:text-white">
                Travel Guides
              </a>

              <a href="/build-my-trip" className="hover:text-white">
                Build My Trip
              </a>

              <a href="/bespoke" className="hover:text-white">
                Bespoke
              </a>

              <a href="/about" className="hover:text-white">
                About
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>

            </div>

          </div>


          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30">
            © 2026 OUTBOUND. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}