/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
    };
  },
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

const withImages = require("next-images");

module.exports = { nextConfig, withImages };
