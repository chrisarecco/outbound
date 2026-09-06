"use client";

import Link from "next/link";
import { use } from "react";
import SiteHeader from "@/components/SiteHeader";

type Guide = {
  name: string;
  image: string;
  price: string;
  eyebrow: string;
  headline: string;
  description: string;
  idealFor: string[];
  route: string[];
  planningProblems: string[];
  highlights: {
    title: string;
    description: string;
  }[];
  itinerary: {
    day: string;
    location: string;
    title: string;
    description: string;
    details: string[];
  }[];
  included: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const guides: Record<string, Guide> = {
  thailand: {
    name: "Thailand",
    image: "/images/thailand.png",
    price: "£9.99",
    eyebrow: "THE OUTBOUND THAILAND GUIDE",
    headline: "DON'T JUST GO TO THAILAND. GO THE RIGHT WAY.",
    description:
      "Thailand looks easy to plan until you realise how many places you could visit — and how much time you can waste moving between them. This guide helps you build a route that actually makes sense, from Bangkok through the north and down to the islands.",
    idealFor: [
      "First-time Thailand trips",
      "Backpackers",
      "Beach + nightlife trips",
      "Couples",
      "2–3 week holidays",
      "Longer Southeast Asia trips",
    ],
    route: [
      "Bangkok",
      "Chiang Mai",
      "Krabi",
      "Koh Phi Phi",
      "Koh Tao",
      "Koh Samui",
    ],
    planningProblems: [
      "Trying to decide between Phuket, Krabi, Phi Phi, Koh Tao and Koh Samui",
      "Working out which islands actually fit together",
      "Knowing how many nights to spend in each place",
      "Figuring out whether to fly, take a train, bus or ferry",
      "Avoiding an itinerary that has you changing hotels every other day",
      "Balancing beaches, nightlife, food, culture and adventure",
    ],
    highlights: [
      {
        title: "Bangkok",
        description:
          "Where to base yourself, what to prioritise in your first 48 hours and how to experience the city without spending your whole trip travelling across it.",
      },
      {
        title: "Chiang Mai",
        description:
          "A practical northern Thailand stop for temples, food, markets, nature and day trips — including how much time it deserves.",
      },
      {
        title: "Krabi",
        description:
          "Use Krabi as a base for Railay and the surrounding islands rather than trying to cram every beach into one day.",
      },
      {
        title: "Koh Phi Phi",
        description:
          "How to decide whether Phi Phi is worth including for your style of trip — and how to fit it into a wider island route.",
      },
      {
        title: "Koh Tao",
        description:
          "The island to consider if diving, snorkelling and a more social backpacker atmosphere are high on your list.",
      },
      {
        title: "Koh Samui",
        description:
          "When Samui makes more sense than the other Gulf islands and how it changes the logistics of your route.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–2",
        location: "BANGKOK",
        title: "Start with the city, not the airport transfer",
        description:
          "Give Bangkok enough time to actually experience it. Base yourself somewhere convenient for the areas you want to explore rather than choosing a hotel purely because it looks good online.",
        details: [
          "Grand Palace & Wat Pho",
          "Chinatown food",
          "Rooftop or riverside evening",
          "Old Town exploration",
        ],
      },
      {
        day: "DAYS 3–5",
        location: "CHIANG MAI",
        title: "Slow the pace down",
        description:
          "Fly north and spend several days around Chiang Mai. This gives the trip a completely different feel before you head south for the beaches.",
        details: [
          "Old City temples",
          "Night markets",
          "Thai cooking experience",
          "Mountain or nature day trip",
        ],
      },
      {
        day: "DAYS 6–8",
        location: "KRABI",
        title: "Limestone cliffs & island days",
        description:
          "Use Krabi as your southern base. Spend time around Railay and choose an island trip rather than trying to tick every destination off a list.",
        details: [
          "Railay Beach",
          "Ao Nang",
          "Four Islands / similar island trip",
          "Sunset & local food",
        ],
      },
      {
        day: "DAYS 9–10",
        location: "KOH PHI PHI",
        title: "The iconic island stop",
        description:
          "Move on to Phi Phi for a couple of nights. The guide explains when this stop works and when it is better to spend those nights elsewhere.",
        details: [
          "Viewpoint",
          "Longtail boat trip",
          "Snorkelling",
          "Beach time",
        ],
      },
      {
        day: "DAYS 11–14",
        location: "GULF ISLANDS",
        title: "Finish with island time",
        description:
          "If diving and nightlife are priorities, finish around Koh Tao. If you want a different style of trip, the guide explains the alternatives and how the route changes.",
        details: [
          "Diving or snorkelling",
          "Beach days",
          "Island nightlife",
          "Flexible final days",
        ],
      },
    ],
    included: [
      {
        title: "Route planning",
        description:
          "Understand which destinations work together instead of piecing together disconnected recommendations.",
      },
      {
        title: "How long to stay",
        description:
          "Work out where to spend 2 nights, 3 nights or longer based on the type of trip you're planning.",
      },
      {
        title: "Island comparison",
        description:
          "Compare the major island options by atmosphere, activities, beaches, nightlife and logistics.",
      },
      {
        title: "Getting around",
        description:
          "Know when domestic flights make sense and when trains, buses and ferries are the better option.",
      },
      {
        title: "Where to stay",
        description:
          "Choose the right area rather than simply searching for the highest-rated hotel.",
      },
      {
        title: "Food & nightlife",
        description:
          "Know which parts of each destination are worth prioritising when you have limited time.",
      },
      {
        title: "Budget planning",
        description:
          "Structure your spending around accommodation, transport, food and experiences.",
      },
      {
        title: "Trip-building framework",
        description:
          "Use the guide to turn the information into a realistic route rather than another saved folder of recommendations.",
      },
    ],
    faqs: [
      {
        question: "Is this just a list of places to visit?",
        answer:
          "No. The focus is on how the destinations fit together, how long to spend in each and how to build a route around your own priorities.",
      },
      {
        question: "Is it useful for a first trip to Thailand?",
        answer:
          "Yes. It is specifically designed to remove the uncertainty around choosing destinations and building a first Thailand route.",
      },
      {
        question: "What if I want a completely personalised itinerary?",
        answer:
          "That's exactly what OUTBOUND Personalised Trip is for. Tell us your dates, budget and priorities and we'll build the route around you.",
      },
    ],
  },

  australia: {
    name: "Australia",
    image: "/images/australia.png",
    price: "£12.99",
    eyebrow: "THE OUTBOUND AUSTRALIA GUIDE",
    headline: "AUSTRALIA IS HUGE. YOUR TRIP DOESN'T HAVE TO BE CHAOTIC.",
    description:
      "Australia rewards good planning. This guide helps you decide which part of the country actually fits your time, then shows you how to connect cities, road trips, beaches and the outdoors without trying to see the entire continent in one holiday.",
    idealFor: [
      "First-time visitors",
      "Working holiday travellers",
      "Backpackers",
      "East Coast road trips",
      "Beach & surf trips",
      "2–6 week trips",
    ],
    route: [
      "Sydney",
      "Melbourne",
      "Great Ocean Road",
      "Byron Bay",
      "Gold Coast",
      "Cairns",
    ],
    planningProblems: [
      "Trying to cover too much of Australia in one trip",
      "Choosing between the east coast and the south",
      "Working out where a road trip is actually worthwhile",
      "Understanding when flying saves days of travel",
      "Choosing between Byron Bay, Gold Coast and other coastal stops",
      "Building a route that doesn't spend half the holiday on buses",
    ],
    highlights: [
      {
        title: "Sydney",
        description:
          "How to structure your first few days around the harbour, beaches, food and neighbourhoods without overplanning every hour.",
      },
      {
        title: "Melbourne",
        description:
          "A different side of Australia built around food, culture, sport and easy access to the Great Ocean Road.",
      },
      {
        title: "Great Ocean Road",
        description:
          "How to approach the route as a genuine road trip rather than rushing through the famous viewpoints in one long day.",
      },
      {
        title: "Byron Bay",
        description:
          "Where Byron fits into an east coast itinerary and when it's worth giving it more than a quick overnight stop.",
      },
      {
        title: "Gold Coast",
        description:
          "How to decide whether the Gold Coast fits your trip depending on whether you want beaches, nightlife, theme parks or surf.",
      },
      {
        title: "Cairns",
        description:
          "Use Cairns as the gateway to tropical Queensland and the Great Barrier Reef rather than treating it as just another city stop.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–3",
        location: "SYDNEY",
        title: "Settle into Australia",
        description:
          "Start with Sydney and give yourself enough time to adjust, explore the harbour and experience the city's beaches before heading north.",
        details: [
          "Sydney Harbour",
          "Bondi & coastal walk",
          "Manly",
          "Food & nightlife",
        ],
      },
      {
        day: "DAYS 4–7",
        location: "MELBOURNE",
        title: "Cities, food & the Great Ocean Road",
        description:
          "Fly between the major cities rather than losing multiple days travelling overland. Use Melbourne as the base for a road-trip section.",
        details: [
          "Melbourne neighbourhoods",
          "Markets & food",
          "Great Ocean Road",
          "Twelve Apostles",
        ],
      },
      {
        day: "DAYS 8–11",
        location: "BYRON BAY",
        title: "Slow down on the coast",
        description:
          "Head north for a very different pace. Byron works particularly well when you want a few days without a packed sightseeing schedule.",
        details: [
          "Main Beach",
          "Cape Byron",
          "Surfing",
          "Local food & bars",
        ],
      },
      {
        day: "DAYS 12–14",
        location: "GOLD COAST",
        title: "Beach, surf or a little chaos",
        description:
          "The Gold Coast can be tailored around your priorities. The guide helps you decide whether to use it as a short stop or give it several nights.",
        details: [
          "Surfers Paradise",
          "Beach days",
          "Surf",
          "Optional theme parks",
        ],
      },
      {
        day: "DAYS 15–18",
        location: "CAIRNS",
        title: "Finish in the tropics",
        description:
          "End around Cairns with a completely different landscape and access to the reef and rainforest.",
        details: [
          "Great Barrier Reef",
          "Daintree / rainforest",
          "Waterfalls",
          "Tropical north",
        ],
      },
    ],
    included: [
      {
        title: "Which coast?",
        description:
          "Work out whether your available time is better spent on the east coast, south coast or a combination.",
      },
      {
        title: "Road trip planning",
        description:
          "Know which sections are worth driving and where a flight can save you valuable holiday time.",
      },
      {
        title: "City-by-city planning",
        description:
          "Understand what Sydney, Melbourne and Brisbane offer so you can decide where to spend your nights.",
      },
      {
        title: "East Coast route",
        description:
          "A practical framework for connecting the major stops without simply following a generic checklist.",
      },
      {
        title: "Accommodation areas",
        description:
          "Choose where to base yourself in each destination depending on your priorities.",
      },
      {
        title: "Activities",
        description:
          "Know which experiences deserve a place in the itinerary and which are easier to skip.",
      },
      {
        title: "Budget planning",
        description:
          "Build a realistic budget around Australia's higher accommodation, food and transport costs.",
      },
      {
        title: "Time optimisation",
        description:
          "The biggest Australia mistake is trying to see everything. The guide helps you decide what not to do.",
      },
    ],
    faqs: [
      {
        question: "How long do I need for Australia?",
        answer:
          "There isn't one answer. The guide helps you build a route around the time you actually have rather than assuming you can cover the whole country.",
      },
      {
        question: "Is this mainly for backpackers?",
        answer:
          "No. The route-planning principles work for backpackers, working holiday travellers, couples and conventional holidays.",
      },
      {
        question: "Can OUTBOUND build my exact route?",
        answer:
          "Yes. The £39.99 Personalised Trip product takes your dates, budget, interests and travel style and turns them into a specific itinerary.",
      },
    ],
  },

  vietnam: {
    name: "Vietnam",
    image: "/images/vietnam.png",
    price: "£9.99",
    eyebrow: "THE OUTBOUND VIETNAM GUIDE",
    headline: "THE BEST OF VIETNAM ISN'T IN ONE PLACE.",
    description:
      "Vietnam is one of those countries where a good route makes the whole trip better. This guide shows you how to combine cities, mountains, bays, countryside and beaches without wasting days travelling backwards and forwards.",
    idealFor: [
      "First-time visitors",
      "Backpackers",
      "Food lovers",
      "Adventure trips",
      "2–3 week itineraries",
      "Southeast Asia travellers",
    ],
    route: [
      "Hanoi",
      "Sapa",
      "Ha Long Bay",
      "Ninh Binh",
      "Hoi An",
      "Ho Chi Minh City",
    ],
    planningProblems: [
      "Choosing north, central or south Vietnam",
      "Deciding whether Sapa is worth the detour",
      "Choosing between Ha Long Bay and other northern experiences",
      "Working out the best order for Hanoi, Ninh Binh and Hoi An",
      "Choosing between overnight trains, buses and flights",
      "Fitting Vietnam into a wider Southeast Asia trip",
    ],
    highlights: [
      {
        title: "Hanoi",
        description:
          "Use Hanoi as the starting point for northern Vietnam and build your first few days around food, the Old Quarter and nearby excursions.",
      },
      {
        title: "Sapa",
        description:
          "A mountain detour for trekking, rice terraces and a completely different side of Vietnam — with advice on when the extra travel is worthwhile.",
      },
      {
        title: "Ha Long Bay",
        description:
          "Understand how to fit the bay into your route and what to consider when choosing a boat or alternative experience.",
      },
      {
        title: "Ninh Binh",
        description:
          "One of the easiest high-value additions to a northern itinerary, with countryside, limestone scenery and river trips.",
      },
      {
        title: "Hoi An",
        description:
          "Slow the itinerary down in central Vietnam with old-town streets, food, beaches and countryside.",
      },
      {
        title: "Ho Chi Minh City",
        description:
          "Finish in the south with a completely different urban atmosphere and easy access to wider southern Vietnam.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–2",
        location: "HANOI",
        title: "Start with street food and the Old Quarter",
        description:
          "Give yourself two days to settle into Vietnam's pace. Hanoi works best when you leave space to explore rather than filling every hour.",
        details: [
          "Old Quarter",
          "Street food",
          "Hoan Kiem Lake",
          "Night markets",
        ],
      },
      {
        day: "DAYS 3–4",
        location: "NINH BINH",
        title: "Trade the city for limestone landscapes",
        description:
          "Head south for a couple of nights among rice fields, rivers and dramatic limestone scenery.",
        details: [
          "Trang An / river scenery",
          "Tam Coc",
          "Viewpoints",
          "Countryside cycling",
        ],
      },
      {
        day: "DAYS 5–6",
        location: "HA LONG BAY",
        title: "Get out onto the water",
        description:
          "Return north and use a bay experience as a change of pace before heading into the mountains.",
        details: [
          "Overnight cruise option",
          "Kayaking",
          "Limestone islands",
          "Sunrise on the bay",
        ],
      },
      {
        day: "DAYS 7–9",
        location: "SAPA",
        title: "Vietnam's mountain side",
        description:
          "If trekking and landscapes are priorities, make the journey to Sapa. The guide explains how to fit the detour into a wider route.",
        details: [
          "Rice terraces",
          "Trekking",
          "Mountain villages",
          "Local food",
        ],
      },
      {
        day: "DAYS 10–13",
        location: "HOI AN",
        title: "Slow down in central Vietnam",
        description:
          "Fly south and base yourself around Hoi An. This is where the itinerary deliberately becomes slower and more flexible.",
        details: [
          "Old Town",
          "An Bang Beach",
          "Countryside",
          "Vietnamese food",
        ],
      },
      {
        day: "DAYS 14–15",
        location: "HO CHI MINH CITY",
        title: "Finish in the south",
        description:
          "End in Ho Chi Minh City and use the final days for food, nightlife and a taste of southern Vietnam.",
        details: [
          "District 1",
          "Street food",
          "Markets",
          "Optional Mekong trip",
        ],
      },
    ],
    included: [
      {
        title: "North-to-south routes",
        description:
          "Understand the most logical ways to travel through Vietnam rather than picking destinations independently.",
      },
      {
        title: "Sapa decision",
        description:
          "Work out whether the mountain detour fits your trip and how to make the extra travel worthwhile.",
      },
      {
        title: "Transport",
        description:
          "Compare the practical role of trains, sleeper buses and domestic flights when planning longer journeys.",
      },
      {
        title: "How many nights",
        description:
          "Avoid spending four nights somewhere that only needs two — or rushing a place that deserves longer.",
      },
      {
        title: "Food planning",
        description:
          "Build food into the trip rather than treating it as an afterthought.",
      },
      {
        title: "Accommodation areas",
        description:
          "Choose useful bases in each destination and understand what you're getting from each area.",
      },
      {
        title: "Budget framework",
        description:
          "Structure your Vietnam spending around accommodation, transport, food and experiences.",
      },
      {
        title: "Route examples",
        description:
          "Use ready-made route structures as the starting point for your own trip.",
      },
    ],
    faqs: [
      {
        question: "How many days is the guide designed for?",
        answer:
          "The examples focus particularly on trips of around two to three weeks, but the route principles can be adapted to shorter or longer trips.",
      },
      {
        question: "Do I need to visit Sapa?",
        answer:
          "Not necessarily. It depends on what you want from the trip. That's exactly the kind of decision the guide helps you make.",
      },
      {
        question: "Can you build my exact Vietnam itinerary?",
        answer:
          "Yes. Use the Personalised Trip service if you want OUTBOUND to take your dates, budget and preferences and create the route for you.",
      },
    ],
  },

  indonesia: {
    name: "Indonesia",
    image: "/images/indonesia.png",
    price: "£9.99",
    eyebrow: "THE OUTBOUND INDONESIA GUIDE",
    headline: "ISLAND-HOPPING IS EASY. ISLAND-HOPPING WELL ISN'T.",
    description:
      "Indonesia gives you almost too much choice. Bali, Nusa Penida, the Gilis, Lombok and beyond can make an incredible trip — but only if the route, transfers and number of stops actually make sense.",
    idealFor: [
      "First-time visitors",
      "Backpackers",
      "Beach trips",
      "Surf trips",
      "Couples",
      "2–4 week itineraries",
    ],
    route: [
      "Bali",
      "Ubud",
      "Uluwatu",
      "Nusa Penida",
      "Gili Islands",
      "Lombok",
    ],
    planningProblems: [
      "Trying to decide between Bali, the Gilis, Lombok and Nusa Penida",
      "Moving between islands without understanding the logistics",
      "Spending too many nights changing accommodation",
      "Deciding between Ubud, Canggu, Seminyak and Uluwatu",
      "Balancing beaches with inland Bali",
      "Working out which island is actually right for your trip",
    ],
    highlights: [
      {
        title: "Ubud",
        description:
          "The inland side of Bali for rice terraces, temples, food, wellness and a slower start to the trip.",
      },
      {
        title: "Uluwatu",
        description:
          "A strong base for beaches, cliffs, sunsets and surf — and a very different experience from inland Bali.",
      },
      {
        title: "Nusa Penida",
        description:
          "Dramatic scenery and famous viewpoints, but with logistics worth understanding before you commit several nights.",
      },
      {
        title: "Gili Islands",
        description:
          "Compare the different island atmospheres and decide which one actually matches the trip you want.",
      },
      {
        title: "Lombok",
        description:
          "A bigger step away from the Bali circuit for beaches, surf and a quieter island experience.",
      },
      {
        title: "Bali route",
        description:
          "Build a Bali itinerary that doesn't involve crossing the island every day just to reach the next activity.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–3",
        location: "UBUD",
        title: "Start inland",
        description:
          "Begin around Ubud and use the first few days to experience Bali's temples, rice terraces, food and surrounding countryside.",
        details: [
          "Rice terraces",
          "Temples",
          "Local food",
          "Wellness / spa",
        ],
      },
      {
        day: "DAYS 4–6",
        location: "ULUWATU",
        title: "Move south for the coast",
        description:
          "Shift to southern Bali rather than repeatedly travelling back and forth from Ubud.",
        details: [
          "Clifftop beaches",
          "Surf",
          "Uluwatu Temple",
          "Sunset",
        ],
      },
      {
        day: "DAYS 7–9",
        location: "NUSA PENIDA",
        title: "The dramatic island stop",
        description:
          "Take the boat across for a few days of viewpoints, beaches and turquoise water.",
        details: [
          "Kelingking viewpoint",
          "Coastal scenery",
          "Snorkelling",
          "Island exploration",
        ],
      },
      {
        day: "DAYS 10–12",
        location: "GILI ISLANDS",
        title: "Slow down",
        description:
          "Finish the island-hopping section with a slower few days around the Gilis.",
        details: [
          "Snorkelling",
          "Cycling",
          "Sunsets",
          "Beach time",
        ],
      },
      {
        day: "DAYS 13–15",
        location: "LOMBOK",
        title: "Go beyond Bali",
        description:
          "For longer trips, continue to Lombok for a less developed and more adventurous final section.",
        details: [
          "Surf",
          "Beaches",
          "Waterfalls",
          "Local villages",
        ],
      },
    ],
    included: [
      {
        title: "Bali area guide",
        description:
          "Understand the differences between Ubud, Uluwatu and the major southern bases before booking accommodation.",
      },
      {
        title: "Island comparison",
        description:
          "Compare Nusa Penida, the Gilis and Lombok based on what you actually want from the trip.",
      },
      {
        title: "Island-hopping logic",
        description:
          "Build a route that minimises unnecessary transfers and keeps the trip moving in one direction.",
      },
      {
        title: "Transfer planning",
        description:
          "Understand where boats and overland transfers fit into your route.",
      },
      {
        title: "Surf & beaches",
        description:
          "Choose locations based on whether you're looking for surfing, swimming, nightlife or simply somewhere beautiful.",
      },
      {
        title: "Where to stay",
        description:
          "Pick areas based on atmosphere and access rather than relying solely on hotel ratings.",
      },
      {
        title: "Budget planning",
        description:
          "Build your spending plan around accommodation, island transfers, food and activities.",
      },
      {
        title: "Route templates",
        description:
          "Start from practical 10-day, two-week and longer-trip structures rather than a blank page.",
      },
    ],
    faqs: [
      {
        question: "Do I need to visit Nusa Penida?",
        answer:
          "No. It's one of the decisions the guide helps you make based on your priorities, available time and tolerance for moving between islands.",
      },
      {
        question: "Is this just a Bali guide?",
        answer:
          "No. Bali is the starting point, but the guide focuses on how to combine Bali with Nusa Penida, the Gilis and Lombok.",
      },
      {
        question: "Can OUTBOUND plan the whole trip for me?",
        answer:
          "Yes. The £39.99 Personalised Trip takes your exact dates, budget, interests and travel style and turns them into a specific route and day-by-day plan.",
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

  const guide = guides[country.toLowerCase()];

  if (!guide) {
    return (
      <main className="min-h-screen bg-[#f5f3ee] text-black">
        <SiteHeader />

        <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 md:px-10">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">
            Guide not found
          </p>

          <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            WE DON'T HAVE
            <span className="block text-black/25">
              THAT GUIDE YET.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/55">
            Explore our available guides and find your next
            destination.
          </p>

          <Link
            href="/guides"
            className="mt-8 inline-flex w-fit rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-black/75"
          >
            Explore guides →
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">
      <SiteHeader />

      {/* HERO */}

      <section className="relative flex min-h-[82vh] items-end overflow-hidden bg-black text-white">
        <img
          src={guide.image}
          alt={guide.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
            {guide.eyebrow}
          </p>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.86] tracking-[-0.06em] md:text-[100px]">
            {guide.name.toUpperCase()}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl">
            {guide.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {guide.idealFor.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-black/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.08em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SALES INTRO */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_400px]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              WHY THIS GUIDE EXISTS
            </p>

            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              YOU DON'T NEED
              <span className="block text-black/25">
                MORE INFORMATION.
              </span>
              YOU NEED A PLAN.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/55 md:text-xl">
              There is no shortage of travel advice online. The problem
              is that most of it answers one question at a time.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/55 md:text-xl">
              OUTBOUND is designed around the decisions that actually
              matter: where to go, how long to stay, what order to do
              it in, how to get between places and what is worth your
              limited time.
            </p>
          </div>

          <div className="h-fit rounded-3xl bg-black p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              DIGITAL GUIDE
            </p>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-6xl font-black tracking-[-0.06em]">
                {guide.price}
              </span>

              <span className="pb-2 text-sm text-white/40">
                one-off
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55">
              A practical destination guide built to help you make
              better decisions before you book your trip.
            </p>

            <button
              onClick={() =>
                alert("Stripe checkout will be connected later.")
              }
              className="mt-8 w-full rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/80"
            >
              Get the {guide.name} guide →
            </button>

            <p className="mt-4 text-center text-xs text-white/30">
              Secure checkout via Stripe.
            </p>
          </div>
        </div>
      </section>

      {/* PLANNING PROBLEMS */}

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/35">
                THE PROBLEM
              </p>

              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
                STOP
                <span className="block text-white/25">
                  RESEARCHING.
                </span>
              </h2>

              <p className="mt-8 max-w-md leading-relaxed text-white/50">
                If you've opened 20 tabs trying to work out where to
                stay, which islands to visit and how to get between
                them, this is for you.
              </p>
            </div>

            <div className="space-y-3">
              {guide.planningProblems.map((problem, index) => (
                <div
                  key={problem}
                  className="flex gap-5 rounded-2xl bg-white/10 p-5 md:p-6"
                >
                  <span className="shrink-0 text-sm font-black text-white/30">
                    0{index + 1}
                  </span>

                  <p className="font-bold text-white/80">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
          THE ROUTE
        </p>

        <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
          SEE HOW THE
          <span className="block text-black/25">
            PIECES FIT TOGETHER.
          </span>
        </h2>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guide.route.map((place, index) => (
            <div
              key={place}
              className="rounded-3xl bg-white p-7 md:p-8"
            >
              <p className="text-xs font-black text-black/25">
                0{index + 1}
              </p>

              <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                {place}
              </h3>

              {index < guide.route.length - 1 && (
                <p className="mt-5 text-sm font-bold text-black/30">
                  ↓ NEXT STOP
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATION BREAKDOWN */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
            DESTINATION BREAKDOWN
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
            KNOW WHAT
            <span className="block text-black/25">
              EACH STOP IS FOR.
            </span>
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {guide.highlights.map((place, index) => (
              <div
                key={place.title}
                className="rounded-3xl bg-[#f5f3ee] p-7 md:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <p className="text-xs font-black text-black/25">
                    0{index + 1}
                  </p>

                  <span className="text-xl">↗</span>
                </div>

                <h3 className="mt-8 text-3xl font-black tracking-[-0.04em]">
                  {place.title}
                </h3>

                <p className="mt-4 leading-relaxed text-black/55">
                  {place.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE ITINERARY */}

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/35">
            SAMPLE ROUTE
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
            A BETTER IDEA OF
            <span className="block text-white/25">
              WHAT'S INSIDE.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
            Here's the level of thinking the guide is built around.
            The full guide goes deeper into the decisions behind each
            stop, route and recommendation.
          </p>

          <div className="mt-14 space-y-4">
            {guide.itinerary.map((item) => (
              <div
                key={`${item.day}-${item.location}`}
                className="rounded-3xl bg-white/10 p-7 md:p-9"
              >
                <div className="grid gap-8 md:grid-cols-[150px_1fr]">
                  <div>
                    <p className="text-xs font-black tracking-[0.15em] text-white/30">
                      {item.day}
                    </p>

                    <p className="mt-3 text-xs font-bold text-white/45">
                      {item.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black tracking-[-0.03em] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-3xl leading-relaxed text-white/55">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/55"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
              WHAT YOU GET
            </p>

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              THE DETAILS
              <span className="block text-black/25">
                BEHIND THE TRIP.
              </span>
            </h2>
          </div>

          <div className="grid gap-3">
            {guide.included.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl bg-white p-6 md:p-7"
              >
                <span className="pt-1 text-sm font-black text-black/25">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
            WHO IT'S FOR
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
            IF THIS SOUNDS
            <span className="block text-black/25">
              LIKE YOUR TRIP.
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {guide.idealFor.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#f5f3ee] px-6 py-4 text-sm font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-black/40">
          BEFORE YOU BUY
        </p>

        <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
          GOOD QUESTIONS.
        </h2>

        <div className="mt-12 space-y-3">
          {guide.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl bg-white p-7 md:p-8"
            >
              <h3 className="text-xl font-black">
                {faq.question}
              </h3>

              <p className="mt-4 max-w-3xl leading-relaxed text-black/50">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDE CTA */}

      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/35">
            {guide.name.toUpperCase()} · {guide.price}
          </p>

          <h2 className="text-6xl font-black leading-[0.84] tracking-[-0.06em] md:text-8xl">
            PLAN THE
            <span className="block text-white/25">
              TRIP PROPERLY.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
            Stop collecting travel recommendations and start turning
            them into a route that actually works.
          </p>

          <button
            onClick={() =>
              alert("Stripe checkout will be connected later.")
            }
            className="mt-10 rounded-full bg-white px-9 py-5 text-sm font-bold text-black transition hover:bg-white/80"
          >
            Get the {guide.name} guide for {guide.price} →
          </button>

          <p className="mt-5 text-xs text-white/25">
            Digital guide · One-off purchase · Secure checkout
          </p>
        </div>
      </section>

      {/* PERSONALISATION UPSELL */}

      <section className="bg-[#f5f3ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="rounded-[2rem] bg-white p-8 md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_350px] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                  WANT US TO DO IT FOR YOU?
                </p>

                <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-6xl">
                  YOUR DATES.
                  <span className="block text-black/25">
                    YOUR BUDGET.
                  </span>
                  YOUR TRIP.
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/55">
                  If you don't want to turn the guide into a planning
                  project of your own, give us the details and we'll
                  build the itinerary for you.
                </p>
              </div>

              <div className="rounded-3xl bg-black p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  OUTBOUND PERSONALISED TRIP
                </p>

                <p className="mt-4 text-5xl font-black tracking-[-0.05em]">
                  £39.99
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  A personalised route, day-by-day itinerary,
                  accommodation recommendations, transport,
                  activities, restaurants, costs and more.
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

      {/* FOOTER */}

      <footer className="border-t border-black/10 bg-[#f5f3ee]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.08em]"
          >
            OUTBOUND.
          </Link>

          <div className="flex flex-wrap gap-6 text-sm font-semibold text-black/50">
            <Link
              href="/destinations"
              className="hover:text-black"
            >
              Destinations
            </Link>

            <Link
              href="/guides"
              className="hover:text-black"
            >
              Guides
            </Link>

            <Link
              href="/build-my-trip"
              className="hover:text-black"
            >
              Build My Trip
            </Link>

            <Link
              href="/bespoke"
              className="hover:text-black"
            >
              Bespoke
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}