/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const withTM = require('next-transpile-modules')(['react-speaker-board', 'richmd']);
module.exports = withTM({
  experimental: {
    esmExternals: true
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      plugins: [
        config.module.generator.asset.publicPath = "/_next/",
        new MiniCssExtractPlugin({
          experimentalUseImportModule: false
        }),
      ]
    return config
  },
});
