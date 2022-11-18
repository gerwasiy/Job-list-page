/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
 
        pathname: '/maps/api/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
 
        pathname: '/200/300',
      },
      {
        protocol: 'https',
        hostname: 'maps.geoapify.com',
        pathname: '/v1/**',
      },
      
    ],
  },
}

module.exports = nextConfig
