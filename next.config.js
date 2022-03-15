/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    nextConfig,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            "/index": { page: "/index" },
            "/members": { page: "/members" },
            "/events": { page: "/events" },
            "/publications": { page: "/publications" },
        };
    },
    assetPrefix: "./",
};
