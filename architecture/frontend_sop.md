# Frontend Architecture SOP (Next.js + Tailwind)

## 1. Directory Structure
```
web/
├── app/
│   ├── layout.tsx       # Root layout (Metadata, Fonts, Providers)
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles (Tailwind directives)
│   ├── [route]/page.tsx # Other pages (About, Services, etc.)
├── components/
│   ├── ui/              # Atomic UI components (Button, Input, Card)
│   ├── sections/        # Page sections (Hero, Features, Footer)
│   ├── layout/          # Layout components (Navbar, Container)
├── lib/
│   ├── utils.ts         # Utility functions (cn, clsx)
│   ├── data.ts          # Data fetchers (from JSON)
├── public/              # Static assets (images, fonts)
├── data/                # Content JSON files (source of truth)
└── tailwind.config.ts   # Configuration
```

## 2. Component Guidelines
- **Functional Components:** Use React Functional Components with TypeScript interfaces.
- **Client vs Server:** Default to Server Components. Use `'use client'` explicitly only when needed (hooks, event listeners).
- **Styling:** Use Tailwind CSS utility classes.
    - Avoid `@apply` in CSS files unless absolutely necessary.
    - Use `clsx` and `tailwind-merge` for conditional classes (`cn` utility).

## 3. Theming (Tailwind Config)
Extend the theme in `tailwind.config.ts`:
- **Colors:**
    - `primary`: `#001F3F` (Deep Navy)
    - `secondary`: `#F5F5F5` (Light Gray)
    - `accent`: `#FF4500` (Fiery Orange)
- **Fonts:**
    - `sans`: `Inter` (Body)
    - `heading`: `Poppins` (Headings)

## 4. Asset Management
- **Images:** Use `next/image` for optimization.
- **Icons:** Use `lucide-react` components.

## 5. State Management
- Keep state local where possible.
- Use URL search params for shareable state (filters, pagination).
- No complex global state (Redux/Zustand) unless strictly required.
