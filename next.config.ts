import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // every photo is served from public/images (see lib/images.ts), so no remote hosts are needed
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Old WordPress URLs → new pages (keeps Google rankings and old links working)
    return [
      { source: "/cbse", destination: "/mandatory-disclosure", permanent: true },
      { source: "/about-svm", destination: "/about", permanent: true },
      { source: "/values-at-svm", destination: "/about", permanent: true },
      { source: "/general-information", destination: "/about", permanent: true },
      { source: "/resources", destination: "/campus", permanent: true },
      { source: "/admission", destination: "/admissions", permanent: true },
      { source: "/result", destination: "/results", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
