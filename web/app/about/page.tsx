import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Ignis Intellect",
    description: "Founded in Cape Town, we blend fiery innovation with intellectual AI expertise to build transformative digital solutions.",
};

export default function About() {
    const values = [
        {
            icon: "lightbulb",
            title: "Innovation",
            description: "Pushing the boundaries of what is possible with AI to keep you ahead of the curve.",
        },
        {
            icon: "person_pin_circle",
            title: "Client-Focus",
            description: "Your goals are the heart of our technical strategy, ensuring bespoke outcome-driven results.",
        },
        {
            icon: "trending_up",
            title: "Scalability",
            description: "Architecture designed to grow seamlessly with your enterprise from local to global.",
        },
        {
            icon: "verified_user",
            title: "Ethical AI",
            description: "Transparent, responsible, and secure AI implementation that respects user data.",
        },
    ];

    /* --- Team data hidden for now (placeholder) ---
    const team = [
        {
            name: "Enrique Austin",
            role: "Founder & AI Lead",
            badge: "Founder",
            image: "/enriqueaustin.jpeg",
            alt: "Professional portrait of Enrique Austin, Founder and AI Lead at Ignis Intellect",
            linkedin: "https://www.linkedin.com/in/enrique-austin-953a71156/",
        },
        {
            name: "James Laubscher",
            role: "Co-Founder & Strategy Lead",
            badge: "Co-Founder",
            image: "/noImage.jpg",
            alt: "James Laubscher, Co-Founder and Strategy Lead at Ignis Intellect",
            linkedin: "#",
        },
    ];
    --- end hidden team data --- */

    const disciplines = [
        {
            number: "01",
            icon: "palette",
            title: "Branding & Identity Systems",
            description: "Craft a distinctive visual language and brand architecture that sets you apart in crowded markets.",
        },
        {
            number: "02",
            icon: "query_stats",
            title: "Digital Strategy & AI Alignment",
            description: "Define positioning, messaging, and intelligent automation that accelerate growth and engagement.",
        },
        {
            number: "03",
            icon: "code",
            title: "Website Design & Development",
            description: "Build performant, conversion-focused websites and web apps with modern frameworks and clean code.",
        },
        {
            number: "04",
            icon: "speed",
            title: "SEO Architecture & Performance",
            description: "Engineer visibility from the ground up with technical SEO, Core Web Vitals, and data-driven optimisation.",
        },
    ];

    const processSteps = [
        {
            icon: "search",
            title: "Brief & Discovery",
            description: "Clarify objectives, audience, constraints and success measures.",
        },
        {
            icon: "hub",
            title: "Strategy & Structure",
            description: "Define positioning, messaging and the system architecture.",
        },
        {
            icon: "draw",
            title: "Design",
            description: "Create a clear visual language and usable interface direction.",
        },
        {
            icon: "build",
            title: "Build & Integrate",
            description: "Develop the site or system with performance, SEO and reliability in mind.",
        },
        {
            icon: "rocket_launch",
            title: "Launch & Evolve",
            description: "Test, deploy and iterate as the brand and market shift.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden fiery-gradient">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-l from-accent-orange to-transparent" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-bold uppercase tracking-widest">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
                                    </span>
                                    Cape Town&apos;s AI Innovators
                                </div>

                                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                                    About <span className="text-accent-orange">Ignis</span> Intellect
                                </h1>

                                <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                                    Founded in Cape Town, we blend fiery innovation with intellectual AI expertise to build transformative digital solutions. We turn complex data into human experiences.
                                </p>

                                <div className="flex gap-4">
                                    <Link
                                        href="/portfolio"
                                        className="orange-gradient text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 hover:shadow-[0_0_30px_-5px_#ff6b00]"
                                    >
                                        View Our Work
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-1 w-full max-w-md">
                                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        alt="Modern tech office with clean lines and blue lighting"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCq68g90NuXr5HdpsqD_PFYzPPTKlpq0Yd32rqwPmaULU3mIEPJPJMZ4lLJVC9mmzpVEueGVvTtEC7ZDQjngisVfVVopMLEz_eWx5J3JXExc65XgtupAGIl5uhvEjV0salAclEvwfWRd9HNjR23NGxC7z6ehgzkqXK52vCdX3DtPlhOax8X0WmchXktYbgbSrSfE8AYV3-Dg0_lc_KprmsqLR3zqi7p206M8cjQ7bAaFFPze9OgqocMBisHPZkSZdxc92FaOvrthEM"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-accent-orange font-bold uppercase tracking-widest text-sm mb-4">Our Core Philosophy</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Values that drive our intellect</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl bg-primary/20 border border-white/5 orange-glow transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6 group-hover:bg-accent-orange group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">{value.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="py-24 bg-primary/10 relative overflow-hidden">
                    {/* Decorative background glow */}
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-accent-orange font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Four disciplines. <span className="text-accent-orange">One</span> commercial objective.
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                We work across the full digital lifecycle — from positioning and messaging through to design systems, development and optimisation. Each discipline supports sustainable market presence, stronger visibility, and a brand that performs consistently across every touchpoint.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {disciplines.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl bg-background-dark/80 border border-white/5 hover:border-accent-orange/30 transition-all duration-500 orange-glow"
                                >
                                    {/* Number watermark */}
                                    <span className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] group-hover:text-accent-orange/10 transition-colors duration-500 select-none pointer-events-none">
                                        {item.number}
                                    </span>

                                    <div className="flex items-start gap-5 relative z-10">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-orange/10 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-accent-orange font-mono text-sm font-bold opacity-60">{item.number}.</span>
                                                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-24 bg-background-dark relative overflow-hidden">
                    {/* Decorative top line */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-accent-orange font-bold uppercase tracking-widest text-sm mb-4">Our Process</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Structured thinking.
                            </h3>
                            <p className="text-3xl md:text-4xl font-bold text-slate-500">
                                Measurable outcomes.
                            </p>
                        </div>

                        {/* Process timeline */}
                        <div className="relative max-w-4xl mx-auto">
                            {/* Vertical connector line (desktop) */}
                            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-orange/40 via-accent-orange/20 to-transparent" />

                            <div className="space-y-8">
                                {processSteps.map((step, index) => (
                                    <div key={index} className="group relative flex items-start gap-8">
                                        {/* Step indicator */}
                                        <div className="relative flex-shrink-0 z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/60 border border-white/10 group-hover:border-accent-orange/40 flex items-center justify-center text-accent-orange group-hover:bg-accent-orange/10 transition-all duration-300">
                                                <span className="material-symbols-outlined text-[28px]">{step.icon}</span>
                                            </div>
                                        </div>

                                        {/* Step content */}
                                        <div className="flex-1 pb-2 pt-2">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-accent-orange/40 font-mono text-xs font-bold tracking-widest">
                                                    STEP {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">
                                                {step.title}
                                            </h4>
                                            <p className="text-slate-400 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="py-24 bg-background-dark border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <h2 className="text-accent-orange font-bold uppercase tracking-widest text-sm mb-4">Our Roots</h2>
                                    <h3 className="text-4xl font-bold text-white mb-6">From Cape Town to the World</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">
                                        Strategically positioned in the tech corridor between Cape Town and the Saldanha Bay industrial zone, we draw inspiration from the vibrant Western Cape tech ecosystem.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-accent-orange mt-1">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold">Innovation Hub</h5>
                                            <p className="text-slate-400 text-sm">V&amp;A Waterfront &amp; Saldanha District, South Africa</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-accent-orange mt-1">
                                            <span className="material-symbols-outlined">schedule</span>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold">Working Hours</h5>
                                            <p className="text-slate-400 text-sm">Mon - Fri: 08:30 - 17:30 (SAST)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-primary/10 border border-white/10 relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="w-full h-full object-cover opacity-60"
                                        alt="Stylized map showing Cape Town coastline"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvgoyP7BLk7yNgXMlvIIry7DN9oWj0ZvxDb4e7Na1Hm_8L7CtFwuxefwqT3M1SQztxV8sjmcMmBnM14sHSTCTGtSa9RG_hvzfHjNQYz3WI78hcmk_Urha1rzJIdF775hm9n89_fyis3__PIvYU68artwaeXeh-hfNzPCfOYdI0J1A-c6r0X2AZuHlIRRyvnclSnW8Fuu7swpffCWTRaYgBThoR8gn15zwwhf4q9qM7dVEN3f0hQBkVSzjPL5gEWyUZdcIYQDeZT8cR"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-accent-orange/20 backdrop-blur-sm p-4 rounded-full border border-accent-orange">
                                            <span className="material-symbols-outlined text-white text-4xl animate-bounce">location_on</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 fiery-gradient text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                            Ready to ignite your next project?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-primary hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>

            {/* Simplified Footer */}
            {/* Footer */}
            <Footer />
        </div>
    );
}
