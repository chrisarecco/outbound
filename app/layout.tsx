import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://outbound.travel"),

  title: {
    default: "OUTBOUND — Travel Planning, Rethought",
    template: "%s — OUTBOUND",
  },

  description:
    "Personalised travel itineraries, destination guides and bespoke trip planning. Tell us where you want to go and we'll help turn it into a trip worth taking.",

  keywords: [
    "travel planning",
    "travel itineraries",
    "personalised travel itineraries",
    "travel guides",
    "trip planning",
    "bespoke travel planning",
    "holiday planning",
  ],

  authors: [{ name: "OUTBOUND" }],
  creator: "OUTBOUND",
  publisher: "OUTBOUND",

  openGraph: {
    title: "OUTBOUND — Travel Planning, Rethought",
    description:
      "Personalised travel itineraries, destination guides and bespoke trip planning.",
    siteName: "OUTBOUND",
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "OUTBOUND — Travel Planning, Rethought",
    description:
      "Personalised travel itineraries, destination guides and bespoke trip planning.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}