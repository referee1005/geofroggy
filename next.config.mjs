/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["maps.googleapis.com"]
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
