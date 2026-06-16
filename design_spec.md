# design_spec.md — Cadence Nova Visual Design Specification

> Referenced by: `CLAUDE.md` | Used by: designer, frontend developer
> This file defines every visual decision for nova.cadenceinfotech.com.

---

## 1. Brand Identity

### Wordmark
- **Text:** "Cadence Nova"
- **"Cadence"** — font weight 300–400 (Light/Regular)
- **"Nova"** — font weight 700–800 (Bold/ExtraBold)
- **Colour:** Nova Indigo `#1E3A8A`
- **Logic:** Cadence = institutional trust, Nova = product identity

### Product Colour Family (Future Reference)
| Product | Colour |
|---------|--------|
| Cadence Nova | Deep Indigo `#1E3A8A` |
| Cadence Gurukul | Green (TBD) |
| Cadence Cognify | Purple (TBD) |
| Cadence Sprouts | Orange (TBD) |

---

## 2. Colour Palette

> **Design direction (updated June 2026):** Premium, minimal, Apple-inspired aesthetic. Neutral warm grays as canvas with `#111827` near-black for all type. Nova Blue `#2563EB` is an accent only — not used for large backgrounds or heavy elements. The only dark section is the AI section which uses `#0b0f1a`.

### Primary Palette

```css
/* Nova Blue — CTAs, links, active states, icon tints */
--color-nova-blue: #2563EB;

/* Near Black — ALL headlines across every section */
--color-text-headline: #111827;

/* Cadence Gradient — ONLY on "intelligence" in hero headline. Nowhere else. */
--gradient-cadence: linear-gradient(90deg, #E91E8C, #F97316);
```

### Background Palette

```css
/* Hero outer wrapper */
--color-bg-hero-outer: #ededed;

/* Hero inner container */
--color-bg-hero-inner: #d9d9d9;

/* Dashboard tray / warm light section (ProofStrip, AppStore, Comparison, MidCTA) */
--color-bg-warm: #f5f2ee;

/* White — alternating section canvas (Platform, CadenceCare, pre-footer) */
--color-bg-white: #FFFFFF;

/* Dark — AI section and footer ONLY */
--color-bg-dark: #0b0f1a;

/* Table row alternate */
--color-bg-row-alt: #f9f8f6;
```

### Text Palette

```css
/* Near Black — ALL headlines, card titles, primary body */
--color-text-primary: #111827;

/* Medium Gray — subtext, captions, meta, descriptions */
--color-text-secondary: #6B7280; /* or neutral-500 */

/* Light Gray — placeholder, muted labels */
--color-text-muted: #9CA3AF;

/* White — text on dark backgrounds (#0b0f1a sections) */
--color-text-inverse: #FFFFFF;

/* Muted white — secondary text on dark bg */
--color-text-dark-secondary: #94A3B8;
```

### Accent Palette

```css
/* Growth Green — ✓ checkmarks, "Available Now" badge bg */
--color-success: #16A34A;

/* Amber — "Coming Soon" badges (Tell Nova — never change status) */
--color-warning: #F59E0B;

/* Error / cross marks */
--color-error: #EF4444;

/* Neutral dividers */
--color-divider: #E5E7EB; /* border-neutral-200 */
```

### Tailwind v4 CSS tokens (in `globals.css @theme`)

```css
/* Project uses Tailwind v4 — no tailwind.config.js. Tokens live in globals.css */
@theme {
  --color-nova-indigo: #1E3A8A;   /* keep for inner pages using PageHero */
  --color-nova-blue: #2563EB;
  --color-nova-frost: #EEF4FB;    /* keep for inner pages */
  --color-nova-night: #0F1B3C;    /* keep for inner pages */
  --color-nova-subtle: #F5F7FA;
  --color-cadence-pink: #E91E8C;
  --color-cadence-orange: #F97316;
}
/* Homepage sections use raw hex values (#f5f2ee, #0b0f1a, #111827) for precision */
```

---

## 3. Typography

### Font Family
- **Primary:** [Inter](https://fonts.google.com/specimen/Inter) — loaded via `next/font/google`, CSS var `--font-inter`
- **Serif accent:** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) — italic only, CSS var `--font-instrument-serif`
- **Fallback:** `Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`

### Type Scale (updated June 2026)

