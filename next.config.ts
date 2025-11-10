import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Absolutely lenient configuration - never fail builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Moved from experimental in Next.js 15+
  outputFileTracingRoot: process.cwd(),

  // Simple image configuration
  images: {
    unoptimized: true,
  },

  // Basic performance settings
  poweredByHeader: false,

  // Enable webpack polling for file watching (useful in WSL/Docker)
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
      ignored: /node_modules/,
    };
    return config;
  },

  // Flexible iframe embedding
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
        ],
      },
    ];
  },
};

export default nextConfig;
