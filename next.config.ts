import type { NextConfig } from "next";

/** GitHub Pages project site: https://USERNAME.github.io/uni-exp-letsgooo/ */
const githubPagesRepo = "uni-exp-letsgooo";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${githubPagesRepo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