| Role | Tag | Weight | Desktop | Mobile | Notes |
|------|-----|--------|---------|--------|-------|
| Hero Headline | h1 | 500 Medium | `clamp(34px, 7.5vw, 72px)` | 34px | `tracking-[-0.02em]`, `line-height: 1.05` |
| Section Headline | h2 | 500 Medium | 36–44px | 28px | `tracking-tight`, lighter than before |
| Italic tagline | span | 400 Regular | same as h2 | same | Instrument Serif italic — used in h2 line 2 |
| Sub-headline / card title | h3 | 600 SemiBold | 14–20px | 14px | `text-[#111827]` — NOT indigo |
| Body / description | p | 400 Regular | 14–16px | 14px | `text-neutral-500` |
| Labels / meta | span | 500 Medium | 11–13px | 11px | |
| CTA button text | button | 500 Medium | 14–15px | 14px | pill shape, dark bg |
| Nav items | a | 400–500 | 14px | — | |
| Eyebrow / badge | span | 600 SemiBold | 11–12px | 11px | uppercase, tracking-wide |

### Instrument Serif Usage Rules
- **Use:** Second line of section h2 headlines for an editorial feel (e.g., `One platform.` in hero, `Inside one platform.` in PlatformSection)
- **Do not use** for body copy, card titles, buttons, or nav items
- Always `fontStyle: "italic"`, `fontWeight: 400`
- Applied inline: `style={{ fontFamily: "var(--font-instrument-serif), 'Georgia', serif", fontStyle: "italic", fontWeight: 400 }}`

### Letter Spacing
- Headlines: `tracking-tight` (Tailwind = `-0.025em`)
- Hero h1: `letterSpacing: "-0.02em"` (inline)
- Body: `normal`
- Badges/eyebrows: `tracking-wide`

---

## 4. Spacing System

Use Tailwind's default 4px base spacing. Key spacings:

```
Section padding (vertical): py-24 (96px desktop) / py-16 (64px mobile)
Section padding (horizontal): px-6 (24px mobile) / container max-w-7xl mx-auto (desktop)
Card padding: p-8 (32px)
Card gap in grid: gap-6 (24px)
Between headline and subtext: mb-4 (16px)
Between subtext and CTA: mt-8 (32px)
```

---

## 5. Component Specifications

### 5.1 CTA Buttons

**Primary — "Book a Demo"** (hero style — used across homepage)
```css
background: #0b0f1a;  /* near-black — matches hero CTA */
color: #FFFFFF;
border-radius: 9999px; /* pill */
padding: 10px 28px 10px 8px; /* right side has circle icon */
font-size: 14–15px;
font-weight: 500;

/* Circle icon on right */
.icon-circle {
  width: 28px; height: 28px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
}

hover: background: #1f2937;
```

**Ghost / Text Link**
```css
color: #2563EB;
font-weight: 500;
text-decoration: underline on hover;
underline-offset: 2px;
```

### 5.2 Navigation Bar

```css
position: fixed;
top: 0;
width: 100%;
background: #FFFFFF;
z-index: 50;
height: 64px;
padding: 0 24px;

/* On scroll — add shadow */
box-shadow: 0 1px 3px rgba(0,0,0,0.08);
```

Nav items: 15px, weight 500, color `#111827`, hover color `#1E3A8A`

### 5.3 Module Cards (Section 03)

```css
background: #FFFFFF;
border: 1px solid #E5E7EB; /* border-neutral-200 */
border-radius: 16px; /* rounded-2xl */
padding: 24px;
transition: box-shadow 200ms ease, transform 200ms ease;

hover:
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);  /* neutral shadow, not blue-tinted */
  transform: translateY(-2px);
```

Icon container: 40×40px, `bg-[#f5f2ee]` rounded-xl, `text-[#2563EB]` icon
Module name: 14px, SemiBold, `#111827` (NOT indigo)
Description: 14px, Regular, `text-neutral-500`

### 5.4 Social Proof Strip

```css
background: #f5f2ee;  /* warm light gray — updated from frost blue */
border-top: 1px solid #E5E7EB;
border-bottom: 1px solid #E5E7EB;
padding: 20px 24px;
```

Text: 14px, weight 500, `#111827`. Icon 18px `text-[#2563EB]`.
Vertical divider: 1px solid `#D1D5DB` (neutral-300), height 32px.

### 5.5 Comparison Table

```css
/* Header row — updated */
background: #0b0f1a;  /* deep dark, matches footer */
color: #FFFFFF;
font-weight: 600;
font-size: 14px;

/* Alternating rows */
even: background: #FFFFFF;
odd: background: #f9f8f6;

/* ✓ checkmarks */
color: #16A34A; font-weight: 700;

/* ✗ crosses */
color: #EF4444; font-weight: 700;

/* ⚠ warnings */
color: #D97706; font-weight: 700;

/* Top accent border — Nova Blue */
border-top: 3px solid #2563EB;

/* Integration logo pills */
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 12px;
```

