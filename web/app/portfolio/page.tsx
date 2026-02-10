import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="flex-grow flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 animate-pulse text-primary">
                    <Briefcase size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Portfolio Coming Soon</h1>
                <p className="text-xl text-gray-600 max-w-lg mb-8">
                    We are curating a selection of our finest work. Check back soon to see what we've built.
                </p>
                <Link href="/contact" className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                    Start Your Project
                </Link>
            </section>

            <Footer />
        </main>
    );
}
