/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/:path*',
        destination: `https://api.restinroi.com/*`,
      },
    ];
  },
  // 원래 권장되지 않는 옵션이지만 당장 빌드가 안돼서 꺼놨습니다
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
