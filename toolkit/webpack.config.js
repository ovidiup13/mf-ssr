const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { UniversalFederationPlugin } = require('@module-federation/node');

const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
    publicPath: 'auto',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new UniversalFederationPlugin({
      name: 'toolkit',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Header': './src/components/Header',
        './Footer': './src/components/Footer',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
