import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const countries: Record<string, any> = {
  thailand: {
    name: "Thailand",
    image: "/images/thailand.png",
    tagline: "Beaches. Islands. Adventure.",
    intro:
      "Thailand is one of those places where you can spend a week doing absolutely nothing or a month moving from island to island. The trick is knowing where to go.",
    highlights: [
      "Bangkok",
      "Chiang Mai",
      "Krabi",
      "Koh Phi Phi",
      "Koh Tao",
      "Koh Samui",
    ],
  },

  australia: {
    name: "Australia",
    image: "/images/australia.png",
    tagline: "Road trips. Cities. Surf.",
    intro:
      "Australia is huge, which is exactly why you need a plan. From Sydney and Melbourne to the Great Ocean Road and the east coast, there is a lot to fit in.",
    highlights: [
      "Sydney",
      "Melbourne",
      "Great Ocean Road",
      "Byron Bay",
      "Gold Coast",
      "Cairns",
    ],
  },

  vietnam: {
    name: "Vietnam",
    image: "/images/vietnam.png",
    tagline: "Food. Culture. Adventure.",
    intro:
      "Vietnam packs incredible food, chaotic cities, dramatic landscapes and some of Southeast Asia's best value into one unforgettable route.",
    highlights: [
      "Hanoi",
      "Sapa",
      "Ha Long Bay",
      "Ninh Binh",
      "Hoi An",
      "Ho Chi Minh City",
    ],
  },

  indonesia: {
    name: "Indonesia",
    image: "/images/indonesia.png",
    tagline: "Islands. Surf. Escape.",
    intro:
      "Indonesia is far bigger than Bali. Explore rice terraces, jungle, beaches, surf breaks and islands that feel a world away from everyday life.",
    highlights: [
      "Bali",
      "Nusa Penida",
      "Gili Islands",
      "Lombok",
      "Ubud",
      "Uluwatu",
    ],
  },
};

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  const destination = countries[country];

  if (!destination) {
    return (
      <main className="min-h-screen bg-[#111] px-6 py-32 text-white">
        <h1 className="text-5xl font-black">
          Destination not found.
        </h1>

        <Link
          href="/destinations"
          className="mt-8 inline-block underline"
        >
          Back to destinations →
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111]">

      {/* HERO */}

      <section className="relative min-h-[75vh] overflow-hidden text-white">

        <SiteHeader />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${destination.image}')`,
          }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14 md:px-10 md:pb-20">

          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              OUTBOUND DESTINATION
            </p>

            <h1 className="mt-4 text-7xl font-black tracking-[-0.06em] md:text-[110px]">
              {destination.name}
            </h1>

            <p className="mt-3 text-xl text-white/75">
              {destination.tagline}
            </p>

          </div>

        </div>

      </section>


      {/* INTRODUCTION */}

      <section className="px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">
            KNOW BEFORE
            <br />
            YOU GO.
          </h2>

          <div>

            <p className="text-xl leading-relaxed text-black/60">
              {destination.intro}
            </p>

            <Link
              href={`/guides/${country}`}
              className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              Get the {destination.name} guide →
            </Link>

          </div>

        </div>

      </section>


      {/* WHERE TO GO */}

      <section className="bg-[#111] px-6 py-24 text-white md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Don't miss
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">
            WHERE TO GO.
          </h2>

          <div className="mt-12 grid gap-x-8 sm:grid-cols-2 md:grid-cols-3">

            {destination.highlights.map((place: string, index: number) => (

              <div
                key={place}
                className="border-t border-white/10 py-6"
              >

                <span className="text-xs text-white/30">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {place}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BUILD YOUR TRIP */}

      <section className="bg-[#d9ff3f] px-6 py-24 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
            Want us to plan it?
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
            TELL US WHAT
            <br />
            YOU WANT.
          </h2>

          <p className="mt-6 max-w-xl text-lg text-black/60">
            Tell us your dates, budget and what you want to get out of the
            trip. We'll build the route around you.
          </p>

          <Link
            href="/build-my-trip"
            className="mt-8 inline-flex rounded-full bg-black px-8 py-4 text-sm font-bold text-white"
          >
            Build my trip →
          </Link>

        </div>

      </section>

    </main>
  );
}