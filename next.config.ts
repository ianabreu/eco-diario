import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/ddiv5waqs/image/upload/**"),
    ],
  },
};

export default nextConfig;
