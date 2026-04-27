import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
    const projects = [
        {
            category: "Lead Gen • AI",
            title: "Ignis Lead Gen & Sales Tool",
            image: "/images/Projects/ignisleadgen.png",
            alt: "Ignis Lead Gen & Sales Tool",
            link: "/"
        },
        {
            category: "Hospitality • Web",
            title: "Boutique Lagoon Escape",
            image: "/images/Projects/BoutiqueLagoonEscape.png",
            alt: "Boutique Lagoon Escape website",
            link: "https://ignisdemoglenfinnanguesthouse.netlify.app/"
        },
        {
            category: "Travel • Web",
            title: "Aurora Luxe",
            image: "/images/Projects/auroraluxe.jpg",
            alt: "Aurora Luxe website",
            link: "https://luxtravelsite.netlify.app/"
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
                            <Image
                                alt={project.alt}
                                src={project.image}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="text-accent-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                                {project.link?.startsWith("/") ? (
                                    <Link
                                        href={project.link}
                                        aria-label={`View ${project.title}`}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-orange transition-colors"
                                    >
                                        <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
                                    </Link>
                                ) : project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${project.title} website`}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-orange transition-colors"
                                    >
                                        <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
