# MCPShield Landing Page Constitution

## Core Principles

### I. Design-First, Component-Driven
Every feature begins as a visual and interaction intent captured in a component. Components must be:
- Self-contained and documented
- Accept props for future extension without structural rewrites
- Built with accessibility and responsive behavior in mind

Rationale: A design-first approach keeps the landing page focused on clarity and consistency across variants.

### II. Static-First (Static Export Friendly)
The site is built to be statically exported (GitHub Pages) so all runtime behavior must be client-safe. Avoid Node-only APIs or server-side routes. Prefer static JSON manifests, client-side fetches to public endpoints, or build-time generation.

Rationale: Ensures predictable deploys and compatibility with pages-style hosting.

### III. Performance & Progressive Enhancement
Prioritize fast first paint and a functional baseline. Heavy visual enhancements (interactive backgrounds, physics, third-party visualizers) must be progressively enhanced and lazy-loaded using `requestIdleCallback` or after user interaction.

Rationale: Maintain good Lighthouse scores and UX on constrained devices.

### IV. Accessibility By Default
All interactive controls must be keyboard-accessible with appropriate semantic elements and ARIA where necessary. Respect `prefers-reduced-motion` and provide non-animated fallbacks.

Rationale: Inclusive design reduces maintenance and legal risk.

### V. Simplicity & Observability
Keep logic small and explicit. Prefer composable helpers for repeated patterns. Surface structured logging for build-time or client-side errors and provide clear error messages for maintainers.

Rationale: Easier to audit, test, and maintain over time.

## Technology & Stack Constraints

- **Framework:** Next.js (App Router) configured for `output: 'export'` to support static export.
- **Language:** TypeScript for typesafety and better DX.
- **Styling:** Tailwind CSS with utility composition (use `cn` helper) and shadcn/ui primitives for accessible base components.
- **Theming:** `next-themes` for light/dark support with a small `ThemeProvider` wrapper.
- **Package Manager:** `npm` (lockfiles required for CI reproducibility).
- **UI Primitives / Libraries:** Radix UI via shadcn components, optional `gsap` for complex timelines (use sparingly).

Constraints:
- No server-only code; avoid `getServerSideProps` and API routes that require Node at runtime.
- Images set to `unoptimized: true` for static export compatibility.
- Fonts and other static assets must be placed in `public/` and referenced relative to `basePath` when needed.

# Tech Stack & Dependencies

---
**Version:** 1.0.0
**Node.js Requirement:** >=22.0.0
**Last Updated:** January 2025

## Core Framework Stack

### Next.js & React (Latest Generation)
- **Next.js**: `^15.3.2` - App Router, Latest features
- **React**: `^19.1.0` - Latest React 19 with Concurrent Features
- **React DOM**: `^19.1.0` - Matching React version
- **TypeScript**: `^5.7.3` - Latest stable TypeScript

**🔥 Version Notes:**
- React 19 includes built-in optimizations and new concurrent features
- Next.js 15.x brings improved App Router and performance
- Requires Node.js 22+ for optimal compatibility

## UI Component Foundation

### Radix UI Ecosystem (Comprehensive)
Primary unstyled component primitives:
- `@radix-ui/react-accordion` `^1.2.11`
- `@radix-ui/react-alert-dialog` `^1.1.14`
- `@radix-ui/react-avatar` `^1.1.10`
- `@radix-ui/react-checkbox` `^1.3.2`
- `@radix-ui/react-dialog` `^1.1.14`
- `@radix-ui/react-dropdown-menu` `^2.1.15`
- `@radix-ui/react-popover` `^1.1.14`
- `@radix-ui/react-select` `^2.2.5`
- `@radix-ui/react-tabs` `^1.1.12`
- `@radix-ui/react-toast` `^1.2.14`
- And 15+ additional Radix components

### Styling & Design System
- **TailwindCSS**: `^3.4.16` - Core utility framework
- **Tailwind Animate**: `^1.0.7` - Animation utilities
- **Tailwind Forms**: `^0.5.10` - Form styling
- **Tailwind Typography**: `^0.5.16` - Rich text styling
- **Class Variance Authority**: `^0.7.1` - Component variants
- **Tailwind Merge**: `^1.14.0` - Dynamic class merging
- **CLSX**: `^2.1.1` - Conditional classes

## Form Management & Validation