### 5.6 Form Fields

```css
/* Input */
border: 1px solid #D1D5DB;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
background: #FFFFFF;

focus:
  border-color: #2563EB;
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);

/* Label */
font-size: 14px;
font-weight: 500;
color: #374151;
margin-bottom: 6px;
```

### 5.7 Status Badges

```css
/* "Available Now" — Ask Nova */
background: #DCFCE7;
color: #16A34A;
font-size: 12px;
font-weight: 600;
padding: 2px 10px;
border-radius: 9999px;
display: inline-flex;
align-items: center;
gap: 6px;
/* dot: 6px circle, background #16A34A */

/* "Coming Soon" — Tell Nova */
background: #FEF3C7;
color: #B45309;
/* dot: 6px circle, background #F59E0B */
```

### 5.8 Section Divider

```css
/* Between major sections */
border: none;
border-top: 1px solid #E5E7EB;
margin: 0;
```

### 5.9 Callout / Highlight Box

```css
/* Light callout (e.g., Nova Lounge strip) */
background: #f5f2ee;
border-left: 4px solid #2563EB;
border-radius: 0 16px 16px 0; /* rounded-r-2xl */
padding: 20px 24px;
font-size: 14–16px;
color: #111827;
```

Dark variant (inside dark AI section):
```css
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 16px;
color: #E2E8F0;
```

### 5.10 Section Background Rhythm (homepage)

| Section | Background | Notes |
|---------|-----------|-------|
| Hero | `#ededed` outer / `#d9d9d9` inner | Convix-style clipped container |
| ProofStrip | `#f5f2ee` | warm gray |
| PlatformSection | `#ffffff` | white |
| AISection | `#0b0f1a` | only dark section |
| AppStoreSection | `#f5f2ee` | warm gray |
| CadenceCareSection | `#ffffff` | white |
| MidCTASection | `#f5f2ee` | warm gray, dark pill CTA button |
| ComparisonSection | `#f5f2ee` | warm gray |
| Pre-footer | `#ffffff` | white |
| Footer | `#0b0f1a` | matches AI section |

---

## 6. Hero Module Diagram

The central visual element of the homepage hero. Built as SVG or React component.

**Structure:**
- Central hub: Circle, 80px diameter, Nova Indigo `#1E3A8A`, white "Nova" text
- 8 spokes: Lines from hub to 8 node circles, stroke `#CBD5E1`, 1.5px
- Node circles: 56px diameter, white fill, Nova Blue `#2563EB` border 2px
- Node icons: 24px, Nova Blue
- Node labels: 12px, SemiBold, `#111827`, below node circle

**Animation (optional, desktop only):**
```css
/* Pulse on hub */
@keyframes pulse-hub {
  0%, 100% { box-shadow: 0 0 0 0 rgba(30,58,138,0.3); }
  50% { box-shadow: 0 0 0 12px rgba(30,58,138,0); }
}

/* Spoke draw-in on load */
stroke-dasharray: 100;
stroke-dashoffset: 100;
animation: draw 0.6s ease forwards;
animation-delay: calc(var(--i) * 0.1s);

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

**8 Nodes (clockwise from top):**
1. Student Info System (graduation cap)
2. Fee Management (rupee coin)
3. Attendance (calendar check)
4. Transport (bus)
5. Hostel (building)
6. Library (open book)
7. LMS / Learning (screen)
8. Communication (bell)

---

## 7. Dark Section — Nova AI (Section 04)

```css
background: #0b0f1a;  /* updated: matches hero CTA button and footer */
color: #FFFFFF;
padding: 96px 24px;
```

**AI Feature Cards:**
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.10);
border-radius: 16px;
padding: 32px;
backdrop-filter: blur(8px);
```

Card headline: 24px, Bold, white
Card copy: 16px, Regular, `#CBD5E1`

**Nova Command strip (bottom of dark section):**
```css
background: rgba(37, 99, 235, 0.15);
border: 1px solid rgba(37, 99, 235, 0.30);
border-radius: 12px;
padding: 24px 32px;
```

⌘K keyboard shortcut display:
```css
background: rgba(255,255,255,0.10);
border: 1px solid rgba(255,255,255,0.20);
border-radius: 6px;
padding: 4px 10px;
font-family: monospace;
font-size: 14px;
```

---

## 8. Responsive Breakpoints

