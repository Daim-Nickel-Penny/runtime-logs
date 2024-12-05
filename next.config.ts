import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "**", // Allow all hostnames
      },
    ],
  },
};

export default nextConfig;
