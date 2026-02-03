import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Add these lines ONLY if your repo is NOT username.github.io
  // Replace 'shop-site' with your actual GitHub repo name
  basePath: '/shop-site',
  assetPrefix: '/shop-site',
};

export default nextConfig;
