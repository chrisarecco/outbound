import SiteHeader from "@/components/SiteHeader";

const destinations = [
  {
    name: "Thailand",
    tag: "BEACHES · NIGHTLIFE · ADVENTURE",
    image: "/images/thailand.png",
    description:
      "Island-hop, eat ridiculously well and spend your days in the water.",
    href: "/destinations/thailand",
  },
  {
    name: "Australia",
    tag: "ROAD TRIPS · CITIES · SURF",
    image: "/images/australia.png",
    description:
      "From Sydney to the Great Ocean Road, make the most of the adventure.",
    href: "/destinations/australia",
  },
  {
    name: "Vietnam",
    tag: "FOOD · CULTURE · ADVENTURE",
    image: "/images/vietnam.png",
    description:
      "Incredible food, chaotic cities and some of Southeast Asia's best landscapes.",
    href: "/destinations/vietnam",
  },
  {
    name: "Indonesia",
    tag: "ISLANDS · SURF · ESCAPE",
    image: "/images/indonesia.png",
    description:
      "Chase waves, explore islands and slow down somewhere beautiful.",
    href: "/destinations/indonesia",
  },
];

const guides = [
  {
    title: "Thailand",
    description: "The ultimate guide to travelling Thailand.",
    price: "£9.99",
    image: "/images/thailand.png",
  },
  {
    title: "Vietnam",
    description: "Everything you need for an unforgettable Vietnam trip.",
    price: "£9.99",
    image: "/images/vietnam.png",
  },
  {
    title: "Australia",
    description: "How to make the most of the world's biggest road trip.",
    price: "£12.99",
    image: "/images/australia.png",
  },
];

