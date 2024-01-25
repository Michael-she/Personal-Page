/** @type {import('next').NextConfig} */
const nextConfig = {


	 webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the node-loader
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    });

     return config;
}}

module.exports = nextConfig
