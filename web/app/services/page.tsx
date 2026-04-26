import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export const metadata: Metadata = {
    title: "Services — Web Development & AI Automation",
    description:
        "Custom web development, AI automation, design, audits, and consulting from Ignis Intellect — a Cape Town & West Coast agency building high-performance digital products that scale.",
    alternates: { canonical: "https://ignisintellect.com/services" },
    openGraph: {
        title: "Services — Ignis Intellect",
        description:
            "Web development, AI automation, design & creative, consulting, audits, and ongoing support — tailored to your business.",
        url: "https://ignisintellect.com/services",
        type: "website",
    },
};

function ServiceImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="rounded-xl overflow-hidden shadow-2xl bg-primary border border-white/5 relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                alt={alt}
                src={src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        </div>
    );
}

export default function Services() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
                    <BackgroundVideo
                        src="/videos/background-videos/Mesh.mp4"
                        poster="/videos/posters/Mesh.jpg"
                        autoPlay
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-primary/75 z-[1]" />
                    <div className="relative z-10 max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
                            </span>
                            What We Do
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                            Our Services –{" "}
                            <span className="text-accent-orange text-glow">
                                Tailored Web &amp; AI Solutions
                            </span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Cape Town based agency delivering high-performance digital products & AI solutions
                            that scale globally.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 orange-gradient text-white font-bold rounded-lg transition-all hover:scale-105 glow-orange text-center"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                href="/portfolio"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Detailed Services Breakdown */}
                <section className="py-24 px-6 md:px-10">
                    <div className="max-w-7xl mx-auto space-y-32">
                        {servicesData.map((service, index) => {
                            const isEven = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 gap-16 items-center"
                                >
                                    {/* Text Content */}
                                    <div
                                        className={
                                            isEven ? "order-2 md:order-2" : "order-2 md:order-1"
                                        }
                                    >
                                        <div className="flex items-center gap-3 text-accent-orange mb-4">
                                            <span className="material-symbols-outlined text-4xl">
                                                {service.icon}
                                            </span>
                                            <h3 className="text-sm font-bold tracking-[0.2em] uppercase">
                                                {service.label}
                                            </h3>
                                        </div>
                                        <h2 className="text-white text-4xl font-extrabold mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-white/70 text-lg mb-8 leading-relaxed">
                                            {service.shortDescription}
                                        </p>

                                        {/* Feature list */}
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feat, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2 text-white/90 font-medium"
                                                >
                                                    <span className="material-symbols-outlined text-accent-orange">
                                                        check_circle
                                                    </span>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Learn More Link */}
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 px-6 py-3 orange-gradient text-white font-bold rounded-lg transition-all hover:scale-105 glow-orange"
                                        >
                                            Learn More & Pricing
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </Link>
                                    </div>

                                    {/* Image */}
                                    <div
                                        className={
                                            isEven ? "order-1 md:order-1" : "order-1 md:order-2"
                                        }
                                    >
                                        <ServiceImage
                                            src={service.image}
                                            alt={service.imageAlt}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Pricing Teaser */}
                <section className="py-12 px-6 md:px-10 bg-primary/40 border-y border-white/5">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-accent-orange text-lg font-bold">
                                Transparent Pricing
                            </p>
                            <h3 className="text-white text-2xl font-bold">
                                Packages from R1,499. Custom quotes tailored to your project.
                            </h3>
                        </div>
                        <Link
                            href="/contact"
                            className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-lg font-bold transition-all border border-white/20 whitespace-nowrap"
                        >
                            Request Rate Card
                        </Link>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 md:px-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-orange/20 z-0" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
                            Ready to innovate? Let&apos;s build something extraordinary
                            together.
                        </h2>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                            Join dozens of forward-thinking businesses leveraging Ignis
                            Intellect&apos;s technical excellence to dominate their market.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-5 orange-gradient text-white font-black text-xl rounded-xl transition-all hover:scale-105 glow-orange shadow-2xl"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