const itinerary = [
  {
    day: "DAY 01",
    place: "Hanoi",
    tag: "Arrive",
    text: "Check in · Old Quarter · Street food tour · Rooftop drinks",
  },
  {
    day: "DAY 02",
    place: "Hanoi",
    text: "Train Street · Temple of Literature · Hoan Kiem Lake · Night market",
  },
  {
    day: "DAY 03",
    place: "Ha Long Bay",
    tag: "2h transfer",
    text: "Morning transfer · Overnight cruise · Kayaking · Sunset",
  },
  {
    day: "DAY 04",
    place: "Ninh Binh",
    tag: "4h transfer",
    text: "Cruise ends · Transfer south · Check in · Evening cycle",
  },
  {
    day: "DAYS 05–06",
    place: "Ninh Binh",
    text: "Trang An boat trip · Mua Cave · Rice fields · Countryside",
  },
  {
    day: "DAY 07",
    place: "Hoi An",
    tag: "Fly",
    text: "Transfer to airport · Flight south · Old Town evening",
  },
  {
    day: "DAYS 08–09",
    place: "Hoi An",
    text: "Ancient Town · An Bang Beach · Tailor fitting · Lanterns & riverside dinner",
  },
  {
    day: "DAY 10",
    place: "Da Nang",
    tag: "Depart",
    text: "Beach morning · Transfer to Da Nang · Airport",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-[#111]">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[100svh] items-end overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />

        <SiteHeader />

        <div className="relative z-10 w-full px-5 pb-8 pt-32 text-white sm:px-6 sm:pb-10 md:px-10 md:pb-16 md:pt-40">

          <div className="max-w-5xl">

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/75 sm:mb-5 sm:text-xs sm:tracking-[0.25em]">
              Travel planning, rethought
            </p>

            <h1 className="max-w-4xl text-[15vw] font-black leading-[0.86] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[72px]">
              YOUR TRIP,
              <br />
              FIGURED OUT.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:mt-7 sm:text-lg md:text-xl">
              Tell us where you want to go, what you want to do and what you
              want to spend. We&apos;ll help turn it into a trip worth taking.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">

              <a
                href="/build-my-trip"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-black hover:text-white"
              >
                Build my trip →
              </a>

              <a
                href="#destinations"
                className="rounded-full border border-white/50 bg-white/10 px-7 py-4 text-center text-sm font-bold backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                Explore destinations
              </a>

            </div>

          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/30 pt-4 text-[9px] font-medium uppercase tracking-[0.15em] text-white/60 sm:mt-14 sm:pt-5 sm:text-xs">
            <span>Go further. Live more.</span>
            <span className="hidden sm:block">Scroll to explore ↓</span>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end md:gap-12">

          <div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 sm:mb-5 sm:text-xs">
              Travel planning, rethought
            </p>

            <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Less time
              <br />
              planning.
              <br />
              More time
              <br />
              travelling.
            </h2>

          </div>

          <div className="max-w-xl md:pb-2">

            <p className="text-lg leading-relaxed text-black/65 sm:text-xl">
              The internet has endless travel information. The hard part is
              knowing what&apos;s actually worth your time and money.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-black/65 sm:mt-6 sm:text-xl">
              OUTBOUND cuts through the noise with carefully selected guides
              and personalised travel plans built around <strong>you</strong>.
            </p>

          </div>

        </div>

      </section>


      {/* ================= DESTINATIONS ================= */}

      <section
        id="destinations"
        className="bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:mb-4 sm:text-xs">
                Where next?
              </p>

              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl">
                FIND YOUR
                <br />
                SOMEWHERE.
              </h2>

            </div>

            <a
              href="/destinations"
              className="text-sm font-bold underline underline-offset-4 transition hover:text-white/60"
            >
              View all destinations →
            </a>

          </div>


          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">

            {destinations.map((destination) => (
              <a
                key={destination.name}
                href={destination.href}
                className="group relative h-[390px] overflow-hidden rounded-2xl sm:h-[430px]"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                  <p className="mb-2 text-[9px] font-bold tracking-[0.2em] text-white/60 sm:mb-3 sm:text-[10px]">
                    {destination.tag}
                  </p>

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <h3 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                        {destination.name}
                      </h3>

                      <p className="mt-2 max-w-md text-sm text-white/65">
                        {destination.description}
                      </p>

                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:translate-x-1 sm:h-12 sm:w-12">
                      →
                    </span>

                  </div>

                </div>

              </a>
            ))}

          </div>


          <div className="mt-4 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:mt-6 sm:p-8 md:flex-row md:items-center md:p-10">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Not sure where to go?
              </p>

              <h3 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl md:text-3xl">
                Tell us what you want from your trip.
              </h3>

              <p className="mt-2 text-sm text-white/45">
                We&apos;ll help you find somewhere that fits.
              </p>

            </div>

            <a
              href="/build-my-trip"
              className="w-full shrink-0 rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-black transition hover:bg-white/80 sm:w-auto"
            >
              Find my trip →
            </a>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 sm:mb-16">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 sm:mb-4 sm:text-xs">
              How it works
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              YOU TELL US.
              <br />
              WE FIGURE IT OUT.
            </h2>

          </div>


          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Tell us what you want",
                text: "Destination, dates, budget, travel style, interests and the things you absolutely don't want to miss.",
              },
              {
                number: "02",
                title: "We build the plan",
                text: "We turn your answers into a realistic trip with places to stay, things to do, transport and an estimated budget.",
              },
              {
                number: "03",
                title: "You go",
                text: "Open your plan, book what you want and head off. No endless tabs. No hours of research.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-black/10 bg-white p-7 sm:p-8 md:p-10"
              >

                <p className="text-sm font-bold text-black/30">
                  {step.number}
                </p>

                <h3 className="mt-14 text-2xl font-black tracking-[-0.03em] sm:mt-16">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-black/55">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section
        id="guides"
        className="bg-[#e7e2d8] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl sm:mb-14">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 sm:mb-4 sm:text-xs">
              Choose your level
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              FROM
              <br />
              INSPIRATION
              <br />
              TO BESPOKE.
            </h2>

          </div>


          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">

            {/* GUIDE */}

            <div className="flex flex-col rounded-2xl bg-white p-7 sm:p-8 md:p-10">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 sm:text-xs">
                01 · The Guide
              </p>

              <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] sm:mt-8">
                Country Guides
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-black/55">
                Our best recommendations, routes, costs, places to stay and
                things to do — all in one place.
              </p>

              <div className="mt-9 flex items-end justify-between sm:mt-10">

                <div>
                  <span className="text-4xl font-black">£9.99</span>

                  <p className="mt-1 text-xs text-black/40">
                    one-time purchase
                  </p>
                </div>

                <a
                  href="/guides"
                  className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
                >
                  Explore →
                </a>

              </div>

            </div>


            {/* PERSONALISED */}

            <div className="flex flex-col rounded-2xl bg-black p-7 text-white sm:p-8 md:p-10">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 sm:text-xs">
                02 · Personalised
              </p>

              <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] sm:mt-8">
                Build My Trip
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-white/60">
                Answer a few questions and get a personalised itinerary built
                around your budget, interests and travel style.
              </p>

              <div className="mt-9 flex items-end justify-between sm:mt-10">

                <div>
                  <span className="text-4xl font-black">£39.99</span>

                  <p className="mt-1 text-xs text-white/40">
                    per itinerary
                  </p>
                </div>

                <a
                  href="/build-my-trip"
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
                >
                  Start →
                </a>

              </div>

            </div>


            {/* BESPOKE */}

            <div
              id="bespoke"
              className="flex flex-col rounded-2xl border border-black/10 bg-[#f5f3ee] p-7 sm:p-8 md:p-10"
            >

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 sm:text-xs">
                03 · Bespoke
              </p>

              <h3 className="mt-7 text-3xl font-black tracking-[-0.04em] sm:mt-8">
                Fully Curated
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-black/55">
                Want something completely unique? We personally curate the
                trip for you, including the details you care about most.
              </p>

              <div className="mt-9 flex items-end justify-between sm:mt-10">

                <div>
                  <span className="text-4xl font-black">£129</span>

                  <p className="mt-1 text-xs text-black/40">
                    from
                  </p>
                </div>

                <a
                  href="/bespoke"
                  className="rounded-full border border-black px-5 py-3 text-sm font-bold"
                >
                  Find out →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXAMPLE ITINERARY ================= */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-14">

            {/* LEFT */}

            <div>

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 sm:mb-4 sm:text-xs">
                What you get
              </p>

              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
                A PLAN THAT
                <br />
                ACTUALLY
                <br />
                FEELS LIKE
                <br />
                YOU.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-black/55 sm:mt-7 sm:text-lg">
                Not a generic list of tourist attractions. Your itinerary is
                built around your time, budget, interests and the way you
                actually want to travel.
              </p>

              <a
                href="/build-my-trip"
                className="mt-7 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:scale-[1.02] sm:mt-8"
              >
                Build my trip →
              </a>

            </div>


            {/* ITINERARY */}

            <div className="rounded-3xl bg-[#111] p-3 text-white sm:p-4 md:p-6">

              <div className="rounded-2xl bg-[#1d1d1d] p-5 sm:p-6 md:p-8">

                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-5 sm:gap-5 sm:pb-6">

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                      Your itinerary
                    </p>

                    <h3 className="mt-2 text-xl font-black tracking-[-0.04em] sm:text-2xl md:text-3xl">
                      10 Days in Vietnam
                    </h3>

                    <p className="mt-2 text-xs text-white/40 sm:text-sm">
                      Hanoi → Ha Long Bay → Ninh Binh → Hoi An
                    </p>

                  </div>

                  <span className="shrink-0 rounded-full bg-white/10 px-2 py-1.5 text-[9px] sm:px-3 sm:py-2 sm:text-xs">
                    £1,250
                  </span>

                </div>


                <div className="space-y-6 pt-6 sm:space-y-7 sm:pt-7">

                  {itinerary.map((item) => (
                    <div
                      key={item.day}
                      className="grid grid-cols-[55px_1fr] gap-3 sm:grid-cols-[65px_1fr] sm:gap-4"
                    >

                      <p className="text-[9px] font-bold tracking-[0.12em] text-white/35 sm:text-[10px] sm:tracking-[0.15em]">
                        {item.day}
                      </p>

                      <div>

                        <div className="flex flex-wrap items-center gap-2">

                          <h4 className="text-base font-bold sm:text-lg">
                            {item.place}
                          </h4>

                          {item.tag && (
                            <span className="rounded-full bg-white/10 px-2 py-1 text-[8px] uppercase tracking-wider text-white/45 sm:text-[9px]">
                              {item.tag}
                            </span>
                          )}

                        </div>

                        <p className="mt-1 text-xs leading-relaxed text-white/45 sm:text-sm">
                          {item.text}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>


                <div className="mt-7 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">

                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white/30 sm:text-xs">
                    Your plan also includes
                  </p>

                  <div className="grid gap-1 text-xs text-white/40 sm:grid-cols-2 sm:text-sm">
                    <span>+ accommodation recommendations</span>
                    <span>+ transport between destinations</span>
                    <span>+ estimated daily spend</span>
                    <span>+ activity recommendations</span>
                    <span>+ realistic travel times</span>
                    <span>+ booking links</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= GUIDES ================= */}

      <section className="bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 sm:mb-4 sm:text-xs">
                The OUTBOUND library
              </p>

              <h2 className="text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-7xl">
                TRAVEL GUIDES
                <br />
                WORTH BUYING.
              </h2>

            </div>

            <a
              href="/guides"
              className="text-sm font-bold underline underline-offset-4"
            >
              See all guides →
            </a>

          </div>


          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">

            {guides.map((guide) => (
              <a
                key={guide.title}
                href={`/guides/${guide.title.toLowerCase()}`}
                className="group overflow-hidden rounded-2xl bg-[#1b1b1b]"
              >

                <div
                  className="h-56 bg-cover bg-center transition duration-700 group-hover:scale-105 sm:h-64"
                  style={{ backgroundImage: `url('${guide.image}')` }}
                />

                <div className="p-6 sm:p-7">

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35 sm:text-xs">
                        OUTBOUND GUIDE
                      </p>

                      <h3 className="mt-2 text-2xl font-black">
                        {guide.title}
                      </h3>

                    </div>

                    <span className="text-lg font-bold">
                      {guide.price}
                    </span>

                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    {guide.description}
                  </p>

                  <div className="mt-6 text-sm font-bold">
                    View guide →
                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="overflow-hidden bg-[#d9ff3f] px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-40">

        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 sm:mb-5 sm:text-xs">
            Your next trip starts here
          </p>

          <h2 className="max-w-5xl text-[16vw] font-black leading-[0.85] tracking-[-0.06em] sm:text-7xl md:text-8xl">
            WHERE WILL
            <br />
            YOU GO?
          </h2>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">

            <a
              href="/build-my-trip"
              className="rounded-full bg-black px-8 py-4 text-center text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              Build my trip →
            </a>

            <a
              href="/destinations"
              className="rounded-full border border-black/30 px-8 py-4 text-center text-sm font-bold transition hover:bg-black hover:text-white"
            >
              Explore destinations
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-black px-5 py-10 text-white sm:px-6 sm:py-12 md:px-10">

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


<div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-white/50 sm:gap-x-16">
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

  <a href="/privacy" className="hover:text-white">
    Privacy Policy
  </a>

  <a href="/terms" className="hover:text-white">
    Terms & Conditions
  </a>

  <a href="/refunds" className="hover:text-white">
    Refund Policy
  </a>
</div>

          </div>


          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/30 sm:mt-12">
            © 2026 OUTBOUND. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}