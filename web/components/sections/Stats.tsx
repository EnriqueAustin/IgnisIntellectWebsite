export default function Stats() {
    const stats = [
        { value: "3+", label: "Years Experience", highlight: false },
        { value: "15+", label: "Projects Delivered", highlight: true },
        { value: "<24h", label: "Average Response Time", highlight: false },
    ];

    return (
        <section className="py-20 bg-primary/10 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.highlight ? "text-accent-orange" : "text-white"}`}>
                                {stat.value}
                            </div>
                            <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
