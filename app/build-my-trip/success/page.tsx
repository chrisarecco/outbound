import Link from "next/link";

export default function TripSuccess() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">
      <header className="flex items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
        >
          OUTBOUND.
        </Link>

        <Link
          href="/destinations"
          className="text-sm font-semibold transition hover:opacity-50"
        >
          Explore destinations →
        </Link>
      </header>

      <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 md:px-10 md:pt-28">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
          Payment confirmed
        </p>

        <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
          YOU&apos;RE
          <span className="block text-black/25">GOING PLACES.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/60">
          Your personalised OUTBOUND trip is now being prepared. We&apos;ll
          use your trip brief to build your route, itinerary and recommendations.
        </p>

        <div className="mt-12 rounded-3xl bg-black p-8 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            What happens next
          </p>

          <div className="mt-8 space-y-7">
            <div>
              <p className="text-xs font-black text-white/30">01</p>
              <h2 className="mt-2 text-xl font-black">
                We build your trip
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                We&apos;ll turn your brief into a personalised travel plan
                built around your dates, budget and travel style.
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-white/30">02</p>
              <h2 className="mt-2 text-xl font-black">
                Your plan is delivered
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                You&apos;ll receive your completed OUTBOUND trip plan by email.
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-white/30">03</p>
              <h2 className="mt-2 text-xl font-black">
                Start looking forward to it
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Flights, hotels, activities and the rest of the trip are now
                much easier to organise.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/destinations"
            className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/75"
          >
            Explore destinations →
          </Link>

          <Link
            href="/"
            className="rounded-full border border-black/15 px-7 py-4 text-sm font-bold transition hover:bg-black hover:text-white"
          >
            Back to OUTBOUND
          </Link>
        </div>
      </section>
    </main>
  );
}