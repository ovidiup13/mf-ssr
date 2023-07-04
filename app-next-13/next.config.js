const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const getRemotes = (isServer) => {
  const path = isServer ? 'server/remoteEntry.js' : 'client/remoteEntry.js';
  return { toolkit: `toolkit@http://localhost:3000/${path}` };
};

const federationConfig = (isServer) => {
  const remotes = getRemotes(isServer);

  console.log({ remotes });

  return {
    name: 'app-next-13',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {},
    remotes,
    shared: {},
    extraOptions: {
      debug: true,
    },
  };
};

const customWebpackConfig = (config, { isServer }) => {
  config.plugins.push(new NextFederationPlugin(federationConfig(isServer)));

  return config;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: customWebpackConfig,
};

module.exports = nextConfig;
