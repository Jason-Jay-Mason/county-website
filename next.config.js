/** @type {import('next').NextConfig} */
const withLinaria = require("next-linaria");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

//withLinaria adds support of linaria in nextjs
module.exports = withLinaria({
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
});

const analyzer = `
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerPort: isServer ? 8888 : 8889,
      openAnalyzer: true,
    })
  );

  return config;
},
`;
