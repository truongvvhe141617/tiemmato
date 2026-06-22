import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tắt header X-Powered-By để ẩn tech stack
  poweredByHeader: false,

  // Bật gzip/brotli compression
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Tối ưu responsive breakpoints cho mobile-first
    deviceSizes: [375, 430, 640, 768, 1024, 1280, 1440],
    imageSizes: [64, 96, 128, 256, 384],
    // Cache ảnh 30 ngày
    minimumCacheTTL: 2592000,
    remotePatterns: [],
  },

  // Tăng performance: bỏ console.log trên production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
