import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // For static hosting remove on prod laptop for it to work with the nextjs systemd service 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
