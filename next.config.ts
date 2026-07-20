import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // `three` and `shaders` ship untranspiled ESM that Next needs to process.
  transpilePackages: ["three", "shaders"],
};

export default nextConfig;
