"use client";

import { useEffect, useState } from "react";

type BackgroundVideoProps = {
    src: string;
    poster: string;
    className?: string;
    autoPlay?: boolean;
    /**
     * If true, also autoplay on mobile (still respects reduced-motion / saveData / very slow connections).
     * Use for the home Hero video only.
     */
    forceMobile?: boolean;
};

const MOBILE_BREAKPOINT = 768;

export default function BackgroundVideo({
    src,
    poster,
    className = "absolute inset-0 w-full h-full object-cover z-0",
    autoPlay = false,
    forceMobile = false,
}: BackgroundVideoProps) {
    const [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        if (!autoPlay) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
        const saveData = conn?.saveData === true;
        const slow = conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";

        if (reducedMotion || saveData || slow) return;

        const isDesktop = window.innerWidth >= MOBILE_BREAKPOINT;
        if (isDesktop || forceMobile) {
            setShouldPlay(true);
        }
    }, [autoPlay, forceMobile]);

    if (!shouldPlay) {
        return (
            <img
                src={poster}
                alt=""
                aria-hidden="true"
                className={className}
                loading="eager"
            />
        );
    }

    return (
        <video
            className={className}
            src={src}
            poster={poster}
            preload="metadata"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
        />
    );
}
