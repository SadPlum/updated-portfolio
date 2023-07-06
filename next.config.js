/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vlrqpdawgsgqngudyvjf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/dog_imgs/Untitled%20folder/**",
      },
    ],
  },
};

module.exports = nextConfig;
