import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Ignis Intellect",
    description:
        "Bridging the gap between imagination and technical execution with high-performance digital products that scale.",
};

const services = [
    {
        icon: "code",
        label: "Architecture",
        title: "Web Development",
        description:
            "Custom Web Applications, E-Commerce Platforms, and CMS Solutions (WordPress/Headless). We build responsive & SEO-friendly sites optimized for performance.",
        features: [
            "Custom Web Apps",
            "E-Commerce",
            "Headless CMS",
            "SEO-Friendly",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYAeh-6qNNBzrovpWVIf6bzgtCAwthcIZiGYaT9-a2ynwt7Nf__RFDsZq6Wi5S-jFZ90KnG3RDx5S6tjQx7OzVxaz3Ca5_psa6aO8l56Lv5NSwde7Tj5WMYv0kUdSi0tf87Ghkg13SPTIVO1788Hp3aE9hOwtu76JyJLhfc2PREDzJo6TNFEvIQe7fIbzvMMzdDceqF41NP-XWp2cxQRGfGtwzllE4quQ_HQCk0MUh5UehUQJo_TCr2dP9w7bq2Axx7b6vnbEiM9J",
        imageAlt: "Modern code editor and minimalist workspace",
        type: "features" as const,
    },
    {
        icon: "psychology",
        label: "Intelligence",
        title: "AI Automation & Solutions",
        description:
            "Intelligent Chatbots & AI Agents, Workflow Automation, and System Integrations (CRM, WhatsApp). Custom AI Setups like OpenClaw tailored to your needs.",
        features: [
            "Chatbots & Agents",
            "Workflow Automation",
            "CRM Integration",
            "OpenClaw Setup",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZym24CoFc3sXj2s3e9a8CMpE2KU27-XDd44dUn52MdsB3uATzlafk72q57SNDXyntPWbkLDhDxj1B4rB8PdS8Di3xkGe-fiiyeSbq0JEheYxRY5XpPHO8APBVN9vAJj_k_xxYjXPsjiakn7dfm9hF-dAy8OQ--CG094lerPQMSPKhDB22rruUhLibvomxiRE0U-54p8rAWO-ROTuedWloSaY0CbVmM6haxRPmL9Ztwfbvr5B_NTiXosHycu0P2eMpIR1qMnQ5_TsZ",
        imageAlt: "Abstract glowing blue and orange neural network",
        type: "features" as const,
    },
    {
        icon: "palette",
        label: "Aesthetics",
        title: "Design & Creative",
        description:
            "UI/UX Design and User-Centered Interfaces that captivate and convert. We focus on intuitive layouts and visual storytelling.",
        features: [
            "UI/UX Design",
            "User-Centered UI",
            "Brand Identity",
            "Prototyping",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr32QYAwBubuReorQIAliVL3TbZt1EmFI0XpNQeXdhdIE3rseT4aqwVUIOr3IIiOVYfcvsTAwdczjhmdC6aoKIntr4wAQIFHK_z7qBpGdU92Vvnq1ltFqPdcpv4Ls4TXqdq_tUwL1pNfpTVWMTNgSWkjLL_EvKWuuEtSRiNbGdcsiFpGn_HulJYUNubHW8IDNLNuLnwJz5ENUlOIJy7GixNra-tFpsNj0JHLrzRD7291_-slBsIuOLI-0xLA0u_OdxhQ3CMnWsXLNf",
        imageAlt: "Digital design workspace",
        type: "features" as const,
    },
    {
        icon: "school",
        label: "Guidance",
        title: "Consulting & Education",
        description:
            "AI Strategy & Roadmapping, Adoption Consulting, and Education. We provide training workshops to upskill your team in modern AI tools.",
        features: [
            "AI Strategy",
            "Adoption Consulting",
            "Workshops",
            "Roadmapping",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsGFdrKbZA4eqfpF1kjMwLXlSyL5Mj8XbAX5_xj2MFN_nZ-5OlTEQmHvRpZX06JgxwcNdFrtRQFycEMAY5ANHTZLP3aFr7GLmP3nuJLK3gF4p3WimyUsBcaebb4VK7uGj_DrsX5hyqqPTW8C7SuQa9Psknm22-_cwqhs8bTwmZ11JeQkOda3cUGA50Pw6Q6BvNun4pr3fDuKtQ3kLDjPw-LKbWt8SVCb0SCWCHdC7pUu3WdCusYC-0em9jUCeIeYEC73CfFv2v0TTE",
        imageAlt: "Team collaboration and strategy session",
        type: "features" as const,
    },
    {
        icon: "fact_check",
        label: "Validation",
        title: "Audits & Assessments",
        description:
            "AI Readiness Audits (evaluating business processes & maturity) and SEO/Digital Performance Audits to identify opportunities for growth.",
        features: [
            "AI Readiness",
            "Process Evaluation",
            "SEO Audits",
            "Performance Check",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsGFdrKbZA4eqfpF1kjMwLXlSyL5Mj8XbAX5_xj2MFN_nZ-5OlTEQmHvRpZX06JgxwcNdFrtRQFycEMAY5ANHTZLP3aFr7GLmP3nuJLK3gF4p3WimyUsBcaebb4VK7uGj_DrsX5hyqqPTW8C7SuQa9Psknm22-_cwqhs8bTwmZ11JeQkOda3cUGA50Pw6Q6BvNun4pr3fDuKtQ3kLDjPw-LKbWt8SVCb0SCWCHdC7pUu3WdCusYC-0em9jUCeIeYEC73CfFv2v0TTE",
        imageAlt: "Data analysis and audit charts",
        type: "features" as const,
    },
    {
        icon: "build",
        label: "Reliability",
        title: "Support & Maintenance",
        description:
            "Website maintenance, updates, ongoing AI monitoring, and performance optimization to ensure your digital assets remain secure and efficient.",
        features: [
            "Maintenance",
            "Updates",
            "AI Monitoring",
            "Optimization",
        ],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYAeh-6qNNBzrovpWVIf6bzgtCAwthcIZiGYaT9-a2ynwt7Nf__RFDsZq6Wi5S-jFZ90KnG3RDx5S6tjQx7OzVxaz3Ca5_psa6aO8l56Lv5NSwde7Tj5WMYv0kUdSi0tf87Ghkg13SPTIVO1788Hp3aE9hOwtu76JyJLhfc2PREDzJo6TNFEvIQe7fIbzvMMzdDceqF41NP-XWp2cxQRGfGtwzllE4quQ_HQCk0MUh5UehUQJo_TCr2dP9w7bq2Axx7b6vnbEiM9J",
        imageAlt: "Server monitoring and maintenance dashboard",
        type: "features" as const,
    },
];

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
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary px-4 pt-20">
                    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                        <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-accent-orange/20 rounded-full blur-[120px]" />
                        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]" />
                    </div>
                    <div className="relative z-10 max-w-4xl text-center">
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
                        {services.map((service, index) => {
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
                                            {service.description}
                                        </p>

                                        {/* Feature list */}
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                Packages from R10,000. Custom quotes tailored to your project.
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
            {/* Footer */}
            <Footer />
        </div>
    );
}
