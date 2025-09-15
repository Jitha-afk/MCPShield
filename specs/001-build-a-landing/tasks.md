## Tasks: MCP Shield Landing Page (Feature: build-a-landing)

Feature Dir: `C:\scratch\Hack\GithubPagesLandingPage\HACKATHON25-MCPShield\specs\001-build-a-landing`
Artifacts: plan.md, research.md, data-model.md, quickstart.md, contracts/README.md (no API contracts)
Entity: DemoSession (ephemeral) → single model task
Contracts: None (skip contract test generation)
Approach: Setup → Tests (failing first) → Core (model/util/components) → Integration (animation/content/CI) → Polish

Legend: [P] = parallel-safe (distinct files, no ordering dependency)

---
T001 Setup: Node & Engines
- Action: Enforce Node 22+ by adding `"engines": { "node": ">=22" }` and verify existing scripts (`dev`, `build`, `export`). Add `analyze`, `test:smoke` placeholders.
- File: `frontend/package.json`
- Accept: `npm run dev` works; engines present.

T002 Setup: Static Export Config
- Action: Edit `frontend/next.config.js` ensure: `output: 'export'`, `images: { unoptimized: true }`. Add comment placeholder for future `basePath` logic (GitHub Pages).
- File: `frontend/next.config.js`
- DependsOn: T001

T003 Setup: Tailwind & Plugins
- Action: Confirm `tailwind.config.js` has required plugins (forms, typography, animate) and dark mode class; add motion-safe variants.
- File: `frontend/tailwind.config.js`
- DependsOn: T001
- [P]

T004 Setup: Husky + Lint-Staged
- Action: Add husky install script & pre-commit hook running lint, format check, typecheck.
- Files: `frontend/package.json`, `.husky/pre-commit`
- DependsOn: T001

T005 Setup: ESLint/Prettier Validation
- Action: Verify configs support React 19/Next 15; ensure `prettier-plugin-tailwindcss` and strict TS options.
- Files: `frontend/package.json`, config files
- DependsOn: T001
- [P]

T006 Model: DemoSession Type & Factory
- Action: Create `demoSession.ts` interface + `createDemoSession(mode)` and `appendEvent(session, evt)` utilities; detect mode (simulation only for now).
- File: `frontend/lib/demoSession.ts`
- DependsOn: T001

T007 Test: DemoSession Unit (Fail First)
- Action: Write failing test for creation + event append order & mode default.
- File: `frontend/__tests__/demoSession.test.ts`
- DependsOn: T006
- [P]

T008 Core Util: Motion & Class Helpers
- Action: Extend `frontend/lib/utils.ts` with `cn`, `isReducedMotionPreferred()`, and safe client guard.
- File: `frontend/lib/utils.ts`
- DependsOn: T001
- [P]

T009 Core: Theme Provider Review ✅
- Action: Refined `ThemeProvider.tsx` to ensure hydration-safe mount using `HydrationGate` and system theme sync (default system, optional override) with no forced theme. Added optional props and preserved transition disable.
- Files: `frontend/components/ThemeProvider.tsx`, `frontend/components/HydrationGate.tsx`
- DependsOn: T008

T010 Core: Hero Enhancements
- Action: Add CTA data attributes, prepare animation hooks (no GSAP yet), integrate theme-aware styles.
- File: `frontend/components/Hero.tsx`
- DependsOn: T008

T011 Core: Nav Accessibility
- Action: Ensure semantic structure, aria-label for nav, visible focus outlines.
- File: `frontend/components/Nav.tsx`
- DependsOn: T008
- [P]

T012 Core: Demo Modal Component
- Action: Implement `DemoModal.tsx` using Radix Dialog; display session events list + start/pause/reset.
- File: `frontend/components/DemoModal.tsx`
- DependsOn: T006,T008

T013 Core: Event Stream Logic
- Action: Implement timed event generator (INFO/WARN/SECURITY) with cancellation; integrate into `demoSession.ts` or separate function.
- File: `frontend/lib/demoSession.ts`
- DependsOn: T006
- [P]

T014 Core: Wire CTA Triggers
- Action: Connect Hero & Nav CTA to open DemoModal (lazy dynamic import if needed).
- Files: `frontend/components/Hero.tsx`, `frontend/components/Nav.tsx`, `frontend/components/DemoModal.tsx`
- DependsOn: T010,T012

T015 Animation: GSAP/Framer Motion Scaffold
- Action: Add optional GSAP dependency (deferred import) & integrate framer-motion baseline in Hero.
- Files: `frontend/package.json`, `frontend/components/Hero.tsx`
- DependsOn: T010
- [P]

T016 Content Pipeline: contentlayer2 Config
- Action: Add `contentlayer.config.ts` and integrate in `next.config.js` (plugin). Stub single markdown content file.
- Files: `frontend/contentlayer.config.ts`, `frontend/next.config.js`
- DependsOn: T002

