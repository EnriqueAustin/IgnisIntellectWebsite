# Ignis Intellect — Design System & Identity Reference

> **Purpose**: This document defines the visual identity, color scheme, typography, layout patterns, and
> component conventions for the Ignis Intellect website. Reference this when building or modifying any
> page to maintain a consistent brand experience.

---

## 🎨 Color Palette

| Token               | Hex       | Usage                                         |
|----------------------|-----------|-----------------------------------------------|
| `primary`            | `#001f3d` | Deep navy — backgrounds, cards, dark surfaces  |
| `accent-orange`      | `#ff6b00` | **Primary accent** — CTAs, highlights, icons, hovers |
| `accent-fire`        | `#ff4d00` | Secondary warm accent — gradient endpoints     |
| `background-light`   | `#f5f7f8` | Light mode page background                    |
| `background-dark`    | `#0f1923` | **Dark mode page background** (default)        |
| `white`              | `#ffffff` | Text on dark surfaces                          |
| `slate-100`          | Tailwind  | Primary body text (dark mode)                  |
| `slate-300`          | Tailwind  | Subtitle/description text                      |
| `slate-400`          | Tailwind  | Secondary/muted text                           |
| `slate-500`          | Tailwind  | Footer text, copyright                         |

### Important Rules
- The site runs in **dark mode by default** (`<html class="dark">`).
- **Never use raw hex values** inline — always reference Tailwind tokens (`text-accent-orange`, `bg-primary`, etc.).
- The accent color is `accent-orange` (`#ff6b00`), **not** `accent` (`#FF4500`). Use `accent-orange` everywhere.

---

## 🔤 Typography

| Font      | Variable          | Usage                            |
|-----------|-------------------|----------------------------------|
| **Inter** | `--font-inter`    | Body text, UI, navigation (`font-display`, `font-sans`) |
| **Poppins** | `--font-poppins` | Headings (`font-heading`)       |

### Font Weights Used
- Inter: 300, 400, 500, 600, 700, 800, 900
- Poppins: 400, 500, 600, 700, 800, 900

### Heading Scale
| Element | Size                  | Weight       | Color        |
|---------|-----------------------|--------------|--------------|
| h1      | `text-5xl md:text-7xl` | `font-black` | `text-white` |
| h2      | `text-3xl md:text-5xl` | `font-bold` / `font-extrabold` | `text-white` |
| h3      | `text-3xl md:text-4xl` | `font-bold` / `font-extrabold` | `text-white` |
| Section label | `text-sm`        | `font-bold uppercase tracking-widest` | `text-accent-orange` |

---

## 🧩 Custom CSS Utility Classes

Defined in `app/globals.css`:

| Class             | Effect                                                          |
|-------------------|-----------------------------------------------------------------|
| `.orange-gradient` | `linear-gradient(135deg, #ff6b00, #ff4d00)` — CTA buttons, icon boxes |
| `.navy-glass`      | `rgba(15,25,35,0.8)` + `blur(12px)` — sticky header           |
| `.hero-glow`       | Radial orange glow overlay for hero backgrounds                |
| `.fiery-gradient`  | `linear-gradient(135deg, #001f3d, #001122)` — section backgrounds |
| `.orange-glow`     | On hover: orange `box-shadow` + `border-color` change          |
| `.text-glow`       | Orange `text-shadow` for accent heading emphasis               |
| `.glow-orange`     | Subtle orange `box-shadow` for CTA buttons                     |

---

## 🖼️ Icons

