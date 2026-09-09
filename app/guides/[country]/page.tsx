"use client";

import Link from "next/link";
import { use, useState } from "react";
import SiteHeader from "@/components/SiteHeader";

type Guide = {
  name: string;
  title: string;
  image: string;
  priceId: string;
  description: string;
  intro: string;
  problems: string[];
  route: string[];
  destinations: {
    name: string;
    text: string;
  }[];
  sampleItinerary: string[];
  included: string[];
  forWho: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const guides: Record<string, Guide> = {
  thailand: {
    name: "Thailand",
    title: "THAILAND, DONE PROPERLY.",
    image: "/images/thailand.png",
    priceId: "price_1UDrumLIPTWCzqpTtBQG5boq",
    description:
      "A practical Thailand travel guide built around better routes, smarter decisions and more time actually enjoying the country.",
    intro:
      "Thailand is easy to visit and surprisingly easy to get wrong. The country has beaches, islands, cities, mountains, food, nightlife and some of Southeast Asia's best experiences, but trying to fit everything into one trip usually creates a rushed itinerary. The key is deciding what kind of Thailand trip you actually want before choosing individual places.",
    problems: [
      "Trying to see too many destinations in one trip.",
      "Spending too much time travelling between places.",
      "Choosing islands based on photos rather than season and location.",
      "Booking accommodation before deciding the route.",
      "Treating Bangkok as somewhere to pass through rather than part of the trip.",
    ],
    route: [
      "Start with Bangkok if you are flying into Thailand.",
      "Choose either northern Thailand, the islands, or a combination depending on your time.",
      "Use domestic flights when they genuinely save a large amount of time.",
      "Keep island choices geographically sensible.",
      "Leave some flexibility around long journeys and island transfers.",
    ],
    destinations: [
      {
        name: "Bangkok",
        text:
          "Bangkok works best as the beginning or end of your trip. Give yourself enough time to experience the food, temples, markets, neighbourhoods and nightlife rather than treating the city as an airport stop.",
      },
      {
        name: "Chiang Mai",
        text:
          "Chiang Mai is a strong choice for travellers who want temples, food, mountains and a slower pace. It is particularly useful for balancing a beach-heavy itinerary.",
      },
      {
        name: "The Islands",
        text:
          "Thailand's islands are not interchangeable. Your choice should depend on the season, the atmosphere you want and how much travelling you are willing to do.",
      },
      {
        name: "Southern Thailand",
        text:
          "The south gives you some of the country's biggest landscapes and best beaches. Build around a small number of bases rather than changing island every couple of nights.",
      },
    ],
    sampleItinerary: [
      "Days 1–3 — Bangkok",
      "Days 4–6 — Chiang Mai",
      "Days 7–10 — Southern Thailand",
      "Days 11–14 — Islands",
    ],
    included: [
      "How to structure your Thailand route",
      "Destination-by-destination planning advice",
      "Bangkok and Chiang Mai planning",
      "Island selection advice",
      "Getting around Thailand",
      "Food and experience recommendations",
      "Three practical route options",
      "Final pre-trip checklist",
    ],
    forWho: [
      "First-time visitors to Thailand",
      "Couples and friends planning a multi-stop trip",
      "Travellers with 1–3 weeks available",
      "Anyone struggling to decide which islands to visit",
    ],
    faqs: [
      {
        question: "How long should I spend in Thailand?",
        answer:
          "Two weeks is a very good starting point. You can make a shorter trip work, but the more destinations you add, the more important it becomes to plan the route carefully.",
      },
      {
        question: "Should I visit Bangkok?",
        answer:
          "Yes. Even if beaches are your priority, Bangkok gives the trip variety and is worth experiencing rather than simply passing through.",
      },
      {
        question: "How many islands should I visit?",
        answer:
          "Usually fewer than you think. Two well-chosen islands can produce a much better trip than four or five islands connected by constant transfers.",
      },
    ],
  },

  vietnam: {
    name: "Vietnam",
    title: "VIETNAM, DONE PROPERLY.",
    image: "/images/vietnam.png",
    priceId: "price_1UDrv9LIPTWCzqpTZ1Iem3zT",
    description:
      "A practical guide to building a better Vietnam trip, from Hanoi and the north to Hoi An, the south and everything between.",
    intro:
      "Vietnam rewards travellers who get the route right. The country is long, varied and packed with places worth visiting, but moving from north to south can take more time than expected. The best Vietnam trips are not about ticking every destination off a list. They are about building a route that flows.",
    problems: [
      "Trying to cover the entire country in one short trip.",
      "Underestimating travel time between regions.",
      "Adding too many one-night stops.",
      "Ignoring the difference between northern, central and southern Vietnam.",
      "Booking transport without considering the overall route.",
    ],
    route: [
      "Choose north-to-south, south-to-north or a regional trip.",
      "Give Hanoi enough time to actually experience it.",
      "Use northern Vietnam for scenery and adventure.",
      "Use central Vietnam for food, culture and beaches.",
      "Use the south when you want a different urban and Mekong experience.",
    ],
    destinations: [
      {
        name: "Hanoi",
        text:
          "Hanoi is one of Vietnam's most rewarding cities for food, culture and atmosphere. The Old Quarter is chaotic, energetic and best experienced on foot.",
      },
      {
        name: "Northern Vietnam",
        text:
          "The north is where Vietnam becomes particularly dramatic. Ha Giang, Ha Long Bay and Ninh Binh each offer a different landscape and experience.",
      },
      {
        name: "Central Vietnam",
        text:
          "Hoi An and the surrounding region are ideal for travellers wanting a slower section of the trip, with food, beaches, history and easy day trips.",
      },
      {
        name: "Southern Vietnam",
        text:
          "Ho Chi Minh City provides a fast-paced contrast to the north, while the Mekong Delta adds a completely different side of Vietnam.",
      },
    ],
    sampleItinerary: [
      "Days 1–3 — Hanoi",
      "Days 4–6 — Northern Vietnam",
      "Days 7–10 — Hoi An and Central Vietnam",
      "Days 11–14 — Ho Chi Minh City and the south",
    ],
    included: [
      "Vietnam route planning",
      "Hanoi planning",
      "Northern Vietnam recommendations",
      "Central Vietnam planning",
      "Southern Vietnam planning",
      "Transport guidance",
      "Practical route examples",
      "Final trip checklist",
    ],
    forWho: [
      "First-time visitors to Vietnam",
      "Travellers planning 10–21 days",
      "Backpackers and independent travellers",
      "Anyone unsure whether to travel north-to-south or south-to-north",
    ],
    faqs: [
      {
        question: "How long do I need in Vietnam?",
        answer:
          "Around two weeks is ideal for a first trip covering multiple regions. With less time, focus on one or two regions rather than trying to see everything.",
      },
      {
        question: "Is Ha Giang worth adding?",
        answer:
          "For travellers who enjoy dramatic scenery and adventure, it can be one of the highlights of northern Vietnam. It does, however, require enough time to justify the journey.",
      },
      {
        question: "Should I fly between regions?",
        answer:
          "Often, yes. Vietnam is long and domestic flights can save significant time when your itinerary covers distant regions.",
      },
    ],
  },

  indonesia: {
    name: "Indonesia",
    title: "INDONESIA, DONE PROPERLY.",
    image: "/images/indonesia.png",
    priceId: "price_1UDrvTLIPTWCzqpTo55jIxjg",
    description:
      "A practical guide to Indonesia's islands, routes and experiences, designed to help you build a trip that actually works.",
    intro:
      "Indonesia is not one destination. It is a huge collection of islands, cultures and landscapes, and the biggest planning mistake is treating the country as though everything is close together. A strong Indonesia itinerary is built around geography first and individual attractions second.",
    problems: [
      "Trying to combine too many islands.",
      "Underestimating ferry and flight connections.",
      "Building a trip entirely around Bali.",
      "Moving accommodation every few days.",
      "Ignoring weather and sea conditions when planning island transfers.",
    ],
    route: [
      "Decide which part of Indonesia you actually want to experience.",
      "Use Bali as a base only if it suits the trip you want.",
      "Combine Java with Bali for culture and landscapes.",
      "Use Lombok and the Gilis for beaches and a slower pace.",
      "Consider Komodo if you want one of the country's standout adventure experiences.",
    ],
    destinations: [
      {
        name: "Bali",
        text:
          "Bali can be as relaxing or as busy as you want it to be. The key is choosing the right base and avoiding the temptation to cross the island constantly.",
      },
      {
        name: "Java",
        text:
          "Java offers volcanoes, cities, culture and some of Indonesia's most impressive landscapes. It works particularly well for travellers who want more than beaches.",
      },
      {
        name: "Lombok & the Gilis",
        text:
          "Lombok and the Gili Islands provide a strong alternative to Bali for beaches, diving and a slower pace.",
      },
      {
        name: "Komodo",
        text:
          "Komodo and Labuan Bajo are ideal for travellers who want wildlife, dramatic scenery, snorkelling and boat-based adventure.",
      },
    ],
    sampleItinerary: [
      "Days 1–4 — Bali",
      "Days 5–7 — Java",
      "Days 8–11 — Lombok & the Gilis",
      "Days 12–14 — Komodo / Labuan Bajo",
    ],
    included: [
      "Indonesia route planning",
      "Bali planning",
      "Java recommendations",
      "Lombok and Gili planning",
      "Komodo planning",
      "Transport advice",
      "Route examples",
      "Final checklist",
    ],
    forWho: [
      "First-time visitors to Indonesia",
      "Travellers planning 10–21 days",
      "Beach and adventure travellers",
      "Anyone deciding between Bali, Lombok, Java and Komodo",
    ],
    faqs: [
      {
        question: "Should I spend my whole trip in Bali?",
        answer:
          "You can, but Indonesia offers much more. If you have two weeks or more, combining Bali with another region can create a much more varied trip.",
      },
      {
        question: "Are the Gili Islands worth visiting?",
        answer:
          "They can be, particularly if you want beaches, snorkelling and island life. Choose the island based on the atmosphere you want rather than treating all three as identical.",
      },
      {
        question: "Is Komodo worth the extra travel?",
        answer:
          "For many travellers, yes. The combination of wildlife, islands, snorkelling and dramatic landscapes makes it one of Indonesia's standout experiences.",
      },
    ],
  },

  japan: {
    name: "Japan",
    title: "JAPAN, DONE PROPERLY.",
    image: "/images/japan.png",
    priceId: "price_1UDrvoLIPTWCzqpT0x2vNbYm",
    description:
      "A practical Japan travel guide covering Tokyo, Kyoto, Osaka, Fuji, the Alps and how to make the country's transport system work for you.",
    intro:
      "Japan is one of the easiest countries in the world to travel around once your route is organised. The challenge is deciding where to go. Tokyo, Kyoto and Osaka could fill a trip on their own, while Fuji, the Japanese Alps, Hiroshima and countless smaller destinations compete for your time.",
    problems: [
      "Trying to see too much of Japan in one trip.",
      "Assuming every train journey is equally convenient.",
      "Moving hotels unnecessarily.",
      "Spending the entire trip in the biggest cities.",
      "Buying rail passes without calculating whether they actually save money.",
    ],
    route: [
      "Start with Tokyo for your first major city experience.",
      "Move west towards Kyoto and Osaka.",
      "Add Fuji or Hakone if you want mountain scenery.",
      "Use Hiroshima as an optional western extension.",
      "Consider the Japanese Alps if you have enough time.",
    ],
    destinations: [
      {
        name: "Tokyo",
        text:
          "Tokyo is enormous and rewards planning by neighbourhood rather than trying to see the whole city in one day. Give yourself several days and build each day around nearby areas.",
      },
      {
        name: "Kyoto & Nara",
        text:
          "Kyoto provides Japan's classic temples, gardens and traditional streets, while Nara makes an easy addition for travellers interested in history and culture.",
      },
      {
        name: "Osaka & Hiroshima",
        text:
          "Osaka is excellent for food and nightlife, while Hiroshima provides a more reflective historical experience and works well as part of a western Japan route.",
      },
      {
        name: "Fuji, Hakone & the Alps",
        text:
          "Mountain destinations can add a completely different side to a Japan trip. Choose one based on your available time rather than trying to add all of them.",
      },
    ],
    sampleItinerary: [
      "Days 1–4 — Tokyo",
      "Days 5–7 — Kyoto & Nara",
      "Days 8–9 — Osaka",
      "Days 10–11 — Hiroshima",
      "Days 12–14 — Fuji / Hakone or the Japanese Alps",
    ],
    included: [
      "Japan route planning",
      "Tokyo planning",
      "Kyoto and Nara",
      "Osaka and Hiroshima",
      "Fuji, Hakone and Alps planning",
      "Transport guidance",
      "Route examples",
      "Final checklist",
    ],
    forWho: [
      "First-time Japan travellers",
      "Travellers planning 10–21 days",
      "Food and culture travellers",
      "Anyone confused by Japan's transport options",
    ],
    faqs: [
      {
        question: "How long should I spend in Japan?",
        answer:
          "Two weeks is a strong first-trip length. It gives you enough time for Tokyo, Kyoto and Osaka while allowing room for one or two additional destinations.",
      },
      {
        question: "Do I need a Japan Rail Pass?",
        answer:
          "Not automatically. Whether a pass makes financial sense depends on your exact route, so calculate the individual journeys before buying one.",
      },
      {
        question: "Should I visit Tokyo and Kyoto?",
        answer:
          "For a first trip, they make an excellent combination. Tokyo gives you modern Japan while Kyoto provides a very different cultural experience.",
      },
    ],
  },

  philippines: {
    name: "Philippines",
    title: "THE PHILIPPINES, DONE PROPERLY.",
    image: "/images/philippines.png",
    priceId: "price_1UDrw3LIPTWCzqpTruwX5ayv",
    description:
      "A practical Philippines travel guide covering Palawan, Cebu, Bohol, Siargao, Boracay and how to build a better island-hopping route.",
    intro:
      "The Philippines is one of the world's great island destinations, but its geography makes route planning particularly important. There are thousands of islands and some of the country's best experiences are separated by flights, ferries and long transfers. The goal is not to see as many islands as possible. It is to choose the right ones.",
    problems: [
      "Trying to visit too many islands.",
      "Underestimating domestic travel time.",
      "Building an itinerary around every famous beach.",
      "Leaving no flexibility for weather disruption.",
      "Adding complicated connections for destinations that are only marginally different.",
    ],
    route: [
      "Choose your main island group before booking accommodation.",
      "Use Palawan for dramatic scenery and island-hopping.",
      "Use Cebu and Bohol for a varied first trip.",
      "Choose Siargao for surfing and island life.",
      "Use Boracay if you want an easy, developed beach destination.",
    ],
    destinations: [
      {
        name: "Palawan",
        text:
          "Palawan is one of the strongest choices for a first Philippines trip, particularly if you want limestone landscapes, clear water and island-hopping.",
      },
      {
        name: "Cebu & Bohol",
        text:
          "Cebu and Bohol work well together and provide a mixture of beaches, waterfalls, marine experiences and inland attractions.",
      },
      {
        name: "Siargao",
        text:
          "Siargao has a distinct atmosphere and is particularly appealing to travellers looking for surfing, cafés, island trips and a more relaxed social scene.",
      },
      {
        name: "Boracay",
        text:
          "Boracay is more developed than many other Philippine islands, but that is part of its appeal. It is easy to reach and works well for travellers wanting a straightforward beach break.",
      },
    ],
    sampleItinerary: [
      "Days 1–4 — Palawan",
      "Days 5–7 — Cebu",
      "Days 8–10 — Bohol",
      "Days 11–14 — Siargao",
    ],
    included: [
      "Philippines route planning",
      "Palawan planning",
      "Cebu and Bohol",
      "Siargao",
      "Boracay and alternative islands",
      "Transport advice",
      "Route examples",
      "Final checklist",
    ],
    forWho: [
      "First-time visitors to the Philippines",
      "Beach and island travellers",
      "Travellers planning 10–21 days",
      "Anyone overwhelmed by the number of islands",
    ],
    faqs: [
      {
        question: "How many islands should I visit?",
        answer:
          "Usually two or three main areas are enough for a two-week trip. Every additional island creates another transfer and reduces time actually spent enjoying the destination.",
      },
      {
        question: "Is Palawan worth visiting?",
        answer:
          "For travellers interested in dramatic scenery, beaches and island-hopping, Palawan is one of the strongest choices in the country.",
      },
      {
        question: "Should I include Siargao?",
        answer:
          "If surfing, island life and a relaxed social atmosphere appeal to you, Siargao can be an excellent addition. Just make sure the extra flight fits naturally into your route.",
      },
    ],
  },

  australia: {
    name: "Australia East Coast",
    title: "AUSTRALIA'S EAST COAST, DONE PROPERLY.",
    image: "/images/australia.png",
    priceId: "price_1UDrwKLIPTWCzqpTMBpQ3p0S",
    description:
      "A practical guide to planning Australia's East Coast from Sydney to Cairns without turning the trip into one long sequence of transfers.",
    intro:
      "Australia's East Coast is one of the world's classic long-distance travel routes. Sydney, Byron Bay, Brisbane, the Whitsundays and Cairns are all worth visiting, but the distances between them are significant. The best trip is not simply about seeing every major stop. It is about understanding where to spend your time and when to drive, fly or slow down.",
    problems: [
      "Underestimating the distances between destinations.",
      "Trying to drive the entire coast without enough time.",
      "Adding too many one-night stops.",
      "Leaving the Great Barrier Reef until the final day.",
      "Treating the entire coast as one continuous beach holiday.",
    ],
    route: [
      "Start in Sydney and experience the city properly.",
      "Move north through the surf and coastal towns.",
      "Use Brisbane as a practical base for the southeast Queensland section.",
      "Build the Whitsundays around the experience you actually want.",
      "Finish around Cairns and the Tropical North with enough flexibility for weather.",
    ],
    destinations: [
      {
        name: "Sydney",
        text:
          "Sydney is more than an arrival point. Give yourself enough time for the harbour, beaches, neighbourhoods, food and nightlife before beginning the journey north.",
      },
      {
        name: "Byron Bay & the Gold Coast",
        text:
          "This section combines laid-back coastal towns with the more developed Gold Coast. It works particularly well for travellers wanting beaches, nightlife and a social atmosphere.",
      },
      {
        name: "Brisbane & the East Coast North",
        text:
          "Brisbane provides a useful city break before continuing north, while the Sunshine Coast and K'gari offer a change of pace.",
      },
      {
        name: "The Whitsundays",
        text:
          "The Whitsundays are one of the visual highlights of the East Coast. Give yourself enough time for a boat trip or other experience rather than simply passing through.",
      },
      {
        name: "Cairns, the Reef & the Daintree",
        text:
          "Cairns is the gateway to the Great Barrier Reef and Tropical North Queensland. Keep flexibility in the final part of your trip because weather can affect reef and rainforest plans.",
      },
    ],
    sampleItinerary: [
      "Days 1–3 — Sydney",
      "Days 4–6 — Byron Bay & Gold Coast",
      "Days 7–8 — Brisbane / Sunshine Coast",
      "Days 9–10 — Whitsundays",
      "Days 11–14 — Cairns & Tropical North",
    ],
    included: [
      "East Coast route planning",
      "Sydney planning",
      "Byron Bay and Gold Coast",
      "Brisbane and the northern coast",
      "Whitsundays",
      "Cairns, reef and Daintree planning",
      "Three practical routes",
      "Final checklist",
    ],
    forWho: [
      "First-time East Coast travellers",
      "Travellers planning 10–21 days",
      "Road-trip travellers",
      "Anyone deciding between driving and flying",
    ],
    faqs: [
      {
        question: "How long do I need for Australia's East Coast?",
        answer:
          "Two weeks can work if you mix driving and flying. Three weeks or more gives you much more breathing room and makes a road-trip-heavy itinerary more realistic.",
      },
      {
        question: "Should I drive the whole way?",
        answer:
          "Not necessarily. The East Coast is huge. Driving some sections and flying others can give you a better balance between seeing places and actually having time in them.",
      },
      {
        question: "Should I book the reef on my final day?",
        answer:
          "It is better to avoid making a major reef trip your final fixed activity. Weather and sea conditions can cause cancellations or changes, so keep some flexibility at the end.",
      },
    ],
  },
};

export default function GuidePage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = use(params);

  const slug = country.toLowerCase();
  const guide = guides[slug];

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  if (!guide) {
    return (
      <main className="min-h-screen bg-[#f5f3ee] text-black">
        <div className="relative z-50 h-[82px] shrink-0 bg-[#f5f3ee] sm:h-[92px]">
          <SiteHeader />
        </div>

        <section className="flex min-h-[75vh] items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              OUTBOUND.
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-[-0.05em]">
              Guide not found.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-black/55">
              We couldn't find the travel guide you're looking for.
            </p>

            <Link
              href="/guides"
              className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
            >
              View all guides →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  async function handleGuideCheckout() {
    if (!email.trim()) {
      setCheckoutError("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setCheckoutError("Please enter a valid email address.");
      return;
    }

    setCheckoutLoading(true);
    setCheckoutError("");

    try {
      const response = await fetch(
        "/api/create-guide-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            guide: slug,
            priceId: guide.priceId,
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to start checkout."
        );
      }

      if (!data.url) {
        throw new Error(
          "Stripe checkout URL was not returned."
        );
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Guide checkout error:", error);

      setCheckoutError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setCheckoutLoading(false);
    }
  }

  function openCheckout() {
    setCheckoutError("");
    setCheckoutOpen(true);
  }

  function closeCheckout() {
    if (!checkoutLoading) {
      setCheckoutOpen(false);
    }
  }

  return (
    <>
      <main className="min-h-screen bg-[#f5f3ee] text-black">

        {/* HEADER — KEPT SEPARATE FROM ALL IMAGERY */}

        <div className="relative z-50 h-[82px] shrink-0 bg-[#f5f3ee] sm:h-[92px]">
          <SiteHeader />
        </div>

        {/* =====================================================
            PAID GUIDE — FIRST
        ===================================================== */}

        <section className="border-b border-black/10 bg-[#f5f3ee]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

            <div className="grid gap-12 lg:grid-cols-[1fr_390px] lg:items-end">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                  OUTBOUND. TRAVEL GUIDE
                </p>

                <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
                  {guide.name.toUpperCase()}
                  <span className="block text-black/20">
                    DONE PROPERLY.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/55 sm:text-xl">
                  {guide.description}
                </p>

              </div>

              {/* PURCHASE CARD */}

              <div className="rounded-[2rem] bg-black p-7 text-white sm:p-9">

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                  DIGITAL TRAVEL GUIDE
                </p>

                <div className="mt-5 flex items-end justify-between gap-5">

                  <span className="text-6xl font-black tracking-[-0.06em]">
                    £9.99
                  </span>

                  <span className="pb-2 text-xs font-bold uppercase tracking-[0.12em] text-white/30">
                    ONE-OFF
                  </span>

                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/55">
                  Practical route planning, destination advice,
                  transport guidance, itinerary examples and the
                  decisions that make the trip work.
                </p>

                <button
                  type="button"
                  onClick={openCheckout}
                  className="mt-8 w-full rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/80"
                >
                  Get the {guide.name} guide →
                </button>

                <p className="mt-4 text-center text-[11px] text-white/25">
                  Secure checkout · Digital delivery
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            DESTINATION IMAGE
            COMPLETELY SEPARATE FROM HEADER
        ===================================================== */}

        <section className="px-6 py-8 md:px-10 md:py-12">

          <div className="mx-auto max-w-7xl">

            <div className="relative h-[42vh] min-h-[320px] overflow-hidden rounded-[2rem] bg-black sm:h-[50vh] md:h-[62vh]">

              <img
                src={guide.image}
                alt={guide.name}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = "/images/hero.png";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                  OUTBOUND.
                </p>

                <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                  {guide.name}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-6 py-20 md:px-10 md:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                  THE GUIDE
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                  MORE INFORMATION.
                  <span className="block text-black/20">
                    BETTER DECISIONS.
                  </span>
                </h2>

              </div>

              <div className="max-w-2xl lg:pt-8">

                <p className="text-lg leading-[1.7] text-black/60 sm:text-xl">
                  {guide.intro}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROBLEM
        ===================================================== */}

        <section className="bg-[#111] text-white">

          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
                  THE PROBLEM
                </p>

                <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
                  MOST TRIPS
                  <span className="block text-white/20">
                    GO WRONG
                  </span>
                  BEFORE THEY START.
                </h2>

              </div>

              <div className="space-y-3">

                {guide.problems.map((problem, index) => (

                  <div
                    key={problem}
                    className="flex gap-5 rounded-2xl bg-white/10 p-5 sm:p-6"
                  >

                    <span className="shrink-0 text-sm font-black text-white/25">
                      0{index + 1}
                    </span>

                    <p className="font-medium leading-relaxed text-white/75">
                      {problem}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            BUILD YOUR ROUTE
        ===================================================== */}

        <section className="px-6 py-20 md:px-10 md:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                BUILD YOUR ROUTE
              </p>

              <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                START WITH
                <span className="block text-black/20">
                  THE ROUTE.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-black/55">
                Before choosing hotels, restaurants or individual
                activities, work out how the trip should flow. The best
                itinerary is one where the route makes sense and each
                destination earns its place.
              </p>

            </div>

            <div className="grid gap-3 md:grid-cols-5">

              {guide.route.map((step, index) => (

                <div
                  key={step}
                  className="rounded-3xl bg-white p-6 sm:p-7"
                >

                  <div className="text-xs font-black text-black/20">
                    0{index + 1}
                  </div>

                  <p className="mt-8 text-base font-bold leading-6">
                    {step}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHERE TO GO
        ===================================================== */}

        <section className="bg-[#111] text-white">

          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
              WHERE TO GO
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              THE PLACES
              <span className="block text-white/20">
                THAT MATTER.
              </span>
            </h2>

            <div className="mt-12 grid gap-3 md:grid-cols-2">

              {guide.destinations.map((destination, index) => (

                <div
                  key={destination.name}
                  className="rounded-3xl bg-white/10 p-7 sm:p-9"
                >

                  <p className="text-xs font-black text-white/25">
                    0{index + 1}
                  </p>

                  <h3 className="mt-7 text-3xl font-black tracking-[-0.04em]">
                    {destination.name}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/55">
                    {destination.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            SAMPLE ITINERARY
        ===================================================== */}

        <section className="px-6 py-20 md:px-10 md:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                  EXAMPLE ROUTE
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                  WHAT A GOOD
                  <span className="block text-black/20">
                    TRIP CAN LOOK LIKE.
                  </span>
                </h2>

              </div>

              <div className="space-y-3">

                {guide.sampleItinerary.map((day, index) => (

                  <div
                    key={day}
                    className="flex items-center gap-5 rounded-2xl bg-white px-6 py-5"
                  >

                    <span className="text-xs font-black text-black/20">
                      0{index + 1}
                    </span>

                    <p className="text-base font-bold">
                      {day}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHAT'S INSIDE
        ===================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                  WHAT'S INSIDE
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                  EVERYTHING YOU
                  <span className="block text-black/20">
                    NEED TO PLAN IT.
                  </span>
                </h2>

              </div>

              <div className="space-y-3">

                {guide.included.map((item, index) => (

                  <div
                    key={item}
                    className="flex gap-5 rounded-2xl bg-[#f5f3ee] p-6"
                  >

                    <span className="shrink-0 text-xs font-black text-black/20">
                      0{index + 1}
                    </span>

                    <p className="font-semibold leading-relaxed text-black/70">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHO IT'S FOR
        ===================================================== */}

        <section className="bg-[#f5f3ee]">

          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                  WHO IT'S FOR
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                  BUILT FOR
                  <span className="block text-black/20">
                    INDEPENDENT TRAVELLERS.
                  </span>
                </h2>

              </div>

              <div className="space-y-3">

                {guide.forWho.map((item, index) => (

                  <div
                    key={item}
                    className="flex gap-5 rounded-2xl bg-white p-6"
                  >

                    <span className="text-xs font-black text-black/20">
                      0{index + 1}
                    </span>

                    <p className="font-semibold leading-relaxed text-black/70">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
              FAQ
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              BEFORE YOU
              <span className="block text-black/20">
                BUY.
              </span>
            </h2>

            <div className="mt-12 space-y-3">

              {guide.faqs.map((faq) => (

                <div
                  key={faq.question}
                  className="rounded-3xl bg-[#f5f3ee] p-7 sm:p-9"
                >

                  <h3 className="text-xl font-black tracking-[-0.02em]">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-relaxed text-black/55">
                    {faq.answer}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            PAID GUIDE — LAST
        ===================================================== */}

        <section className="bg-black text-white">

          <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
              THE {guide.name.toUpperCase()} GUIDE
            </p>

            <h2 className="mt-6 text-5xl font-black leading-[0.86] tracking-[-0.06em] sm:text-6xl md:text-8xl">
              PLAN THE
              <span className="block text-white/20">
                TRIP PROPERLY.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Stop collecting travel recommendations and start turning
              them into a route that actually works.
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-9">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                DIGITAL TRAVEL GUIDE
              </p>

              <p className="mt-3 text-6xl font-black tracking-[-0.06em]">
                £9.99
              </p>

              <p className="mt-3 text-sm text-white/35">
                One-off payment
              </p>

              <button
                type="button"
                onClick={openCheckout}
                className="mt-7 w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-white/80"
              >
                Get the {guide.name} guide →
              </button>

              <p className="mt-4 text-[11px] text-white/25">
                Secure checkout · Digital delivery
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            PERSONALISED TRIP
        ===================================================== */}

        <section className="bg-[#f5f3ee]">

          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

            <div className="rounded-[2rem] bg-white p-8 sm:p-10 md:p-14">

              <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                    WANT MORE?
                  </p>

                  <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                    DON'T JUST GET
                    <span className="block text-black/20">
                      THE GUIDE.
                    </span>
                    GET THE TRIP PLANNED.
                  </h2>

                  <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/55">
                    If you don't want to build the itinerary yourself,
                    OUTBOUND can create a personalised trip around your
                    dates, budget, travel style and interests.
                  </p>

                </div>

                <div className="rounded-3xl bg-black p-8 text-white">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    PERSONALISED TRIP
                  </p>

                  <p className="mt-4 text-5xl font-black tracking-[-0.05em]">
                    £39.99
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    A personalised route, day-by-day itinerary,
                    accommodation recommendations, transport,
                    activities, restaurants and estimated costs.
                  </p>

                  <Link
                    href="/build-my-trip"
                    className="mt-7 block rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-black transition hover:bg-white/80"
                  >
                    Build my trip →
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="border-t border-black/10 bg-[#f5f3ee]">

          <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

            <div className="flex flex-col justify-between gap-8 md:flex-row">

              <div>

                <Link
                  href="/"
                  className="text-2xl font-black tracking-[-0.08em]"
                >
                  OUTBOUND.
                </Link>

                <p className="mt-3 text-sm text-black/40">
                  Travel planning, rethought.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium sm:grid-cols-3">

                <Link
                  href="/destinations"
                  className="hover:opacity-50"
                >
                  Destinations
                </Link>

                <Link
                  href="/guides"
                  className="hover:opacity-50"
                >
                  Travel Guides
                </Link>

                <Link
                  href="/build-my-trip"
                  className="hover:opacity-50"
                >
                  Build My Trip
                </Link>

                <Link
                  href="/bespoke"
                  className="hover:opacity-50"
                >
                  Bespoke
                </Link>

                <Link
                  href="/about"
                  className="hover:opacity-50"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="hover:opacity-50"
                >
                  Contact
                </Link>

                <Link
                  href="/privacy"
                  className="hover:opacity-50"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="hover:opacity-50"
                >
                  Terms
                </Link>

                <Link
                  href="/refunds"
                  className="hover:opacity-50"
                >
                  Refunds
                </Link>

              </div>

            </div>

            <div className="mt-8 border-t border-black/10 pt-6 text-xs text-black/40">
              © {new Date().getFullYear()} OUTBOUND. All rights reserved.
            </div>

          </div>

        </footer>

      </main>

      {/* =======================================================
          STRIPE CHECKOUT MODAL
      ======================================================= */}

      {checkoutOpen && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
          onClick={closeCheckout}
        >

          <div
            className="w-full max-w-md rounded-[2rem] bg-white p-7 text-black shadow-2xl sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="mb-7 flex items-start justify-between">

              <div>

                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  OUTBOUND.
                </p>

                <h2 className="text-3xl font-black tracking-[-0.04em]">
                  Get your {guide.name} guide
                </h2>

              </div>

              <button
                type="button"
                onClick={closeCheckout}
                disabled={checkoutLoading}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-xl transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Close"
              >
                ×
              </button>

            </div>

            <p className="mb-7 text-base leading-7 text-black/55">
              Enter your email and you'll be taken to Stripe's secure
              checkout to purchase your guide.
            </p>

            <div className="mb-5">

              <label
                htmlFor="guide-email"
                className="mb-2 block text-sm font-bold"
              >
                Email address
              </label>

              <input
                id="guide-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setCheckoutError("");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleGuideCheckout();
                  }
                }}
                placeholder="you@example.com"
                autoFocus
                className="w-full rounded-2xl border border-black/15 px-4 py-4 text-base outline-none transition placeholder:text-black/30 focus:border-black"
              />

            </div>

            {checkoutError && (

              <p className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {checkoutError}
              </p>

            )}

            <button
              type="button"
              onClick={handleGuideCheckout}
              disabled={checkoutLoading}
              className="w-full rounded-full bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {checkoutLoading
                ? "Taking you to checkout..."
                : "Continue to secure checkout →"}
            </button>

            <p className="mt-5 text-center text-xs text-black/35">
              £9.99 one-off payment · Secure checkout via Stripe
            </p>

          </div>

        </div>

      )}

    </>
  );
}