/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    plugins: [require("@tailwindcss/typography")],
    theme: {
        extend: {},
    },
};

const withTM = require("next-transpile-modules")(["three"]);

module.exports = withTM(
    {
        eslint: {
            ignoreDuringBuilds: true,
        },
        output: "standalone",
        
    },

    nextConfig
);
