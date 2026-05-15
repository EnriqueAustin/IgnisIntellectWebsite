import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Web & AI Agency in Cape Town & West Coast",
    description:
        "Get in touch with Ignis Intellect, serving Cape Town, Saldanha, Langebaan and the wider West Coast. Book a free consultation for web development or AI automation.",
    keywords: [
        "contact Ignis Intellect",
        "web developer contact Cape Town",
        "AI agency West Coast contact",
        "free consultation web development",
    ],
    openGraph: {
        title: "Contact Ignis Intellect — Cape Town & West Coast",
        description:
            "Ready to ignite your digital future? Contact our Cape Town & West Coast team for web development, AI automation, and digital transformation.",
        url: "https://ignisintellect.com/contact",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Ignis Intellect" }],
    },
    alternates: {
        canonical: "https://ignisintellect.com/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
