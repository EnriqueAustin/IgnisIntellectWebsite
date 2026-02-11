export default function Testimonials() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent-orange text-6xl mb-8 block">format_quote</span>

                    <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-10">
                        &ldquo;Ignis transformed our site with AI chatbots! They didn&apos;t just build a website; they built an intelligent engine that handles 40% of our customer inquiries automatically. Truly the best in Cape Town.&rdquo;
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border border-accent-orange/30">
                            <span className="material-symbols-outlined text-accent-orange">person</span>
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-white">David K.</div>
                            <div className="text-slate-400 text-sm">Founder, Local Tech Startup</div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-1 mt-6">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-accent-orange">star</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
