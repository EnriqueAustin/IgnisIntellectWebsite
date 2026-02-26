import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", not serving static in PROD
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
