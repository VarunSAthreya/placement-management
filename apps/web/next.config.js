const withTM = require('next-transpile-modules')([]);
const path = require('path');

module.exports = withTM({
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../'),
    },
});
