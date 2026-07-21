import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "prod.spline.design" },
      { protocol: "https", hostname: "my.spline.design" },
    ],
  },
};

export default nextConfig;