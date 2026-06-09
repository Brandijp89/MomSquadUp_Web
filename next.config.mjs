/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== Enables static exports
  basePath: '/MomSquadUp_Web', // Required for GitHub Pages sub-directory hosting
  images: {
    unoptimized: true, // Required because Next.js Image Optimization needs a Node server
  },
};

export default nextConfig;
