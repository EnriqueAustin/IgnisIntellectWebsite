"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Flame } from "lucide-react";
import siteData from "@/data/site.json";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Flame className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-bold font-heading tracking-wide">
                        Ignis<span className="text-accent">Intellect</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {siteData.navigation.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="text-sm font-medium hover:text-accent transition-colors duration-200 uppercase tracking-wider"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-accent transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-primary border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col p-6 gap-4">
                    {siteData.navigation.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="text-lg font-medium hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
