"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyMobileCTA() {
    const pathname = usePathname();

    if (pathname?.startsWith("/contact")) return null;

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pointer-events-none">
            <Link
                href="/contact"
                className="pointer-events-auto flex items-center justify-center gap-2 w-full h-14 rounded-full orange-gradient text-white font-bold text-base shadow-2xl shadow-accent-orange/30 active:scale-95 transition-transform"
                aria-label="Get a free quote"
            >
                <span className="material-symbols-outlined" aria-hidden="true">bolt</span>
                Get a Free Quote
            </Link>
        </div>
    );
}
