import Navbar from "@/components/layout/Navbar";
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

    const team = [
        {
            name: "Enrique Austin",
            role: "Founder & AI Lead",
            badge: "Founder",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVHqGxrcX1d2g5fXDx8sFnQBnRcglcZutZIwuCE4SJKW9UAhLKjJEyOTAGaXIm0JmbGKUA0UZPXQ3FIdHWZBvi8KGx2KTjAzmUSAuXx7JFEKSFfmwn3q2RmBQLlc2FxXOgv3Ej2PKX9T6zhWLw0FItgMNcF1sZLmeG_m_FruwQ75eC1NRqiqjll8_SZdlGc7KrnoWQg2CmPaNbF5IbDrZKvl2txl_D7pGA7MfjmM0ZL0Y2wBByHDCUnVV_U6ZT06l8Ta1uvI5olNEq",
            alt: "Professional portrait of Enrique Austin",
        },
        {
            name: "Sarah J.",
            role: "Senior Web Dev",
            badge: null,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDllklUdDB96bkEiab8s4A0nypMc7yJL_3JbXvPgBsUNz1RX6ImstndCbJzQpKaA2pHuFguVOo-YXKxzV6Xxz6NSxaGH73FUgPXkvtSF7iBsv7e1TAjrQy_qqxBznxKB1rCmWG674Dub5s5VTd06T5oS9Fth58NliG7l3f9N0paq83UKrPJOOtPFed86JXmaXC-lhmjbIZy7gikICaMY7YAXiFpbPnneJTWSKRV89z3Oisy4n6vGdQcMcgCB7ZsZRj1BSI7ZtlIXr81",
            alt: "Professional portrait of Sarah J.",
        },
        {
            name: "David K.",
            role: "UI/UX Designer",
            badge: null,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMpsIOeQjRAVIoTKpKfbF5Gm-vDswX-7Efc1zF0eBNfjJwtcbQOOBMGw2VkLMWrhCKH2QZXGlOJsZZENe9go4_MgqHXVJ9x32f9QkJhZf9xttujpQdTEwT053YtrWLtIDJqs-8fnjnvmvythRtxbLw3FJL-VrMXG_ZGhPNWa7Kn7meDStKuAgvRXl0yKHRKWWWALvM4fxU_bl9M8w0PqjUy458Bq_adPC3-nuHVOj8SfKEhu9qPQxE4CmlDmHAsy-YjyyqQniAyfDs",
            alt: "Professional portrait of David K.",
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

                {/* Team Section */}
                <section className="py-24 bg-primary/10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet the Minds</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                A diverse collective of engineers, designers, and AI researchers working from the heart of the Western Cape.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col bg-background-dark rounded-3xl overflow-hidden border border-white/5 shadow-xl group"
                                >
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            alt={member.alt}
                                            src={member.image}
                                        />
                                        {member.badge && (
                                            <div className="absolute bottom-4 left-4 flex gap-2">
                                                <span className="bg-accent-orange text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                                                    {member.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 text-center">
                                        <h5 className="text-xl font-bold text-white mb-1">{member.name}</h5>
                                        <p className="text-slate-400 text-sm mb-4">{member.role}</p>
                                        <div className="flex justify-center gap-4 text-slate-500">
                                            <a href="#" className="hover:text-accent-orange transition-colors">
                                                <span className="material-symbols-outlined">link</span>
                                            </a>
                                            <a href="#" className="hover:text-accent-orange transition-colors">
                                                <span className="material-symbols-outlined">mail</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
            <footer className="bg-[#050b12] border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="text-accent-orange">
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                        <h2 className="text-white text-lg font-bold">Ignis Intellect</h2>
                    </div>
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Ignis Intellect. Built with precision in South Africa.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
