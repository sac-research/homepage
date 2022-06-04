/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM(
    {
        eslint: {
            ignoreDuringBuilds: true,
        },
        experimental: {
            outputStandalone: true,
        },
    },
    nextConfig
);
