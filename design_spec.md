# design_spec.md — Cadence Nova Visual Design Specification

> Referenced by: `CLAUDE.md` | Used by: designer, frontend developer
> Last updated: June 2026 — reflects cinematic redesign with glassmorphism system.

---

## 1. Brand Identity

### Wordmark
- **Text:** "Cadence Nova"
- **"Cadence"** — weight 300–400 (Light/Regular)
- **"Nova"** — weight 700–800 (Bold/ExtraBold)
- **Dark contexts:** white text; **Light contexts:** `#111827`

### Product Colour Family
| Product | Colour |
|---------|--------|
| Cadence Nova | Near-black `#0b0f1a` + Nova Blue `#2563EB` |
| Cadence Gurukul | Green (TBD) |
| Cadence Cognify | Purple (TBD) |
| Cadence Sprouts | Orange (TBD) |

---

## 2. Colour Palette

### Core Colours

```css
/* Nova Blue — accent only: CTAs, icons, links, badges, active states */
--nova-blue: #2563EB;

/* Near Black — dark sections, hero container bg, footer, AI section */
--dark-bg: #0b0f1a;

/* Deeper Black — Nova Command section bg */
--deeper-bg: #070a12;

/* Near Black Text — ALL headlines on light backgrounds */
--text-headline: #111827;

/* Medium Gray — body copy, descriptions, captions */
--text-body: #6B7280;      /* or neutral-500 */

/* White — text on dark backgrounds */
--text-inverse: #FFFFFF;

/* Muted White — secondary text on dark */
--text-dark-secondary: #94A3B8;
```

### Background Rhythm (homepage top-to-bottom)

| Section | Background | Notes |
|---------|-----------|-------|
| Hero outer wrapper | `#ededed` | 12–16px outer frame |
| Hero inner container | `#0b0f1a` (+ video) | `overflow-hidden rounded-3xl` |
| Dashboard tray | `#ededed` outer / `#f5f2ee` tray | sits outside hero container |
| ProofStrip | `#0b0f1a` | dark bridge, glassmorphism boxes |
| PlatformSection | `#ffffff` | white |
| AISection | `#0b0f1a` | dark |
| NovaCommandSection | `#070a12` | deeper dark |
| AppStoreSection | `#f5f2ee` | warm gray |
| CadenceCareSection | `#0b0f1a` + video | cinematic |
| MidCTASection | `#f5f2ee` | warm gray |
| ComparisonSection | `#f5f2ee` | warm gray |
| Pre-footer | `#ffffff` | white |
| Footer | `#0b0f1a` | dark |

### Warm Light Grays
```css
--bg-warm-tray:   #f5f2ee;   /* dashboard tray, card bg */
--bg-warm-section: #f5f2ee;  /* AppStore, Comparison, MidCTA */
--bg-hero-frame:  #ededed;   /* hero outer padding bg */
--bg-row-alt:     #f9f8f6;   /* comparison table odd rows */
```

---

## 3. Typography

### Font Stack
- **Primary (all body & headlines):** Inter — loaded via `next/font/google`, CSS var `--font-inter`
- **Serif accent (italic only):** Instrument Serif — CSS var `--font-instrument-serif`
- **Fallback:** `Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace (kbd elements):** system monospace

### Type Scale

| Role | Tag | Weight | Size (desktop) | Size (mobile) |
|------|-----|--------|----------------|---------------|
| Hero h1 | h1 | 500 Medium | `clamp(32px, 7vw, 68px)` | 32px |
| Section h2 | h2 | 500 Medium | 36–44px | 28px |
| Card title | h3 | 600 SemiBold | 14–20px | 14px |
| Body | p | 400 Regular | 14–16px | 14px |
| Meta / label | span | 500 Medium | 11–13px | 11px |
| CTA button | button | 500 Medium | 14–15px | 14px |
| Eyebrow badge | span | 600 SemiBold | 10–12px | 10px |
| Nav item | a | 400 Regular | 14px | — |

### Instrument Serif Rules
- **Use ONLY for:** second line of hero/section h2 headlines (italic editorial accent)
- **Never use for:** body copy, card titles, nav, buttons
- Always: `fontStyle: "italic"`, `fontWeight: 400`
- Applied inline: `style={{ fontFamily: "var(--font-instrument-serif), 'Georgia', serif", fontStyle: "italic", fontWeight: 400 }}`

### Letter Spacing
- Headlines: `tracking-tight` (–0.025em) or inline `letterSpacing: "-0.02em"`
- Eyebrows/badges: `tracking-wide` or `tracking-widest`
- Body: default

---

## 4. Glassmorphism System

The primary visual language for elements layered over video backgrounds or dark sections.

### Dark Glassmorphism (on `#0b0f1a` or video bg)
```css
/* Cards, proof boxes, feature tiles on dark background */
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.10);
backdrop-filter: blur(12px);
border-radius: 16px; /* rounded-2xl */

/* Tailwind: bg-white/[0.06] border border-white/[0.10] backdrop-blur-sm rounded-2xl */
```

