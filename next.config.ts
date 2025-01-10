import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias["yjs"] = path.resolve(__dirname, "node_modules/yjs");
        }
        return config;
    },
    images: {
        remotePatterns: [
            {
                hostname: "c655003.parspack.net",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;
