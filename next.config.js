/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
