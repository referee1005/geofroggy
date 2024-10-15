/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["maps.googleapis.com", "secure.gravatar.com", "geofroggy.com"]
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