### Light Glassmorphism (on hero video, overlaid text containers)
```css
/* Hero headline glass card */
background: rgba(255, 255, 255, 0.07);
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(16px); /* backdrop-blur-md */
border-radius: 16px;

/* Subtitle branded box */
background: rgba(37, 99, 235, 0.18);
border: 1px solid rgba(37, 99, 235, 0.32);
backdrop-filter: blur(8px);
border-radius: 12px;
```

### Nova Blue Tint Glass (accent containers)
```css
background: rgba(37, 99, 235, 0.12–0.18);
border: 1px solid rgba(37, 99, 235, 0.25–0.32);
backdrop-filter: blur(8px);
```

---

## 5. Component Specifications

### 5.1 Primary CTA Button ("Book a Demo")
```css
background: #0b0f1a;   /* near-black */
color: #FFFFFF;
border-radius: 9999px;
padding: 10px 28px 10px 8px;   /* pill with circle icon on right */
font-size: 14–15px;
font-weight: 500;
transition: background 200ms;

.icon-circle {
  width: 26–28px; height: 26–28px;
  background: rgba(255,255,255,0.15);
  border-radius: 9999px;
}

hover: background #1f2937;

/* On dark video hero — use white bg + dark text */
background: #FFFFFF;
color: #0b0f1a;
```

### 5.2 Secondary CTA ("Play Exclusive Preview")
```css
background: rgba(255,255,255,0.10);
border: 1px solid rgba(255,255,255,0.20);
backdrop-filter: blur(8px);
color: #FFFFFF;
border-radius: 9999px;
padding: 8px 20px;
font-size: 14px;

hover: background rgba(255,255,255,0.18);
```

### 5.3 Navbar (floating pill — hero)
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 9999px;
padding: 8px 8px;
max-width: 760px;
box-shadow: 0 1px 3px rgba(0,0,0,0.08);
```

### 5.4 Module / Feature Cards (light sections)
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;  /* border-neutral-200 */
border-radius: 16px;
padding: 20–24px;
transition: box-shadow 200ms, transform 200ms;

hover:
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  transform: translateY(-2px);

.icon-container {
  width: 36–40px; height: 36–40px;
  background: #f5f2ee;
  border-radius: 12px;
  icon: 14–18px, color #2563EB;
}
```

### 5.5 ProofStrip Glassmorphism Boxes
```css
background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.10);
backdrop-filter: blur(12px);
border-radius: 16px;
padding: 16px 24px;

.icon-tile {
  background: rgba(37,99,235,0.20);
  border: 1px solid rgba(37,99,235,0.30);
  border-radius: 12px;
  width: 36px; height: 36px;
}
```

### 5.6 Comparison Table
```css
/* Header */
background: #0b0f1a;
color: white;
font-weight: 600;
font-size: 14px;

/* Top accent border */
border-top: 3px solid #2563EB;

/* Alternating rows */
even: #FFFFFF;
odd: #f9f8f6;

/* Status icons */
✓ color: #16A34A;
✗ color: #EF4444;
⚠ color: #D97706;
```

