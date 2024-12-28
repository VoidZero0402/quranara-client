import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "c655003.parspack.net",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
