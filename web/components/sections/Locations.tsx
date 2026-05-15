import LocationMapWrapper from "@/components/ui/LocationMapWrapper";

const LOCATIONS = [
    {
        name: "Vredenburg — West Coast",
        description: "Saldanha Bay District, Western Cape",
        icon: "factory",
    },
    {
        name: "Paarl — Cape Winelands",
        description: "Cape Winelands, Western Cape",
        icon: "location_city",
    },
];

export default function Locations() {
    return (
        <section className="py-24 bg-background-dark border-t border-white/5 relative overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left: copy + locations */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-accent-orange font-bold uppercase tracking-widest text-sm mb-4">
                                Where We Are
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Two bases, one team.
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                West Coast roots, Cape Town reach. We work in person across the Western Cape and remotely with clients across South Africa and abroad.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {LOCATIONS.map((loc) => (
                                <div
                                    key={loc.name}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-primary/20 border border-white/5 hover:border-accent-orange/30 transition-colors"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange flex-shrink-0">
                                        <span className="material-symbols-outlined" aria-hidden="true">
                                            {loc.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold">{loc.name}</h5>
                                        <p className="text-slate-400 text-sm">{loc.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="text-accent-orange mt-1">
                                <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                            </div>
                            <div>
                                <h5 className="text-white font-bold">Working Hours</h5>
                                <p className="text-slate-400 text-sm">Mon – Fri: 08:30 – 17:30 (SAST)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: map */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-primary/10 border border-white/10 relative">
                            <LocationMapWrapper />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
