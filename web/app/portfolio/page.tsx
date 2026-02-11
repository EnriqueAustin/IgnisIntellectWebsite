"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteData from "@/data/site.json";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Portfolio() {
    const { categories, projects } = siteData.pages.portfolio;
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background-dark to-background-dark"></div>
                    {/* Background Image Pattern */}
                    <div
                        className="absolute top-0 left-0 h-full w-full opacity-10 bg-cover bg-center pointer-events-none"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOOE74MSsSUfy7cQO02qWx6yoYgcy4AgM3M16gTjXBHd1UZHCZnraDESJ905LrXadZcsIFm6_LkpCWPhKa5rpSJiU67i_TeabJQUZBIVmHgfU80jner5YLsko0P_jh40dc4qJWjsN2ustW4vcwFhSzQ0wD5CveNVpUI-M6au7S3eNRC5409LbG7TqN4385pDOq2F5tcE4_HcPwLtLH2A5_Hs-PVUtFTsHftG-QDZ_ZOu-J_gYLIxXq8gXJL9eydyqgiEIZaZgiw6gf')" }}
                    ></div>

                    <div className="max-w-3xl space-y-6 relative z-10">
                        <div className="inline-flex items-center rounded-full border border-accent-orange/30 bg-accent-orange/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-orange">
                            Agency Portfolio
                        </div>
                        <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
                            Our Work – <span className="bg-gradient-to-r from-accent-orange to-orange-400 bg-clip-text text-transparent">Proven Results</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl">
                            Exploring the intersection of high-performance code and intelligent design. We transform complex problems into elegant digital solutions.
                        </p>
                        <div className="pt-10 flex flex-col items-center gap-4">
                            <button
                                onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group flex h-14 items-center justify-center gap-2 rounded-full bg-accent-orange px-8 text-base font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent-orange/20"
                            >
                                Scroll to Explore
                                <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">arrow_downward</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio-grid" className="mx-auto max-w-7xl px-6 py-12">
                    {/* Filter Bar */}
                    <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "h-10 rounded-full px-6 text-sm font-medium transition-all",
                                    activeCategory === category
                                        ? "bg-accent-orange text-white shadow-lg shadow-accent-orange/20 font-bold"
                                        : "bg-primary/40 border border-white/5 text-slate-400 hover:bg-primary/60 hover:text-white"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group flex flex-col overflow-hidden rounded-xl bg-primary/20 border border-white/10 hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 rounded-lg bg-accent-orange px-3 py-1 text-xs font-bold text-white shadow-lg">
                                        {project.tags[0]}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-6 flex items-center gap-3">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 border border-white/5"
                                                title={tech.name}
                                            >
                                                <span className="material-symbols-outlined !text-lg">{tech.icon}</span>
                                            </span>
                                        ))}
                                    </div>

                                    <button className="w-full rounded-lg bg-white/5 py-3 text-sm font-bold text-white transition-all hover:bg-accent-orange group-hover:bg-accent-orange">
                                        View Case Study
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mx-auto max-w-7xl px-6 py-24">
                    <div className="orange-gradient relative overflow-hidden rounded-2xl px-8 py-16 text-center shadow-2xl shadow-accent-orange/20 md:px-16">
                        <div className="absolute inset-0 bg-background-dark/20 backdrop-blur-[2px]"></div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl font-black text-white md:text-5xl">Ready to Ignite your next project?</h2>
                            <p className="mx-auto max-w-xl text-lg text-white/80">
                                Let's collaborate to build something extraordinary. Our team is ready to bring your vision to life with bleeding-edge technology.
                            </p>
                            <button className="mx-auto flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-bold text-primary transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
                                Get in Touch
                                <span className="material-symbols-outlined text-primary">mail</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
