export default function Services() {
    const services = [
        {
            icon: "terminal",
            title: "Web Development",
            description: "Custom performance-driven websites built with the latest frameworks and edge computing.",
        },
        {
            icon: "neurology",
            title: "AI Solutions",
            description: "Intelligent automation, LLM integrations, and predictive analytics for your business workflow.",
        },
        {
            icon: "smart_toy",
            title: "Mobile Apps",
            description: "Scalable iOS and Android applications with native-level performance and AI features.",
        },
        {
            icon: "query_stats",
            title: "Digital Marketing",
            description: "Data-driven growth strategies powered by machine learning and behavioral insights.",
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-accent-orange font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
                    <h3 className="text-4xl font-extrabold text-white">Full-Stack Intelligence</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-primary/40 dark:bg-primary/20 border border-primary/30 rounded-xl p-8 hover:border-accent-orange/50 transition-all duration-300"
                        >
                            <div className="w-14 h-14 orange-gradient rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-accent-orange/20">
                                <span className="material-symbols-outlined text-white text-3xl">{service.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                            <a
                                href="#"
                                className="text-accent-orange font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                            >
                                Learn More{" "}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
