import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio — Web & AI Projects, Cape Town & West Coast",
    description:
        "Explore Ignis Intellect's portfolio of AI-powered web applications, e-commerce platforms, and custom software built for businesses across Cape Town, the West Coast, and South Africa.",
    openGraph: {
        title: "Portfolio — Ignis Intellect",
        description:
            "See our proven results: AI-driven analytics dashboards, e-commerce platforms, security systems, and mobile apps for Cape Town & West Coast clients.",
        url: "https://ignisintellect.com/portfolio",
        type: "website",
    },
    alternates: {
        canonical: "https://ignisintellect.com/portfolio",
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