### 5.7 Status Badges
```css
/* Available Now — Ask Nova */
background: #DCFCE7; color: #16A34A;
dot: 6px, background #16A34A;

/* Coming Soon — Tell Nova (NEVER change to live) */
background: #FEF3C7; color: #B45309;
dot: 6px, background #F59E0B;

/* Live indicator */
background: #DCFCE7; color: #16A34A;
animated pulse dot;
```

### 5.8 Section Background Alternation
Sections alternate between `#ffffff` and `#f5f2ee` for light sections.
Dark sections (`#0b0f1a` / `#070a12`) break the rhythm intentionally for contrast.

### 5.9 Callout / Highlight Box (light)
```css
background: #f5f2ee;
border-left: 4px solid #2563EB;
border-radius: 0 16px 16px 0;
padding: 20px 24px;
```

---

## 6. Video & Media

### Hero Video
- `src="/assets/videos/hero-principal-loop.mp4"` — must be in `/public/assets/videos/`
- Attributes: `autoPlay loop muted playsInline preload="auto"`
- Overlay: `bg-gradient-to-b from-black/65 via-black/50 to-black/70`

### Section Videos (cinematic sections)
```
Typing interaction:   /assets/videos/typing-command.mp4
Nova Command:         /assets/videos/boomerang-nova-command.mp4
Nova Lounge:          /assets/videos/nova-lounge-team.mp4  (grayscale opacity-35)
Demo preview modal:   /assets/videos/product-demo-preview.mp4
```

### Module Carousel Videos
```
Admissions:  /assets/videos/boomerang-admission.mp4
Fees:        /assets/videos/boomerang-fees.mp4
Transport:   /assets/videos/boomerang-transport.mp4
Campus Life: /assets/videos/boomerang-library.mp4
```

### All videos must:
- Be placed in `/public/assets/videos/`
- Use `autoPlay loop muted playsInline`
- Have `object-cover` to fill containers

---

## 7. Spacing System

Tailwind 4px base. Key tokens:

```
Section vertical:  py-24 (96px desktop) / py-16 (64px mobile)
Section horizontal: px-6 (24px) + max-w-7xl mx-auto
Card padding:       p-5 (20px) or p-6 (24px)
Card gap:           gap-4 (16px) or gap-5 (20px)
Grid gap:           gap-3–4
Between h2 and sub: mb-4 / mt-3
CTA group gap:      gap-3
```

---

## 8. Responsive Breakpoints

```
sm:  640px   Large mobile / small tablet
md:  768px   Tablet
lg:  1024px  Small desktop
xl:  1280px  Standard desktop
2xl: 1536px  Wide desktop
```

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero h1 | 32px | 68px (clamped) |
| Module carousel | horizontal scroll | 8 cards visible |
| AI section | stacked | 5-col grid (2 video + 3 cards) |
| Comparison table | stacked cards | full 3-col table |
| AppStore bento | single col | 3-col left + 2-col right panel |
| ProofStrip boxes | stacked | side-by-side |
| Footer | 2-col | 4-col |

---

## 9. Animation System

### CSS Keyframes (in `app/globals.css`)
| Class | Effect | Duration |
|-------|--------|----------|
| `fadeInUp` | opacity 0→1, translateY 30px→0 | 0.6s ease-out |
| `fadeInOverlay` | opacity 0→1 | 0.4s ease-out |
| `slideUpDialog` | opacity 0→1, translateY 20px→0 | 0.5s ease-out |

### `AnimateIn` component
- Uses IntersectionObserver (threshold: 0.15)
- Fires `fadeInUp` when element enters viewport
- Accepts `delay` prop (seconds)
- Never apply `opacity: 0` inline on below-fold elements (breaks no-JS)

### Video Modal
- Trigger: "Play Exclusive Preview" button in hero
- Overlay: `bg-black/90 backdrop-blur-sm fixed inset-0 z-50`
- Close: Escape key or click outside
- Body scroll locked while open

---

## 10. Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 100ms |
| Hero video | preload="auto", compressed MP4 |
| Images | WebP, lazy loading |
| Font loading | `font-display: swap` via next/font |
| JS bundle | < 200KB initial |
| Animations | Respect `prefers-reduced-motion` |
