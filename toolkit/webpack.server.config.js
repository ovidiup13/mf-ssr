const path = require('path');
const { UniversalFederationPlugin } = require('@module-federation/node');

const common = require('./webpack.common');

module.exports = {
  ...common,
  target: 'node',
  mode: 'development',
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist', 'server'),
    publicPath: 'auto',
  },
  plugins: [
    new UniversalFederationPlugin({
      name: 'toolkit',
      library: { type: 'commonjs-module' },
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
