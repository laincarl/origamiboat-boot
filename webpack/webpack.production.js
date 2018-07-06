const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    // Transfer Files
    /* new CopyWebpackPlugin([
      {from: 'src/www/css', to: 'css'},
      {from: 'src/www/images', to: 'images'}
    ]), */
  ],
});
