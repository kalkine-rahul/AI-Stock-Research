/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'in.tradingview.com',
      },
      {
        protocol: 'https',
        hostname: 'uat.kalkine.co.in',
      },
    ],
  },
};

export default nextConfig;