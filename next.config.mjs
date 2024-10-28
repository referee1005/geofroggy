/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "maps.googleapis.com",
      "secure.gravatar.com",
      "geofroggy.com",
      "i0.wp.com"
    ]
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