### React Hook Form Stack
- **React Hook Form**: `^7.56.4` - Primary form library
- **@hookform/resolvers**: `^3.10.0` - Schema resolvers
- **Zod**: `^3.25.67` - Runtime validation & type safety

**📋 Best Practices:**
- Use React Hook Form for all forms (performance optimized)
- Zod schemas for both client/server validation
- Leverage `@hookform/resolvers/zod` for integration

## Content & Documentation

### ContentLayer Stack
- **ContentLayer2**: `0.5.7` - Content transformation
- **Next ContentLayer2**: `0.5.7` - Next.js integration

### Markdown Processing
- **Remark**: `^15.0.0` - Markdown processor
- **Remark GFM**: `^4.0.0` - GitHub Flavored Markdown
- **Remark Math**: `^6.0.0` - Math expression support
- **Rehype**: Multiple plugins for HTML processing
- **Reading Time**: `1.5.0` - Article reading estimates

## Animation & Interactions

### Motion & Carousel
- **Framer Motion**: `^12.15.0` - Advanced animations
- **Embla Carousel React**: `^8.6.0` - Touch-friendly carousels

## Data Visualization & Tables

### Analytics & Charts
- **Recharts**: `^2.15.3` - React chart library
- **@tanstack/react-table**: `^8.21.3` - Powerful table component

## UI Enhancement Libraries

### Icons & Visual Elements
- **Lucide React**: `^0.475.0` - Primary icon system
- **@radix-ui/react-icons**: `^1.3.0` - Radix icon set
- **@icons-pack/react-simple-icons**: `^12.9.0` - Brand icons

### Advanced UI Components
- **Sonner**: `^1.7.4` - Toast notifications
- **CMDK**: `^1.1.1` - Command palette
- **Vaul**: `^1.1.2` - Mobile drawer component
- **React Day Picker**: `^8.10.1` - Date picker
- **React Resizable Panels**: `^2.1.8` - Layout panels

## Development & Build Tools

### Linting & Formatting
- **ESLint**: `^9.27.0` - Latest ESLint 
- **TypeScript ESLint**: `^8.33.0` - TypeScript rules
- **Prettier**: `^3.4.2` - Code formatting
- **Prettier Tailwind Plugin**: `^0.6.11` - Tailwind class sorting

### Build & Bundle
- **ESBuild**: `^0.25.3` - Fast bundling
- **Next Bundle Analyzer**: `^15.3.2` - Bundle analysis
- **Cross-env**: `^7.0.3` - Cross-platform env vars

### Git Workflow
- **Husky**: `^9.1.7` - Git hooks
- **Lint Staged**: `^15.4.2` - Staged file processing

## Utilities & Helpers

### Date & String Processing
- **Date-fns**: `^3.6.0` - Date manipulation
- **GitHub Slugger**: `^2.0.0` - URL-safe slugs
- **JS-YAML**: `^4.1.0` - YAML processing

### File & Media
- **Image Size**: `^2.0.2` - Image dimensions
- **Probe Image Size**: `^7.2.3` - Image metadata
- **MIME Types**: `^2.1.35` - MIME type detection

## Analytics & Monitoring

### Vercel Ecosystem
- **@vercel/analytics**: `^1.5.0` - Analytics
- **@vercel/og**: `^0.6.8` - Open Graph images

### Error Handling
- **React Error Boundary**: `^6.0.0` - Error boundaries

## Theme & User Experience

### Theme Management
- **Next Themes**: `^0.4.6` - Dark/light mode
- **@emotion/is-prop-valid**: `^1.3.1` - Emotion utilities

## Content Platform Integration

### Shipixen Platform
- **@shipixen/pliny**: `^2.3.1` - Shipixen blog platform utilities

---

## 🎯 Architectural Best Practices

### Component Architecture
```typescript
// Use this pattern for all components
export const ComponentName = ({ ...props }) => {
  // 1. Hooks first
  // 2. Event handlers
  // 3. Render logic
  return <div>...</div>
}
```

### Form Patterns
```typescript
// Standard form setup
const form = useForm<FormSchema>({
  resolver: zodResolver(schema),
  defaultValues: {...}
})
```

### Styling Approach
- Radix UI for behavior + TailwindCSS for styling
- Use `cn()` utility for conditional classes
- Leverage CVA for component variants

### Performance Considerations
- React 19's automatic optimizations
- Next.js 15 App Router benefits
- Lazy loading with React.lazy()
- Image optimization with Next.js Image

