import createMDX from "@next/mdx";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  // Add this section
  async rewrites() {
    return [
      {
        source: "/publications/cv.pdf",
        destination:
          "https://git.soconnor.dev/soconnor/resume-cv/releases/download/latest/cv.pdf",
      },
      {
        source: "/publications/resume.pdf",
        destination:
          "https://git.soconnor.dev/soconnor/resume-cv/releases/download/latest/resume.pdf",
      },
      {
        source: "/content/:path*",
        destination: "/api/content/:path*",
      },
    ];
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