T017 Content: MDX Components Map
- Action: Add `MDXComponents.tsx` for headings with slugs, code block, link.
- File: `frontend/components/mdx/MDXComponents.tsx`
- DependsOn: T016
- [P]

T018 Accessibility: Reduced Motion & Focus Audit
- Action: Apply reduced motion checks in Hero, DemoModal animations; verify keyboard tab order.
- Files: `frontend/components/Hero.tsx`, `frontend/components/DemoModal.tsx`, `frontend/components/Nav.tsx`
- DependsOn: T014

T019 Performance: Bundle Optimization Pass
- Action: Add dynamic imports for heavy libs (GSAP) and confirm tree-shaking; run analyze build.
- Files: `frontend/next.config.js`, `frontend/components/Hero.tsx`
- DependsOn: T015,T014
- [P]

T020 Testing: Playwright Setup
- Action: Add `playwright.config.ts`, smoke test spec for hero load & CTA open/close.
- Files: `frontend/playwright.config.ts`, `frontend/tests/smoke.spec.ts`
- DependsOn: T014

T021 Testing: DemoSession Integration Test
- Action: Add test verifying events appear after starting simulation.
- File: `frontend/tests/demoSession.simulation.spec.ts`
- DependsOn: T013,T012
- [P]

T022 Analytics: Vercel Analytics Opt-In
- Action: Integrate analytics component behind env flag; ensure no export break.
- File: `frontend/app/layout.tsx`
- DependsOn: T002
- [P]

T023 Error Boundary
- Action: Add `ErrorBoundary.tsx` using react-error-boundary and wrap layout.
- Files: `frontend/components/ErrorBoundary.tsx`, `frontend/app/layout.tsx`
- DependsOn: T002

T024 CI Workflow: GitHub Pages Deploy
- Action: Create `.github/workflows/pages.yml` performing build + export + deploy `out/` (with `.nojekyll`).
- File: `.github/workflows/pages.yml`
- DependsOn: T002,T001

T025 CI: BasePath/AssetPrefix Verification
- Action: Update `next.config.js` to conditionally set `assetPrefix`/`basePath` if repo subpath required; add comment referencing Pages.
- File: `frontend/next.config.js`
- DependsOn: T024
- [P]

T026 Polish: Lighthouse & A11y Script
- Action: Add script (Node) to run Lighthouse CI locally capturing performance & a11y scores; add npm script.
- Files: `frontend/package.json`, `scripts/lighthouse.mjs`
- DependsOn: T019,T018

T027 Polish: Quickstart Update
- Action: Update `quickstart.md` with new scripts (test, analyze, lighthouse, deploy) and analytics instructions.
- File: `specs/001-build-a-landing/quickstart.md`
- DependsOn: T026,T024
- [P]

T028 Polish: Dependency Watch Doc
- Action: Create `docs/release-watch.md` listing critical dependencies & review cadence.
- File: `docs/release-watch.md`
- DependsOn: T005
- [P]

T029 Polish: Final Verification Pipeline
- Action: Run end-to-end: lint, tests, build, export, analyze, lighthouse; record results in checklist.
- Files: n/a (execution record in PR description)
- DependsOn: T027,T025,T021

---
Parallel Guidance Examples
- After T001: run T003 and T005 concurrently (`frontend/tailwind.config.js` vs package/config files).
- After T006: run T007 and T008 (model test vs util file distinct).
- After T014: run T015, T019 (animation scaffolds) only if not editing same Hero sections simultaneously; serialize if conflict arises.
- Content pipeline: T017 may proceed while T022 (analytics) runs.
- CI base path changes (T025) must wait for workflow (T024) to reduce churn.

Dependency Notes
- Tests precede implementation: DemoSession test (T007) before event logic (T013) usage in integration test (T021).
- Model (T006) before modal (T012) which before wiring (T014).
- Performance/a11y passes (T019,T018) before lighthouse script (T026).

Validation Checklist
- [ ] DemoSession model + unit test (T006,T007)
- [ ] Modal open/close + events integration test (T012,T021)
- [ ] Static export config verified (T002,T025)
- [ ] Accessibility & reduced motion applied (T018)
- [ ] Performance optimization & analyze output reviewed (T019)
- [ ] CI deploy workflow present (T024) and base path logic (T025)
- [ ] Lighthouse script executed with acceptable scores (T026)
- [ ] Quickstart & dependency watch docs updated (T027,T028)
- [ ] Final verification executed (T029)

Notes
- No contracts → skipped contract test section.
- Single entity resulted in one model task; no services layer needed.
- Additional optional features (carousel, advanced OG generation) deferred to future scope.

END
