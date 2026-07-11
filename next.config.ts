import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables React strict mode for highlighting potential problems in development.
  reactStrictMode: true,

  // Images are served from /public, so no remote image domains are required.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
