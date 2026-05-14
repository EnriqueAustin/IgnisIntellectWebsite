export interface PricingTier {
    name: string;
    price: string;
    period?: string;
    setupFee?: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    featured?: boolean;
    cta: string;
}

export interface ServiceDetail {
    slug: string;
    icon: string;
    label: string;
    title: string;
    shortDescription: string;
    heroDescription: string;
    features: string[];
    detailedFeatures: {
        icon: string;
        title: string;
        description: string;
    }[];
    pricing: PricingTier[];
    whyChooseUs: string[];
    image: string;
    imageAlt: string;
}

export const servicesData: ServiceDetail[] = [
    {
        slug: "web-development",
        icon: "code",
        label: "Architecture",
        title: "Web Development",
        shortDescription:
            "Custom Web Applications, E-Commerce Platforms, and CMS Solutions (WordPress/Headless). We build responsive & SEO-friendly sites optimized for performance.",
        heroDescription:
            "From landing pages to full-scale e-commerce platforms, we craft high-performance web experiences that load fast, rank high, and convert visitors into customers.",
        features: [
            "Custom Web Apps",
            "E-Commerce",
            "Headless CMS",
            "SEO-Friendly",
        ],
        detailedFeatures: [
            {
                icon: "web",
                title: "Custom Web Applications",
                description:
                    "Bespoke web apps built with Next.js, React, and modern frameworks — tailored to your exact business requirements.",
            },
            {
                icon: "shopping_cart",
                title: "E-Commerce Platforms",
                description:
                    "Shopify, WooCommerce, or fully custom storefronts with payment gateways, inventory management, and checkout optimisation.",
            },
            {
                icon: "edit_note",
                title: "CMS Solutions",
                description:
                    "WordPress, Strapi, or headless CMS setups that give you full control over your content without touching code.",
            },
            {
                icon: "speed",
                title: "Performance & SEO",
                description:
                    "Lighthouse-optimised builds with server-side rendering, image optimisation, and structured data for top search rankings.",
            },
            {
                icon: "devices",
                title: "Responsive Design",
                description:
                    "Pixel-perfect layouts across desktop, tablet, and mobile — built mobile-first for the best user experience.",
            },
            {
                icon: "integration_instructions",
                title: "API Integrations",
                description:
                    "Connect to payment providers, CRMs, analytics platforms, and third-party services with custom API integrations.",
            },
        ],
        pricing: [
            {
                name: "Business Website",
                price: "R800",
                period: "/mo",
                setupFee: "R2,500 setup fee",
                description: "A complete, professionally built website with ongoing hosting, maintenance, and updates — so you can focus on running your business.",
                features: [
                    "Up to 8 custom pages",
                    "2 rounds of revisions",
                    "Hosting & maintenance included",
                    "Email hosting included",
                    "SEO setup (meta tags, OpenGraph, sitemaps)",
                    "WhatsApp chat button",
                    "Contact form integration",
                    "Booking platform integration",
                    "Ongoing changes & updates",
                    "Mobile-responsive design",
                    "SSL certificate",
                ],
                featured: true,
                highlighted: true,
                cta: "Get Started",
            },
            {
                name: "Starter",
                price: "R4,500",
                description: "Perfect for startups & freelancers needing a professional online presence.",
                features: [
                    "Landing page (1–3 pages)",
                    "Mobile-responsive design",
                    "Basic SEO setup",
                    "Contact form integration",
                    "SSL certificate",
                    "2 rounds of revisions",
                    "7-day delivery",
                ],
                cta: "Get Started",
            },
            {
                name: "Professional",
                price: "R14,999",
                description: "Ideal for growing businesses needing a full-featured website.",
                features: [
                    "5–10 custom pages",
                    "CMS integration (WordPress/Headless)",
                    "Advanced SEO optimisation",
                    "Blog setup",
                    "Google Analytics & Search Console",
                    "Social media integration",
                    "Speed optimisation",
                    "3 rounds of revisions",
                    "14-day delivery",
                ],
                cta: "Get Started",
            },
            {
                name: "Enterprise",
                price: "R39,999",
                description: "For businesses needing a custom-built, scalable web application.",
                features: [
                    "Custom web application",
                    "E-commerce with payment gateway",
                    "Custom API integrations",
                    "User authentication system",
                    "Admin dashboard",
                    "Advanced analytics",
                    "Performance monitoring",
                    "Priority support (30 days)",
                    "Unlimited revisions",
                ],
                cta: "Request Quote",
            },
        ],
        whyChooseUs: [
            "Cape Town based team with 10+ years experience",
            "Modern tech stack: Next.js, React, TypeScript",
            "Lighthouse performance scores above 90",
            "SEO-first approach for organic growth",
            "Ongoing support and maintenance options",
        ],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYAeh-6qNNBzrovpWVIf6bzgtCAwthcIZiGYaT9-a2ynwt7Nf__RFDsZq6Wi5S-jFZ90KnG3RDx5S6tjQx7OzVxaz3Ca5_psa6aO8l56Lv5NSwde7Tj5WMYv0kUdSi0tf87Ghkg13SPTIVO1788Hp3aE9hOwtu76JyJLhfc2PREDzJo6TNFEvIQe7fIbzvMMzdDceqF41NP-XWp2cxQRGfGtwzllE4quQ_HQCk0MUh5UehUQJo_TCr2dP9w7bq2Axx7b6vnbEiM9J",
        imageAlt: "Modern code editor and minimalist workspace",
    },
    {
        slug: "ai-automation",
        icon: "psychology",
        label: "Intelligence",
        title: "AI Automation & Solutions",
        shortDescription:
            "Intelligent Chatbots & AI Agents, Workflow Automation, and System Integrations (CRM, WhatsApp). Custom AI Setups like OpenClaw tailored to your needs.",
        heroDescription:
            "Supercharge your business with intelligent AI agents, automated workflows, and seamless system integrations that work around the clock to drive revenue and efficiency.",
        features: [
            "Chatbots & Agents",
            "Workflow Automation",
            "CRM Integration",
            "OpenClaw Setup",
        ],
        detailedFeatures: [
            {
                icon: "smart_toy",
                title: "AI Chatbots & Agents",
                description:
                    "Conversational AI powered by GPT that handles customer queries, qualifies leads, and books appointments 24/7.",
            },
            {
                icon: "account_tree",
                title: "Workflow Automation",
                description:
                    "Automate repetitive tasks — from email sequences to data entry — saving hours of manual work every week.",
            },
            {
                icon: "hub",
                title: "CRM & System Integration",
                description:
                    "Connect your chatbots and workflows to HubSpot, Salesforce, Zoho, or any CRM for seamless data flow.",
            },
            {
                icon: "chat",
                title: "WhatsApp Business Automation",
                description:
                    "AI-powered WhatsApp bots for customer support, order tracking, and automated responses on the most popular messaging platform.",
            },
            {
                icon: "auto_awesome",
                title: "Custom AI Solutions",
                description:
                    "Tailor-made AI setups including OpenClaw configurations, custom model fine-tuning, and intelligent document processing.",
            },
            {
                icon: "monitoring",
                title: "AI Analytics & Reporting",
                description:
                    "Track bot performance, conversation quality, and automation ROI with detailed dashboards and insights.",
            },
        ],
        pricing: [
            {
                name: "Starter",
                price: "R5,999",
                description: "Get started with AI automation on a single channel.",
                features: [
                    "Basic chatbot (1 channel)",
                    "Up to 500 conversations/month",
                    "FAQ automation",
                    "Basic lead capture",
                    "Email notifications",
                    "Setup & training included",
                    "5-day delivery",
                ],
                cta: "Get Started",
            },
            {
                name: "Professional",
                price: "R14,999",
                description: "Multi-channel AI automation for scaling businesses.",
                features: [
                    "Multi-channel bot (Web + WhatsApp)",
                    "Up to 2,000 conversations/month",
                    "Workflow automation (5 workflows)",
                    "CRM integration",
                    "Lead qualification & scoring",
                    "Custom AI personality",
                    "Analytics dashboard",
                    "10-day delivery",
                ],
                highlighted: true,
                cta: "Most Popular",
            },
            {
                name: "Enterprise",
                price: "R34,999",
                description: "Full-scale AI implementation for maximum automation.",
                features: [
                    "Unlimited channels",
                    "Unlimited conversations",
                    "Custom AI agents with GPT-4",
                    "Advanced workflow automation",
                    "Full CRM/ERP integration",
                    "WhatsApp Business API",
                    "Custom model training",
                    "Priority support (30 days)",
                    "Dedicated account manager",
                ],
                cta: "Request Quote",
            },
        ],
        whyChooseUs: [
            "Proven AI implementations across SA businesses",
            "WhatsApp Business API certified partner",
            "Custom GPT-4 powered solutions",
            "Average 40% reduction in support costs",
            "Ongoing monitoring and optimisation",
        ],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDZym24CoFc3sXj2s3e9a8CMpE2KU27-XDd44dUn52MdsB3uATzlafk72q57SNDXyntPWbkLDhDxj1B4rB8PdS8Di3xkGe-fiiyeSbq0JEheYxRY5XpPHO8APBVN9vAJj_k_xxYjXPsjiakn7dfm9hF-dAy8OQ--CG094lerPQMSPKhDB22rruUhLibvomxiRE0U-54p8rAWO-ROTuedWloSaY0CbVmM6haxRPmL9Ztwfbvr5B_NTiXosHycu0P2eMpIR1qMnQ5_TsZ",
        imageAlt: "Abstract glowing blue and orange neural network",
    },
    {
        slug: "design-creative",
        icon: "palette",
        label: "Aesthetics",
        title: "Design & Creative",
        shortDescription:
            "UI/UX Design and User-Centered Interfaces that captivate and convert. We focus on intuitive layouts and visual storytelling.",
        heroDescription:
            "Beautiful, intuitive designs that tell your brand's story and guide users to action. From brand identity to interactive prototypes — we create experiences that convert.",
        features: [
            "UI/UX Design",
            "User-Centered UI",
            "Brand Identity",
            "Prototyping",
        ],
        detailedFeatures: [
            {
                icon: "brush",
                title: "UI/UX Design",
                description:
                    "Research-driven interface design with wireframes, mockups, and user journey mapping for maximum usability.",
            },
            {
                icon: "category",
                title: "Brand Identity",
                description:
                    "Complete brand packages — logo, colour palette, typography, and brand guidelines that define your visual DNA.",
            },
            {
                icon: "touch_app",
                title: "Interactive Prototyping",
                description:
                    "Clickable Figma prototypes to test your product with real users before writing a single line of code.",
            },
            {
                icon: "photo_library",
                title: "Visual Storytelling",
                description:
                    "Custom illustrations, iconography, and graphic assets that communicate your message at a glance.",
            },
            {
                icon: "smartphone",
                title: "Mobile App Design",
                description:
                    "iOS and Android app designs following platform guidelines for native-feeling user experiences.",
            },
            {
                icon: "design_services",
                title: "Design Systems",
                description:
                    "Scalable component libraries and style guides that keep your brand consistent across all touchpoints.",
            },
        ],
        pricing: [
            {
                name: "Starter",
                price: "R3,999",
                description: "Essential branding for new businesses launching their identity.",
                features: [
                    "Logo design (3 concepts)",
                    "Colour palette & typography",
                    "Brand guidelines document",
                    "Business card design",
                    "Social media templates (3)",
                    "2 rounds of revisions",
                    "5-day delivery",
                ],
                cta: "Get Started",
            },
            {
                name: "Professional",
                price: "R12,999",
                description: "Full UI/UX design for websites and apps.",
                features: [
                    "User research & personas",
                    "Wireframes (up to 10 screens)",
                    "High-fidelity UI design",
                    "Interactive Figma prototype",
                    "Mobile-responsive layouts",
                    "Design system components",
                    "Usability testing report",
                    "3 rounds of revisions",
                    "14-day delivery",
                ],
                highlighted: true,
                cta: "Most Popular",
            },
            {
                name: "Enterprise",
                price: "R29,999",
                description: "Complete brand identity and design system for scaling companies.",
                features: [
                    "Full brand identity package",
                    "Complete design system",
                    "Unlimited screens/pages",
                    "Custom illustrations & icons",
                    "Motion design & micro-interactions",
                    "Multi-platform design (web + mobile)",
                    "Comprehensive style guide",
                    "User testing (3 rounds)",
                    "Priority delivery",
                ],
                cta: "Request Quote",
            },
        ],
        whyChooseUs: [
            "Award-calibre design team in Cape Town",
            "User-centred design methodology",
            "Figma-based collaborative workflow",
            "Designs that consistently boost conversions 25%+",
            "Seamless handoff to development team",
        ],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBr32QYAwBubuReorQIAliVL3TbZt1EmFI0XpNQeXdhdIE3rseT4aqwVUIOr3IIiOVYfcvsTAwdczjhmdC6aoKIntr4wAQIFHK_z7qBpGdU92Vvnq1ltFqPdcpv4Ls4TXqdq_tUwL1pNfpTVWMTNgSWkjLL_EvKWuuEtSRiNbGdcsiFpGn_HulJYUNubHW8IDNLNuLnwJz5ENUlOIJy7GixNra-tFpsNj0JHLrzRD7291_-slBsIuOLI-0xLA0u_OdxhQ3CMnWsXLNf",
        imageAlt: "Digital design workspace",
    },
    {
        slug: "consulting-education",
        icon: "school",
        label: "Guidance",
        title: "Consulting & Education",
        shortDescription:
            "AI Strategy & Roadmapping, Adoption Consulting, and Education. We provide training workshops to upskill your team in modern AI tools.",
        heroDescription:
            "Navigate the AI landscape with confidence. Our consulting and training programmes equip your team with the knowledge and strategy to leverage AI for real business results.",
        features: [
            "AI Strategy",
            "Adoption Consulting",
            "Workshops",
            "Roadmapping",
        ],
        detailedFeatures: [
            {
                icon: "route",
                title: "AI Strategy & Roadmapping",
                description:
                    "Custom AI adoption roadmaps aligned with your business goals, budget, and team capabilities.",
            },
            {
                icon: "groups",
                title: "Team Workshops",
                description:
                    "Hands-on training sessions on ChatGPT, prompt engineering, AI tools, and workflow automation for your team.",
            },
            {
                icon: "trending_up",
                title: "Adoption Consulting",
                description:
                    "End-to-end support for integrating AI into your existing processes — from pilot projects to full-scale deployment.",
            },
            {
                icon: "school",
                title: "Executive Briefings",
                description:
                    "C-suite presentations on AI trends, opportunities, and risks tailored to your industry and competitive landscape.",
            },
            {
                icon: "assignment",
                title: "Process Documentation",
                description:
                    "Comprehensive documentation of AI-enhanced workflows, SOPs, and best practices for long-term success.",
            },
            {
                icon: "support_agent",
                title: "Ongoing Advisory",
                description:
                    "Monthly advisory sessions to review AI performance, identify new opportunities, and keep your strategy current.",
            },
        ],
        pricing: [
            {
                name: "Starter",
                price: "R4,999",
                description: "A focused strategy session to kickstart your AI journey.",
                features: [
                    "2-hour strategy session",
                    "AI opportunity assessment",
                    "Tool recommendations",
                    "Quick-win action items",
                    "Summary report",
                    "30 min follow-up call",
                ],
                cta: "Book Session",
            },
            {
                name: "Professional",
                price: "R14,999",
                description: "Comprehensive AI roadmap and hands-on team training.",
                features: [
                    "Half-day workshop (4 hours)",
                    "AI readiness assessment",
                    "Custom AI roadmap",
                    "Team training (up to 10 people)",
                    "Tool setup & configuration",
                    "Prompt engineering guide",
                    "Detailed strategy document",
                    "2 follow-up sessions",
                ],
                highlighted: true,
                cta: "Most Popular",
            },
            {
                name: "Enterprise",
                price: "R29,999",
                description: "Full AI adoption programme with ongoing advisory support.",
                features: [
                    "Full-day workshop + training",
                    "Multi-department assessment",
                    "Comprehensive AI roadmap",
                    "Pilot project implementation",
                    "Change management support",
                    "Ongoing monthly advisory",
                    "Quarterly strategy reviews",
                    "Unlimited team training",
                    "Dedicated consultant",
                ],
                cta: "Request Quote",
            },
        ],
        whyChooseUs: [
            "Real-world AI implementation experience",
            "Industry-specific consulting approach",
            "Hands-on, practical training style",
            "ROI-focused recommendations",
            "Ongoing support beyond the initial engagement",
        ],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBsGFdrKbZA4eqfpF1kjMwLXlSyL5Mj8XbAX5_xj2MFN_nZ-5OlTEQmHvRpZX06JgxwcNdFrtRQFycEMAY5ANHTZLP3aFr7GLmP3nuJLK3gF4p3WimyUsBcaebb4VK7uGj_DrsX5hyqqPTW8C7SuQa9Psknm22-_cwqhs8bTwmZ11JeQkOda3cUGA50Pw6Q6BvNun4pr3fDuKtQ3kLDjPw-LKbWt8SVCb0SCWCHdC7pUu3WdCusYC-0em9jUCeIeYEC73CfFv2v0TTE",
        imageAlt: "Team collaboration and strategy session",
    },
    {
        slug: "audits-assessments",
        icon: "fact_check",
        label: "Validation",
        title: "Audits & Assessments",
        shortDescription:
            "AI Readiness Audits (evaluating business processes & maturity) and SEO/Digital Performance Audits to identify opportunities for growth.",
        heroDescription:
            "Uncover hidden opportunities and fix what's holding you back. Our audits give you a clear, data-driven picture of where you stand and exactly what to do next.",
        features: [
            "AI Readiness",
            "Process Evaluation",
            "SEO Audits",
            "Performance Check",
        ],
        detailedFeatures: [
            {
                icon: "search_insights",
                title: "SEO & Performance Audit",
                description:
                    "Deep-dive analysis of your site's search rankings, page speed, Core Web Vitals, and technical SEO health.",
            },
            {
                icon: "psychology",
                title: "AI Readiness Assessment",
                description:
                    "Evaluate your organisation's data maturity, processes, and infrastructure to determine AI adoption potential.",
            },
            {
                icon: "analytics",
                title: "Digital Performance Review",
                description:
                    "Comprehensive review of your digital presence — website, social media, and online marketing effectiveness.",
            },
            {
                icon: "security",
                title: "Security Assessment",
                description:
                    "Identify vulnerabilities in your web applications and infrastructure with actionable remediation steps.",
            },
            {
                icon: "checklist",
                title: "Process Evaluation",
                description:
                    "Map and analyse your business workflows to identify automation opportunities and efficiency gains.",
            },
            {
                icon: "summarize",
                title: "Actionable Reports",
                description:
                    "Every audit delivers a detailed report with prioritised recommendations, quick wins, and a strategic improvement roadmap.",
            },
        ],
        pricing: [
            {
                name: "Starter",
                price: "R3,499",
                description: "Essential SEO and performance health check for your website.",
                features: [
                    "SEO audit (on-page + technical)",
                    "Page speed analysis",
                    "Core Web Vitals report",
                    "Competitor comparison (3 sites)",
                    "Top 10 priority fixes",
                    "Summary report (PDF)",
                    "5-day delivery",
                ],
                cta: "Get Started",
            },
            {
                name: "Professional",
                price: "R9,999",
                description: "Comprehensive AI readiness and digital performance audit.",
                features: [
                    "Full SEO & performance audit",
                    "AI readiness assessment",
                    "Business process evaluation",
                    "Data maturity scoring",
                    "Technology stack review",
                    "Detailed recommendations",
                    "Implementation roadmap",
                    "1-hour strategy call",
                    "10-day delivery",
                ],
                highlighted: true,
                cta: "Most Popular",
            },
            {
                name: "Enterprise",
                price: "R24,999",
                description: "Enterprise-grade multi-department audit with action plan.",
                features: [
                    "Multi-department assessment",
                    "Full SEO + AI + security audit",
                    "Stakeholder interviews",
                    "Process mapping & analysis",
                    "Custom scoring framework",
                    "Executive presentation",
                    "Prioritised action plan",
                    "Implementation support",
                    "Quarterly follow-up",
                ],
                cta: "Request Quote",
            },
        ],
        whyChooseUs: [
            "Data-driven, objective assessments",
            "Actionable recommendations, not just reports",
            "Industry benchmarking included",
            "Follow-up support for implementation",
            "Turn insights into measurable improvements",
        ],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBsGFdrKbZA4eqfpF1kjMwLXlSyL5Mj8XbAX5_xj2MFN_nZ-5OlTEQmHvRpZX06JgxwcNdFrtRQFycEMAY5ANHTZLP3aFr7GLmP3nuJLK3gF4p3WimyUsBcaebb4VK7uGj_DrsX5hyqqPTW8C7SuQa9Psknm22-_cwqhs8bTwmZ11JeQkOda3cUGA50Pw6Q6BvNun4pr3fDuKtQ3kLDjPw-LKbWt8SVCb0SCWCHdC7pUu3WdCusYC-0em9jUCeIeYEC73CfFv2v0TTE",
        imageAlt: "Data analysis and audit charts",
    },
    {
        slug: "support-maintenance",
        icon: "build",
        label: "Reliability",
        title: "Support & Maintenance",
        shortDescription:
            "Website maintenance, updates, ongoing AI monitoring, and performance optimisation to ensure your digital assets remain secure and efficient.",
        heroDescription:
            "Keep your digital assets running at peak performance. Our managed support plans cover everything from security updates to AI monitoring — so you can focus on growing your business.",
        features: [
            "Maintenance",
            "Updates",
            "AI Monitoring",
            "Optimization",
        ],
        detailedFeatures: [
            {
                icon: "update",
                title: "Regular Updates",
                description:
                    "CMS, plugin, and framework updates applied and tested monthly to keep your site secure and current.",
            },
            {
                icon: "shield",
                title: "Security Monitoring",
                description:
                    "24/7 uptime monitoring, SSL management, malware scanning, and automated backups for complete peace of mind.",
            },
            {
                icon: "speed",
                title: "Performance Optimisation",
                description:
                    "Continuous speed improvements — image optimisation, caching, CDN management, and Core Web Vitals tuning.",
            },
            {
                icon: "monitoring",
                title: "AI System Monitoring",
                description:
                    "Track chatbot performance, conversation quality, and automation health with proactive alerting.",
            },
            {
                icon: "bug_report",
                title: "Bug Fixes & Support",
                description:
                    "Fast response bug fixes and technical support — with priority SLAs available for business-critical sites.",
            },
            {
                icon: "backup",
                title: "Backups & Recovery",
                description:
                    "Daily automated backups with one-click restore capability. Never lose your data or progress.",
            },
        ],
        pricing: [
            {
                name: "Starter",
                price: "R1,499",
                period: "/month",
                description: "Essential maintenance for small websites and landing pages.",
                features: [
                    "Monthly CMS & plugin updates",
                    "Weekly backups",
                    "Uptime monitoring",
                    "SSL certificate management",
                    "Basic security scans",
                    "2 content updates/month",
                    "Email support (48h response)",
                ],
                cta: "Get Started",
            },
            {
                name: "Professional",
                price: "R3,999",
                period: "/month",
                description: "Comprehensive support for business-critical websites.",
                features: [
                    "Everything in Starter",
                    "Daily backups",
                    "Performance optimisation",
                    "Core Web Vitals monitoring",
                    "5 content updates/month",
                    "Monthly analytics report",
                    "Priority support (24h response)",
                    "Minor design changes",
                ],
                highlighted: true,
                cta: "Most Popular",
            },
            {
                name: "Enterprise",
                price: "R7,999",
                period: "/month",
                description: "Dedicated support with SLA for enterprise-grade operations.",
                features: [
                    "Everything in Professional",
                    "Real-time backups",
                    "AI system monitoring",
                    "Chatbot performance tracking",
                    "Unlimited content updates",
                    "Security hardening",
                    "SLA guarantee (4h response)",
                    "Dedicated account manager",
                    "Quarterly strategy review",
                ],
                cta: "Request Quote",
            },
        ],
        whyChooseUs: [
            "Proactive monitoring, not reactive fixes",
            "Cape Town based team for local support",
            "Transparent monthly reporting",
            "No lock-in contracts — cancel anytime",
            "Proven 99.9% uptime track record",
        ],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYAeh-6qNNBzrovpWVIf6bzgtCAwthcIZiGYaT9-a2ynwt7Nf__RFDsZq6Wi5S-jFZ90KnG3RDx5S6tjQx7OzVxaz3Ca5_psa6aO8l56Lv5NSwde7Tj5WMYv0kUdSi0tf87Ghkg13SPTIVO1788Hp3aE9hOwtu76JyJLhfc2PREDzJo6TNFEvIQe7fIbzvMMzdDceqF41NP-XWp2cxQRGfGtwzllE4quQ_HQCk0MUh5UehUQJo_TCr2dP9w7bq2Axx7b6vnbEiM9J",
        imageAlt: "Server monitoring and maintenance dashboard",
    },
];
