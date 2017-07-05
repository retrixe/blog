// @flow weak
const Babili = require("babili-webpack-plugin");

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) config.plugins.push(new Babili());
    return config;
  },
};
