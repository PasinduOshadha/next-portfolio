# CLAUDE.md — Senior Developer Portfolio

## Project Overview

A performance-focused, editorial-style senior developer portfolio built with Next.js. The aesthetic is "The Architectural Compiler" — inspired by Vercel and Stripe — combining technical rigor with editorial sophistication.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS (custom config, dark-mode-first)
- **Icons**: Material Symbols Outlined
- **Fonts**: Manrope (headlines) · Inter (body/labels) · JetBrains Mono (code/badges)

---

## Design System

### Philosophy: "The Architectural Compiler"

Use **Intentional Asymmetry** — avoid centering everything. Use generous whitespace to push content into high-focus zones. The goal is a premium technology journal aesthetic where the code is the art. Layouts should feel "heavy" where data lives and "light" where narrative flows, with overlapping elements creating three-dimensional space.

---

### Color Tokens

All colors are registered in the Tailwind config. **Always use token names, never raw hex values.**

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#aec6ff` | High-impact CTAs, active states, links |
| `primary-container` | `#0070f3` | Gradient endpoint, badges |
| `secondary` | `#dbb8ff` | Cyber accent, specialized highlights |
| `secondary-container` | `#6807ba` | Terminal badges, tech stack callouts |
| `surface` | `#131313` | Canvas / page background |
| `surface-container-lowest` | `#0e0e0e` | Code blocks, deepest layers |
| `surface-container-low` | `#1b1b1b` | Section backgrounds |
| `surface-container` | `#1f1f1f` | Default containers |
| `surface-container-high` | `#2a2a2a` | Elevated cards |
| `surface-container-highest` | `#353535` | Glassmorphism base |
| `surface-bright` | `#393939` | Hover states on list items |
| `on-surface` | `#e2e2e2` | Primary text (never use pure `#000` or `#fff` for body text) |
| `on-surface-variant` | `#c1c6d7` | Secondary / muted text |
| `outline` | `#8b90a0` | Ghost borders (use sparingly) |
| `outline-variant` | `#414754` | Ghost border at 15% opacity only |
| `on-primary-container` | `#ffffff` | Text on gradient buttons |

#### The "No-Line" Rule
**Never use `border: 1px solid` for sectioning.** Structure boundaries must be achieved through background color shifts between surface tiers. A `surface-container-low` section adjacent to a `surface` section creates the implicit boundary.

#### The "Glass & Gradient" Rule
- **Primary CTAs**: `bg-gradient-to-br from-primary to-primary-container` at 135°
- **Hover**: Increase brightness by 10%
- **Floating elements**: Glassmorphism — `bg-surface-container-highest/60 backdrop-blur-[20px]`

---

### Typography

| Scale | Token | Font | Size | Weight | Letter Spacing |
|-------|-------|------|------|--------|----------------|
| Display | `display-lg` | Manrope | `3.5rem` (56px) | Bold (800) | `-0.02em` |
| Headline | `headline-md` | Manrope | `1.75rem` (28px) | SemiBold (600) | tight |
| Body | `body-lg` | Inter | `1rem` (16px) | Regular (400) | normal |
| Label/Mono | `label-sm` | JetBrains Mono | `0.6875rem` (11px) | — | `widest` (tracked up) |

- **Headlines**: `font-headline` class (Manrope). Use `tracking-tighter` on large display text.
- **Body**: `font-body` class (Inter). Line height must be `leading-relaxed` (1.6) on dark backgrounds.
- **Mono accents**: `font-mono` (JetBrains Mono). Use for labels, badges, code, and category tags. Always `uppercase tracking-widest`.

---

### Elevation & Depth

Depth comes from **layering surface-container tiers**, not shadows or borders.

| Level | Token | Use Case |
|-------|-------|----------|
| 0 | `surface` | Page canvas |
| 1 | `surface-container-low` | Section backgrounds |
| 2 | `surface-container-high` | Cards, panels |
| Float | `surface-container-highest` + blur | Dropdowns, modals, glass overlays |

**Ambient Shadows** (for truly floating elements):
```
shadow: 0px 40px 60px rgba(226, 226, 226, 0.08)
```
Use `on-surface` tinted, not pure black. Opacity ≤ 8%.

**Ghost Border Fallback** (accessibility only):
```
border border-outline-variant/15
```
Use only when a container boundary is required for a11y. It should be barely visible.

---

### Components

#### Buttons

```html
<!-- Primary (gradient) -->
<button class="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]">
  Label
</button>

<!-- Secondary (glass) -->
<button class="bg-surface-container-high/40 border border-outline-variant/20 backdrop-blur-md text-on-surface px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-high transition-colors">
  Label
</button>
```

Rules:
- `rounded-lg` (`8px`) for all buttons — never `rounded-full` for buttons
- Hover: `scale-105` + `200ms ease-in-out`
- No `border` on primary buttons

#### Cards (Frosted Glass)

