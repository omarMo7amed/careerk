import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [50, 75, 85, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-5c37ea83b99f48918e67ed5fdda1be98.r2.dev",
      },
    ],
  },
};

export default nextConfig;
