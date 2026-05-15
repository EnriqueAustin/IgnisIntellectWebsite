"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        q: "How long does a typical web project take?",
        a: "Most marketing sites ship in 2–4 weeks. Custom web apps and AI integrations typically run 6–12 weeks depending on scope. We'll give you a clear timeline after the discovery call.",
    },
    {
        q: "What does an AI integration actually look like for my business?",
        a: "It depends on your bottleneck. Common ones: a chatbot that answers 40–60% of customer questions, a lead qualifier that scores inbound enquiries, or a workflow automation that replaces a manual handoff. We start with an audit before recommending anything.",
    },
    {
        q: "Do you only work with Cape Town & West Coast clients?",
        a: "We're based in Vredenburg and in Paarl, but we work remotely with clients across South Africa and abroad. In-person meetings are a bonus, not a requirement.",
    },
    {
        q: "How much does a project cost?",
        a: "Marketing sites start around R15k. Custom web apps and AI builds are scoped per project — usually R40k–R250k+. We give a fixed quote after the discovery call so there are no surprises.",
    },
    {
        q: "What happens after the site or system goes live?",
        a: "We offer ongoing support and maintenance retainers. Hosting, monitoring, content updates, and iteration on AI models are all things we can keep handling — or hand off to your team with full documentation.",
    },
    {
        q: "Do you handle hosting, domains, and email?",
        a: "Yes. We can set up and manage everything end-to-end, or work with whatever provider you're already using.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-accent-orange font-bold tracking-widest uppercase text-sm mb-3">
                        FAQs
                    </h2>
                    <h3 className="text-4xl font-extrabold text-white">
                        Questions, answered
                    </h3>
                </div>

                <div className="space-y-4">
                    {FAQS.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className="border border-white/10 rounded-xl bg-primary/20 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white font-bold text-base md:text-lg">
                                        {item.q}
                                    </span>
                                    <span
                                        className={cn(
                                            "material-symbols-outlined text-accent-orange transition-transform duration-200 shrink-0",
                                            isOpen && "rotate-180"
                                        )}
                                        aria-hidden="true"
                                    >
                                        expand_more
                                    </span>
                                </button>
                                <div
                                    className={cn(
                                        "grid transition-all duration-300 ease-in-out",
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-5 text-slate-400 leading-relaxed">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: FAQS.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: f.a,
                            },
                        })),
                    }),
                }}
            />
        </section>
    );
}
