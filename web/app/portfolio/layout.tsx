import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio - Ignis Intellect",
    description:
        "Explore Ignis Intellect's portfolio of AI-powered web applications, e-commerce platforms, and mobile solutions built for businesses in Cape Town and beyond.",
    openGraph: {
        title: "Portfolio - Ignis Intellect",
        description:
            "See our proven results: AI-driven analytics dashboards, e-commerce platforms, security systems, and mobile apps built with cutting-edge technology.",
        url: "https://ignisintellect.com/portfolio",
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
