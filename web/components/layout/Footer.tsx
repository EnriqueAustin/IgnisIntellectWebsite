import Link from "next/link";
import { Flame, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import siteData from "@/data/site.json";

export default function Footer() {
    const { contact } = siteData.pages;

    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <Flame className="w-6 h-6 text-accent" />
                            <span className="text-xl font-bold font-heading">
                                Ignis<span className="text-accent">Intellect</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Igniting digital transformation with cutting-edge web development and ethical AI integration.
                        </p>
                        <div className="flex gap-4">
                            <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href={contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Insights</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Solutions</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">AI Integration</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">SEO & Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-0.5" />
                                <span>{contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent" />
                                <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">{contact.email}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent" />
                                <a href={`tel:${contact.phone}`} className="hover:text-accent transition-colors">{contact.phone}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Ignis Intellect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
