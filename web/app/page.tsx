import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import TrustedBy from "@/components/sections/TrustedBy";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ignis Intellect — Web Development & AI Agency Cape Town & West Coast",
  description:
    "Cape Town & West Coast web development and AI automation agency. Offering custom websites, business workflow automation, AI search visibility audits, and intelligent web-to-AI solutions. Book a free consultation.",
  keywords: [
    "business workflow automation in cape town",
    "ai search visibility audit service cape town",
    "chatgpt visibility optimisation service in cape town",
    "web to AI transformation Cape Town",
    "web development agency Cape Town",
    "AI development services Cape Town",
    "digital transformation agency Cape Town",
    "custom AI chatbot development",
    "AI automation South Africa",
    "AI agency Cape Town",
    "custom web development Cape Town",
    "web developer West Coast",
    "web design Saldanha",
    "web development Langebaan",
    "web developer Vredenburg",
    "e-commerce development Cape Town",
    "digital agency Western Cape",
    "Ignis Intellect",
  ],
  openGraph: {
    title: "Ignis Intellect — Web Development & AI Agency Cape Town",
    description:
      "Cape Town & West Coast web development and AI automation agency. Offering custom websites, business workflow automation, AI search visibility audits, and intelligent web-to-AI solutions.",
    url: "https://ignisintellect.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ignis Intellect — Web Development & AI Agency, Cape Town & West Coast",
      },
    ],
  },
  alternates: {
    canonical: "https://ignisintellect.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <TrustedBy />
        <Locations />
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
