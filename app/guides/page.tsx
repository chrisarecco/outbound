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
    name: "Australia",
    slug: "australia",
    image: "/images/australia.png",
    price: "£12.99",
    tag: "ROAD TRIPS · CITIES · SURF",
    headline: "Australia is huge. Your itinerary shouldn't be.",
    description:
      "Work out which coast deserves your time, where to road trip, when to fly and how to combine cities, beaches and the outdoors without trying to see everything.",
    bestFor: "Road trips · Working holidays · 2–6 weeks",
    route: "Sydney → Melbourne → Great Ocean Road → Byron Bay → Cairns",
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
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">
      <SiteHeader />

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
          OUTBOUND TRAVEL GUIDES
        </p>

        <h1 className="max-w-6xl text-6xl font-black leading-[0.85] tracking-[-0.06em] md:text-[100px]">
          STOP
          <span className="block text-black/25">
            RESEARCHING.
          </span>
          START PLANNING.
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_380px] md:items-end">
          <p className="max-w-2xl text-xl leading-relaxed text-black/55 md:text-2xl">
            Practical destination guides designed around the decisions
            that actually make a trip work — where to go, how long to
            stay, what order to do it in and how to get between it all.
          </p>

          <div className="rounded-3xl bg-black p-7 text-white md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              THE OUTBOUND APPROACH
            </p>

            <p className="mt-4 text-lg font-bold leading-relaxed">
              Less scrolling. Less guesswork. Better trips.
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
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
                CHOOSE YOUR DESTINATION
              </p>

              <h2 className="text-5xl font-black tracking-[-0.055em] md:text-7xl">
                PLAN SMARTER.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-black/45">
              Each guide focuses on a specific destination and the
              planning decisions that can make or break your trip.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group overflow-hidden rounded-[2rem] bg-[#f5f3ee] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* IMAGE */}

                <div className="relative h-[380px] overflow-hidden bg-black">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-black text-black">
                    GUIDE · {guide.price}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                      {guide.tag}
                    </p>

                    <h3 className="mt-2 text-5xl font-black tracking-[-0.05em] text-white">
                      {guide.name}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-7 md:p-8">
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.03em]">
                    {guide.headline}
                  </h3>

                  <p className="mt-4 leading-relaxed text-black/55">
                    {guide.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-white p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/35">
                      EXAMPLE ROUTE
                    </p>

                    <p className="mt-2 text-sm font-bold leading-relaxed">
                      {guide.route}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/35">
                        BEST FOR
                      </p>

                      <p className="mt-2 text-sm font-bold">
                        {guide.bestFor}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
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
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/35">
                WHY OUTBOUND
              </p>

              <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.055em] md:text-7xl">
                INFORMATION
                <span className="block text-white/25">
                  ISN'T THE PROBLEM.
                </span>
              </h2>

              <p className="mt-8 max-w-md leading-relaxed text-white/50">
                The internet has made travel research almost
                overwhelming. OUTBOUND is about turning all that
                information into decisions.
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
                  itinerary if they're in the wrong order. Route logic
                  is one of the most important parts of good travel
                  planning.
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
                  A two-week trip doesn't need two months of research.
                  The guides help you get from "I want to go" to a
                  realistic route much faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE GUIDES ACTUALLY HELP WITH */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              INSIDE EVERY GUIDE
            </p>

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              THE DECISIONS
              <span className="block text-black/25">
                THAT MATTER.
              </span>
            </h2>

            <p className="mt-8 max-w-md leading-relaxed text-black/50">
              We don't want to give you another giant list of things
              to screenshot. The useful part is knowing what belongs
              in your trip — and what doesn't.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
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
            ].map((item) => (
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
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              WHICH ONE DO YOU NEED?
            </p>

            <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
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

              <h3 className="mt-5 text-4xl font-black tracking-[-0.04em]">
                Travel Guide
              </h3>

              <p className="mt-4 text-4xl font-black tracking-[-0.04em]">
                From £9.99
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-black/50">
                You want the research condensed into a useful framework
                and you're happy to build the final itinerary yourself.
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
                    <span className="font-black">✓</span>

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

              <h3 className="mt-5 text-4xl font-black tracking-[-0.04em]">
                Personalised Trip
              </h3>

              <p className="mt-4 text-4xl font-black tracking-[-0.04em]">
                £39.99
              </p>

              <p className="mt-5 max-w-lg leading-relaxed text-white/50">
                You'd rather tell us what you want and have the route,
                itinerary and recommendations built around your exact
                trip.
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
                    <span className="font-black">✓</span>

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
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/35">
            LESS RESEARCH. MORE TRAVELLING.
          </p>

          <h2 className="text-6xl font-black leading-[0.84] tracking-[-0.06em] md:text-8xl">
            YOUR NEXT
            <span className="block text-white/25">
              TRIP STARTS HERE.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
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