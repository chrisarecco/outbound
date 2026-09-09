"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const guideNames: Record<string, string> = {
  thailand: "Thailand",
  vietnam: "Vietnam",
  indonesia: "Indonesia",
  japan: "Japan",
  philippines: "The Philippines",
  australia: "Australia's East Coast",
};

export default function GuideSuccessPage() {
  const searchParams = useSearchParams();

  const guide = searchParams.get("guide") || "";
  const guideName = guideNames[guide.toLowerCase()] || "your travel guide";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
        <div className="w-full text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/40">
            OUTBOUND.
          </p>

          <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl text-white">
            ✓
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-[-0.04em] sm:text-7xl">
            You're in.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/60">
            Thanks for purchasing the {guideName} guide.
            Your payment has been received successfully.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-[#f4f4f0] p-8 text-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/40">
              YOUR GUIDE
            </p>

            <h2 className="mt-3 text-2xl font-black">
              {guideName}
            </h2>

            <p className="mt-4 text-base leading-7 text-black/60">
              We're getting your guide ready. You'll receive your guide
              using the email address provided during checkout.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/guides"
              className="rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/80"
            >
              View more guides →
            </Link>

            <Link
              href="/"
              className="rounded-full border border-black/15 px-7 py-4 text-sm font-bold transition hover:bg-black hover:text-white"
            >
              Back to OUTBOUND.
            </Link>
          </div>

          <p className="mt-10 text-xs text-black/35">
            Need help? Contact OUTBOUND and we'll get you sorted.
          </p>
        </div>
      </div>
    </main>
  );
}