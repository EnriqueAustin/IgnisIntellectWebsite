"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import siteData from "@/data/site.json";

export default function Contact() {
    // We'll use local state for the form since we're not actually submitting to a backend yet
    // but we want the UI interactions to work
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-background-dark">
                    <div className="absolute inset-0 hero-glow"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                            Get in Touch – <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-400">
                                Let's Ignite Your Project.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Ready to transform your digital presence with AI-driven web solutions? Our team of experts is standing by in Cape Town to bring your vision to life.
                        </p>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-20 relative bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Column: Contact Details */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Connect With Us</h2>
                                <p className="text-slate-400 mb-8">
                                    Whether you have a specific project in mind or just want to explore the possibilities of AI integration, we're here to help.
                                </p>
                            </div>

                            <div className="grid gap-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-primary/40 flex items-center justify-center text-accent-orange flex-shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Our Location</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            V&A Waterfront, Pierhead District<br />
                                            Cape Town, 8001, South Africa
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-primary/40 flex items-center justify-center text-accent-orange flex-shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                                        <p className="text-slate-400">+27 21 000 0000</p>
                                        <p className="text-xs text-slate-500 mt-1">Mon-Fri: 9am - 6pm SAST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-primary/40 flex items-center justify-center text-accent-orange flex-shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                                        <p className="text-slate-400">hello@ignisintellect.com</p>
                                        <p className="text-slate-400">support@ignisintellect.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Follow Our Journey</h4>
                                <div className="flex gap-4">
                                    <a href={siteData.pages.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent-orange transition-all border border-white/5" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a href={siteData.pages.contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent-orange transition-all border border-white/5" aria-label="X (Twitter)">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-accent-orange/20 to-primary/20 rounded-2xl blur-lg opacity-50"></div>

                            <div className="relative bg-primary/20 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm form-glow transition-all">
                                {submitted ? (
                                    <div className="text-center py-20">
                                        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                                        <p className="text-slate-400 mb-8">We'll get back to you shortly.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-accent-orange font-bold hover:text-white transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-all placeholder:text-slate-600"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-all placeholder:text-slate-600"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-all placeholder:text-slate-600"
                                                    placeholder="+27 00 000 0000"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Service Interested</label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-all appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled>Select a Service</option>
                                                    <option value="ai-dev">AI Development</option>
                                                    <option value="web-dev">Web Development</option>
                                                    <option value="uiux">UI/UX Design</option>
                                                    <option value="consulting">Tech Consulting</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300">Your Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={4}
                                                className="w-full bg-background-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-all placeholder:text-slate-600"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-accent-orange/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Sending..." : "Ignite Conversation"}
                                        </button>

                                        <p className="text-xs text-center text-slate-500">
                                            By clicking submit, you agree to our Privacy Policy and terms of service.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative h-[450px] w-full bg-background-dark">
                    <div className="absolute inset-0 grayscale opacity-40 hover:opacity-70 transition-opacity">
                        {/* We use a simple image for the map background as per user design */}
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL5b4g6vpXr9s2Q-yTqrqjaeKlVpOcw-wcQ6qQKy2rw4Rr5-OYXtt7B2zMujyVvpIyDwtlMxtPVfiQ4XIvBVZb_qrTHuqvPTBxp7G1Ut183IAGma5bVHZlfOBzTjEXlipXk8YwZjpwwlYQ6NukwPZ_LjRj4RXPtIXP9MfuxH6paI871R3eRctXDU49dOf5Kq_JesH1lILtzeg_sdOA74af3E8A4qenl5noPZkPomq28UEGJmaskiUID35d3pqY93mSpVJc3LLTyIw7"
                            alt="Dark themed map of Cape Town showing V&A Waterfront"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
                        <div className="bg-primary/90 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl max-w-xs">
                            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-orange text-sm">rocket_launch</span>
                                Ignis HQ
                            </h5>
                            <p className="text-sm text-slate-300">Visit us at the heart of the Waterfront innovation hub.</p>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <a href="#" className="text-accent-orange text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                    Get Directions <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
