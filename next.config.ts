import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "date-fns",
      "swiper",
      "recharts",
      "framer-motion",
    ],
    serverMinification: false,
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
