import SiteHeader from "@/components/SiteHeader";

const guides = [
  {
    title: "Thailand",
    slug: "thailand",
    description:
      "The practical guide to beaches, islands, cities and adventure.",
    image: "/images/thailand.png",
  },
  {
    title: "Vietnam",
    slug: "vietnam",
    description:
      "Build a better route through Vietnam's cities, coast and countryside.",
    image: "/images/vietnam.png",
  },
  {
    title: "Indonesia",
    slug: "indonesia",
    description:
      "From Bali to Komodo, plan the islands worth travelling for.",
    image: "/images/indonesia.png",
  },
  {
    title: "Japan",
    slug: "japan",
    description:
      "Tokyo, Kyoto, Osaka and beyond — a better way to plan Japan.",
    image: "/images/japan.png",
  },
  {
    title: "The Philippines",
    slug: "philippines",
    description:
      "Island-hopping, beaches, diving and the routes worth taking.",
    image: "/images/philippines.png",
  },
  {
    title: "Australia's East Coast",
    slug: "australia",
    description:
      "Sydney to the Great Barrier Reef, planned properly.",
    image: "/images/australia.png",
  },
];

const destinations = [
  {
    name: "Thailand",
    slug: "thailand",
    tag: "BEACHES · ISLANDS · ADVENTURE",
    image: "/images/thailand.png",
    description:
      "Island-hop, eat ridiculously well and spend your days in the water.",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    tag: "FOOD · CULTURE · LANDSCAPES",
    image: "/images/vietnam.png",
    description:
      "Incredible food, chaotic cities and some of Southeast Asia's best landscapes.",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    tag: "ISLANDS · SURF · ESCAPE",
    image: "/images/indonesia.png",
    description:
      "Chase waves, explore islands and slow down somewhere beautiful.",
  },
  {
    name: "Japan",
    slug: "japan",
    tag: "CULTURE · FOOD · CITIES",
    image: "/images/japan.png",
    description:
      "A country where every stop can feel completely different.",
  },
  {
    name: "The Philippines",
    slug: "philippines",
    tag: "ISLANDS · DIVING · BEACHES",
    image: "/images/philippines.png",
    description:
      "Turquoise water, limestone islands and some serious island-hopping.",
  },
  {
    name: "Australia's East Coast",
    slug: "australia",
    tag: "ROAD TRIPS · SURF · REEF",
    image: "/images/australia.png",
    description:
      "Cities, beaches, road trips, islands and the Great Barrier Reef.",
  },
];

