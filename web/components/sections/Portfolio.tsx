import Link from "next/link";

export default function Portfolio() {
    const projects = [
        {
            category: "FinTech • AI",
            title: "Nexus Core Analytics",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq4TYj7vaDQ20XARJsny_W1muTD06zIozTLT2t34hUIKAhJUW5-lPbypfGhnnALoGgQA_H2tToYqozW9f3jElDvLu52uraSNGmbmLT_LJ56mBWzm1UFCaB0hPaTM3UuTnMb7u5KS3Vp5JD9qLeGVsSjIotR168ynidQ_R5Wrt3jVGBfUqDlej6OhIyo4Dp681WMYUOrpqk5KgvyCO8eRPfFeEcbcrgZ54_jYi1lqtBYrENGX2Q7bXxOoKRXBsnhBkcRfGUYmvD8dvf",
            alt: "Futuristic data analytics dashboard interface",
        },
        {
            category: "E-Commerce • Web",
            title: "Vantage Market UI",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj6Ldf7gf3efBGRJsrseuNidGucGw5ByUxRTpBmFwfGcoG36uPEQrA30s7IEVceF7GZWaeg2xhByakwgX6BkCIvnWBBYCFeRfcoQaxPz6QtFPqWRP4n_A4IDDQVkBltsIZmLbWP3IzJt5CA3_TSxrqLMlX1ATGzWMpfY54rfczaaeG28UEQDnHMvgibJud1stNMKy4kF8ZNl49_gSVSqLMDYGH1Tz12XiXiK50XsYtp_CaQ4Cq_GjkP3d5hPtEhadtw3DulN9phG0E",
            alt: "Modern lifestyle mobile application interface design",
        },
        {
            category: "SaaS • Automation",
            title: "Ignis Guard Security",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2TutZKrw6DKlZ0n8pzh30WgQjEhvn4JnYD6P8O0OD2lGTtWXutAMv7kMn6RTYmtDuwmB2f2PhF7i33Jqa_Y0pOZwi6gH_upxR52YePynOWzDYEbr3cCwozheDlu418mtg65eCCT1Ba56O2ETkbbca5ulPfjIoqHflP1e60wz8Z8SKLvzRtoZuHM-jqETCgp9ESIiWklue0MMBWgeimq30RRFvSve0-leJcT8oSiwaeP0cvTHvMtovS38IT0CSq2VjqqhaaUIr2a0R",
            alt: "Abstract cybersecurity network nodes visualization",
        },
    ];

    return (
        <section className="py-24 bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-accent-orange font-bold tracking-widest uppercase text-sm mb-3">Recent Work</h2>
                        <h3 className="text-4xl font-extrabold text-white">Innovation in Motion</h3>
                    </div>
                    <Link
                        href="/portfolio"
                        className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all"
                    >
                        View Full Portfolio
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-primary">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt={project.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                                src={project.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="text-accent-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-accent-orange transition-colors">
                                    <span className="material-symbols-outlined">north_east</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
