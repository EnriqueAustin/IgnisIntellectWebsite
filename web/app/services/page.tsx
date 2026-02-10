import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/site.json";
import { Code, Cpu, Smartphone, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const { services } = siteData.pages;

    const getIcon = (title: string) => {
        if (title.includes("Web")) return Code;
        if (title.includes("AI")) return Cpu;
        if (title.includes("Mobile")) return Smartphone;
        return TrendingUp;
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Our Services</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
                    Comprehensive digital solutions tailored to your unique needs.
                </p>
            </section>

            {/* Services List */}
            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.list.map((service, idx) => {
                        const Icon = getIcon(service.title);
                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Icon size={32} />
                                    </div>
                                    <span className="text-9xl font-bold text-gray-50 opacity-5 absolute top-4 right-4 -z-10 pointer-events-none select-none">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>

                                <ul className="space-y-3 mb-8">
                                    {service.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="flex items-center gap-3 text-gray-600">
                                            <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
                                    Get Started <ArrowRight size={18} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Process/CTA placeholder */}
            <section className="py-20 bg-secondary text-center px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-6">Not sure exactly what you need?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        We specialize in custom solutions. Let's discuss your project and find the perfect path forward.
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg">
                        Schedule a Consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
