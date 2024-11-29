/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable image optimization if you're not using it
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
