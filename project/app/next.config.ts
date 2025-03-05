import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: [
      's3-media0.fl.yelpcdn.com',
      // Add other domains you need here
    ],
  },
};