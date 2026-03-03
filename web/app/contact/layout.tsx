import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Ignis Intellect",
    description:
        "Get in touch with Ignis Intellect, Cape Town's premier web development and AI agency. Book a free consultation for your next web or AI project.",
    openGraph: {
        title: "Contact Us - Ignis Intellect",
        description:
            "Ready to ignite your digital future? Contact our Cape Town team for web development, AI automation, and digital transformation solutions.",
        url: "https://ignisintellect.com/contact",
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
