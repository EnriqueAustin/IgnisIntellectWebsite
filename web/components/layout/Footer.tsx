"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer className="bg-background-dark pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="orange-gradient p-1 rounded-md">
                                <span className="material-symbols-outlined text-white text-sm">local_fire_department</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight">
                                <span className="text-accent-orange">Ignis</span>
                                <span className="text-white">Intellect</span>
                            </h2>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Leading the charge in AI-driven digital transformation from the heart of Cape Town.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-slate-400 hover:text-accent-orange transition-colors">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-slate-400 hover:text-accent-orange transition-colors">
                                <span className="material-symbols-outlined text-xl">group</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-slate-400 hover:text-accent-orange transition-colors">
                                <span className="material-symbols-outlined text-xl">public</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/services/web-development" className="hover:text-accent-orange transition-colors">Web Development</Link></li>
                            <li><Link href="/services/ai-automation" className="hover:text-accent-orange transition-colors">AI Automation</Link></li>
                            <li><Link href="/services/design-creative" className="hover:text-accent-orange transition-colors">Design & Creative</Link></li>
                            <li><Link href="/services/consulting-education" className="hover:text-accent-orange transition-colors">Consulting & Education</Link></li>
                            <li><Link href="/services/audits-assessments" className="hover:text-accent-orange transition-colors">Audits & Assessments</Link></li>
                            <li><Link href="/services/support-maintenance" className="hover:text-accent-orange transition-colors">Support & Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/about" className="hover:text-accent-orange transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-accent-orange transition-colors">Our Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-accent-orange transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-accent-orange transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Stay updated with the latest in AI tech.</p>
                        <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                            <input
                                className="flex-1 bg-primary/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-orange"
                                placeholder="Email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-accent-orange text-white p-2 rounded-lg hover:bg-accent-fire transition-colors"
                            >
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ignis Intellect. All rights reserved.</p>
                    <div className="flex gap-8 text-slate-500 text-sm">
                        <a href="/contact" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/contact" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