const itinerary = [
  {
    day: "01",
    place: "Hanoi",
    tag: "ARRIVE",
    text: "Check in · Old Quarter · Street food · Rooftop drinks",
  },
  {
    day: "02",
    place: "Hanoi",
    tag: "",
    text: "Train Street · Temple of Literature · Hoan Kiem Lake · Night market",
  },
  {
    day: "03",
    place: "Ha Long Bay",
    tag: "2H TRANSFER",
    text: "Morning transfer · Overnight cruise · Kayaking · Sunset",
  },
  {
    day: "04",
    place: "Ninh Binh",
    tag: "4H TRANSFER",
    text: "Cruise ends · Transfer south · Check in · Evening cycle",
  },
  {
    day: "05–06",
    place: "Ninh Binh",
    tag: "",
    text: "Trang An · Mua Cave · Rice fields · Countryside",
  },
  {
    day: "07",
    place: "Hoi An",
    tag: "FLY",
    text: "Transfer to airport · Flight south · Old Town evening",
  },
  {
    day: "08–09",
    place: "Hoi An",
    tag: "",
    text: "Ancient Town · An Bang Beach · Tailor fitting · Lanterns",
  },
  {
    day: "10",
    place: "Da Nang",
    tag: "DEPART",
    text: "Beach morning · Transfer to airport · Fly home",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f2eb] text-[#111]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-black text-white">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />

        <SiteHeader />

        <div className="relative z-10 w-full px-5 pb-8 pt-32 sm:px-6 sm:pb-10 md:px-10 md:pb-14">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-4xl">

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/65 sm:text-xs">
                Travel planning, rethought
              </p>

              <h1 className="max-w-4xl text-[13vw] font-black leading-[0.84] tracking-[-0.065em] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem]">
                YOUR TRIP,
                <br />
                FIGURED OUT.
              </h1>

              <div className="mt-7 sm:mt-8">

  <p className="max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
    Tell us where you want to go, what you want to do and what
    you want to spend. We&apos;ll help turn it into a trip worth
    taking.
  </p>

</div>

            </div>

            <div className="mt-12 border-t border-white/20 pt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 sm:mt-16 sm:text-[10px]">
              Go further. Live more.
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28">

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 md:grid-cols-2 md:gap-24">

      <div>

        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
          OUTBOUND
        </p>

        <h2 className="max-w-2xl text-3xl font-black leading-[0.95] tracking-[-0.045em] sm:text-4xl md:text-5xl">
          Less time planning.
          <br />
          More time travelling.
        </h2>

      </div>

      <div className="max-w-lg md:pt-10">

        <p className="text-base leading-[1.7] text-black/65 sm:text-lg">
          There&apos;s no shortage of travel information. The difficult
          part is knowing what&apos;s actually worth your time and money.
        </p>

        <p className="mt-5 text-base leading-[1.7] text-black/45">
          OUTBOUND brings together practical travel guides and
          personalised planning to make that part easier.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* =========================================================
          GUIDES
      ========================================================= */}

      <section
        id="guides"
        className="bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
                Travel guides
              </p>

              <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                GO FURTHER.
                <br />
                PLAN BETTER.
              </h2>

            </div>

            <a
              href="/guides"
              className="text-sm font-bold underline underline-offset-4 transition hover:text-white/60"
            >
              View all guides →
            </a>

          </div>


          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

            {guides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group overflow-hidden rounded-2xl bg-[#1b1b1b]"
              >

                <div className="relative h-52 overflow-hidden sm:h-56">

                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${guide.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute left-5 top-5">

                    <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-black">
                      £9.99
                    </span>

                  </div>

                </div>


                <div className="p-5 sm:p-6">

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                    OUTBOUND GUIDE
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4">

                    <h3 className="text-xl font-black tracking-[-0.035em] sm:text-2xl">
                      {guide.title}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm transition group-hover:bg-white group-hover:text-black">
                      →
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    {guide.description}
                  </p>

                </div>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          PRODUCT LADDER
      ========================================================= */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              Choose how you want to travel
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              FROM A GUIDE
              <br />
              TO A TRIP BUILT
              <br />
              AROUND YOU.
            </h2>

          </div>


          <div className="grid gap-4 md:grid-cols-3">

            <div className="flex flex-col rounded-2xl border border-black/10 bg-white p-7 sm:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
                01 · Guide
              </p>

              <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">
                Travel Guides
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-black/50">
                Practical routes, recommendations, costs and advice for
                planning the trip yourself.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-black">
                  £9.99
                </span>

                <a
                  href="/guides"
                  className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
                >
                  Browse →
                </a>

              </div>

            </div>


            <div className="flex flex-col rounded-2xl bg-[#111] p-7 text-white sm:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                02 · Personalised
              </p>

              <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">
                Build My Trip
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-white/50">
                Tell us what you want and we&apos;ll build a personalised
                itinerary around your destination, dates, budget and interests.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-black">
                  £39.99
                </span>

                <a
                  href="/build-my-trip"
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
                >
                  Start →
                </a>

              </div>

            </div>


            <div className="flex flex-col rounded-2xl border border-black/10 bg-[#e9e5dc] p-7 sm:p-8">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
                03 · Bespoke
              </p>

              <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">
                Fully Curated
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-black/50">
                A completely personalised trip, curated around the details
                that matter most to you.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-3xl font-black">
                  £129
                </span>

                <a
                  href="/bespoke"
                  className="rounded-full border border-black px-5 py-3 text-sm font-bold transition hover:bg-black hover:text-white"
                >
                  Discover →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DESTINATIONS
      ========================================================= */}

      <section
        id="destinations"
        className="border-t border-black/10 bg-[#e9e5dc] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/35 sm:text-xs">
                Inspiration
              </p>

              <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl">
  WHERE WILL
  <br />
  YOU GO?
</h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-black/45">
              Start with somewhere you&apos;ve been dreaming about, then let
              OUTBOUND help you work out the rest.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

            {destinations.map((destination) => (
              <a
                key={destination.slug}
                href={`/guides/${destination.slug}`}
                className="group relative h-[360px] overflow-hidden rounded-2xl bg-black sm:h-[400px]"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                  <p className="mb-2 text-[9px] font-bold tracking-[0.18em] text-white/75">
                    {destination.tag}
                  </p>

                  <div className="flex items-end justify-between gap-4">

                    <div>

                      <h3 className="text-3xl font-black leading-none tracking-[-0.045em] text-white sm:text-4xl">
                        {destination.name}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                        {destination.description}
                      </p>

                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-[#f5f2eb]">
                      →
                    </span>

                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              Personalised planning
            </p>

            <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              YOU TELL US.
              <br />
              WE BUILD THE PLAN.
            </h2>

          </div>


          <div className="grid gap-3 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Tell us what you want",
                text: "Destination, dates, budget, interests, travel style and anything you don't want to miss.",
              },
              {
                number: "02",
                title: "We build the plan",
                text: "We turn your answers into a realistic route with accommodation, transport, activities and estimated costs.",
              },
              {
                number: "03",
                title: "You go",
                text: "Open your plan, book what you want and head off without spending another weekend researching.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-black/10 bg-white p-7 sm:p-8"
              >

                <p className="text-sm font-bold text-black/25">
                  {step.number}
                </p>

                <h3 className="mt-16 text-2xl font-black tracking-[-0.04em]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed text-black/50">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          EXAMPLE ITINERARY
      ========================================================= */}

      <section className="bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-16">

            <div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30 sm:text-xs">
                A look inside
              </p>

              <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                A PLAN THAT
                <br />
                ACTUALLY
                <br />
                FEELS LIKE YOU.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
                Not a generic list of attractions. A route built around your
                time, budget, interests and the way you actually want to travel.
              </p>

              <a
                href="/build-my-trip"
                className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/85"
              >
                Build my trip →
              </a>

            </div>


            <div className="rounded-2xl border border-white/10 bg-[#191919] p-5 sm:p-7 md:p-8">

              <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 sm:text-[10px]">
                    Example itinerary
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                    10 Days in Vietnam
                  </h3>

                  <p className="mt-2 text-xs text-white/30 sm:text-sm">
                    Hanoi → Ha Long Bay → Ninh Binh → Hoi An
                  </p>

                </div>

                <span className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/50">
                  £1,250
                </span>

              </div>


              <div className="space-y-5 pt-6">

                {itinerary.map((item) => (
                  <div
                    key={`${item.day}-${item.place}`}
                    className="grid grid-cols-[45px_1fr] gap-4"
                  >

                    <p className="pt-1 text-[9px] font-bold tracking-[0.12em] text-white/20">
                      {item.day}
                    </p>

                    <div>

                      <div className="flex flex-wrap items-center gap-2">

                        <h4 className="text-base font-bold">
                          {item.place}
                        </h4>

                        {item.tag && (
                          <span className="rounded-full bg-white/10 px-2 py-1 text-[8px] font-bold tracking-[0.1em] text-white/30">
                            {item.tag}
                          </span>
                        )}

                      </div>

                      <p className="mt-1 text-xs leading-relaxed text-white/30">
                        {item.text}
                      </p>

                    </div>

                  </div>
                ))}

              </div>


              <div className="mt-7 border-t border-white/10 pt-6">

                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/20">
                  Included
                </p>

                <div className="grid gap-2 text-xs text-white/30 sm:grid-cols-2">

                  <span>Accommodation recommendations</span>
                  <span>Transport between destinations</span>
                  <span>Estimated daily spend</span>
                  <span>Activity recommendations</span>
                  <span>Realistic travel times</span>
                  <span>Booking links</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-5 py-24 sm:px-6 sm:py-28 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="border-t border-black/15 pt-10 sm:pt-12">

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-black/35 sm:text-xs">
              Your next trip starts here
            </p>

            <h2 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              WHERE WILL
              <br />
              YOU GO NEXT?
            </h2>

            <div className="mt-8">

              <a
                href="/guides"
                className="inline-flex rounded-full border border-black/20 px-8 py-4 text-sm font-bold transition hover:bg-black hover:text-white"
              >
                Browse travel guides →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#111] px-5 py-12 text-white sm:px-6 sm:py-14 md:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            <div>

              <div className="text-3xl font-black tracking-[-0.08em]">
                OUTBOUND.
              </div>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/35">
                Travel planning for people who want to get out there.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-white/40 sm:gap-x-20">

              <a href="/destinations" className="transition hover:text-white">
                Destinations
              </a>

              <a href="/guides" className="transition hover:text-white">
                Travel Guides
              </a>

              <a href="/build-my-trip" className="transition hover:text-white">
                Build My Trip
              </a>

              <a href="/bespoke" className="transition hover:text-white">
                Bespoke
              </a>

              <a href="/about" className="transition hover:text-white">
                About
              </a>

              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>

              <a href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </a>

              <a href="/terms" className="transition hover:text-white">
                Terms & Conditions
              </a>

              <a href="/refunds" className="transition hover:text-white">
                Refund Policy
              </a>

            </div>

          </div>


          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/20">
            © 2026 OUTBOUND. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}