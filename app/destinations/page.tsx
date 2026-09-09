import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const destinations = [
  {
    name: "Thailand",
    slug: "thailand",
    description:
      "Islands, beaches, nightlife and adventure. Build a route that gives you the best of Thailand without trying to see everything.",
    image: "/images/thailand.png",
    tag: "BEACHES · ISLANDS · ADVENTURE",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    description:
      "Food, culture, mountains and unforgettable journeys from Hanoi to Hoi An and beyond.",
    image: "/images/vietnam.png",
    tag: "FOOD · CULTURE · LANDSCAPES",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    description:
      "Islands, surf, jungles and incredible coastlines. Work out which parts of Indonesia are actually worth your time.",
    image: "/images/indonesia.png",
    tag: "ISLANDS · SURF · ESCAPE",
  },
  {
    name: "Japan",
    slug: "japan",
    description:
      "Tokyo, Kyoto, Osaka and beyond. A country where every stop can feel completely different.",
    image: "/images/japan.png",
    tag: "CULTURE · FOOD · CITIES",
  },
  {
    name: "The Philippines",
    slug: "philippines",
    description:
      "Turquoise water, limestone islands, diving and some of Southeast Asia's best beaches.",
    image: "/images/philippines.png",
    tag: "ISLANDS · DIVING · BEACHES",
  },
  {
    name: "Australia's East Coast",
    slug: "australia",
    description:
      "Sydney, Byron Bay, the Whitsundays and the Great Barrier Reef. The classic Australian coast, planned properly.",
    image: "/images/australia.png",
    tag: "ROAD TRIPS · SURF · REEF",
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">

      <SiteHeader />

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
          Destinations
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[84px]">
          WHERE WILL
          <br />
          YOU GO?
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <p className="max-w-2xl text-lg leading-relaxed text-black/55 md:text-xl">
            Start with somewhere you&apos;ve been dreaming about. Explore
            the places OUTBOUND knows best, then use the guides or build
            a personalised trip around what you actually want to do.
          </p>

          <Link
            href="/guides"
            className="inline-flex w-fit shrink-0 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/80"
          >
            Browse travel guides →
          </Link>

        </div>

      </section>


      {/* DESTINATIONS */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="mb-10">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
              Explore
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl md:text-6xl">
              PICK A PLACE.
            </h2>

          </div>


          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group relative h-[430px] overflow-hidden rounded-3xl bg-black"
              >

                {/* IMAGE */}

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />


                {/* CONTENT */}

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-[9px] font-bold tracking-[0.18em] text-white/70">
                    {destination.tag}
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-4">

                    <div>

                      <h2 className="text-3xl font-black leading-none tracking-[-0.045em] text-white sm:text-4xl">
                        {destination.name}
                      </h2>

                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                        {destination.description}
                      </p>

                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* PLANNING CTA */}

      <section className="bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                Not sure where to start?
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                TELL US WHAT
                <br />
                YOU&apos;RE AFTER.
              </h2>

            </div>

            <div>

              <p className="text-base leading-relaxed text-white/50">
                Tell us your dates, budget, interests and travel style.
                We&apos;ll turn that into a personalised route and
                day-by-day itinerary.
              </p>

              <Link
                href="/build-my-trip"
                className="mt-7 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/80"
              >
                Build my trip →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            <div>

              <Link
                href="/"
                className="text-3xl font-black tracking-[-0.08em]"
              >
                OUTBOUND.
              </Link>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/35">
                Travel planning, rethought.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium text-white/40">

              <Link
                href="/destinations"
                className="transition hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/guides"
                className="transition hover:text-white"
              >
                Travel Guides
              </Link>

              <Link
                href="/build-my-trip"
                className="transition hover:text-white"
              >
                Build My Trip
              </Link>

              <Link
                href="/bespoke"
                className="transition hover:text-white"
              >
                Bespoke
              </Link>

              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          <div className="mt-10 border-t border-white/10 pt-6">

            <p className="text-xs text-white/25">
              © 2026 OUTBOUND. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}