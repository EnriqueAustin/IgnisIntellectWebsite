export default function TrustedBy() {
    const clients = [
        { name: "Boutique Lagoon Escape", category: "Hospitality" },
        { name: "Aurora Luxe", category: "Travel" },
        { name: "Ignis Lead Gen", category: "AI Sales" },
    ];

    return (
        <section className="py-20 bg-primary/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-accent-orange font-bold tracking-widest uppercase text-xs mb-10">
                    Trusted by forward-thinking teams
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex flex-col items-center justify-center text-center px-6 py-8 rounded-xl bg-primary/20 border border-white/5 hover:border-accent-orange/30 transition-colors"
                        >
                            <span className="text-white text-lg font-bold tracking-tight">
                                {client.name}
                            </span>
                            <span className="text-slate-500 text-xs uppercase tracking-widest mt-2">
                                {client.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
