# Frontend Animation Learnings (Headline GSAP Stagger)

This document captures the reasoning steps, pitfalls, and chosen practices while implementing the animated hero headline. Useful for future contributors (human or AI agents) touching motion / layout.

---

## 1. Goal

Animate the landing hero headline one character at a time (stagger) with a downward->upward entrance (bounce) while keeping layout stable and accessible.

### Requirements Recap

- Characters appear sequentially (stagger) on initial load.
- Motion: rise from below, slight overshoot, settle.
- Each word masked so characters appear from “nowhere” (overflow clipping) WITHOUT clipping descenders after animation.
- Maintain accessibility (screen readers should read full phrase once).

---

## 2. Implementation Summary

- Converted the static `<h1>` into structured markup:
  - Each word wrapped in a container div (initially `overflow-hidden`).
  - Each character placed in a `<span data-headline-char>` for GSAP selection.
  - Added visually hidden full headline text (`sr-only`) + `aria-label` on the `<h1>`.
- GSAP timeline uses `keyframes` for a bounce style sequence.
- Initial reveal used `yPercent` for easier relative movement vs variable font size.
- Added a separate fade-up animation for surrounding content using a data attribute.

---

## 3. Clipping Issue Investigation

Observed: The lowercase `g` in “Agent” appeared clipped at the baseline after animation ended.

### Root Causes Considered

| Cause | Status | Notes |
|-------|--------|-------|
| Insufficient container vertical space | ✅ Confirmed | Tight mask height plus transforms left no room for descenders. |
| Residual transform sub-pixel values | Possible | Could exacerbate edge cropping. |
| Downward translate on inner wrapper | ✅ Contributed | Reduced effective bottom padding inside mask. |
| Very tight line-height (1.05) | Minor | Not sole cause but reduces buffer. |
| `will-change: transform` on many spans | Minor | Can promote layers; compositor edges line up exactly with mask. |
| Percent-based transforms (`yPercent`) rounding | Possible | Rounding may place glyph at mask edge. |

### Diagnostic Strategy (Option A)

We removed `overflow-hidden` ONLY from the “Agent” word wrapper. Clipping disappeared ⇒ confirmed the mask, not glyph rendering, was primary problem.

---

## 4. Lessons & Best Practices

- **Provide honest vertical padding**
  - Negative margin tricks are fragile for animated text masks.
  - Prefer `py-[0.35em]` (or similar) inside the mask; adjust outer layout separately.
- **Clear transforms post-animation (optional hardening)**
  - `onComplete: () => gsap.set(chars, { clearProps: 'transform' })` returns elements to normal flow rendering, avoiding compositor edge quirks.
- **Avoid over-nudging with translate**
  - Downward offsets inside an overflow container quickly reintroduce clipping.
- **Choose `y` vs `yPercent` intentionally**
  - `yPercent` is convenient, but final resting position may differ by fractional pixels; `y: 0` with explicit starting pixel offset can be more deterministic.
- **Keep accessibility intact**
  - Always preserve an aria-readable alternative (sr-only string or `aria-label`).
- **Minimal DOM vs. control trade-off**
  - Character spans are necessary; avoid extra wrapper layers.
- **Use diagnostic toggles**
  - Temporarily removing `overflow-hidden` from a single word is a fast isolation technique.

---

## 5. Suggested Future Refinements

| Refinement | Benefit |
|------------|---------|
| Introduce `.word-mask` utility class | Centralizes padding & overflow logic. |
| Reduced motion check | Respect user preferences (`prefers-reduced-motion`). |
| Clear transforms end-state | Avoid subtle anti-aliasing / clipping edge cases. |
| Switch to pixel-based y tween | Deterministic final baseline. |
| Reusable `<AnimatedHeadline />` component | Encapsulates markup + motion + accessibility. |

---

## 6. Example Hardened Pattern (Reference Only)
 
```tsx
// Pseudocode snippet
const words = ['For', 'Agent', 'Era']
return (
  <h1 aria-label="For Agent Era" className="leading-tight font-bold ...">
    <span className="sr-only">For Agent Era</span>
    <div className="space-y-2">
      <div className="flex flex-wrap">
        {words.map(w => (
          <div key={w} className="word-mask mr-4 last:mr-0">
            {Array.from(w).map((c, i) => (
              <span key={i} data-headline-char className="inline-block">{c}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </h1>
)
```
CSS (Tailwind layer):

```css
.word-mask { @apply overflow-hidden py-[0.4em]; }
```
GSAP (concept):

```ts
gsap.set(chars, { y: 42, opacity: 0 })
gsap.to(chars, {
  keyframes: [
    { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' },
    { y: -8, duration: 0.16, ease: 'power1.out' },
    { y: 0, duration: 0.28, ease: 'power2.out' }
  ],
  stagger: 0.045,
  onComplete: () => gsap.set(chars, { clearProps: 'transform' })
})
```

---
## 7. Checklist for Future Headline Animations
- [ ] Wrap words (not individual chars) with the mask container.
- [ ] Give mask bottom padding >= 0.4em.
- [ ] Provide accessible full text (`sr-only` or `aria-label`).
- [ ] Avoid permanent `translateY` offsets inside masks.
- [ ] Optionally clear transforms after animation.
- [ ] Test a descender-heavy word (e.g., "gyp pq") quickly with overflow hidden.

---
## 8. Attribution
Created collaboratively during iterative debugging of hero animation (Sept 2025).

---
If you add new animation variants, append a dated subsection under **Future Refinements**.
