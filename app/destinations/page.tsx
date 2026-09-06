import SiteHeader from "@/components/SiteHeader";

const destinations = [
  {
    name: "Thailand",
    slug: "thailand",
    description: "Islands, beaches, nightlife and adventure.",
    image: "/images/thailand.png",
    tag: "BEACHES · NIGHTLIFE · ADVENTURE",
  },
  {
    name: "Australia",
    slug: "australia",
    description: "Road trips, cities, surf and wild landscapes.",
    image: "/images/australia.png",
    tag: "ROAD TRIPS · CITIES · SURF",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    description: "Food, culture, mountains and unforgettable journeys.",
    image: "/images/vietnam.png",
    tag: "FOOD · CULTURE · ADVENTURE",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    description: "Islands, surf, jungles and the perfect escape.",
    image: "/images/indonesia.png",
    tag: "ISLANDS · SURF · ESCAPE",
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white">

      <SiteHeader />

      <section className="px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Explore
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.06em] md:text-8xl">
            FIND YOUR
            <br />
            SOMEWHERE.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/50">
            Hand-picked destinations, honest recommendations and the
            information you actually need to plan a great trip.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {destinations.map((destination) => (

              <a
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className="group relative h-[480px] overflow-hidden rounded-2xl"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/60">
                    {destination.tag}
                  </p>

                  <div className="mt-3 flex items-end justify-between">

                    <div>

                      <h2 className="text-5xl font-black tracking-[-0.05em]">
                        {destination.name}
                      </h2>

                      <p className="mt-2 text-sm text-white/60">
                        {destination.description}
                      </p>

                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}