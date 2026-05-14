import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import type { Metadata } from "next";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    const url = `https://ignisintellect.com/services/${service.slug}`;
    return {
        title: `${service.title} in Cape Town & West Coast`,
        description: service.heroDescription,
        alternates: { canonical: url },
        openGraph: {
            title: `${service.title} | Ignis Intellect`,
            description: service.heroDescription,
            url,
            type: "website",
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const SITE_URL = "https://ignisintellect.com";
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.heroDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
            { "@type": "City", name: "Cape Town" },
            { "@type": "AdministrativeArea", name: "West Coast" },
            { "@type": "AdministrativeArea", name: "Western Cape" },
            { "@type": "Country", name: "South Africa" },
        ],
        url: `${SITE_URL}/services/${service.slug}`,
        offers: service.pricing.map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            description: tier.description,
            price: tier.price.replace(/[^0-9.]/g, "") || undefined,
            priceCurrency: "ZAR",
        })),
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
            { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 pt-32">
                    <BackgroundVideo
                        src="/videos/background-videos/Mesh.mp4"
                        poster="/videos/posters/Mesh.jpg"
                        autoPlay
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-primary/75 z-[1]" />
                    <div className="relative z-10 max-w-4xl text-center py-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="material-symbols-outlined text-base">
                                {service.icon}
                            </span>
                            {service.label}
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                            {service.title}
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            {service.heroDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 orange-gradient text-white font-bold rounded-lg transition-all hover:scale-105 glow-orange text-center"
                            >
                                Get a Free Quote
                            </Link>
                            <Link
                                href="#pricing"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-24 px-6 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
                                What&apos;s Included
                            </h2>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                Everything you need to succeed — no hidden costs, no surprises.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.detailedFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-orange/30 transition-all duration-300 hover:bg-white/[0.06]"
                                >
                                    <div className="w-14 h-14 rounded-xl orange-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-white text-2xl">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-24 px-6 md:px-10 bg-primary/40 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
                                Transparent{" "}
                                <span className="text-accent-orange text-glow">Pricing</span>
                            </h2>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                                Competitive rates based on the Cape Town market. Choose the plan that
                                fits your needs — upgrade anytime.
                            </p>
                        </div>
                        {service.pricing.filter((t) => t.featured).map((tier, index) => (
                            <div
                                key={`featured-${index}`}
                                className="relative mb-12 rounded-2xl border border-accent-orange/40 bg-gradient-to-br from-accent-orange/10 via-transparent to-accent-orange/5 shadow-[0_0_60px_rgba(255,107,0,0.08)] overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 orange-gradient" />
                                <div className="absolute -top-0 right-6 px-4 py-1.5 orange-gradient rounded-b-lg text-white text-xs font-bold tracking-wider uppercase">
                                    Best Value
                                </div>
                                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <h3 className="text-white text-2xl md:text-3xl font-black mb-3">
                                            {tier.name}
                                        </h3>
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-white text-5xl md:text-6xl font-black">
                                                {tier.price}
                                            </span>
                                            {tier.period && (
                                                <span className="text-white/50 text-xl">{tier.period}</span>
                                            )}
                                        </div>
                                        {tier.setupFee && (
                                            <p className="text-accent-orange font-semibold text-sm mb-4">
                                                + {tier.setupFee}
                                            </p>
                                        )}
                                        <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
                                            {tier.description}
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-block px-8 py-4 orange-gradient text-white font-bold rounded-xl transition-all hover:scale-105 glow-orange"
                                        >
                                            {tier.cta}
                                        </Link>
                                    </div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {tier.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-white/80 text-sm"
                                            >
                                                <span className="material-symbols-outlined text-accent-orange text-lg mt-0.5 shrink-0">
                                                    check_circle
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {service.pricing.filter((t) => !t.featured).length > 0 && (
                            <>
                                <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-8">
                                    Or choose a one-time build
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {service.pricing.filter((t) => !t.featured).map((tier, index) => (
                                        <div
                                            key={index}
                                            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${tier.highlighted
                                                    ? "bg-gradient-to-b from-accent-orange/10 to-transparent border-accent-orange/40 shadow-[0_0_40px_rgba(255,107,0,0.1)]"
                                                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                                                }`}
                                        >
                                            {tier.highlighted && (
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 orange-gradient rounded-full text-white text-xs font-bold tracking-wider uppercase">
                                                    Most Popular
                                                </div>
                                            )}
                                            <h3 className="text-white text-xl font-bold mb-2">
                                                {tier.name}
                                            </h3>
                                            <div className="mb-4">
                                                <span className="text-white text-5xl font-black">
                                                    {tier.price}
                                                </span>
                                                {tier.period && (
                                                    <span className="text-white/50 text-lg">{tier.period}</span>
                                                )}
                                            </div>
                                            <p className="text-white/50 text-sm mb-8 leading-relaxed">
                                                {tier.description}
                                            </p>
                                            <ul className="space-y-4 mb-10 flex-grow">
                                                {tier.features.map((feature, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-white/80 text-sm"
                                                    >
                                                        <span className="material-symbols-outlined text-accent-orange text-lg mt-0.5 shrink-0">
                                                            check_circle
                                                        </span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href="/contact"
                                                className={`block text-center py-4 rounded-xl font-bold transition-all hover:scale-105 ${tier.highlighted
                                                        ? "orange-gradient text-white glow-orange"
                                                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                                    }`}
                                            >
                                                {tier.cta}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <p className="text-center text-white/40 text-sm mt-10">
                            {/* All prices include VAT.*/}Custom packages available on request.{" "} 
                            <Link href="/contact" className="text-accent-orange hover:underline">
                                Contact us
                            </Link>{" "}
                            for a tailored quote.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 px-6 md:px-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
                                Why Choose Ignis Intellect
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {service.whyChooseUs.map((reason, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-5 p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-orange/20 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg orange-gradient flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-white text-xl">
                                            check
                                        </span>
                                    </div>
                                    <p className="text-white/90 text-lg font-medium">{reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 md:px-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-orange/20 z-0" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
                            Ready to get started with{" "}
                            <span className="text-accent-orange text-glow">
                                {service.title}
                            </span>
                            ?
                        </h2>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and find the perfect package for
                            your business.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-5 orange-gradient text-white font-black text-xl rounded-xl transition-all hover:scale-105 glow-orange shadow-2xl"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                href="/services"
                                className="inline-block px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
