import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import siteData from "@/data/site.json";
import ClickSound from "@/components/ui/ClickSound";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ignisintellect.com"),
  title: {
    default: siteData.site_metadata.title,
    template: "%s | Ignis Intellect",
  },
  description: siteData.site_metadata.description,
  keywords: [
    "web development Cape Town",
    "AI automation South Africa",
    "AI agency Cape Town",
    "web developer West Coast",
    "Ignis Intellect",
  ],
  authors: [{ name: "Ignis Intellect", url: "https://ignisintellect.com" }],
  creator: "Ignis Intellect",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://ignisintellect.com",
    siteName: "Ignis Intellect",
    title: siteData.site_metadata.title,
    description: siteData.site_metadata.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ignis Intellect — Web Development & AI Agency, Cape Town & West Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.site_metadata.title,
    description: siteData.site_metadata.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ignisintellect.com",
  },
};

const SITE_URL = "https://ignisintellect.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ignis Intellect",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: [
        "https://www.instagram.com/ignisintellect/",
      ],
      email: "ignisintellect@gmail.com",
      telephone: "+27 73 859 5637",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ignis Intellect",
      description: siteData.site_metadata.description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-ZA",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Ignis Intellect",
      image: `${SITE_URL}/og-image.jpg`,
      url: SITE_URL,
      email: "ignisintellect@gmail.com",
      telephone: "+27 73 859 5637",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vredenburg",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
      location: [
        {
          "@type": "Place",
          name: "Ignis Intellect — West Coast",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vredenburg",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
        },
        {
          "@type": "Place",
          name: "Ignis Intellect — Paarl",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Paarl",
            addressLocality: "Paarl",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
        },
      ],
      areaServed: [
        { "@type": "City", name: "Cape Town" },
        { "@type": "City", name: "Saldanha" },
        { "@type": "City", name: "Langebaan" },
        { "@type": "City", name: "Vredenburg" },
        { "@type": "AdministrativeArea", name: "West Coast" },
        { "@type": "AdministrativeArea", name: "Western Cape" },
        { "@type": "Country", name: "South Africa" },
      ],
      serviceType: [
        "Web Development",
        "AI Automation",
        "AI Consulting",
        "Web Design",
        "E-Commerce Development",
        "Chatbot Development",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(
        inter.variable,
        poppins.variable,
        "min-h-screen bg-background-dark font-display text-slate-100 antialiased"
      )}>
        <ClickSound />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
