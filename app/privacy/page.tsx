import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <section className="relative bg-black text-white">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Legal
          </p>

          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            PRIVACY
            <br />
            POLICY.
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">

        <p className="mb-10 text-sm text-black/40">
          Last updated: September 2026
        </p>

        <div className="space-y-12 leading-relaxed text-black/70">

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              1. Who we are
            </h2>

            <p>
              OUTBOUND is a travel planning service providing travel guides,
              personalised itineraries and bespoke travel planning services.
              This Privacy Policy explains how we collect, use and protect
              personal information when you use our website or services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              2. Information we collect
            </h2>

            <p>
              We may collect information that you provide directly to us,
              including your name, email address, travel preferences,
              destinations, travel dates, budget, interests and other
              information you provide when completing a trip-planning
              questionnaire or contacting us.
            </p>

            <p className="mt-4">
              We may also collect basic technical information when you use our
              website, such as information about your device, browser and how
              you interact with the website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              3. How we use your information
            </h2>

            <p>
              We use the information we collect to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Provide our travel planning services</li>
              <li>Create personalised travel itineraries</li>
              <li>Respond to enquiries and customer support requests</li>
              <li>Process purchases and payments</li>
              <li>Deliver digital travel guides</li>
              <li>Communicate with you about your orders or enquiries</li>
              <li>Improve and maintain our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              4. Personalised trip planning
            </h2>

            <p>
              Information submitted through our trip-planning questionnaire may
              be used to create your personalised itinerary. This information
              may include your destination, dates, budget, interests, travel
              style, preferred pace and other requirements you provide.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              5. Payments
            </h2>

            <p>
              Payments may be processed by third-party payment providers. We do
              not store your full payment card details on our own systems.
              Payment providers may process your information in accordance
              with their own privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              6. Third-party services
            </h2>

            <p>
              We may use third-party services to operate OUTBOUND. These may
              include payment processing, email delivery, website hosting,
              analytics and other services required to provide our products.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              7. Email communication
            </h2>

            <p>
              If you submit your details when requesting a trip, purchasing a
              product or contacting us, we may use your email address to
              communicate with you about your request, purchase or service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              8. How long we keep information
            </h2>

            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes for which it was collected, including
              providing services, maintaining appropriate business records and
              complying with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              9. Your rights
            </h2>

            <p>
              Depending on your circumstances, UK data protection law may give
              you rights regarding your personal information. These may include
              the right to request access to your information, correction of
              inaccurate information, deletion of information and restriction
              of certain processing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              10. Cookies
            </h2>

            <p>
              OUTBOUND may use cookies or similar technologies to help operate
              the website and understand how visitors use it. Any analytics or
              other tracking technologies used on the live website will be
              disclosed and managed in accordance with applicable requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              11. Data security
            </h2>

            <p>
              We take reasonable steps to protect personal information from
              unauthorised access, loss, misuse or disclosure. However, no
              method of transmitting or storing information online can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              12. Changes to this policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be published on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black tracking-tight text-black">
              13. Contact us
            </h2>

            <p>
              If you have any questions about this Privacy Policy or how your
              information is handled, please contact us through our{" "}
              <Link
                href="/contact"
                className="font-bold text-black underline underline-offset-4"
              >
                contact page
              </Link>
              .
            </p>
          </section>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-10 text-white md:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="text-2xl font-black tracking-[-0.08em]">
                OUTBOUND.
              </div>

              <p className="mt-2 text-sm text-white/40">
                Travel planning for people who want to get out there.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm text-white/50">

              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/destinations" className="transition hover:text-white">
                Destinations
              </Link>

              <Link href="/guides" className="transition hover:text-white">
                Travel Guides
              </Link>

              <Link href="/build-my-trip" className="transition hover:text-white">
                Build My Trip
              </Link>

              <Link href="/bespoke" className="transition hover:text-white">
                Bespoke
              </Link>

              <Link href="/about" className="transition hover:text-white">
                About
              </Link>

              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>

              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-white">
                Terms & Conditions
              </Link>

              <Link href="/refunds" className="transition hover:text-white">
                Refund Policy
              </Link>

            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/30">
            © 2026 OUTBOUND. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}