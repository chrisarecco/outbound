import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./private/guides/**/*"],
  },
};

export default nextConfig;