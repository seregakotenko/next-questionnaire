/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/quiz',
        destination: '/quiz/gender',
        permanent: true,
      },
      {
        source: '/',
        destination: '/quiz/gender',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
