/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'
// Derive repository name dynamically when running in GitHub Actions to avoid hard‑coding.
// GITHUB_REPOSITORY is in the form "owner/repo".
const derivedRepoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
// If you later add a custom domain (CNAME) for Pages, remove basePath entirely.
export default {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  basePath: isProd && derivedRepoName ? `/${derivedRepoName}` : '',
  trailingSlash: true,
}
