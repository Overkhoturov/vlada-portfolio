import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Use rewrites to map / to Russian version
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/ru',
      },
      {
        source: '/en',
        destination: '/en',
      },
      // Keep other routes as is
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
