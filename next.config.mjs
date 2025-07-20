/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/case-study",
        destination: "https://bimboo-case-study.super.site/",
        permanent: false,
      },
      {
        source: "/book-call",
        destination: "https://cal.com/work-with-bimboo/call",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
