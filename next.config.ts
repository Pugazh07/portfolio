import type { NextConfig } from "next";

// Deployed as a GitHub Pages project site at pugazh07.github.io/portfolio,
// so assets and routes need the /portfolio prefix in that build only.
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