```css
/* Tailwind defaults */
sm: 640px    /* Large mobile / small tablet */
md: 768px    /* Tablet */
lg: 1024px   /* Small desktop */
xl: 1280px   /* Standard desktop */
2xl: 1536px  /* Wide desktop */
```

| Element | < 768px (Mobile) | ≥ 1024px (Desktop) |
|---------|------------------|--------------------|
| Hero | Single column, copy above diagram | Two-column 60/40 split |
| Module diagram | Simplified 2×4 icon grid | Full hub-and-spoke SVG |
| Nav | Hamburger drawer | Full horizontal |
| Comparison table | Card-per-row stacked | Full 3-column table |
| AppStore grid | 1-column | 3-column |
| AI section cards | Stacked vertically | Side-by-side |
| Footer | 2-column or accordion | 4-column |
| Section padding | py-16 (64px) | py-24 (96px) |
| Animations | Disabled | Enabled |

**Mobile sticky CTA:**
```css
/* Fixed bottom bar on mobile only */
@media (max-width: 768px) {
  .sticky-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    box-shadow: 0 -4px 16px rgba(0,0,0,0.08);
    z-index: 40;
  }
  .sticky-cta button {
    width: 100%;
  }
}
```

---

## 10. Animation System (Added: June 2026)

### CSS Keyframes (in `app/globals.css`)

| Class | Effect | Duration | Use case |
|-------|--------|----------|----------|
| `.animate-fade-in-up` | opacity 0→1, translateY 30px→0 | 0.6s ease-out | Hero elements on load |
| `.animate-fade-in-overlay` | opacity 0→1 | 0.4s ease-out | Tab overlay wrapper |
| `.animate-slide-up-overlay` | opacity 0→1, translateY 20px→0 | 0.5s ease-out | Tab overlay card |

### Hero Stagger Pattern

Each hero element has `opacity: 0` inline + `.animate-fade-in-up` class with increasing `animationDelay`:

| Element | Delay |
|---------|-------|
| Badge | 0.2s |
| Headline | 0.3s |
| Sub-headline | 0.4s |
| CTAs | 0.5s |
| Tab bar | 0.6s |
| Product window | 0.7s |
| Integration logos | 0.8s |

### Below-fold Sections

Use `<AnimateIn delay={n}>` from `components/ui/AnimateIn.tsx`. Uses IntersectionObserver (threshold: 0.15) — fires `fadeInUp` only when element enters viewport. Never apply `opacity: 0` inline on below-fold elements (hides content if JS fails).

### Hero Design — Updated Spec (replaces original Section 1 hero layout)

| Property | Value |
|----------|-------|
| Layout | Centred single column (replaced 60/40 split) |
| Headline size | 80px desktop / 64px tablet / 52px mobile |
| Headline weight | 800 ExtraBold (unchanged) |
| Primary CTA colour | `#111827` near-black (replaces nova-blue `#2563EB`) |
| Secondary CTA | outline pill, `#111827` border and text |
| Badge | Star icon + frost bg pill, trust signal copy |
| Tab bar | 4 tabs (Fee Management, Transport, Attendance, Ask Nova), auto-cycle 4s |
| Product window | `bg-nova-night`, browser chrome, sidebar, animated overlay cards |
| Integration strip | Text-based logos below product window |

### Product Window Spec

```
Height: 480px (desktop)
Background: bg-[#0d1f3c] + radial dot grid (rgba(255,255,255,0.06), 28×28px)
Browser chrome: bg-[#1a2a4a], traffic lights (FF5F57 / FFBD2E / 28CA41)
Sidebar: bg-[#0a1628], 56px wide, N logo + 5 module icon buttons
Overlay cards: bg-white, rounded-2xl, shadow-2xl, max-w-[320px], centred
Overlay animation: key prop change → re-mounts → animate-fade-in-overlay + animate-slide-up-overlay
```

### Integration Strip

Text-based (no image assets required):

| Brand | Style |
|-------|-------|
| Razorpay | `font-bold text-[#2563EB] text-base` |
| Frappe HRMS | `font-semibold text-[#111827] text-sm` |
| LeadSquared | `font-bold text-[#6B7280] text-xs uppercase tracking-widest` |
| Meritto | `font-semibold text-[#111827] text-base italic` |
| Apeejay Stya Group | prefixed with grey "Backed by" label |

---

## 9. Performance Targets

| Metric | Target |
|--------|--------|
| Page load (mobile 4G) | < 3 seconds |
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID / INP | < 100ms |
| Image format | WebP with lazy loading |
| Font loading | `font-display: swap` |
| Animations | Disabled below 768px |
| Bundle size | < 200KB JS initial load |
