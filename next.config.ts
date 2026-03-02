import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  // Keep static export output in /dist for build, but use default .next in dev.
  distDir: isDev ? ".next" : "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
