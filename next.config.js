/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}


// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// module.exports = withPlugins([
//   [optimizedImages, {
//     mozjpeg: {
//       quality: 80,
//     },
//     pngquant: {
//       speed: 3,
//       strip: true,
//       verbose: true,
//     },
//     imagesPublicPath: '/peaked-coin/_next/static/images/',
//   }],
//   {
//     basePath: '/peaked-coin',
//     assetPrefix: '/peaked-coin/',
//     env,
//   },
// ]);

module.exports = nextConfig
// next.config.js