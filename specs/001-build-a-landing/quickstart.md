# Quickstart — MCP Shield Landing (Local Dev + GitHub Pages Deploy)

Prerequisites
- Node.js 22+ (React 19 + Next 15 compatibility) and `npm`
- Recommend: `corepack enable` (if using alternative package managers later) — currently `npm` only

Initial Setup
1. Clone repo and checkout feature branch:
   ```pwsh
   git checkout 001-build-a-landing
   ```
2. Install dependencies with clean, reproducible install:
   ```pwsh
   npm ci
   ```
3. (Optional) Prepare Git hooks (after install):
   ```pwsh
   npx husky install
   ```

Local Development
1. Start dev server:
   ```pwsh
   npm run dev
   ```
2. Open `http://localhost:3000` and verify:
   - Hero renders core proposition
   - Demo CTA launches simulation modal
   - Theme toggle + responsive layout behave fluidly
3. Run lint & format checks:
   ```pwsh
   npm run lint
   npm run format:check
   ```

Static Build & Export
1. Build (Next.js compile):
   ```pwsh
   npm run build
   ```
2. Export to static site (`out/`):
   ```pwsh
   npm run export
   ```
3. Inspect `out/` directory (ensure `index.html`, `_next/` assets, `.nojekyll`).
4. (Optional) Analyze bundle:
   ```pwsh
   ANALYZE=1 npm run build
   ```

Playwright Smoke (if configured)
```pwsh
npm run test:smoke
```
Target: hero load, keyboard nav, demo open/close.

GitHub Pages Deployment (CI)
- Workflow steps (conceptual):
  1. `actions/setup-node@v4` with Node 22
  2. `npm ci`
  3. `npm run build && npm run export`
  4. Deploy `out/` using `peaceiris/actions-gh-pages` or Pages Deploy Action

Environment Considerations
- `next.config.js` must set:
  - `output: 'export'`
  - `images: { unoptimized: true }`
  - Configure `assetPrefix`/`basePath` if publishing under a subpath.
- Respect `GITHUB_REPOSITORY` env in CI for dynamic `basePath` if needed.

Monitoring Critical Dependencies
- React 19 / Next 15: watch release notes for patch updates.
- contentlayer2: community fork; periodically verify maintenance.

Troubleshooting
- If animations fail: ensure `prefers-reduced-motion` not forcing reduced state; check console for lazy-load deferral logs.
- If assets 404 on GitHub Pages: confirm `.nojekyll` and correct `basePath`.
