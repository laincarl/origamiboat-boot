const merge = require('webpack-merge');
const proConfig = require('./webpack.production');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(proConfig, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
