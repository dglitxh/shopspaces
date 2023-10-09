/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "	www.svgrepo.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "backend-prod.absurd.design",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
