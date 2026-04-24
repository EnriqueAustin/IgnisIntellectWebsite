"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-dark">
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10" />
                {/* <img
                    alt="Abstract AI visualization with fiery energy pulses"
                    className="w-full h-full object-cover opacity-40"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddICVxHCGMcYPbBhhj0zTaNJg7kcrsB7ftP3gxXSR3EQ1TTsm2QGndMPNb4RAzG7DhZW-0akSeut1T4zwzirx-NeD4CHaIheJFzwjX2mMl2wgmrNlmgWyrVJhlvj_qpUPTSfx-xMcZySxw6yW80v62_4ayzUmg6zX4N_5KpaCtOhKgnnGck30xrTz2is8ry57U82HsUkyPt3bDOMAXOczoSx16x97XKg4tOh08iT6hEBQYyzbOewqE4fT2rS7TiHEGtC-KiYsVBhz"
                /> */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="/videos/hero-video-background.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-10" />
                <div className="hero-glow absolute inset-0" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
                        </span>
                        <span className="text-accent-orange text-xs font-bold uppercase tracking-widest">Now Serving Cape Town</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                        Ignite Your Digital Future with{" "}
                        <span className="text-accent-orange">Intelligent</span>{" "}
                        Web &amp; AI Solutions.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                        Cape Town&apos;s premier agency for custom web development, AI integrations, and scalable apps that drive measurable growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="orange-gradient text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_30px_-5px_#ff6b00] transition-all flex items-center justify-center gap-2"
                        >
                            Get Free Consultation
                            <span className="material-symbols-outlined">trending_flat</span>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
