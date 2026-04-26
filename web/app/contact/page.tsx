"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import siteData from "@/data/site.json";
import { servicesData } from "@/data/servicesData";
import LocationMapWrapper from "@/components/ui/LocationMapWrapper";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

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
    const [honeypot, setHoneypot] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    _subject: `New Lead: ${formData.service || 'General Inquiry'} from ${formData.name}`,
                    _template: "table",
                    _captcha: "false",
                    _honey: ""
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", service: "", message: "" });
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
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 pt-32">
                    <BackgroundVideo
                        src="/videos/background-videos/StructureNeon.mp4"
                        poster="/videos/posters/StructureNeon.jpg"
                        autoPlay
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-primary/75 z-[1]" />
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
                            </span>
                            Let&apos;s Build Together
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
                            Get in Touch –{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-400">
                                Ignite Your Project.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Ready to transform your digital presence with AI-driven web solutions? Our team is based in Vredenburg on the West Coast and at the V&amp;A Waterfront in Cape Town, ready to bring your vision to life.
                        </p>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-20 relative bg-background-dark">
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
                                        <h4 className="text-lg font-bold text-white mb-1">Our Locations</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            Vredenburg, West Coast<br />
                                            V&A Waterfront, Cape Town<br />
                                            Western Cape, South Africa
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-primary/40 flex items-center justify-center text-accent-orange flex-shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                                        <p className="text-slate-400">+27 73 859 5637</p>
                                        <p className="text-xs text-slate-500 mt-1">Mon-Fri: 9am - 6pm SAST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-primary/40 flex items-center justify-center text-accent-orange flex-shrink-0 border border-white/5">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                                        <p className="text-slate-400">ignisintellect@gmail.com</p>
                                        {/* <p className="text-slate-400">support@ignisintellect.com</p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Follow Our Journey</h4>
                                <div className="flex gap-4">
                                    <a href={siteData.pages.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/40 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent-orange transition-all border border-white/5" aria-label="Instagram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.155 0-3.508.012-4.747.068-.957.044-1.504.207-1.857.344-.466.181-.8.398-1.15.748-.35.35-.567.683-.748 1.15-.137.353-.3.9-.344 1.857C3.012 8.492 3 8.845 3 12s.012 3.508.068 4.747c.044.957.207 1.504.344 1.857.181.466.398.8.748 1.15.35.35.683.567 1.15.748.353.137.9.3 1.857.344 1.239.056 1.592.068 4.747.068s3.508-.012 4.747-.068c.957-.044 1.504-.207 1.857-.344.466-.181.8-.398 1.15-.748.35-.35.567-.683.748-1.15.137-.353.3-.9.344-1.857.056-1.239.068-1.592.068-4.747s-.012-3.508-.068-4.747c-.044-.957-.207-1.504-.344-1.857a3.097 3.097 0 0 0-.748-1.15 3.097 3.097 0 0 0-1.15-.748c-.353-.137-.9-.3-1.857-.344C15.508 4.012 15.155 4 12 4zm0 3.838a4.162 4.162 0 1 1 0 8.324 4.162 4.162 0 0 1 0-8.324zm0 6.862a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm5.292-7.038a.972.972 0 1 1-1.944 0 .972.972 0 0 1 1.944 0z"></path></svg>
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
                                                    {servicesData.map((s) => (
                                                        <option key={s.slug} value={s.slug}>{s.title}</option>
                                                    ))}
                                                    <option value="other">Other / Not Sure</option>
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
                    <div className="absolute inset-0">
                        <LocationMapWrapper />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center pointer-events-none">
                        <div className="bg-primary/90 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl max-w-xs pointer-events-auto">
                            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-orange text-sm">rocket_launch</span>
                                Ignis HQ
                            </h5>
                            <p className="text-sm text-slate-300">Visit us at the heart of the Waterfront innovation hub.</p>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=V%26A+Waterfront+Cape+Town"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent-orange text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                >
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
