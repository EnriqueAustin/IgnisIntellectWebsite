import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#001f3d",
                "accent-orange": "#ff6b00",
                "accent-fire": "#ff4d00",
                "background-light": "#f5f7f8",
                "background-dark": "#0f1923",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "sans": ["var(--font-inter)", "sans-serif"],
                "heading": ["var(--font-poppins)", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px",
            },
        },
    },
    plugins: [],
};
export default config;
