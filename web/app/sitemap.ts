import type { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

const BASE_URL = "https://ignisintellect.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-03-03");

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/portfolio`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...servicePages];
}
