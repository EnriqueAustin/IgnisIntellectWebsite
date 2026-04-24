"use client";

import { useState } from "react";

export default function ContactCTA() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/4ebee7d620a84e1c58de4ee43fa95702", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Lead from Home Page: ${formData.name}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                console.error("Form submission failed");
                alert("Something went wrong with the submission. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-primary z-0" />
            <div className="absolute right-0 top-0 w-1/3 h-full orange-gradient opacity-10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - CTA Content */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                            Ready to Ignite Your Project?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Let&apos;s discuss how our AI and web solutions can take your business to the next level. Book a free consultation today.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 text-slate-300">
                                <span className="material-symbols-outlined text-accent-orange">mail</span>
                                <a href="mailto:ignisintellect@gmail.com" className="hover:text-accent-orange transition-colors">
                                    ignisintellect@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <span className="material-symbols-outlined text-accent-orange">location_on</span>
                                V&amp;A Waterfront, Cape Town, South Africa
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-background-dark p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 mb-2">Name</label>
                                    <input
                                        className="w-full bg-primary/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-orange transition-colors"
                                        placeholder="John Doe"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-400 mb-2">Email</label>
                                    <input
                                        className="w-full bg-primary/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-orange transition-colors"
                                        placeholder="john@company.com"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-2">Message (Optional)</label>
                                <textarea
                                    className="w-full bg-primary/30 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-orange transition-colors"
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                className="w-full orange-gradient text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
