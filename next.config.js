/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/stat/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/stat/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
