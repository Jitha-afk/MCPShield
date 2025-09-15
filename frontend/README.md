# MCP Shield Landing

Static-exported Next.js + Tailwind + shadcn/ui landing page for the MCP Shield project.

## Stack
- Next.js 14 (App Router, static export)
- Tailwind CSS + tailwindcss-animate
- shadcn/ui primitives (custom imported), cva utility
- GSAP for subtle entrance animations

## Development
```pwsh
cd frontend
npm install
npm run dev
```
Visit http://localhost:3000

## Build & Export
```pwsh
npm run build
npm run postexport # copies index.html -> 404.html for GH Pages
```
Output in `out/`.

## Deploy (GitHub Pages)
A workflow `.github/workflows/deploy.yml` builds on pushes to `main`, `pages`, or `001-build-a-landing`.
Ensure Pages is enabled in repo settings and set Source: GitHub Actions.

## Updating Base Path
`next.config.mjs` uses `repoName` and `GITHUB_ACTIONS` env to set `basePath`.

## Adding Components
Add additional shadcn components under `components/ui/` and register any CSS in `globals.css` as needed.

## License
See root `LICENSE`.
