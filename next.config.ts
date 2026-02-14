import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/ru",
      },
      {
        source: "/en",
        destination: "/en",
      },
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
