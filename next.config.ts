import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Ceci est important pour l'exportation statique
}

export default nextConfig
