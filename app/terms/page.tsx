import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative bg-black text-white">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Legal
          </p>
          <h1 className="text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-8xl">
            TERMS &
            <br />
            CONDITIONS.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-10 text-sm text-black/40">
          Last updated: September 2026
        </p>

        <div className="space-y-10 leading-relaxed text-black/70">
          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              1. About OUTBOUND
            </h2>
            <p>
              OUTBOUND provides travel information, digital travel guides and
              personalised travel planning services. By using our website or
              purchasing a product, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              2. Digital guides
            </h2>
            <p>
              Digital travel guides are provided electronically following
              successful payment. They are for personal use and should not be
              redistributed, resold or reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              3. Personalised trip planning
            </h2>
            <p>
              Personalised trip planning is prepared using the information you
              provide to us. We aim to provide recommendations that are
              suitable for your requirements, but availability, prices,
              schedules and other travel information can change.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              4. Booking responsibility
            </h2>
            <p>
              Unless expressly stated otherwise, OUTBOUND does not book
              flights, accommodation, transport or activities on your behalf.
              Booking links and recommendations are provided to help you make
              your own arrangements.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              5. Accuracy of information
            </h2>
            <p>
              We make reasonable efforts to provide useful and accurate travel
              information. However, we cannot guarantee that all information
              will remain accurate or available after publication.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              6. Contact
            </h2>
            <p>
              Questions about these terms can be sent through our{" "}
              <Link href="/contact" className="font-bold underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}