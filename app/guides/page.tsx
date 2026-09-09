import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const guides = [
  {
    name: "Thailand",
    slug: "thailand",
    image: "/images/thailand.png",
    price: "£9.99",
    tag: "BEACHES · NIGHTLIFE · ADVENTURE",
    headline: "Build the Thailand route that actually makes sense.",
    description:
      "Bangkok, Chiang Mai, Krabi, Phi Phi, Koh Tao and more. Work out where to go, how long to stay and how to connect the islands without wasting half your trip in transit.",
    bestFor: "First trips · Backpacking · 2–3 weeks",
    route: "Bangkok → Chiang Mai → Krabi → Phi Phi → Koh Tao",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    image: "/images/vietnam.png",
    price: "£9.99",
    tag: "FOOD · CULTURE · ADVENTURE",
    headline: "Build a Vietnam route from north to south.",
    description:
      "Hanoi, Sapa, Ninh Binh, Ha Long Bay, Hoi An and Ho Chi Minh City. Understand what deserves a place in your itinerary and how to travel between it all.",
    bestFor: "First trips · Backpacking · 2–3 weeks",
    route: "Hanoi → Ninh Binh → Ha Long Bay → Sapa → Hoi An",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    image: "/images/indonesia.png",
    price: "£9.99",
    tag: "ISLANDS · SURF · ESCAPE",
    headline: "Island-hopping is easy. Island-hopping well isn't.",
    description:
      "Work out whether you actually need Bali, Nusa Penida, the Gilis and Lombok — and build a route that doesn't have you constantly packing and unpacking.",
    bestFor: "Beach trips · Surf · 2–4 weeks",
    route: "Ubud → Uluwatu → Nusa Penida → Gili Islands → Lombok",
  },
  {
    name: "Japan",
    slug: "japan",
    image: "/images/japan.png",
    price: "£9.99",
    tag: "CULTURE · FOOD · CITIES",
    headline: "Build a Japan itinerary without trying to see everything.",
    description:
      "Tokyo, Kyoto, Osaka, Hiroshima, Hakone and beyond. Work out how to structure your time, where to base yourself and when it makes sense to travel between cities.",
    bestFor: "First trips · Culture · 10 days–3 weeks",
    route: "Tokyo → Hakone → Kyoto → Osaka → Hiroshima",
  },
  {
    name: "The Philippines",
    slug: "philippines",
    image: "/images/philippines.png",
    price: "£9.99",
    tag: "ISLANDS · DIVING · BEACHES",
    headline: "See the Philippines without spending your trip in transit.",
    description:
      "Palawan, Cebu, Bohol, Siargao, Boracay and more. Understand which islands are worth your time and how to build an itinerary around the country's geography.",
    bestFor: "Beach trips · Island-hopping · 2–4 weeks",
    route: "Manila → Palawan → Cebu → Bohol → Siargao",
  },
  {
    name: "Australia's East Coast",
    slug: "australia",
    image: "/images/australia.png",
    price: "£9.99",
    tag: "ROAD TRIPS · CITIES · SURF",
    headline: "Australia is huge. Your itinerary shouldn't be.",
    description:
      "Sydney to Cairns, with the beaches, islands and road trips worth making along the way. Work out which stops deserve your time and when to drive or fly.",
    bestFor: "Road trips · Working holidays · 2–6 weeks",
    route: "Sydney → Byron Bay → Brisbane → Whitsundays → Cairns",
  },
];