```html
<div class="bg-surface-container-high rounded-xl p-8 hover:bg-surface-container-highest transition-colors">
  <!-- content -->
</div>

<!-- For project cards with backdrop blur -->
<div class="backdrop-blur-[12px] bg-surface-container-high/60 rounded-xl p-8">
  <!-- content -->
</div>
```

Rules:
- `rounded-xl` for cards
- No explicit borders — color shift is the boundary
- Hover: shift one surface tier up (`surface-container-high` → `surface-container-highest`)

#### Code / Terminal Elements

```html
<!-- Code snippet block -->
<div class="bg-surface-container-lowest rounded-lg p-6 font-mono text-xs">
  <!-- Terminal header dots -->
  <div class="flex gap-2 mb-4">
    <div class="w-3 h-3 rounded-full bg-error/20"></div>
    <div class="w-3 h-3 rounded-full bg-tertiary/20"></div>
    <div class="w-3 h-3 rounded-full bg-primary/20"></div>
  </div>
  <!-- code content -->
</div>

<!-- Terminal badge -->
<span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest">
  Status: Stable
</span>
```

#### Lists

- **Forbid dividers** (`<hr>`, `border-b`) between list items
- Separation via `gap-y-6` (24px vertical spacing) or hover state: `hover:bg-surface-bright`

#### Atmosphere / Blur Orbs

Always add a background blur orb to hero sections:

```html
<div class="absolute -top-24 -left-24 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
```

Use `primary-container` at 10–20% opacity. Position off-screen or partially hidden.

---

### Layout

- **Max width**: `max-w-[1440px] mx-auto`
- **Horizontal padding**: `px-12` (96px) on desktop sections
- **Spacing grid**: All margins and paddings must be **multiples of 8px** (`p-8`, `gap-6`, `mb-12`, etc.)
- **Section vertical padding**: `py-32` (256px) for major sections — embrace generous whitespace
- **If you think there is enough space, add `16px` more.**

---

### Animation & Interaction

- All hover transitions: `transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]`
- Scale interactions: `hover:scale-105` — felt, not seen
- Avoid complex multi-step animations
- Color transitions: `transition-colors` only when not scaling
- **Do not over-animate.** Micro-interactions must be "snappy."

---

## Do's and Don'ts

### Do
- Use `on-surface` (`#e2e2e2`) for all body text — never pure `#000000`
- Add blur orbs (`bg-primary-container/10 blur-[120px]`) in hero backgrounds for atmosphere
- Use asymmetric layouts with intentional negative space
- Use `font-mono uppercase tracking-widest text-[10px]` for all category/status labels
- Use `rounded-xl` for cards, `rounded-lg` for buttons, `rounded-full` for avatars/pills

### Don't
- Don't use `border: 1px solid` for layout structure — use surface color shifts
- Don't use 100% opaque borders anywhere
- Don't center everything — use asymmetry
- Don't use pure `#ffffff` for text (use `on-primary-container` only on dark filled buttons)
- Don't add borders to primary buttons
- Don't use `rounded-none` or sharp corners anywhere
- Don't add dividers between list items
- Don't use heavy multi-step animations

---

## Tailwind Config Reference

```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#131313",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1b1b",
        "surface-container": "#1f1f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "surface-bright": "#393939",
        "surface-dim": "#131313",
        "background": "#131313",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c1c6d7",
        "primary": "#aec6ff",
        "primary-container": "#0070f3",
        "primary-fixed": "#d8e2ff",
        "primary-fixed-dim": "#aec6ff",
        "on-primary": "#002e6b",
        "on-primary-container": "#ffffff",
        "on-primary-fixed": "#001a43",
        "on-primary-fixed-variant": "#004397",
        "inverse-primary": "#0059c5",
        "secondary": "#dbb8ff",
        "secondary-container": "#6807ba",
        "secondary-fixed": "#efdbff",
        "secondary-fixed-dim": "#dbb8ff",
        "on-secondary": "#470083",
        "on-secondary-container": "#d0a6ff",
        "on-secondary-fixed": "#2b0052",
        "on-secondary-fixed-variant": "#6600b7",
        "tertiary": "#ffb596",
        "tertiary-container": "#ca4e00",
        "tertiary-fixed": "#ffdbcd",
        "tertiary-fixed-dim": "#ffb596",
        "on-tertiary": "#581e00",
        "on-tertiary-container": "#fffeff",
        "on-tertiary-fixed": "#360f00",
        "on-tertiary-fixed-variant": "#7d2d00",
        "surface-tint": "#aec6ff",
        "surface-variant": "#353535",
        "outline": "#8b90a0",
        "outline-variant": "#414754",
        "inverse-surface": "#e2e2e2",
        "inverse-on-surface": "#303030",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      }
    }
  }
}
```

## Fonts (Google Fonts CDN)

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

```css
body { font-family: 'Inter', sans-serif; background-color: #131313; color: #e2e2e2; }
.headline { font-family: 'Manrope', sans-serif; }
.mono { font-family: 'JetBrains Mono', monospace; }
.glass-card { backdrop-filter: blur(20px); background: rgba(42, 42, 42, 0.6); }
```
