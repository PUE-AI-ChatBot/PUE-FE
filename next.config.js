/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/stat',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
    ];
  },
};

module.exports = nextConfig;
