import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import siteData from "@/data/site.json";
import { Code, Cpu, Smartphone, TrendingUp, CheckCircle } from "lucide-react";

// Icon mapping helper
const getIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    code: Code,
    cpu: Cpu,
    smartphone: Smartphone,
    "trending-up": TrendingUp,
  };
  const Icon = icons[iconName] || Code;
  return <Icon size={32} className="text-accent mb-4" />;
};

export default function Home() {
  const { home } = siteData.pages;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <Hero
        tagline={home.hero.tagline}
        subtext={home.hero.subtext}
        ctaPrimary={home.hero.cta_primary}
        ctaSecondary={home.hero.cta_secondary}
      />

      {/* Stats Section */}
      <section className="py-20 bg-secondary border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Blending creativity with technical precision to deliver scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {home.services_overview.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{service.description}</p>
                <a href="/services" className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <CheckCircle size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={home.testimonials} />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ignite Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and discover how we can transform your digital presence.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-orange-500/25"
          >
            Book Your Call Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
