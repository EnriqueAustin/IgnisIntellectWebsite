import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import siteData from "@/data/site.json";

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
    "AI agency South Africa",
    "custom web applications",
    "AI automation",
    "chatbots",
    "Cape Town web design",
    "AI solutions",
    "digital agency",
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.site_metadata.title,
    description: siteData.site_metadata.description,
    creator: "@itstonyaustin",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        inter.variable,
        poppins.variable,
        "min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300"
      )}>
        {children}
      </body>
    </html>
  );
}
