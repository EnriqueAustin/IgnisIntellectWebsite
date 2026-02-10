"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/site.json";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const { contact } = siteData.pages;
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Contact Us</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
                    Ready to ignite your digital presence? We're here to help.
                </p>
            </section>

            <section className="py-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Whether you have a question about our services, pricing, or just want to say hello, we'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-gray-100">
                                <div className="w-12 h-12 bg-white text-accent rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Email</h3>
                                    <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-accent transition-colors">{contact.email}</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-gray-100">
                                <div className="w-12 h-12 bg-white text-accent rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                                    <a href={`tel:${contact.phone}`} className="text-gray-600 hover:text-accent transition-colors">{contact.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-gray-100">
                                <div className="w-12 h-12 bg-white text-accent rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary mb-1">Office</h3>
                                    <p className="text-gray-600">{contact.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                            <h3 className="font-bold text-primary mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href={contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-100/50 border border-gray-100">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We'll get back to you shortly.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-accent font-bold hover:underline">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send size={20} />}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
