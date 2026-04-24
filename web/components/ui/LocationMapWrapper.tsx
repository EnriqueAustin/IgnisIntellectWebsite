"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/ui/LocationMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full rounded-2xl bg-primary/20 animate-pulse flex items-center justify-center">
            <span className="material-symbols-outlined text-accent-orange/30 text-4xl">map</span>
        </div>
    ),
});

export default function LocationMapWrapper() {
    return <LocationMap />;
}
