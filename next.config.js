/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Your Company",
        siteDescription: "Your company description.",
        siteKeywords: "your company keywords",
        siteUrl: "You site url",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@your_handle",
        POSTGRES_URL: "postgres://default:hO0MGlwga9kX@ep-jolly-violet-a6oz5sk9-pooler.us-west-2.aws.neon.tech/verceldb?sslmode=require",
        POSTGRES_URL_NON_POOLING: "postgres://default:hO0MGlwga9kX@ep-jolly-violet-a6oz5sk9.us-west-2.aws.neon.tech/verceldb?sslmode=require",
        POSTGRES_URL_NO_SSL: "postgres://default:hO0MGlwga9kX@ep-jolly-violet-a6oz5sk9-pooler.us-west-2.aws.neon.tech/verceldb",
        POSTGRES_PRISMA_URL: "postgres://default:hO0MGlwga9kX@ep-jolly-violet-a6oz5sk9-pooler.us-west-2.aws.neon.tech/verceldb?pgbouncer=true&connect_timeout=15&sslmode=require",
        POSTGRES_USER: "default",
        POSTGRES_PASSWORD: "hO0MGlwga9kX",
        POSTGRES_HOST: "ep-jolly-violet-a6oz5sk9-pooler.us-west-2.aws.neon.tech",
        POSTGRES_DATABASE: "verceldb"

    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
