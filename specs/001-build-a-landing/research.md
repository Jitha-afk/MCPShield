# Research: Static Next.js Landing for MCP Shield

Decision: Use Next.js (App Router) ^15.3.2 with `output: 'export'` (React 19, Node 22 runtime) to produce a static `out/` directory for GitHub Pages.

Rationale:
- Next.js App Router supports static export when pages are client-only; it provides the DX we need for shadcn/ui and TypeScript.
- Tailwind + shadcn/ui integrates cleanly with Next.js and produces accessible primitives.

Alternatives considered:
- Pure static site generators (e.g., Astro, Eleventy) — rejected because the team requested Next.js & shadcn.

GSAP integration:
- Use `gsap` with `ScrollTrigger` for scroll-activated animations and `gsap.utils.splitText` or manual split logic for staggered per-character animation.
- Respect `prefers-reduced-motion` and guard GSAP timelines accordingly.

GitHub Pages deployment:
- Use `next export` to `out/` and deploy `out/` via GitHub Actions workflow.
- CI performs `npm ci`, `npm run build`, `npm run export`, then publishes `out/`.
- Ensure `.nojekyll` to allow `_next` assets; adjust `basePath`/`assetPrefix` for repo subpath.

Dependency Monitoring:
- React 19 + Next 15 early minor iterations: watch for regression patches.
- contentlayer2 community fork: validate maintenance cadence quarterly.
- Framer Motion & Embla: keep optional; lazy-load to protect core LCP.

Unresolved questions (NEEDS CLARIFICATION):
- License and distribution model for MCP Shield binaries (affects download links).
- Real local inference: The demo can be simulation-only initially; native local inference integration will need a separate agent/helper and packaging strategy.
