"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative bg-black text-white">
        <SiteHeader />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/50">
            Get in touch
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            LET&apos;S TALK
            <br />
            TRAVEL.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Got a question about a destination, a guide or a trip you&apos;re
            planning? Drop us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Contact OUTBOUND
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
              HAVE A QUESTION?
            </h2>

            <p className="mt-5 max-w-md leading-relaxed text-black/60">
              For personalised trip planning or bespoke travel design, tell us
              a little about what you&apos;re looking for and we&apos;ll point
              you in the right direction.
            </p>

            <div className="mt-10 space-y-4">
              <Link
                href="/build-my-trip"
                className="block rounded-2xl bg-black px-6 py-5 text-sm font-bold text-white transition hover:bg-black/80"
              >
                Build my trip →
              </Link>

              <Link
                href="/bespoke"
                className="block rounded-2xl border border-black/10 px-6 py-5 text-sm font-bold transition hover:bg-black hover:text-white"
              >
                Explore bespoke planning →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-[#f3f1ec] p-6 md:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                  Message sent
                </p>

                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  THANKS.
                  <br />
                  WE&apos;LL BE IN TOUCH.
                </h2>

                <p className="mt-6 max-w-md leading-relaxed text-black/60">
                  Your message has been received. We&apos;ll get back to you as
                  soon as possible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 w-fit text-sm font-bold underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition placeholder:text-black/30 focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition placeholder:text-black/30 focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 outline-none focus:border-black"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="trip">I need help planning a trip</option>
                    <option value="guide">I have a question about a guide</option>
                    <option value="bespoke">I&apos;m interested in bespoke planning</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you need..."
                    className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-4 outline-none transition placeholder:text-black/30 focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-black/80"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xl font-black tracking-[-0.08em]">
            OUTBOUND.
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/destinations" className="hover:text-white">
              Destinations
            </Link>
            <Link href="/guides" className="hover:text-white">
              Guides
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/bespoke" className="hover:text-white">
              Bespoke
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}