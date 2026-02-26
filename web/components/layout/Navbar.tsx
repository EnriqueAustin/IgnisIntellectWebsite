"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import siteData from "@/data/site.json";
import { servicesData } from "@/data/servicesData";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServicesOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 navy-glass border-b border-primary/20 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-xl">
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
                        {siteData.navigation.filter(item => item.label !== "Contact").map((item) => {
                            if (item.label === "Services") {
                                return (
                                    <div
                                        key={item.path}
                                        className="relative"
                                        ref={dropdownRef}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item.path}
                                            className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-accent-orange transition-colors"
                                        >
                                            {item.label}
                                            <span className={cn(
                                                "material-symbols-outlined text-base transition-transform duration-200",
                                                servicesOpen && "rotate-180"
                                            )}>
                                                expand_more
                                            </span>
                                        </Link>

                                        {/* Desktop Dropdown */}
                                        <div
                                            className={cn(
                                                "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                                                servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                                            )}
                                        >
                                            <div className="w-[420px] p-4 rounded-2xl bg-[rgba(10,18,28,0.97)] border border-white/10 shadow-2xl" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                                                <div className="grid grid-cols-1 gap-1">
                                                    {servicesData.map((service) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/services/${service.slug}`}
                                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                            onClick={() => setServicesOpen(false)}
                                                        >
                                                            <div className="w-10 h-10 rounded-lg orange-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                                <span className="material-symbols-outlined text-white text-lg">
                                                                    {service.icon}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className="text-white text-sm font-semibold group-hover:text-accent-orange transition-colors">
                                                                    {service.title}
                                                                </p>
                                                                <p className="text-white/40 text-xs leading-snug mt-0.5">
                                                                    {service.features.slice(0, 3).join(" · ")}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="border-t border-white/5 mt-3 pt-3">
                                                    <Link
                                                        href="/services"
                                                        className="flex items-center justify-center gap-2 text-accent-orange text-sm font-semibold hover:underline"
                                                        onClick={() => setServicesOpen(false)}
                                                    >
                                                        View All Services
                                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="text-sm font-medium text-slate-300 hover:text-accent-orange transition-colors"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
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
                    "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="bg-[rgba(10,18,28,0.97)] border-b border-white/10 shadow-2xl flex flex-col p-6 gap-4" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                    {siteData.navigation.map((item) => {
                        if (item.label === "Services") {
                            return (
                                <div key={item.path}>
                                    <button
                                        className="flex items-center justify-between w-full text-lg font-medium text-slate-200 hover:text-accent-orange transition-colors"
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    >
                                        {item.label}
                                        <span className={cn(
                                            "material-symbols-outlined text-xl transition-transform duration-200",
                                            mobileServicesOpen && "rotate-180"
                                        )}>
                                            expand_more
                                        </span>
                                    </button>
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        mobileServicesOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                                    )}>
                                        <div className="pl-4 flex flex-col gap-3 border-l-2 border-accent-orange/30">
                                            {servicesData.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/services/${service.slug}`}
                                                    className="flex items-center gap-3 text-slate-300 hover:text-accent-orange transition-colors"
                                                    onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                                >
                                                    <span className="material-symbols-outlined text-accent-orange text-lg">
                                                        {service.icon}
                                                    </span>
                                                    <span className="text-base">{service.title}</span>
                                                </Link>
                                            ))}
                                            <Link
                                                href="/services"
                                                className="text-accent-orange text-sm font-semibold mt-1"
                                                onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                            >
                                                View All Services →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="text-lg font-medium text-slate-200 hover:text-accent-orange transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
