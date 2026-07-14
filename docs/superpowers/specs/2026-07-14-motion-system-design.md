# Motion System Design — Hero Particles, GSAP Staggers, Page Transitions

Approved 2026-07-14.

## Goals

Add motion to the portfolio without any performance regression:
1. Hero background animation: dots + connecting lines, mouse-tracked, 3D feel, no globe
2. GSAP word-stagger animations on titles (hero H1s on load, section H2s on scroll)
3. Page entrance/exit transitions

## Components

### 1. HeroParticles (components/animations/HeroParticles.tsx)

- Client component, custom Canvas 2D, zero dependencies
- Three depth layers of dots; size, opacity, and drift speed scale with depth (parallax = 3D feel)
- Lines drawn between dots closer than a distance threshold; line opacity fades with distance
- Mouse: dots within radius get repelled; whole field tilts slightly toward cursor
- Colors from design tokens: dots `#aec6ff` / `#0070f3` at low opacity on `#131313`
- Performance guards:
  - `requestAnimationFrame` loop; DPR capped at 2
  - Particle count scales with viewport width (~40 mobile, ~90 desktop)
  - Pauses when off-screen (IntersectionObserver) and on `visibilitychange`
  - `prefers-reduced-motion`: renders static field, no animation loop
  - `pointer-events: none`, absolutely positioned behind hero content
- Loaded with `next/dynamic` `ssr: false` on homepage hero only — zero SSR/LCP impact

### 2. StaggerTitle (components/animations/StaggerTitle.tsx)

- GSAP 3.13+ core + ScrollTrigger + SplitText (free since 3.13), dynamic-imported (~30KB gz deferred)
- Hero H1: words rise + fade on load; 0.5s total, 0.04s stagger
- Section H2s: same animation, ScrollTrigger `once: true` on viewport entry
- SSR HTML contains plain text (SEO / no-JS safe); JS hides text only at animation start — no FOUC, no LCP penalty
- `gsap.matchMedia` disables everything under `prefers-reduced-motion`

### 3. Page transitions — next-view-transitions (~2KB)

- Browser-native View Transitions API: 250ms crossfade + 8px slide-up, GPU-composited
- True exit AND entrance animations; unsupported browsers get instant navigation
- `<ViewTransitions>` wraps root layout; `next/link` swapped to the lib's `Link` in Nav, Footer, and card links

## Performance budget

+~36KB gz total JS, all dynamically imported after hydration. Animations use
opacity/transform only (no layout, no CLS). Nothing blocks LCP. Durations short
per CLAUDE.md "felt, not seen".
