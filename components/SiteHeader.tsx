"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 text-white">
      <div className="flex items-center justify-between px-5 py-5 sm:px-6 sm:py-6 md:px-10">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
        >
          OUTBOUND.
        </Link>


        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          <Link href="/destinations" className="transition hover:opacity-60">
            Destinations
          </Link>

          <Link href="/guides" className="transition hover:opacity-60">
            Travel Guides
          </Link>

          <Link href="/build-my-trip" className="transition hover:opacity-60">
            Build My Trip
          </Link>

          <Link href="/bespoke" className="transition hover:opacity-60">
            Bespoke
          </Link>
        </nav>


        {/* DESKTOP CTA */}
        <Link
          href="/build-my-trip"
          className="hidden rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-black hover:text-white md:block"
        >
          Build my trip →
        </Link>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mx-4 rounded-2xl bg-black p-6 shadow-2xl md:hidden">

          <div className="flex flex-col gap-5 text-lg font-bold">

            <Link href="/destinations" onClick={closeMenu}>
              Destinations
            </Link>

            <Link href="/guides" onClick={closeMenu}>
              Travel Guides
            </Link>

            <Link href="/build-my-trip" onClick={closeMenu}>
              Build My Trip
            </Link>

            <Link href="/bespoke" onClick={closeMenu}>
              Bespoke
            </Link>

            <div className="my-1 h-px bg-white/10" />

            <Link
              href="/about"
              onClick={closeMenu}
              className="text-white/70"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-white/70"
            >
              Contact
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}