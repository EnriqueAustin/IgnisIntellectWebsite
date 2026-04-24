# Project Constitution: Ignis Intellect Website

## 1. Data Schemas (JSON)

### Site Content Structure
```json
{
  "site_metadata": {
    "title": "Ignis Intellect - Web Dev & AI Agency Cape Town",
    "description": "Ignite Your Digital Future with Intelligent Web & AI Solutions. Cape Town's premier agency for custom web development and AI integrations.",
    "url": "https://ignisintellect.com",
    "language": "en",
    "theme": {
      "primary": "#001F3F",
      "accent": "#FF4500",
      "secondary": "#F5F5F5",
      "background": "#FFFFFF",
      "text": "#333333"
    }
  },
  "navigation": [
    { "label": "Home", "path": "/" },
    { "label": "About", "path": "/about" },
    { "label": "Services", "path": "/services" },
    { "label": "Portfolio", "path": "/portfolio" },
    { "label": "Blog", "path": "/blog" },
    { "label": "Contact", "path": "/contact" }
  ],
  "pages": {
    "home": {
      "hero": {
        "tagline": "Ignite Your Digital Future with Intelligent Web & AI Solutions",
        "subtext": "Cape Town's premier agency for custom web development, AI integrations, and scalable apps.",
        "cta_primary": { "text": "Get Free Consultation", "link": "/contact" },
        "cta_secondary": { "text": "View Portfolio", "link": "/portfolio" }
      },
      "services_overview": [
        { "title": "Web Development", "description": "Responsive sites & custom apps.", "icon": "code" },
        { "title": "AI Solutions", "description": "Chatbots, NLP & Automation.", "icon": "cpu" },
        { "title": "Mobile Apps", "description": "iOS & Android solutions.", "icon": "smartphone" },
        { "title": "Digital Marketing", "description": "SEO & AI-driven visibility.", "icon": "trending-up" }
      ],
      "stats": [
        { "label": "Years Experience", "value": "10+" },
        { "label": "Projects Delivered", "value": "50+" },
        { "label": "Efficiency Boost", "value": "AI-Enhanced" }
      ],
      "testimonials": [
        { "quote": "Ignis transformed our site with AI chatbots!", "author": "Local Startup CEO", "rating": 5 }
      ]
    },
    "about": {
      "story": "Founded in Cape Town, we blend fiery innovation with intellectual AI expertise...",
      "values": ["Innovation", "Client-Focus", "Scalability", "Ethical AI"],
      "team": [
        { "name": "Enrique Austin", "role": "Founder & AI Lead", "image": "placeholder-enrique.jpg" }
      ]
    },
    "services": {
      "list": [
        { "title": "Web Development", "details": ["Responsive Sites", "eCommerce", "Custom Apps"] },
        { "title": "AI Solutions", "details": ["Chatbots", "ML Models", "Automation"] },
        { "title": "Mobile Apps", "details": ["iOS", "Android", "Cross-Platform"] },
        { "title": "SEO & Marketing", "details": ["SEO", "PPC", "Social Media"] }
      ]
    },
    "contact": {
      "address": "Saldanha / Cape Town, South Africa",
      "email": "ignisintellect@gmail.com",
      "phone": "+27 12 345 6789",
      "socials": {
        "linkedin": "https://linkedin.com/company/ignisintellect",
        "twitter": "https://x.com/itstonyaustin"
      }
    }
  }
}
```

## 2. Behavioral Rules
- **Tone:** Professional, sophisticated, tech-forward ("Ignites Intellect").
- **Constraints:**
    - **No Guessing:** Business logic must be explicit in `gemini.md` before coding.
    - **Reliability:** deterministic > probabilistic.
    - **Mobile-First:** Design must be responsive.
    - **SEO-First:** Meta tags, semantic HTML, and alt text are mandatory.
    - **Tech Stack:** Next.js (Static Export), Tailwind CSS, Lucide React (Icons), Framer Motion (Animations).
    - **Placeholders:** Use explicit placeholders for API keys (e.g., Maps, Formspree).

## 3. Architectural Invariants
- **Layer 1 (Architecture):** SOPs in `architecture/`. One SOP per major component.
- **Layer 2 (Navigation):** Routing logic (Agent).
- **Layer 3 (Tools):** Deterministic Python scripts in `tools/`.
- **Golden Rule:** If logic changes, update SOP *before* code.
- **Frontend Architecture:**
    - `app/layout.tsx`: Root layout with Navbar/Footer.
    - `components/`: Atomic UI components (Hero, Card, Button).
    - `data/`: JSON files mirroring the schema above.
    - `public/`: Static assets.

## 4. Maintenance Log
*Empty initially.*