- **Icon Set**: [Material Symbols Outlined](https://fonts.google.com/icons) (Google)
- **Usage**: `<span className="material-symbols-outlined">icon_name</span>`
- **Loaded via**: `<link>` in `layout.tsx` `<head>`
- **Do NOT use** Lucide React or other icon libraries for new pages — use Material Symbols for consistency.

### Common Icons
| Icon Name              | Usage                        |
|------------------------|------------------------------|
| `local_fire_department` | Logo / brand mark            |
| `arrow_forward`        | CTA buttons, "Learn More"   |
| `trending_flat`        | Primary CTA arrows           |
| `north_east`           | Portfolio card links          |
| `menu` / `close`       | Mobile hamburger toggle      |
| `mail`                 | Email contact                |
| `location_on`          | Address / location           |
| `star`                 | Ratings                      |
| `send`                 | Newsletter submit            |
| `format_quote`         | Testimonial quote            |

---

## 📐 Layout Patterns

### Container
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```
- Alternate: `px-6` for inner-page sections

### Responsive Grid
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   — 4-column (services, values)
grid grid-cols-1 md:grid-cols-3 gap-8                   — 3-column (portfolio, team)
grid grid-cols-2 lg:grid-cols-4 gap-8                   — Stats bar
```

### Section Padding
- Standard: `py-24`
- Reduced: `py-20`
- With top offset (below sticky header): `pt-20`

### Page Structure
```tsx
<div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow">
    {/* Sections here */}
  </main>
  <Footer />
</div>
```

---

## 🧱 Component Conventions

### Sticky Header (Navbar)
- Uses `.navy-glass` for glassmorphic effect
- Fixed: `fixed top-0 left-0 right-0 z-50`
- Height: `h-20`
- Logo: orange-gradient icon box + `<span>Ignis</span><span>Intellect</span>`
- Mobile: hamburger menu with slide-down panel

### Cards
- Background: `bg-primary/20` or `bg-primary/40`
- Border: `border border-white/5` or `border-primary/30`
- Rounded: `rounded-xl` or `rounded-2xl`
- Hover: `hover:border-accent-orange/50` or `.orange-glow`
- Padding: `p-8`

### CTA Buttons
| Style         | Classes                                                        |
|---------------|----------------------------------------------------------------|
| **Primary**   | `orange-gradient text-white px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_30px_-5px_#ff6b00]` |
| **Secondary** | `bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold` |
| **Outline**   | `px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5` |

### Section Headers
```tsx
<h2 className="text-accent-orange font-bold tracking-widest uppercase text-sm mb-3">
  Section Label
</h2>
<h3 className="text-4xl font-extrabold text-white">
  Section Title
</h3>
```

### Badge (Animated Ping Dot)
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 mb-6">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
  </span>
  <span className="text-accent-orange text-xs font-bold uppercase tracking-widest">
    Badge Text
  </span>
</div>
```

---

## 📂 Project Structure

```
web/
├── app/
│   ├── globals.css          ← Theme + custom utilities
│   ├── layout.tsx           ← Root layout, fonts, dark mode, Material Symbols
│   ├── page.tsx             ← Homepage
│   └── about/page.tsx       ← About page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       ← Shared sticky header
│   │   └── Footer.tsx       ← Shared 4-column footer
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       └── ContactCTA.tsx
├── data/site.json           ← Site metadata & navigation
├── lib/utils.ts             ← cn() helper (clsx + tailwind-merge)
├── tailwind.config.ts       ← Tailwind config (colors, fonts, dark mode)
└── DESIGN_SYSTEM.md         ← THIS FILE
```

---

## 🎬 Animation & Interaction Patterns

| Pattern              | Implementation                                    |
|----------------------|---------------------------------------------------|
| Page entry           | Framer Motion `initial={{ opacity: 0, y: 30 }}`  |
| Ping dot (badge)     | Tailwind `animate-ping` on pseudo-element         |
| Hover zoom (images)  | `group-hover:scale-110 transition-transform duration-500-700` |
| Hover border glow    | `.orange-glow` class                              |
| Link arrow slide     | `group-hover:gap-3` (gap increases on hover)      |
| Smooth scroll        | `<html className="scroll-smooth">`                |
| Grayscale reveal     | `grayscale hover:grayscale-0 transition-all duration-700` |
| Bounce               | Tailwind `animate-bounce` (map pins)              |

---

## ✅ Checklist for New Pages

1. Import and use `<Navbar />` at the top
2. Import and use `<Footer />` at the bottom (or simplified inline footer for inner pages)
3. Use `font-display` body font (inherited from layout)
4. Use `text-accent-orange` for all accent text — never raw hex
5. Use Material Symbols for all icons
6. Section backgrounds alternate between `bg-background-dark`, `bg-primary/10`, `fiery-gradient`
7. All images use `rounded-xl` or `rounded-2xl` or `rounded-3xl`
8. Ensure mobile responsiveness with `md:` and `lg:` breakpoints
9. Add page metadata via `export const metadata: Metadata = { ... }`
10. Test at `320px`, `768px`, and `1280px` widths
