import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative min-h-[70vh] overflow-hidden bg-black text-white">
        <SiteHeader />

        <div className="mx-auto flex min-h-[70vh] max-w-6xl items-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              About OUTBOUND
            </p>

            <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              WE BELIEVE
              <br />
              THERE&apos;S MORE
              <br />
              OUT THERE.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Why OUTBOUND exists
            </p>
          </div>

          <div className="space-y-8 text-xl leading-relaxed text-black/70 md:text-2xl">
            <p>
              Planning a great trip shouldn&apos;t mean spending weeks
              scrolling through TikTok, saving Google Maps pins and trying to
              piece together advice from a hundred different websites.
            </p>

            <p>
              OUTBOUND exists to make travel planning simpler. We bring
              together the places worth going, the things worth doing and the
              practical details that actually matter.
            </p>

            <p>
              Whether you want a ready-made guide or a trip planned around
              exactly what you want, the goal is the same:
              <span className="font-bold text-black">
                {" "}
                less research, better trips.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ec] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
            What we do
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 md:p-10">
              <div className="mb-10 text-sm font-bold">01</div>
              <h2 className="mb-4 text-2xl font-black tracking-tight">
                TRAVEL GUIDES
              </h2>
              <p className="leading-relaxed text-black/60">
                Practical destination guides built around the routes, places
                and experiences that make a trip worth taking.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 md:p-10">
              <div className="mb-10 text-sm font-bold">02</div>
              <h2 className="mb-4 text-2xl font-black tracking-tight">
                PERSONAL TRIPS
              </h2>
              <p className="leading-relaxed text-black/60">
                Tell us what you want from your trip and we&apos;ll turn it
                into a personalised plan built around you.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 md:p-10">
              <div className="mb-10 text-sm font-bold">03</div>
              <h2 className="mb-4 text-2xl font-black tracking-tight">
                BESPOKE PLANNING
              </h2>
              <p className="leading-relaxed text-black/60">
                For bigger trips, more complicated routes and travellers who
                want someone to take care of the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Ready to go?
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
            YOUR TRIP.
            <br />
            FIGURED OUT.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Stop researching. Start planning.
          </p>

          <Link
            href="/build-my-trip"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-white/80"
          >
            Build my trip →
          </Link>
        </div>
      </section>

      <footer className="bg-black px-6 pb-10 text-white md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xl font-black tracking-[-0.08em]">
            OUTBOUND.
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <Link href="/destinations" className="hover:text-white">
              Destinations
            </Link>
            <Link href="/guides" className="hover:text-white">
              Guides
            </Link>
            <Link href="/bespoke" className="hover:text-white">
              Bespoke
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}