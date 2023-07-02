/** @type {import('next').NextConfig} */
const nextConfig = {
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
    }
}

module.exports = nextConfig
