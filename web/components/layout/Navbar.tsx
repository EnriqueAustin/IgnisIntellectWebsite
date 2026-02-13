"use client";

import { useState } from "react";
import Link from "next/link";
import siteData from "@/data/site.json";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 navy-glass border-b border-primary/20 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="orange-gradient p-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-white">local_fire_department</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">
                            <span className="text-accent-orange">Ignis</span>
                            <span className="text-white">Intellect</span>
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {siteData.navigation.filter(item => item.label !== "Contact").map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="text-sm font-medium text-slate-300 hover:text-accent-orange transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden lg:flex px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-bold border border-primary/50 hover:bg-primary/80 transition-all"
                        >
                            Contact
                        </Link>
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {isOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 navy-glass backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col p-6 gap-4">
                    {siteData.navigation.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="text-lg font-medium text-slate-200 hover:text-accent-orange transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
