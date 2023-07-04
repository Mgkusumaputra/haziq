/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dspkhqhkv/image/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/surah",
                destination: "/",
                permanent: true,
            },
            {
                source: "/tafsir",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
