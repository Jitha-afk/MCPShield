/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'
const repoName = 'HACKATHON25-MCPShield'
export default {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  trailingSlash: true,
}
