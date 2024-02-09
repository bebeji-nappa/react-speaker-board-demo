/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-speaker-board']);
module.exports = withTM({
  experimental: {
    esmExternals: true
  }
});
