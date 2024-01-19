/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "digitalhippo-production-a61c.up.railway.app",
            },
        ],
    },
}

module.exports = nextConfig
