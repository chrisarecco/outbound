import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative bg-black text-white">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Legal
          </p>
          <h1 className="text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-8xl">
            REFUND
            <br />
            POLICY.
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
              1. Digital guides
            </h2>
            <p>
              Because digital guides are delivered electronically, refunds may
              not be available once a guide has been downloaded or accessed,
              except where required by applicable consumer law.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              2. Personalised trip planning
            </h2>
            <p>
              If you purchase personalised trip planning, we will begin work
              after successful payment and receipt of your trip requirements.
              Please contact us as soon as possible if you need to cancel or
              discuss an issue with your order.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              3. Bespoke planning
            </h2>
            <p>
              Bespoke travel planning involves work prepared specifically for
              you. Cancellation and refund requests will be considered
              according to how much work has already been completed and
              applicable consumer law.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              4. Problems with an order
            </h2>
            <p>
              If you believe there is a problem with a product or service,
              please contact us and explain the issue. We will work with you to
              resolve genuine problems where possible.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-black text-black">
              5. Contact
            </h2>
            <p>
              To request assistance with an order, visit our{" "}
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