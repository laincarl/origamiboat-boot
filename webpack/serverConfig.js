const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LessThemePlugin = require('webpack-less-theme-plugin');

const ROOT_DIR = path.resolve(__dirname, '../');
module.exports = {
  inline: false,
  compress: true,

  disableHostCheck: true,
  // stats: "normal",
  contentBase: path.resolve(ROOT_DIR, 'dist'),
  hot: true,

  publicPath: "/",
  port: 3000,
  // host: '0.0.0.0', // 允许局域网通过ip访问
  // public: 'localhost:3000', // 加了host之后，open会打开0.0.0.0，所以需要定义public
  stats: 'errors-only',
  open: true,
  historyApiFallback: true, // 支持browerhistory
  // 不需要设置跨域，直接后台设置允许跨域
  // proxy: {
  //   // /test => http://localhost:8000/test
  //   '/api/**': {
  //     target: 'http://localhost:8000',
  //     changeOrigin: true,
  //     // pathRewrite: { '^/api': '' },
  //   },
  // },
}