### File Organization
```
components/
  ├── shared/ui/          # Radix + Tailwind components
  ├── layout/             # Layout-specific components
  └── [feature]/          # Feature-specific components
```

---

## ⚡ Version Compatibility Notes

- **React 19** introduces automatic memoization
- **Next.js 15** requires React 18+ (you have 19)
- **Node.js 22+** required for optimal performance
- **TypeScript 5.7** includes latest decorators support
- All Radix components are latest stable versions
- TailwindCSS 3.4+ supports modern CSS features

## 🚨 Critical Dependencies to Monitor

1. **React 19** - Still stabilizing, monitor for patches
2. **Next.js 15** - Watch for App Router updates
3. **ContentLayer2** - Community fork, ensure maintenance
4. **Radix UI** - Core to your design system
5. **React Hook Form** - Critical for form performance

## Development Workflow

- Branching: `feat/<short-topic>`, `fix/`, `chore/`.
- Commits: Conventional commit style (e.g., `feat: add scrollspy nav`).
- PRs: Include a short description, screenshots for visual changes, and reference any ADRs. Ensure `npm run build` succeeds locally.
- Reviews: Verify accessibility, cross viewport behavior, and that no Node-only APIs were introduced.

Testing:
- E2E smoke tests with Playwright for critical flows (hero rendering, nav, CTAs).
- Unit tests are optional until business logic requires them; prioritize component stories or visual regression where needed.

CI Requirements:
- `npm ci` then `npm run build` (static export). Optionally run Playwright smoke tests as a gating step.

## Component & Section Conventions

- Components live under `components/` and UI primitives under `components/ui/`.
- Use PascalCase filenames for components and keep them small (avoid > ~80 lines of JSX).
- Sections should expose predictable `id` attributes for in-page anchor navigation: `#hero`, `#features`, `#pricing`, `#team`, `#contact`.
- Keep layout containers constrained to `max-w-[1400px]` with consistent `px-4 sm:px-6 lg:px-8` padding.

## Theming & Typography

- Add theme tokens through Tailwind config (`bg-background`, `text-primary`, `muted-foreground`).
- Preload critical font subsets where it materially improves LCP; otherwise lazy-load custom fonts and fallback to system stacks.

## Accessibility & Motion

- Respect `prefers-reduced-motion` at every animation entry point.
- Provide `aria-hidden="true"` for purely decorative background elements and ensure they do not capture pointer events by default.

## Interactive Backgrounds

- Use a dedicated client component (e.g., `components/unicorn-background.tsx`) that injects third-party scripts idempotently.
- Defer script injection to `requestIdleCallback` or a low-priority user interaction and guard against duplicate initialization.

Guideline: The background must be decorative and non-blocking; enable `pointer-events-none` unless an explicit interactive mode is added.

## Performance & Assets

- Preload hero-critical assets (small font subset, hero image) when it improves LCP.
- Keep JS bundles small; avoid shipping large libraries to the initial route when possible.
- Check `out/` after `next export` to verify assets and paths; ensure `.nojekyll` exists to allow `_next` assets.

## GitHub Pages Deployment

- Build using `npm run build` with `output: 'export'` and deploy `out/` to GitHub Pages.
- Compute `basePath` and `assetPrefix` at build-time from `GITHUB_REPOSITORY` in CI when exporting to a repository subpath.

Constraints:
- No server-side features; all dynamic behavior must be client-side and public.

## Security & Privacy

- Do not embed secrets in the static bundle.
- Sanitize any user-provided inputs client-side and validate server-side when using external endpoints.
- Pin third-party scripts where possible and lazy-load them to minimize attack surface.

## Observability & Error Handling

- Surface build-time and client-side errors with structured messages and stacktraces when in development.
- For client errors in production, prefer a lightweight reporting hook (opt-in) and do not leak sensitive data.

## ADRs & Governance

- ADRs live in `docs/adr/` and must be created for major architectural choices, provider changes, or breaking API changes.
- Amendments to the constitution require an ADR and a brief migration plan where applicable.

Governance Rules:
- All PRs must reference any ADRs that are impacted.
- Complexity must be justified in the PR description; prefer smaller, incremental changes.

**Version**: 1.0.0 | **Ratified**: 2025-09-15 | **Last Amended**: 2025-09-15