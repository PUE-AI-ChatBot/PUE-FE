/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    /**
     * @desc
     *   CORS Error 임시 방편
     */
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
