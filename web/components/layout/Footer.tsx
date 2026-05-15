"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [honeypot, setHoneypot] = useState("");

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        if (honeypot) return; // bot trap
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/4ebee7d620a84e1c58de4ee43fa95702", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    _subject: `New Newsletter Subscriber: ${email}`,
                    _template: "table",
                    _captcha: "false",
                    _honey: ""
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setEmail("");
                setTimeout(() => setSubmitted(false), 3000);
            } else {
                console.error("Newsletter submission failed");
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting newsletter:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                            Leading the charge in AI-driven digital transformation from Vredenburg on the West Coast and Paarl in the Cape Winelands.
                        </p>
                        <address className="not-italic text-slate-400 text-sm leading-relaxed space-y-1">
                            <div className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-accent-orange text-base mt-0.5">location_on</span>
                                <span>Vredenburg, West Coast<br />Paarl, Cape Winelands</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-orange text-base">call</span>
                                <a href="tel:+27738595637" className="hover:text-accent-orange transition-colors">+27 73 859 5637</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-orange text-base">mail</span>
                                <a href="mailto:ignisintellect@gmail.com" className="hover:text-accent-orange transition-colors">ignisintellect@gmail.com</a>
                            </div>
                        </address>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/ignisintellect/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Ignis Intellect on Instagram"
                                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-slate-400 hover:text-accent-orange transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.155 0-3.508.012-4.747.068-.957.044-1.504.207-1.857.344-.466.181-.8.398-1.15.748-.35.35-.567.683-.748 1.15-.137.353-.3.9-.344 1.857C3.012 8.492 3 8.845 3 12s.012 3.508.068 4.747c.044.957.207 1.504.344 1.857.181.466.398.8.748 1.15.35.35.683.567 1.15.748.353.137.9.3 1.857.344 1.239.056 1.592.068 4.747.068s3.508-.012 4.747-.068c.957-.044 1.504-.207 1.857-.344.466-.181.8-.398 1.15-.748.35-.35.567-.683.748-1.15.137-.353.3-.9.344-1.857.056-1.239.068-1.592.068-4.747s-.012-3.508-.068-4.747c-.044-.957-.207-1.504-.344-1.857a3.097 3.097 0 0 0-.748-1.15 3.097 3.097 0 0 0-1.15-.748c-.353-.137-.9-.3-1.857-.344C15.508 4.012 15.155 4 12 4zm0 3.838a4.162 4.162 0 1 1 0 8.324 4.162 4.162 0 0 1 0-8.324zm0 6.862a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm5.292-7.038a.972.972 0 1 1-1.944 0 .972.972 0 0 1 1.944 0z" />
                                </svg>
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
                            <li><Link href="/contact" className="hover:text-accent-orange transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Stay updated with the latest in AI tech.</p>
                        <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                            {/* Honeypot — must stay empty */}
                            <input
                                type="text"
                                name="_honey"
                                tabIndex={-1}
                                autoComplete="off"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
                                aria-hidden="true"
                            />
                            <input
                                className="flex-1 bg-primary/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-orange"
                                placeholder="Email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                aria-label="Subscribe to newsletter"
                                className="bg-accent-orange text-white p-2 rounded-lg hover:bg-accent-fire transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[40px]"
                            >
                                {isSubmitting ? (
                                    <span className="material-symbols-outlined animate-spin" aria-hidden="true">refresh</span>
                                ) : submitted ? (
                                    <span className="material-symbols-outlined" aria-hidden="true">check</span>
                                ) : (
                                    <span className="material-symbols-outlined" aria-hidden="true">send</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ignis Intellect. All rights reserved.</p>
                    <div className="flex gap-8 text-slate-500 text-sm">
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
