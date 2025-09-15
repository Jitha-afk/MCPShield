# Implementation Plan: MCP Shield — Landing Page

**Branch**: `001-build-a-landing` | **Date**: 2025-09-15 | **Spec**: `C:\scratch\Hack\GithubPagesLandingPage\HACKATHON25-MCPShield\specs\001-build-a-landing\spec.md`
**Input**: Feature specification from `C:\scratch\Hack\GithubPagesLandingPage\HACKATHON25-MCPShield\specs\001-build-a-landing\spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

## Summary
Build a static, exportable Next.js landing site for MCP Shield (hosted on GitHub Pages). UI stack uses TypeScript, Tailwind CSS, shadcn/ui primitives, and GSAP for advanced animations. The deliverable in this phase is research + design artifacts and quickstart for local build and static export.

## Technical Context
**Language/Version**: TypeScript ^5.7.3 (Node 22+ required)
**Framework**: Next.js ^15.3.2 (App Router, static export) with React ^19.1.0 / React DOM ^19.1.0
**Styling & Theming**: Tailwind CSS ^3.4.16, tailwind plugins (forms ^0.5.10, typography ^0.5.16, animate ^1.0.7), class-variance-authority ^0.7.1, tailwind-merge ^1.14.0, clsx ^2.1.1, next-themes ^0.4.6
**UI Primitives**: Radix UI component set (accordion ^1.2.11, alert-dialog ^1.1.14, avatar ^1.1.10, checkbox ^1.3.2, dialog ^1.1.14, dropdown-menu ^2.1.15, popover ^1.1.14, select ^2.2.5, tabs ^1.1.12, toast ^1.2.14, icons ^1.3.0, plus additional required primitives)
**Icons & Visual**: lucide-react ^0.475.0, @icons-pack/react-simple-icons ^12.9.0
**Forms & Validation**: react-hook-form ^7.56.4, @hookform/resolvers ^3.10.0, zod ^3.25.67
**Content Pipeline**: contentlayer2 0.5.7, next-contentlayer2 0.5.7, remark ^15.0.0 (gfm ^4.0.0, math ^6.0.0), rehype plugins, reading-time 1.5.0
**Animation & Interaction**: framer-motion ^12.15.0, (optional GSAP deferred), embla-carousel-react ^8.6.0, sonner ^1.7.4, cmdk ^1.1.1, vaul ^1.1.2, react-day-picker ^8.10.1, react-resizable-panels ^2.1.8
**Data Viz & Tables**: recharts ^2.15.3, @tanstack/react-table ^8.21.3
**Utilities**: date-fns ^3.6.0, github-slugger ^2.0.0, js-yaml ^4.1.0, image-size ^2.0.2, probe-image-size ^7.2.3, mime-types ^2.1.35, @emotion/is-prop-valid ^1.3.1, react-error-boundary ^6.0.0
**Analytics & Monitoring**: @vercel/analytics ^1.5.0, @vercel/og ^0.6.8 (for OG image generation at build time if needed)
**Platform Integration**: @shipixen/pliny ^2.3.1 (blog/content utilities)
**Build & Tooling**: eslint ^9.27.0, @typescript-eslint/* ^8.33.0, prettier ^3.4.2 + prettier-plugin-tailwindcss ^0.6.11, esbuild ^0.25.3, next-bundle-analyzer ^15.3.2, cross-env ^7.0.3, husky ^9.1.7, lint-staged ^15.4.2
**Testing**: Playwright (smoke tests), optional Jest + Testing Library if logic grows
**Storage**: N/A (static site only)
**Target Platform**: Static web (GitHub Pages) — client-only behavior
**Project Type**: Web (frontend only) — static export
**Performance Goals**: LCP < 1s hero paint; minimize main bundle size; lazy-load heavy/optional interaction libs; respect React 19 concurrent features
**Constraints**: No server-only APIs, images `unoptimized: true`, progressive enhancement for heavy backgrounds, respect `prefers-reduced-motion`, monitor critical dependencies (React 19 & Next 15) for patches.

## Constitution Check
- Simplicity: OK. Single frontend project.
- Architecture: Static-first Next.js export. Components under `components/`, UI primitives `components/ui/`.
- Testing: Recommend Playwright smoke tests for hero and CTA flows.
- Observability: Client logs only; no secrets.

## Project Structure

```
frontend/
├── app/                # Next.js app router
├── components/         # React components
├── components/ui/      # shadcn/ui primitives
├── public/             # static assets (fonts, icons)
├── styles/             # global styles/tailwind
├── package.json
└── next.config.js

out/                    # next export output deployed to GitHub Pages
```

## Phase 0: Outline & Research
- Extract unknowns: license/distribution, demo depth (real local inference vs simulation). User confirmed static site + GitHub Pages.
- Research items (generated):
  - Research best practices for Next.js static export with App Router and `output: 'export'`.
  - Research `shadcn/ui` integration and component scaffolding.
  - Research GSAP usage with React and `prefers-reduced-motion` handling.
  - Research static deploy to GitHub Pages via `out/` directory and GitHub Actions.

**Output**: `research.md` (created)

## Phase 1: Design & Contracts
1. `data-model.md`: minimal - none (static site). Document the Demo Session ephemeral model and fields for client-side state.
2. `contracts/`: none required (no backend), but include a `manifest.json` describing public demo endpoints (N/A). We'll create a `contracts/README.md` to note that no API contracts are needed.
3. `quickstart.md`: Provide steps for local dev, build, and GitHub Pages deploy.

**Output**: `data-model.md`, `contracts/README.md`, `quickstart.md`

## Phase 2: Task Planning Approach
Describe how `/tasks` generation will proceed (artifact-driven):
1. Parse `spec.md` Functional Requirements → seed high-level epic tasks (Hero, Demo Modal, Accessibility, Performance Pass, Content Architecture, Deployment Pipeline).
2. Use `data-model.md` DemoSession entity to create tasks for state modeling and demo simulation logic (including fallback simulation mode detection and event generation mocks).
3. Use `quickstart.md` to derive environment setup & CI workflow tasks (Node 22 upgrade, static export verification, GitHub Pages action).
4. Derive component scaffolding tasks from Technical Context dependency list (set up Tailwind config tokens, Radix primitives import pattern, ThemeProvider, utility helpers `cn`, variant patterns via CVA, toast system integration with `sonner`).
5. Create tasks for content pipeline (contentlayer2 config, markdown parsing enhancements, OG image generation using @vercel/og, reading-time integration, blog sample if required later—flag as optional/deferred).
6. Create tasks for performance & accessibility audits: lighthouse script, prefers-reduced-motion handling, keyboard navigation smoke test in Playwright.
7. Include monitoring/observability tasks: minimal analytics integration (opt-in) and error boundary wiring.
8. Add governance tasks: Husky + lint-staged setup, ESLint/Prettier config validation, dependency update watch list (React/Next/Contentlayer2).
No `tasks.md` file is produced in this phase—this section documents the generation blueprint only.

## Complexity Tracking
- None required; approach follows constitution.

## Progress Tracking
- [x] Phase 0: Research complete
- [x] Phase 1: Design complete
- [x] Phase 2: Task planning complete (describe approach)
- Gate Status: Initial Constitution Check: PASS
 - Gate Status: Post-Design Constitution Check: PASS (no violations introduced by expanded dependency context)

---

*** End of plan.md ***
