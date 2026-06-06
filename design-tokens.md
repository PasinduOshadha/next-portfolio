# Design Tokens — Revamp 2026

> **All agents read this before writing any code.**
> Use CSS variable names in inline styles, and Tailwind class names in JSX.
> Never use raw hex values in component files.

---

## Color Tokens

Approved from `prototype2.html`. Applied via CSS custom properties in `globals.css` and Tailwind config.

| CSS Variable       | Hex       | Tailwind Class         | Role                                      |
|--------------------|-----------|------------------------|-------------------------------------------|
| `--surface`        | `#0d0d0d` | `bg-surface`           | Page background                           |
| `--surface-low`    | `#141414` | `bg-surface-low`       | Section backgrounds                       |
| `--surface-mid`    | `#1a1a1a` | `bg-surface-mid`       | Default cards                             |
| `--surface-high`   | `#222222` | `bg-surface-high`      | Elevated cards                            |
| `--surface-highest`| `#2e2e2e` | `bg-surface-highest`   | Hover states                              |
| `--text-primary`   | `#e8e8e8` | `text-primary-text`    | Primary text                              |
| `--text-muted`     | `#9a9a9a` | `text-muted`           | Secondary / muted text                    |
| `--blue`           | `#4f8ef7` | `text-blue` / `bg-blue`| CTAs, links, active states                |
| `--blue-dark`      | `#1a5fd4` | `bg-blue-dark`         | Gradient endpoint, button fills           |
| `--purple`         | `#c084fc` | `text-purple`          | Accent highlights, tag pills              |
| `--success`        | `#34d399` | `text-success`         | Performance metrics, availability badge   |
| `--outline`        | `#2e2e2e` | `border-outline`       | Ghost borders (sparingly)                 |
| `--white`          | `#ffffff` | `text-white`           | Text on filled buttons only               |

### No-Line Rule
**Never** use `border: 1px solid` for sectioning. Section boundaries come from surface tier shifts (`--surface` → `--surface-low`, etc.).

---

## Typography Scale

| Role         | Size          | Weight | Font         | Letter Spacing  |
|--------------|---------------|--------|--------------|-----------------|
| Display      | `2.5rem` 40px | 800    | Manrope      | `-0.03em`       |
| H1           | `2rem` 32px   | 700    | Manrope      | `-0.02em`       |
| H2           | `1.5rem` 24px | 600    | Manrope      | `-0.01em`       |
| H3           | `1.125rem` 18px | 600  | Manrope      | normal          |
| Body         | `1rem` 16px   | 400    | Inter        | normal          |
| Body SM      | `0.875rem` 14px | 400  | Inter        | normal          |
| Label / Mono | `0.75rem` 12px | 400   | JetBrains Mono | `0.08em` uppercase |
| Tag          | `0.6875rem` 11px | 400 | JetBrains Mono | `0.1em` uppercase  |

**Fonts loaded via `next/font/google` only — no CDN `<link>` tags.**

---

## Spacing

8px grid. All padding/margin/gap values must be multiples of 8px.

| Token  | Value  |
|--------|--------|
| `xs`   | 4px    |
| `sm`   | 8px    |
| `md`   | 16px   |
| `lg`   | 24px   |
| `xl`   | 32px   |
| `2xl`  | 48px   |
| `3xl`  | 64px   |
| `4xl`  | 96px   |

Section vertical padding: `py-24` (96px) minimum on major sections.

---

## Border Radius

| Token  | Value  | Use              |
|--------|--------|------------------|
| `sm`   | `4px`  | Badges, tags     |
| `md`   | `6px`  | Buttons          |
| `lg`   | `10px` | Cards, panels    |
| `full` | `9999px` | Pills, dots    |

---

## Buttons

```jsx
// Primary — solid blue fill
<button className="bg-blue text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-dark transition-colors duration-200">
  Label
</button>

// Ghost
<button className="border border-outline text-primary-text px-5 py-2.5 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200">
  Label
</button>

// Text link
<a className="text-blue hover:underline transition-colors duration-150">Label</a>
```

**No gradient buttons.** No `rounded-full` on buttons.

---

## Cards

```jsx
// Default card
<div className="bg-surface-mid rounded-lg p-6 hover:bg-surface-high transition-colors duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
  {/* content */}
</div>

// Project card (image top strip)
<div className="bg-surface-mid rounded-lg overflow-hidden hover:bg-surface-high transition-colors duration-200">
  <div className="h-[180px] bg-surface-highest" /> {/* image area */}
  <div className="p-6">{/* body */}</div>
</div>
```

**No glassmorphism on cards.**

---

## Badges & Tags

```jsx
// Category badge (accent purple)
<span className="bg-purple/15 text-purple font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
  Category
</span>

// Tech tag
<span className="bg-surface-highest text-muted font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
  Next.js
</span>

// Availability badge
<span className="flex items-center gap-1.5 text-success font-mono text-xs">
  <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
  Available for new projects
</span>
```

---

## Navigation

```jsx
// Fixed top nav — scroll triggers blur background
// Logo: "Pasindu Oshadha" — Manrope 600
// Links: Inter text-sm, text-muted default, text-primary-text hover
// Active link: text-blue (no background fill)
// CTA: ghost button "Contact"

<nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-[12px] border-b border-outline">
```

---

## Animation & Transitions

- Hover transitions: `transition-colors duration-200` or `transition-all duration-200`
- Scale: `hover:scale-[1.02]` — subtle only
- Easing: `ease-[cubic-bezier(0.4,0,0.2,1)]`
- Lenis smooth scroll: wrap in provider in `layout.tsx`
- No complex multi-step animations

---

## CSS Animated Hero Fallback (Agent B)

No Spline scene. Ship this CSS fallback in `components/HeroFallback.tsx`:

```tsx
// Floating gradient orbs — pure CSS, no JS, no hydration issues
<div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue/10 blur-[120px] animate-[drift_8s_ease-in-out_infinite]" />
  <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-purple/10 blur-[100px] animate-[drift_10s_ease-in-out_infinite_reverse]" />
</div>
```

Add keyframe to `globals.css`:
```css
@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 30px) scale(0.97); }
}
```

---

## Tailwind Config Extension (Agent A — add to tailwind config)

```js
colors: {
  'surface':          '#0d0d0d',
  'surface-low':      '#141414',
  'surface-mid':      '#1a1a1a',
  'surface-high':     '#222222',
  'surface-highest':  '#2e2e2e',
  'primary-text':     '#e8e8e8',
  'muted':            '#9a9a9a',
  'blue':             '#4f8ef7',
  'blue-dark':        '#1a5fd4',
  'purple':           '#c084fc',
  'success':          '#34d399',
  'outline':          '#2e2e2e',
},
borderRadius: {
  'sm':   '4px',
  'md':   '6px',
  'lg':   '10px',
  'full': '9999px',
},
fontFamily: {
  'display': ['var(--font-manrope)', 'sans-serif'],
  'body':    ['var(--font-inter)', 'sans-serif'],
  'mono':    ['var(--font-jetbrains)', 'monospace'],
},
```

---

## Out of scope (do not add)
- Glassmorphism on cards
- Gradient buttons
- tsparticles / confetti (packages removed)
- Google Fonts CDN `<link>` tags (use `next/font/google`)
- styled-components (package removed)
