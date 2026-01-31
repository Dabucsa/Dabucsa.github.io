import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removido "output: export" para soportar API Routes en Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
