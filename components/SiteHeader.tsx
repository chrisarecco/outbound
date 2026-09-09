"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`absolute left-0 right-0 top-0 z-50 ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-6 sm:py-6 md:px-10">

        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
        >
          OUTBOUND.
        </Link>


        {/* NAVIGATION */}

        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">

          <Link
            href="/destinations"
            className="transition hover:opacity-60"
          >
            Destinations
          </Link>

          <Link
            href="/guides"
            className="transition hover:opacity-60"
          >
            Travel Guides
          </Link>

          <Link
            href="/build-my-trip"
            className="transition hover:opacity-60"
          >
            Build My Trip
          </Link>

          <Link
            href="/bespoke"
            className="transition hover:opacity-60"
          >
            Bespoke
          </Link>

        </nav>


        {/* DESKTOP BUTTONS */}

        <div className="hidden items-center gap-3 md:flex">

          <Link
            href="/guides"
            className={`rounded-full px-6 py-3.5 text-sm font-bold transition ${
              isHome
                ? "border border-white/60 text-white hover:bg-white hover:text-black"
                : "border border-black/20 text-black hover:bg-black hover:text-white"
            }`}
          >
            Travel guides →
          </Link>

          <Link
            href="/build-my-trip"
            className={`rounded-full px-6 py-3.5 text-sm font-bold transition ${
              isHome
                ? "bg-white text-black hover:bg-black hover:text-white"
                : "bg-black text-white hover:bg-black/80"
            }`}
          >
            Build my trip →
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`rounded-full px-5 py-3 text-sm font-bold md:hidden ${
            isHome
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className={`mx-4 rounded-2xl p-6 shadow-2xl md:hidden ${
            isHome
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >

          <div className="flex flex-col gap-5 text-lg font-bold">

            <Link
              href="/destinations"
              onClick={closeMenu}
            >
              Destinations
            </Link>

            <Link
              href="/guides"
              onClick={closeMenu}
            >
              Travel Guides
            </Link>

            <Link
              href="/build-my-trip"
              onClick={closeMenu}
            >
              Build My Trip
            </Link>

            <Link
              href="/bespoke"
              onClick={closeMenu}
            >
              Bespoke
            </Link>

            <div
              className={`my-1 h-px ${
                isHome ? "bg-white/10" : "bg-black/10"
              }`}
            />

            <Link
              href="/about"
              onClick={closeMenu}
              className={isHome ? "text-white/70" : "text-black/60"}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className={isHome ? "text-white/70" : "text-black/60"}
            >
              Contact
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}