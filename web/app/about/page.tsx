import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/site.json";
import { Users, Target, Zap, Shield, Rocket } from "lucide-react";

export default function About() {
    const { about } = siteData.pages;

    // Icon mapping for values (simple rotation or random assignment for now, or just use Target for all if lazy, but let's try to be varied)
    const icons = [Rocket, Target, Shield, Zap];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">About Ignis Intellect</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
                    Forging the future with code and cognition.
                </p>
            </section>

            {/* Story */}
            <section className="py-20 px-6 container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">Our Story</h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="leading-relaxed">
                            {about.story}
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-secondary px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {about.values.map((value, idx) => {
                            const Icon = icons[idx % icons.length];
                            return (
                                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">{value}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 px-6 container mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">Meet the Team</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {about.team.map((member, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center w-full max-w-xs hover:shadow-xl transition-shadow">
                            <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center border-4 border-white shadow-sm">
                                <Users size={48} className="text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                            <p className="text-accent font-medium mb-4">{member.role}</p>
                            <div className="flex justify-center gap-3">
                                {/* Social placeholders */}
                                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
