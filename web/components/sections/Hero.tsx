"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroProps {
    tagline: string;
    subtext: string;
    ctaPrimary: { text: string; link: string };
    ctaSecondary: { text: string; link: string };
}

export default function Hero({ tagline, subtext, ctaPrimary, ctaSecondary }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Next-Gen AI & Web Solutions
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-6">
                        {tagline.split(" ").map((word, i) => (
                            <span key={i} className={word.includes("Ignite") || word.includes("Intelligent") ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={ctaPrimary.link}
                            className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 flex items-center gap-2 group"
                        >
                            {ctaPrimary.text}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>

                        <Link
                            href={ctaSecondary.link}
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 flex items-center gap-2"
                        >
                            {ctaSecondary.text}
                            <ChevronRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
