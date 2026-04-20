/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i.scdn.co', pathname: '/**' },
      { protocol: 'https', hostname: 'miro.medium.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn-images-1.medium.com', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig
