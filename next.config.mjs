
// На GitHub Pages project-сайт отдаётся по под-пути /<repo>/, поэтому при сборке
// для Pages выставляем basePath/assetPrefix. Локально — корень.
// CUSTOM_DOMAIN=true — сайт на своём домене (tgmarket.ai): отдаётся из корня, без под-пути.
const isPages = process.env.GITHUB_PAGES === "true" && process.env.CUSTOM_DOMAIN !== "true";
const repo = "tgmarket-new";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  outputFileTracingRoot: import.meta.dirname,
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? `/${repo}` : "" },
};

export default nextConfig;