const insideGuide = [
  {
    number: "01",
    title: "Where to go",
    text: "Which destinations are actually worth including for the amount of time you have.",
  },
  {
    number: "02",
    title: "How long to stay",
    text: "Avoid spending four nights somewhere that only needs two — or rushing a place that deserves longer.",
  },
  {
    number: "03",
    title: "Route order",
    text: "Build your trip in an order that minimises unnecessary backtracking and transfers.",
  },
  {
    number: "04",
    title: "Getting around",
    text: "Understand where flights, trains, buses, ferries and road trips make the most sense.",
  },
  {
    number: "05",
    title: "Where to stay",
    text: "Choose the right area for the experience you want, not just the hotel with the highest rating.",
  },
  {
    number: "06",
    title: "What to prioritise",
    text: "Separate the genuinely worthwhile experiences from the things you can comfortably skip.",
  },
  {
    number: "07",
    title: "Budget",
    text: "Build a realistic trip budget around accommodation, transport, food and experiences.",
  },
  {
    number: "08",
    title: "Example routes",
    text: "Start with proven route structures instead of opening a blank Google Doc and guessing.",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">

      <SiteHeader />

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">

        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
          OUTBOUND TRAVEL GUIDES
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
          STOP
          <span className="block text-black/25">
            RESEARCHING.
          </span>
          START PLANNING.
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_380px] md:items-end">

          <p className="max-w-2xl text-lg leading-relaxed text-black/55 md:text-xl">
            Practical destination guides designed around the decisions
            that actually make a trip work — where to go, how long to
            stay, what order to do it in and how to get between it all.
          </p>

          <div className="rounded-3xl bg-black p-7 text-white md:p-8">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              THE OUTBOUND APPROACH
            </p>

            <p className="mt-4 text-lg font-bold leading-relaxed">
              Less scrolling. Better trips.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Guides start at £9.99 and are designed to give you the
              structure you need before you start booking.
            </p>

          </div>

        </div>

        <a
          href="#guides"
          className="mt-10 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/75"
        >
          Browse the guides ↓
        </a>

      </section>


      {/* GUIDES */}

      <section id="guides" className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                SIX DESTINATIONS
              </p>

              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
                PLAN SMARTER.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-relaxed text-black/45">
              Each guide focuses on a specific destination and the
              planning decisions that can make or break your trip.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group overflow-hidden rounded-[1.75rem] bg-[#f5f3ee] transition-transform duration-300 hover:-translate-y-1"
              >

                {/* IMAGE */}

                <div className="relative h-[330px] overflow-hidden bg-black">

                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-black">
                    GUIDE · {guide.price}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">

                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                      {guide.tag}
                    </p>

                    <h3 className="mt-2 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                      {guide.name}
                    </h3>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-6 sm:p-7">

                  <h3 className="text-xl font-black leading-tight tracking-[-0.03em]">
                    {guide.headline}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-black/55">
                    {guide.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4">

                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/35">
                      EXAMPLE ROUTE
                    </p>

                    <p className="mt-2 text-sm font-bold leading-relaxed">
                      {guide.route}
                    </p>

                  </div>

                  <div className="mt-5 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-end sm:justify-between">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/35">
                        BEST FOR
                      </p>

                      <p className="mt-2 text-sm font-bold">
                        {guide.bestFor}
                      </p>

                    </div>

                    <div className="flex items-center gap-2">

                      <span className="text-sm font-black">
                        View guide
                      </span>

                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* WHY GUIDES */}

      <section className="bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                WHY OUTBOUND
              </p>

              <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">

                INFORMATION

                <span className="block text-white/25">
                  ISN&apos;T THE PROBLEM.
                </span>

              </h2>

              <p className="mt-8 max-w-md leading-relaxed text-white/50">
                The internet has made travel research almost overwhelming.
                OUTBOUND is about turning all that information into decisions.
              </p>

            </div>


            <div className="space-y-4">

              <div className="rounded-3xl bg-white/10 p-7 md:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                  01
                </p>

                <h3 className="mt-5 text-2xl font-black">
                  Too many options
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-white/50">
                  You can find hundreds of recommendations for almost
                  every destination. The difficult part is deciding
                  which ones actually belong in your trip.
                </p>

              </div>


              <div className="rounded-3xl bg-white/10 p-7 md:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                  02
                </p>

                <h3 className="mt-5 text-2xl font-black">
                  Bad routes waste time
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-white/50">
                  The best destinations can still make a terrible
                  itinerary if they&apos;re in the wrong order. Route logic
                  is one of the most important parts of good travel planning.
                </p>

              </div>


              <div className="rounded-3xl bg-white/10 p-7 md:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                  03
                </p>

                <h3 className="mt-5 text-2xl font-black">
                  Your time is limited
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-white/50">
                  A two-week trip doesn&apos;t need two months of research.
                  The guides help you get from &quot;I want to go&quot; to a
                  realistic route much faster.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* INSIDE EVERY GUIDE */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              INSIDE EVERY GUIDE
            </p>

            <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">

              THE DECISIONS

              <span className="block text-black/25">
                THAT MATTER.
              </span>

            </h2>

            <p className="mt-8 max-w-md leading-relaxed text-black/50">
              We don&apos;t want to give you another giant list of things
              to screenshot. The useful part is knowing what belongs
              in your trip — and what doesn&apos;t.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {insideGuide.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl bg-white p-6 md:p-7"
              >

                <p className="text-xs font-black text-black/25">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/50">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* GUIDE VS PERSONALISED */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="mb-12">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              WHICH ONE DO YOU NEED?
            </p>

            <h2 className="max-w-5xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">

              WANT THE INFORMATION?

              <span className="block text-black/25">
                OR WANT US TO DO THE WORK?
              </span>

            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2">

            {/* GUIDE */}

            <div className="rounded-[2rem] bg-[#f5f3ee] p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                OPTION 01
              </p>

              <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                Travel Guide
              </h3>

              <p className="mt-3 text-3xl font-black tracking-[-0.04em]">
                £9.99
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-black/50">
                You want the research condensed into a useful framework
                and you&apos;re happy to build the final itinerary yourself.
              </p>

              <div className="mt-8 space-y-3">

                {[
                  "Destination-specific advice",
                  "Example routes",
                  "Where to stay",
                  "Transport planning",
                  "What to prioritise",
                  "Budget guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
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

              <a
                href="#guides"
                className="mt-9 inline-block rounded-full border-2 border-black px-7 py-4 text-sm font-bold transition hover:bg-black hover:text-white"
              >
                Choose a guide ↓
              </a>

            </div>


            {/* PERSONALISED */}

            <div className="rounded-[2rem] bg-black p-8 text-white md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                OPTION 02
              </p>

              <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                Personalised Trip
              </h3>

              <p className="mt-3 text-3xl font-black tracking-[-0.04em]">
                £39.99
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-white/50">
                You&apos;d rather tell us what you want and have the route,
                itinerary and recommendations built around your exact trip.
              </p>

              <div className="mt-8 space-y-3">

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
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="font-black">
                      ✓
                    </span>

                    <span className="text-sm font-bold text-white/85">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <Link
                href="/build-my-trip"
                className="mt-9 inline-block rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/80"
              >
                Build my trip →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="bg-black text-white">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
            LESS RESEARCH. MORE TRAVELLING.
          </p>

          <h2 className="text-5xl font-black leading-[0.86] tracking-[-0.06em] sm:text-6xl md:text-7xl">

            YOUR NEXT

            <span className="block text-white/25">
              TRIP STARTS HERE.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            Pick a destination, get the information you need and
            start turning the idea into an actual trip.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="#guides"
              className="rounded-full bg-white px-8 py-5 text-sm font-bold text-black transition hover:bg-white/80"
            >
              Browse guides ↓
            </a>

            <Link
              href="/build-my-trip"
              className="rounded-full border-2 border-white/30 px-8 py-5 text-sm font-bold text-white transition hover:border-white"
            >
              Build my trip →
            </Link>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-black text-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">

          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.08em]"
          >
            OUTBOUND.
          </Link>

          <div className="flex flex-wrap gap-6 text-sm font-semibold text-white/40">

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
              Guides
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


        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6 md:px-10">

          <p className="text-xs text-white/25">
            © 2026 OUTBOUND. Travel planning, rethought.
          </p>

        </div>

      </footer>

    </main>
  );
}