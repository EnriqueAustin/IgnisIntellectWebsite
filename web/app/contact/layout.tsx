import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Web & AI Agency in Cape Town & West Coast",
    description:
        "Get in touch with Ignis Intellect, serving Cape Town, Saldanha, Langebaan and the wider West Coast. Book a free consultation for web development or AI automation.",
    openGraph: {
        title: "Contact Ignis Intellect — Cape Town & West Coast",
        description:
            "Ready to ignite your digital future? Contact our Cape Town & West Coast team for web development, AI automation, and digital transformation.",
        url: "https://ignisintellect.com/contact",
        type: "website",
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
