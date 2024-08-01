/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    env: {
        _SUPABASE_URL: process.env._SUPABASE_URL,
        _SUPABASE_KEY: process.env._SUPABASE_KEY,
    },
    images: {
        unoptimized: true,

        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'krghsrjoeqpchnwfhomc.supabase.co',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
