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
      "A practical guide to Thailand's best routes, islands, cities and experiences — designed to help you build a trip that actually works.",
    idealFor: [
      "First-time Thailand trips",
      "Backpackers",
      "Beach + nightlife",
      "Couples",
      "2–3 week trips",
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
      "Choosing between Phuket, Krabi, Phi Phi, Koh Tao and Koh Samui",
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
          "Where to base yourself, what to prioritise and how to experience the city without wasting time travelling across it.",
      },
      {
        title: "Chiang Mai",
        description:
          "A practical northern stop for temples, food, markets, nature and day trips.",
      },
      {
        title: "Krabi",
        description:
          "Use Krabi as a base for Railay and the surrounding islands rather than trying to cram every beach into one day.",
      },
      {
        title: "Koh Phi Phi",
        description:
          "How to decide whether Phi Phi is worth including and how to fit it into a wider island route.",
      },
      {
        title: "Koh Tao",
        description:
          "The island to consider if diving, snorkelling and a social atmosphere are high on your list.",
      },
      {
        title: "Koh Samui",
        description:
          "When Samui makes more sense than the other Gulf islands and how it changes your route.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–2",
        location: "BANGKOK",
        title: "Start with the city",
        description:
          "Give Bangkok enough time to experience it properly before heading north.",
        details: [
          "Grand Palace",
          "Wat Pho",
          "Chinatown",
          "Rooftop evening",
        ],
      },
      {
        day: "DAYS 3–5",
        location: "CHIANG MAI",
        title: "Slow the pace down",
        description:
          "Head north for temples, food, markets and a completely different side of Thailand.",
        details: [
          "Old City",
          "Night markets",
          "Cooking class",
          "Mountain day",
        ],
      },
      {
        day: "DAYS 6–8",
        location: "KRABI",
        title: "Limestone cliffs & islands",
        description:
          "Use Krabi as your southern base and choose one excellent island experience.",
        details: [
          "Railay",
          "Ao Nang",
          "Boat day",
          "Sunset",
        ],
      },
      {
        day: "DAYS 9–10",
        location: "KOH PHI PHI",
        title: "The iconic island",
        description:
          "Spend a couple of nights on Phi Phi if its scenery and atmosphere fit your trip.",
        details: [
          "Viewpoint",
          "Longtail boat",
          "Snorkelling",
          "Beach time",
        ],
      },
      {
        day: "DAYS 11–14",
        location: "GULF ISLANDS",
        title: "Finish with island time",
        description:
          "Finish around Koh Tao, Koh Samui or another Gulf option depending on your priorities.",
        details: [
          "Diving",
          "Snorkelling",
          "Beach days",
          "Nightlife",
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
          "Work out where to spend 2 nights, 3 nights or longer.",
      },
      {
        title: "Island comparison",
        description:
          "Compare the major island options by atmosphere, activities, beaches and logistics.",
      },
      {
        title: "Getting around",
        description:
          "Know when flights, trains, buses and ferries make the most sense.",
      },
      {
        title: "Where to stay",
        description:
          "Choose the right area rather than simply choosing the highest-rated hotel.",
      },
      {
        title: "Food & experiences",
        description:
          "Know what deserves space in your itinerary when time is limited.",
      },
      {
        title: "Budget planning",
        description:
          "Structure your spending around accommodation, transport, food and experiences.",
      },
      {
        title: "Trip-building framework",
        description:
          "Turn recommendations into a realistic route rather than another saved folder.",
      },
    ],
    faqs: [
      {
        question: "Is this just a list of places?",
        answer:
          "No. The focus is on how destinations fit together, how long to spend in each and how to build a route around your priorities.",
      },
      {
        question: "Is it useful for a first trip?",
        answer:
          "Yes. It is designed to remove the uncertainty around choosing destinations and building a practical Thailand route.",
      },
      {
        question: "What if I want a completely personalised itinerary?",
        answer:
          "The £39.99 Personalised Trip is designed for that. Give us your dates, budget and priorities and we'll build the route around you.",
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
      "A practical guide to Vietnam's cities, mountains, bays, countryside and beaches — with route planning at the centre.",
    idealFor: [
      "First-time visitors",
      "Backpackers",
      "Food lovers",
      "Adventure trips",
      "2–3 week trips",
      "Southeast Asia travellers",
    ],
    route: [
      "Hanoi",
      "Ninh Binh",
      "Ha Long Bay",
      "Sapa",
      "Hoi An",
      "Ho Chi Minh City",
    ],
    planningProblems: [
      "Choosing north, central or south Vietnam",
      "Deciding whether Sapa is worth the detour",
      "Choosing between northern experiences",
      "Working out the best order for Hanoi, Ninh Binh and Hoi An",
      "Choosing between trains, sleeper buses and flights",
      "Fitting Vietnam into a wider Southeast Asia trip",
    ],
    highlights: [
      {
        title: "Hanoi",
        description:
          "Use Hanoi as the starting point for northern Vietnam, with food, the Old Quarter and nearby excursions.",
      },
      {
        title: "Ninh Binh",
        description:
          "Countryside, rivers and limestone scenery make this one of the easiest high-value additions to a northern route.",
      },
      {
        title: "Ha Long Bay",
        description:
          "Understand how to fit the bay into your route and what to consider when choosing your experience.",
      },
      {
        title: "Sapa",
        description:
          "A mountain detour for trekking and rice terraces — with advice on when the extra travel is worthwhile.",
      },
      {
        title: "Hoi An",
        description:
          "Slow the itinerary down with old-town streets, food, beaches and countryside.",
      },
      {
        title: "Ho Chi Minh City",
        description:
          "Finish in the south with food, nightlife and easy access to southern Vietnam.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–2",
        location: "HANOI",
        title: "Start with street food",
        description:
          "Give yourself time to settle into Vietnam's pace before moving on.",
        details: [
          "Old Quarter",
          "Street food",
          "Hoan Kiem",
          "Night markets",
        ],
      },
      {
        day: "DAYS 3–4",
        location: "NINH BINH",
        title: "Limestone landscapes",
        description:
          "Trade the city for rice fields, rivers and dramatic scenery.",
        details: [
          "Trang An",
          "Tam Coc",
          "Viewpoints",
          "Cycling",
        ],
      },
      {
        day: "DAYS 5–6",
        location: "HA LONG BAY",
        title: "Get onto the water",
        description:
          "Use a bay experience as a change of pace before continuing north or south.",
        details: [
          "Boat trip",
          "Kayaking",
          "Limestone islands",
          "Sunrise",
        ],
      },
      {
        day: "DAYS 7–9",
        location: "SAPA",
        title: "Vietnam's mountain side",
        description:
          "If landscapes and trekking are priorities, make the mountain detour worthwhile.",
        details: [
          "Rice terraces",
          "Trekking",
          "Villages",
          "Local food",
        ],
      },
      {
        day: "DAYS 10–13",
        location: "HOI AN",
        title: "Slow down",
        description:
          "Base yourself around Hoi An and let the itinerary breathe.",
        details: [
          "Old Town",
          "An Bang",
          "Countryside",
          "Food",
        ],
      },
      {
        day: "DAYS 14–15",
        location: "HO CHI MINH CITY",
        title: "Finish in the south",
        description:
          "End with food, nightlife and a taste of southern Vietnam.",
        details: [
          "District 1",
          "Street food",
          "Markets",
          "Mekong option",
        ],
      },
    ],
    included: [
      {
        title: "North-to-south routes",
        description:
          "Understand the logical ways to travel through Vietnam.",
      },
      {
        title: "Sapa decision",
        description:
          "Work out whether the mountain detour fits your trip.",
      },
      {
        title: "Transport",
        description:
          "Compare trains, sleeper buses and domestic flights.",
      },
      {
        title: "How many nights",
        description:
          "Avoid rushing destinations or spending too long somewhere that doesn't need it.",
      },
      {
        title: "Food planning",
        description:
          "Build food into the trip rather than treating it as an afterthought.",
      },
      {
        title: "Accommodation areas",
        description:
          "Choose useful bases in each destination.",
      },
      {
        title: "Budget framework",
        description:
          "Structure your Vietnam spending around the things that actually matter.",
      },
      {
        title: "Route examples",
        description:
          "Use practical route structures as the starting point for your own trip.",
      },
    ],
    faqs: [
      {
        question: "How many days is this designed for?",
        answer:
          "The examples focus particularly on trips of around two to three weeks, but the principles work for shorter and longer trips.",
      },
      {
        question: "Do I need to visit Sapa?",
        answer:
          "Not necessarily. It depends on what you want from the trip.",
      },
      {
        question: "Can OUTBOUND build my exact itinerary?",
        answer:
          "Yes. The £39.99 Personalised Trip takes your dates, budget and preferences and creates the route for you.",
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
      "A practical guide to Indonesia's islands, routes and experiences — designed to help you build a trip that actually works.",
    idealFor: [
      "First-time visitors",
      "Backpackers",
      "Beach trips",
      "Surf trips",
      "Couples",
      "2–4 week trips",
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
      "Choosing between Bali, the Gilis, Lombok and Nusa Penida",
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
          "Rice terraces, temples, food, wellness and a slower start to the trip.",
      },
      {
        title: "Uluwatu",
        description:
          "A strong base for beaches, cliffs, sunsets and surf.",
      },
      {
        title: "Nusa Penida",
        description:
          "Dramatic scenery and famous viewpoints, with logistics worth understanding before you commit.",
      },
      {
        title: "Gili Islands",
        description:
          "Compare the different island atmospheres and choose the one that matches your trip.",
      },
      {
        title: "Lombok",
        description:
          "A step away from the Bali circuit for beaches, surf and a quieter island experience.",
      },
      {
        title: "The Bali route",
        description:
          "Build a Bali itinerary that doesn't involve crossing the island every day.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–3",
        location: "UBUD",
        title: "Start inland",
        description:
          "Begin around Ubud and experience Bali's temples, rice terraces, food and countryside.",
        details: [
          "Rice terraces",
          "Temples",
          "Local food",
          "Wellness",
        ],
      },
      {
        day: "DAYS 4–6",
        location: "ULUWATU",
        title: "Move south for the coast",
        description:
          "Shift to southern Bali rather than repeatedly travelling back and forth.",
        details: [
          "Beaches",
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
          "Take the boat across for viewpoints, beaches and turquoise water.",
        details: [
          "Kelingking",
          "Coastal scenery",
          "Snorkelling",
          "Exploring",
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
          "For longer trips, continue to Lombok for a more adventurous final section.",
        details: [
          "Surf",
          "Beaches",
          "Waterfalls",
          "Villages",
        ],
      },
    ],
    included: [
      {
        title: "Bali area guide",
        description:
          "Understand the differences between Ubud, Uluwatu and the major southern bases.",
      },
      {
        title: "Island comparison",
        description:
          "Compare Nusa Penida, the Gilis and Lombok based on your priorities.",
      },
      {
        title: "Island-hopping logic",
        description:
          "Build a route that minimises unnecessary transfers.",
      },
      {
        title: "Transfer planning",
        description:
          "Understand where boats and overland transfers fit into your route.",
      },
      {
        title: "Surf & beaches",
        description:
          "Choose locations based on surfing, swimming, nightlife or scenery.",
      },
      {
        title: "Where to stay",
        description:
          "Pick areas based on atmosphere and access.",
      },
      {
        title: "Budget planning",
        description:
          "Build your spending plan around accommodation, transfers, food and activities.",
      },
      {
        title: "Route templates",
        description:
          "Start from practical trip structures rather than a blank page.",
      },
    ],
    faqs: [
      {
        question: "Do I need to visit Nusa Penida?",
        answer:
          "No. It's one of the decisions the guide helps you make based on your priorities and available time.",
      },
      {
        question: "Is this just a Bali guide?",
        answer:
          "No. Bali is the starting point, but the guide focuses on how to combine it with Nusa Penida, the Gilis and Lombok.",
      },
      {
        question: "Can OUTBOUND plan the whole trip?",
        answer:
          "Yes. The £39.99 Personalised Trip takes your exact dates, budget, interests and travel style and turns them into a specific plan.",
      },
    ],
  },

  japan: {
    name: "Japan",
    image: "/images/japan.png",
    price: "£9.99",
    eyebrow: "THE OUTBOUND JAPAN GUIDE",
    headline: "JAPAN REWARDS GOOD PLANNING.",
    description:
      "A practical guide to Japan's cities, culture, food and classic routes — without trying to cram the entire country into one trip.",
    idealFor: [
      "First-time Japan trips",
      "Food lovers",
      "Culture",
      "City breaks",
      "Couples",
      "2–3 week trips",
    ],
    route: [
      "Tokyo",
      "Hakone",
      "Kyoto",
      "Osaka",
      "Hiroshima",
      "Nara",
    ],
    planningProblems: [
      "Trying to fit too many cities into one trip",
      "Working out how long Tokyo actually needs",
      "Choosing between Kyoto, Osaka and Hiroshima",
      "Understanding when a day trip makes more sense",
      "Planning transport between cities",
      "Balancing cities with countryside and Mount Fuji",
    ],
    highlights: [
      {
        title: "Tokyo",
        description:
          "How to structure the city's huge variety without spending your trip travelling between neighbourhoods.",
      },
      {
        title: "Kyoto",
        description:
          "Build time around temples, traditional streets, food and nearby Nara.",
      },
      {
        title: "Osaka",
        description:
          "A food-focused city that works naturally with Kyoto and the wider Kansai region.",
      },
      {
        title: "Hiroshima",
        description:
          "When the journey west is worthwhile and how to fit Hiroshima into a wider route.",
      },
      {
        title: "Hakone",
        description:
          "A useful break between Tokyo and Kyoto when you want hot springs, scenery and Mount Fuji opportunities.",
      },
      {
        title: "Nara",
        description:
          "How to use Nara as a day trip rather than unnecessarily changing hotels.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–4",
        location: "TOKYO",
        title: "Start with the big city",
        description:
          "Give Tokyo enough time to experience several sides of the city without rushing.",
        details: [
          "Shibuya",
          "Asakusa",
          "Shinjuku",
          "Food",
        ],
      },
      {
        day: "DAYS 5–6",
        location: "HAKONE",
        title: "Slow the pace down",
        description:
          "Use Hakone as a countryside break before continuing west.",
        details: [
          "Onsen",
          "Mount Fuji",
          "Lake Ashi",
          "Ryokan",
        ],
      },
      {
        day: "DAYS 7–10",
        location: "KYOTO",
        title: "Japan's cultural core",
        description:
          "Spend several days around Kyoto rather than treating it as a rushed stop.",
        details: [
          "Fushimi Inari",
          "Gion",
          "Arashiyama",
          "Nara",
        ],
      },
      {
        day: "DAYS 11–13",
        location: "OSAKA",
        title: "Food, nightlife & Kansai",
        description:
          "Use Osaka as a base for food and the wider Kansai region.",
        details: [
          "Dotonbori",
          "Street food",
          "Markets",
          "Nightlife",
        ],
      },
      {
        day: "DAYS 14–15",
        location: "HIROSHIMA",
        title: "Finish further west",
        description:
          "Add Hiroshima if the history and wider western Japan experience justify the travel.",
        details: [
          "Peace Memorial",
          "Miyajima",
          "Local food",
          "Final night",
        ],
      },
    ],
    included: [
      {
        title: "Classic route",
        description:
          "Understand the natural order for Tokyo, Hakone, Kyoto and Osaka.",
      },
      {
        title: "City breakdown",
        description:
          "Know what each major city actually offers before deciding how long to stay.",
      },
      {
        title: "Day-trip logic",
        description:
          "Know when a day trip is better than another hotel change.",
      },
      {
        title: "Transport",
        description:
          "Understand how Japan's rail network fits into the route.",
      },
      {
        title: "Accommodation areas",
        description:
          "Choose useful bases rather than booking purely on hotel ratings.",
      },
      {
        title: "Food planning",
        description:
          "Build the trip around the food experiences worth prioritising.",
      },
      {
        title: "Budget framework",
        description:
          "Plan accommodation, transport, food and experience spending.",
      },
      {
        title: "Route templates",
        description:
          "Use practical 7-day, 14-day and longer-trip structures.",
      },
    ],
    faqs: [
      {
        question: "How long do I need for Japan?",
        answer:
          "Two weeks is a strong starting point for the classic route, but the guide explains how to adapt it around shorter or longer trips.",
      },
      {
        question: "Do I need the Japanese Alps?",
        answer:
          "Not necessarily. The guide focuses on building around your priorities rather than adding destinations simply because they're famous.",
      },
      {
        question: "Can OUTBOUND plan my exact Japan trip?",
        answer:
          "Yes. The £39.99 Personalised Trip is designed around your exact dates, budget and interests.",
      },
    ],
  },

  philippines: {
    name: "The Philippines",
    image: "/images/philippines.png",
    price: "£9.99",
    eyebrow: "THE OUTBOUND PHILIPPINES GUIDE",
    headline: "THERE ARE TOO MANY ISLANDS. THAT'S THE PROBLEM.",
    description:
      "A practical guide to the Philippines' best islands, diving, beaches and routes — helping you choose less and experience more.",
    idealFor: [
      "First-time visitors",
      "Backpackers",
      "Beach trips",
      "Diving",
      "Surfing",
      "2–4 week trips",
    ],
    route: [
      "Manila",
      "Palawan",
      "El Nido",
      "Cebu",
      "Bohol",
      "Siargao",
    ],
    planningProblems: [
      "Choosing between Palawan, Cebu, Bohol and Siargao",
      "Trying to visit too many islands",
      "Understanding ferry and flight connections",
      "Deciding between El Nido and Coron",
      "Planning around weather and travel time",
      "Avoiding an itinerary dominated by transfers",
    ],
    highlights: [
      {
        title: "Palawan",
        description:
          "The core island choice for dramatic scenery, beaches and island-hopping.",
      },
      {
        title: "El Nido",
        description:
          "A natural base for limestone islands, lagoons and boat trips.",
      },
      {
        title: "Coron",
        description:
          "A strong choice for diving, wrecks, lagoons and a more adventure-focused trip.",
      },
      {
        title: "Cebu",
        description:
          "Useful for combining marine experiences with a wider central Philippines route.",
      },
      {
        title: "Bohol",
        description:
          "An easy addition for beaches, countryside and a different pace.",
      },
      {
        title: "Siargao",
        description:
          "A strong final stop for surfing, island life and a slower atmosphere.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–2",
        location: "MANILA",
        title: "Arrive and reset",
        description:
          "Keep the first couple of days simple before heading into the islands.",
        details: [
          "Food",
          "Neighbourhoods",
          "Recovery",
          "Internal flight",
        ],
      },
      {
        day: "DAYS 3–7",
        location: "PALAWAN",
        title: "The headline island",
        description:
          "Give Palawan enough time to justify the journey.",
        details: [
          "El Nido",
          "Island-hopping",
          "Lagoons",
          "Beaches",
        ],
      },
      {
        day: "DAYS 8–10",
        location: "CEBU",
        title: "Marine experiences",
        description:
          "Use Cebu for diving, snorkelling or other central-island experiences.",
        details: [
          "Diving",
          "Snorkelling",
          "Waterfalls",
          "Coast",
        ],
      },
      {
        day: "DAYS 11–13",
        location: "BOHOL",
        title: "A change of pace",
        description:
          "Slow down with beaches, countryside and a more relaxed island base.",
        details: [
          "Panglao",
          "Beaches",
          "Countryside",
          "Food",
        ],
      },
      {
        day: "DAYS 14–17",
        location: "SIARGAO",
        title: "Finish slowly",
        description:
          "End the trip around surfing, island life and relaxed days.",
        details: [
          "Surfing",
          "Island trips",
          "Cafés",
          "Sunsets",
        ],
      },
    ],
    included: [
      {
        title: "Island comparison",
        description:
          "Work out which islands actually suit your trip.",
      },
      {
        title: "Palawan planning",
        description:
          "Understand how to approach El Nido and Coron.",
      },
      {
        title: "Island-hopping logic",
        description:
          "Build a route without turning the holiday into constant transfers.",
      },
      {
        title: "Flights & ferries",
        description:
          "Understand where internal flights and boats fit.",
      },
      {
        title: "Diving & beaches",
        description:
          "Choose islands around the experiences you actually want.",
      },
      {
        title: "Accommodation",
        description:
          "Know which areas make useful bases.",
      },
      {
        title: "Budget planning",
        description:
          "Structure spending around accommodation, transfers and experiences.",
      },
      {
        title: "Route templates",
        description:
          "Start from practical trip structures.",
      },
    ],
    faqs: [
      {
        question: "How many islands should I visit?",
        answer:
          "Usually fewer than you think. The guide is designed around giving major stops enough time to justify the travel.",
      },
      {
        question: "El Nido or Coron?",
        answer:
          "It depends on your priorities. The guide explains what each does best and how they change the wider route.",
      },
      {
        question: "Can OUTBOUND build my Philippines itinerary?",
        answer:
          "Yes. The £39.99 Personalised Trip turns your exact dates, budget and interests into a complete route.",
      },
    ],
  },

  australia: {
    name: "Australia's East Coast",
    image: "/images/australia.png",
    price: "£9.99",
    eyebrow: "THE OUTBOUND AUSTRALIA EAST COAST GUIDE",
    headline: "AUSTRALIA IS HUGE. YOUR TRIP DOESN'T HAVE TO BE CHAOTIC.",
    description:
      "A practical guide to Sydney, Byron Bay, the Gold Coast, Brisbane, the Whitsundays and Cairns — built around realistic East Coast travel.",
    idealFor: [
      "First-time visitors",
      "Working holidays",
      "Backpackers",
      "Road trips",
      "Beach + surf trips",
      "2–6 week trips",
    ],
    route: [
      "Sydney",
      "Byron Bay",
      "Gold Coast",
      "Brisbane",
      "Whitsundays",
      "Cairns",
    ],
    planningProblems: [
      "Trying to cover too much of the East Coast",
      "Choosing where a road trip is actually worthwhile",
      "Understanding when flying saves valuable time",
      "Choosing between Byron Bay and the Gold Coast",
      "Working out how long Cairns deserves",
      "Building a route that doesn't spend half the trip in transit",
    ],
    highlights: [
      {
        title: "Sydney",
        description:
          "Structure your first few days around the harbour, beaches, food and neighbourhoods.",
      },
      {
        title: "Byron Bay",
        description:
          "A slower coastal stop that works particularly well when you want some breathing room.",
      },
      {
        title: "Gold Coast",
        description:
          "Choose it for beaches, surf, nightlife or theme parks depending on your trip.",
      },
      {
        title: "Brisbane",
        description:
          "A useful base for exploring South East Queensland and breaking up the journey north.",
      },
      {
        title: "Whitsundays",
        description:
          "A major tropical highlight that deserves enough time rather than being squeezed into a transfer day.",
      },
      {
        title: "Cairns",
        description:
          "The gateway to the Great Barrier Reef and tropical north.",
      },
    ],
    itinerary: [
      {
        day: "DAYS 1–3",
        location: "SYDNEY",
        title: "Start with the harbour",
        description:
          "Give yourself enough time to adjust and experience Sydney properly.",
        details: [
          "Harbour",
          "Bondi",
          "Manly",
          "Food",
        ],
      },
      {
        day: "DAYS 4–7",
        location: "BYRON BAY",
        title: "Slow down on the coast",
        description:
          "Move north and let the itinerary become more relaxed.",
        details: [
          "Surf",
          "Cape Byron",
          "Beach",
          "Food",
        ],
      },
      {
        day: "DAYS 8–10",
        location: "GOLD COAST",
        title: "Beach, surf or nightlife",
        description:
          "Use the Gold Coast around the parts of the trip you actually care about.",
        details: [
          "Surfers Paradise",
          "Surf",
          "Beaches",
          "Nightlife",
        ],
      },
      {
        day: "DAYS 11–13",
        location: "BRISBANE",
        title: "Break up the journey",
        description:
          "Use Brisbane as a practical base before continuing north.",
        details: [
          "South Bank",
          "Food",
          "Day trips",
          "City",
        ],
      },
      {
        day: "DAYS 14–16",
        location: "WHITSUNDAYS",
        title: "Go tropical",
        description:
          "Give the Whitsundays enough time to experience them rather than rushing through.",
        details: [
          "Whitehaven",
          "Boat trip",
          "Snorkelling",
          "Islands",
        ],
      },
      {
        day: "DAYS 17–20",
        location: "CAIRNS",
        title: "Finish in the tropics",
        description:
          "Use Cairns for the reef and tropical north, keeping departure day flexible.",
        details: [
          "Great Barrier Reef",
          "Daintree",
          "Rainforest",
          "Tropical north",
        ],
      },
    ],
    included: [
      {
        title: "East Coast route",
        description:
          "Understand the natural flow from Sydney to tropical Queensland.",
      },
      {
        title: "Road trip planning",
        description:
          "Know which sections are worth driving and where flying saves time.",
      },
      {
        title: "City-by-city planning",
        description:
          "Understand what each major stop actually offers.",
      },
      {
        title: "Coastal stops",
        description:
          "Choose between Byron Bay, Gold Coast and other coastal destinations.",
      },
      {
        title: "Tropical north",
        description:
          "Plan Cairns, the reef and the Daintree without cramming everything together.",
      },
      {
        title: "Accommodation areas",
        description:
          "Choose useful bases depending on your priorities.",
      },
      {
        title: "Budget planning",
        description:
          "Build a realistic Australian travel budget.",
      },
      {
        title: "Time optimisation",
        description:
          "The biggest mistake is trying to see everything. The guide helps you decide what not to do.",
      },
    ],
    faqs: [
      {
        question: "How long do I need for the East Coast?",
        answer:
          "There isn't one answer. The guide helps you build around the time you actually have.",
      },
      {
        question: "Is this mainly for backpackers?",
        answer:
          "No. The route-planning principles work for backpackers, working holiday travellers, couples and conventional holidays.",
      },
      {
        question: "Can OUTBOUND build my exact route?",
        answer:
          "Yes. The £39.99 Personalised Trip takes your dates, budget, interests and travel style and creates the itinerary for you.",
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

  const buyGuide = async () => {
    try {
      const response = await fetch("/api/create-guide-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: slug,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(
          data.error || "Unable to start checkout."
        );
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Guide checkout error:", error);

      alert(
        "We couldn't start checkout. Please try again."
      );
    }
  };

  if (!guide) {
    return (
      <main className="min-h-screen bg-[#f5f3ee] text-black">

        <div className="relative h-[82px] shrink-0 sm:h-[92px]">
          <SiteHeader />
        </div>

        <section className="mx-auto flex min-h-[75vh] max-w-5xl flex-col justify-center px-6 py-24 md:px-10">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
            OUTBOUND TRAVEL GUIDE
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-8xl">
            WE DON'T HAVE
            <span className="block text-black/20">
              THAT GUIDE YET.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/55">
            Explore our available guides and find your next destination.
          </p>

          <Link
            href="/guides"
            className="mt-8 inline-flex w-fit rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
          >
            Explore guides →
          </Link>

        </section>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-black">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="relative z-50 h-[82px] shrink-0 bg-[#f5f3ee] sm:h-[92px]">
        <SiteHeader />
      </div>


      {/* =========================================================
          PAID GUIDE — FIRST
      ========================================================= */}

      <section className="border-b border-black/10 bg-[#f5f3ee] px-6 py-16 md:px-10 md:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-end">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                {guide.eyebrow}
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


            <div className="rounded-[2rem] bg-black p-7 text-white sm:p-9">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                DIGITAL TRAVEL GUIDE
              </p>

              <div className="mt-5 flex items-end justify-between gap-5">

                <span className="text-6xl font-black tracking-[-0.06em]">
                  {guide.price}
                </span>

                <span className="pb-2 text-xs text-white/35">
                  ONE-OFF
                </span>

              </div>

              <p className="mt-6 text-sm leading-relaxed text-white/55">
                Route planning, destination breakdowns, transport advice,
                practical recommendations and realistic itinerary examples.
              </p>

              <button
                type="button"
                onClick={buyGuide}
                className="mt-8 w-full rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/80"
              >
                Get the {guide.name} guide →
              </button>

              <p className="mt-4 text-center text-[11px] text-white/25">
                Secure checkout · Instant digital delivery
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          IMAGE — BELOW HEADER & SALES OFFER
      ========================================================= */}

      <section className="px-6 py-8 md:px-10 md:py-12">

        <div className="mx-auto max-w-7xl">

          <div className="relative h-[42vh] min-h-[320px] overflow-hidden rounded-[2rem] bg-black sm:h-[50vh] md:h-[62vh]">

            <img
              src={guide.image}
              alt={guide.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
                OUTBOUND
              </p>

              <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                {guide.name}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                WHY THIS GUIDE EXISTS
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                YOU DON'T NEED
                <span className="block text-black/20">
                  MORE INFORMATION.
                </span>
                YOU NEED A PLAN.
              </h2>

            </div>

            <div className="max-w-2xl lg:pt-8">

              <p className="text-lg leading-[1.7] text-black/60 sm:text-xl">
                There is no shortage of travel advice online. The problem
                is turning thousands of recommendations into one route that
                actually works.
              </p>

              <p className="mt-6 text-base leading-[1.7] text-black/45">
                OUTBOUND is built around the decisions that matter:
                where to go, how long to stay, what order to do it in,
                how to get between places and what is actually worth your
                limited time.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PLANNING PROBLEMS
      ========================================================= */}

      <section className="bg-[#111] text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
                THE PROBLEM
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
                STOP
                <span className="block text-white/20">
                  RESEARCHING.
                </span>
              </h2>

              <p className="mt-7 max-w-md leading-relaxed text-white/50">
                If you've opened 20 tabs trying to work out where to stay,
                what to see and how to get between places, this is for you.
              </p>

            </div>


            <div className="space-y-3">

              {guide.planningProblems.map((problem, index) => (

                <div
                  key={problem}
                  className="flex gap-5 rounded-2xl bg-white/10 p-5 sm:p-6"
                >

                  <span className="shrink-0 text-sm font-black text-white/25">
                    0{index + 1}
                  </span>

                  <p className="font-bold leading-relaxed text-white/80">
                    {problem}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          THE ROUTE
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
            THE ROUTE
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            SEE HOW THE
            <span className="block text-black/20">
              PIECES FIT TOGETHER.
            </span>
          </h2>


          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {guide.route.map((place, index) => (

              <div
                key={place}
                className="rounded-3xl bg-white p-7 sm:p-8"
              >

                <p className="text-xs font-black text-black/20">
                  0{index + 1}
                </p>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                  {place}
                </h3>

                {index < guide.route.length - 1 && (

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-black/25">
                    Next stop ↓
                  </p>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          DESTINATION BREAKDOWN
      ========================================================= */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
            DESTINATION BREAKDOWN
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            KNOW WHAT
            <span className="block text-black/20">
              EACH STOP IS FOR.
            </span>
          </h2>


          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {guide.highlights.map((place, index) => (

              <div
                key={place.title}
                className="rounded-3xl bg-[#f5f3ee] p-7 sm:p-9"
              >

                <p className="text-xs font-black text-black/20">
                  0{index + 1}
                </p>

                <h3 className="mt-7 text-3xl font-black tracking-[-0.04em]">
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


      {/* =========================================================
          SAMPLE ITINERARY
      ========================================================= */}

      <section className="bg-[#111] text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
            SAMPLE ROUTE
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            A BETTER IDEA OF
            <span className="block text-white/20">
              WHAT'S INSIDE.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/50">
            This gives you a feel for the level of thinking behind the
            guide. The full guide goes deeper into the decisions behind
            each stop, route and recommendation.
          </p>


          <div className="mt-12 space-y-4">

            {guide.itinerary.map((item) => (

              <div
                key={`${item.day}-${item.location}`}
                className="rounded-3xl bg-white/10 p-7 sm:p-9"
              >

                <div className="grid gap-7 md:grid-cols-[150px_1fr]">

                  <div>

                    <p className="text-xs font-black tracking-[0.15em] text-white/30">
                      {item.day}
                    </p>

                    <p className="mt-3 text-xs font-bold text-white/45">
                      {item.location}
                    </p>

                  </div>


                  <div>

                    <h3 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-3xl leading-relaxed text-white/55">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {item.details.map((detail) => (

                        <span
                          key={detail}
                          className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/50"
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


      {/* =========================================================
          WHAT YOU GET
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
                WHAT YOU GET
              </p>

              <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                THE DETAILS
                <span className="block text-black/20">
                  BEHIND THE TRIP.
                </span>
              </h2>

            </div>


            <div className="grid gap-3">

              {guide.included.map((item, index) => (

                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl bg-white p-6 sm:p-7"
                >

                  <span className="pt-1 text-xs font-black text-black/20">
                    0{index + 1}
                  </span>

                  <div>

                    <h3 className="font-black">
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

        </div>

      </section>


      {/* =========================================================
          WHO IT'S FOR
      ========================================================= */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
            WHO IT'S FOR
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            IF THIS SOUNDS
            <span className="block text-black/20">
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


      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-5xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 sm:text-xs">
            BEFORE YOU BUY
          </p>

          <h2 className="mt-5 text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            GOOD QUESTIONS.
          </h2>


          <div className="mt-12 space-y-3">

            {guide.faqs.map((faq) => (

              <div
                key={faq.question}
                className="rounded-3xl bg-white p-7 sm:p-8"
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

        </div>

      </section>


      {/* =========================================================
          PAID GUIDE — LAST
      ========================================================= */}

      <section className="bg-black text-white">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:text-xs">
            THE {guide.name.toUpperCase()} GUIDE · {guide.price}
          </p>

          <h2 className="mt-6 text-5xl font-black leading-[0.86] tracking-[-0.06em] sm:text-6xl md:text-8xl">
            PLAN THE
            <span className="block text-white/20">
              TRIP PROPERLY.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
            Stop collecting travel recommendations and start turning them
            into a route that actually works.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-7">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              DIGITAL GUIDE
            </p>

            <p className="mt-3 text-5xl font-black tracking-[-0.05em]">
              {guide.price}
            </p>

            <button
              type="button"
              onClick={buyGuide}
              className="mt-7 w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-white/80"
            >
              Get the {guide.name} guide →
            </button>

            <p className="mt-4 text-[11px] text-white/25">
              One-off purchase · Secure checkout · Digital delivery
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          PERSONALIZED TRIP
      ========================================================= */}

      <section className="bg-[#f5f3ee] px-6 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] bg-white p-8 sm:p-10 md:p-14">

            <div className="grid gap-10 lg:grid-cols-[1fr_350px] lg:items-center">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  WANT US TO DO IT FOR YOU?
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                  YOUR DATES.
                  <span className="block text-black/20">
                    YOUR BUDGET.
                  </span>
                  YOUR TRIP.
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/55">
                  If you don't want to turn the guide into a planning
                  project of your own, give us the details and we'll build
                  the itinerary for you.
                </p>

              </div>


              <div className="rounded-3xl bg-black p-8 text-white">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  OUTBOUND PERSONALISED TRIP
                </p>

                <p className="mt-4 text-5xl font-black tracking-[-0.05em]">
                  £39.99
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  A personalised route, day-by-day itinerary,
                  accommodation recommendations, transport, activities,
                  restaurants, costs and more.
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


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-black/10 bg-[#f5f3ee]">

        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">

          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.08em]"
          >
            OUTBOUND.
          </Link>

          <div className="flex flex-wrap gap-6 text-sm font-semibold text-black/45">

            <Link
              href="/destinations"
              className="transition hover:text-black"
            >
              Destinations
            </Link>

            <Link
              href="/guides"
              className="transition hover:text-black"
            >
              Travel Guides
            </Link>

            <Link
              href="/build-my-trip"
              className="transition hover:text-black"
            >
              Build My Trip
            </Link>

            <Link
              href="/bespoke"
              className="transition hover:text-black"
            >
              Bespoke
            </Link>

            <Link
              href="/about"
              className="transition hover:text-black"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-black"
            >
              Contact
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}