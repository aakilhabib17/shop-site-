import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shop-site-',
  assetPrefix: '/shop-site-/',
  trailingSlash: true,
};

export default nextConfig;
