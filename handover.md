# Handover — Cadence Nova Website

> For the next agent picking up this session.
> Read this + `CLAUDE.md` + `design_spec.md` before touching any code.

---

## Critical Rules (Non-Negotiable)

1. **NO `git push` without explicit double confirmation from Anand.** Each push triggers a Netlify deploy that burns build credits. Credits are nearly exhausted. Ask before every push, no exceptions.
2. **"Book a Demo" is always the primary CTA** — never demoted.
3. **Tell Nova is always "Coming Soon"** — never implied as live.
4. **No CAPTCHA on the demo form** — honeypot only.
5. **The Cadence gradient (#E91E8C → #F97316) is ONLY for "intelligence" in the hero** — nowhere else.

---

## Project Overview

**Product:** Cadence Nova — AI-powered School ERP for India
**Site:** `nova.cadenceinfotech.com` (conversion site, not the product app)
**Goal:** Convert school Principals into "Book a Demo" form submissions
**Owner:** Anand Arora — anand.arora@ets.apeejay.edu
**GitHub:** `git@github.com:apeejay-education/nova_website.git` (private, user: `anandets`)
**Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS v4 · SSG

---

## Current State of the Codebase

### What's live (committed to `main`, NOT yet pushed in latest session)

The latest LOCAL commit is `150b3af` — **not pushed to GitHub yet.** This commit contains the new wordmark. All previous commits ARE pushed.

Run `git log --oneline -5` to verify state before doing anything.

### Hero Section (`components/hero/Hero.tsx`)
- Full-bleed, edge-to-edge, `h-screen` video background
- Video: `/assets/videos/hero-principal-loop.mp4` (placeholder — needs new abstract AI video)
- Gradient overlay: `from-black/55 via-black/30 to-black/75`
- **Badge:** `Cadence Nova` wordmark in glassmorphism pill
- **Headline:** Bare text on video — "Complete school *intelligence.* / One platform." (`intelligence` in Instrument Serif italic)
- **Subtitle:** Opaque white/90 rounded box, dark text — "AI-powered. Blazing fast. School ERP, redefined."
- **Stat line:** Glassmorphism pill — "8 Modules · AI Queries · Hotkey Enabled"
- **CTAs:** White pill "Book a Demo" + gradient glow pulsing play button (Blue→Purple, `#2563EB→#7C3AED`, `animate-ping` rings, icon-only, no text label)
- **Ask Nova card:** Bottom-left, glassmorphism (`bg-white/12`), white text, close button (dismissible via `useState`)
- **SCROLL indicator:** Bottom-center

### Navbar (`components/nav/Navbar.tsx` + `NavbarWrapper.tsx`)
- `fixed top-0`, full-width, sticky
- **Transparent + white text** over dark hero → transitions to `bg-white/95 backdrop-blur` + dark text after 24px scroll
- `transparentOnMount={isHomepage}` prop controls the color-flip
- NovaMark SVG **removed** — replaced by `Wordmark` component
- Links: Platform · AppStore · Cadence Care · Pricing · Resources · Login · Book a Demo

### Wordmark (`components/ui/Wordmark.tsx`) — LATEST, not pushed
- **"Cadence"** — Space Grotesk Medium 500 (`--font-space-grotesk`)
- **"Nova"** — Cormorant Garamond Regular 400 upright (`--font-cormorant`)
- **Monochrome** — single `color` prop: `#ffffff` on dark, `#111827` on light
- Mixed case: `Cadence Nova`
- Fonts loaded in `app/layout.tsx` via `next/font/google`

### Section Order (`app/HomePageClient.tsx`)
```
Hero → PlatformSection → AISection → NovaCommandSection → AppStoreSection → CadenceCareSection → MidCTASection → ComparisonSection → Footer
```
ProofStrip has been **removed**.

### PlatformSection (`components/sections/PlatformSection.tsx`)
- Horizontal-scroll "Day in the Life" carousel — 8 module cards
- Cards: 300–320px wide, `scrollSnapAlign: start`, time badge overlay, title + micro-description
- **Media:** First 4 cards have video paths (boomerang videos), last 4 have dark gradient + icon placeholder
- **THIS IS THE SECTION NEEDING FIGMA WORK** — see Next Task below

### Other Sections
- **AISection:** 5-col grid, typing-command.mp4 left, Ask Nova + Tell Nova cards right
- **NovaCommandSection:** Dark `#070a12`, boomerang-nova-command.mp4, ⌘K badge
- **AppStoreSection:** Interactive bento grid, 6 AppStore modules
- **CadenceCareSection:** Full-bleed Nova Lounge cinematic video
- **Footer:** 4-col, dark `#0b0f1a`

---

## Pending Video Assets (all missing — need to be created/sourced)

Place all in `/public/assets/videos/`:

| File | Section | Note |
|------|---------|------|
| `hero-principal-loop.mp4` | Hero bg | **Needs replacing** — current is principal-at-camera, user wants abstract AI/data 3D loop. See video prompt below. |
| `boomerang-admission.mp4` | Platform carousel card 1 | |
| `boomerang-fees.mp4` | Platform carousel card 2 | |
| `boomerang-transport.mp4` | Platform carousel card 3 | |
| `boomerang-library.mp4` | Platform carousel card 4 | |
| `typing-command.mp4` | AISection left panel | |
| `boomerang-nova-command.mp4` | NovaCommandSection | |
| `nova-lounge-team.mp4` | CadenceCareSection | |
| `product-demo-preview.mp4` | Hero play modal | |

### Hero Video Prompt (for RunwayML / Kling / Luma)
```
Cinematic abstract 3D animation loop. Deep near-black space background (#0b0f1a).
Floating soft-clay matte rounded rectangle panels arranged in a wide orbital cluster,
slowly drifting and rotating with gentle parallax depth. Each panel has subtle embossed
abstract patterns — minimalist bar charts, dot grids, thin connecting lines, circular
progress rings — all in slight bas-relief finish.

Color palette: background #0b0f1a deep navy-black, panels in matte dark slate (#1e2d4a)
with soft specular highlights, accent glow in Nova Blue (#2563EB) as rim lighting and
subtle bloom on select panel edges and nodes. Small geometric shapes — spheres, thin
rings — float between panels catching blue light.

Lighting: single soft blue-white area light from upper left, deep shadow fill.
Camera: very slow push-in, gentle drift rightward. Objects rotate 10–15 degrees over
3 seconds then reverse (boomerang loop). No text, no people, no school imagery.
Style: Linear.app hero, Vercel dark mode, Vivido hero. 4K, photorealistic 3D,
subtle depth of field. Duration: 3–4 seconds seamless boomerang loop.
```

---

## NEXT IMMEDIATE TASK — Figma MCP Module Cards

### Context
The PlatformSection carousel currently shows dark placeholder cards (gradient bg + icon) for 5 of the 8 modules. Anand wants proper **product UI mockups** for each module card — not photos, not abstract art — actual UI fragments styled to match the Cadence Nova interface.

### Setup (Anand is doing this while you read this)
Figma MCP is being connected to Claude Code:
```bash
claude mcp add figma --transport http https://mcp.figma.com/v1/sse --header "X-Figma-Token: TOKEN"
```
Anand will share the Figma file URL in the next message.

### What to build
Once Figma is connected and file URL is shared:

1. **Crawl the Figma file** — find screens/components for all 8 modules:
   - Admissions & SIS
   - Fee Management
   - Transport
   - Campus Life (Library)
   - Attendance
   - Hostel
   - LMS
   - Communication

2. **Build each as a React component** (not static image) — inline in the carousel cards. This is sharper than PNG, loads instantly, stays editable. Each renders at ~600×380px equivalent.

3. **Also export WebP assets** at 2× resolution (`1200×760px`) to `/assets/figma-exports/` before linking to `/public/assets/images/modules/`.

### Card dimensions to match
Looking at the current carousel, each card's media area is approximately:
- Width: `300–320px` (card is `w-[300px] sm:w-[320px]`)
- Media height: roughly `200px` (the dark area above title/description)
- Aspect ratio: ~3:2

Build the UI mockup components to fill this area cleanly. Dark background matching the module's accent color (already defined per card in PlatformSection), Nova Blue `#2563EB` accents.

### Current card data in PlatformSection
```tsx
const CAROUSEL_ITEMS = [
  { time: "7:45 AM", title: "Admissions & SIS",  desc: "Every student. Every detail. One profile.",         video: "/assets/videos/boomerang-admission.mp4" },
  { time: "9:00 AM", title: "Fee Management",    desc: "Collect fees in seconds. Track everything.",        video: "/assets/videos/boomerang-fees.mp4" },
  { time: "10:30 AM", title: "Transport",        desc: "GPS-tracked buses. Live parent alerts.",            video: "/assets/videos/boomerang-transport.mp4" },
  { time: "2:00 PM", title: "Campus Life",       desc: "Library, hostel, labs — all connected.",           video: "/assets/videos/boomerang-library.mp4" },
  { time: "8:30 AM", title: "Attendance",        desc: "Mark 400 students in under 30 seconds.",           icon: CalendarCheck, gradient: "from-[#3d1a00] to-[#1a0a00]" },
  { time: "5:00 PM", title: "Hostel",            desc: "Room allocation, food, laundry — unified.",        icon: Building2,     gradient: "from-[#0d1f3c] to-[#060e1f]" },
  { time: "4:30 PM", title: "LMS",               desc: "Assignments, lessons, grades — digital-first.",    icon: Monitor,       gradient: "from-[#1a0a2e] to-[#0d0517]" },
  { time: "6:00 PM", title: "Communication",     desc: "SMS, app push, email — one click.",                icon: Bell,          gradient: "from-[#0a1f0a] to-[#050f05]" },
];
```

---

## Design System Quick Reference

```
Primary bg (dark):    #0b0f1a
Deeper bg:            #070a12
Nova Blue (accent):   #2563EB
Near-black text:      #111827
Body text:            #6B7280
White:                #FFFFFF
Warm gray (light bg): #f5f2ee
Alt warm gray:        #ededed

Fonts:
  --font-inter:           Inter (body, all sections)
  --font-instrument-serif: Instrument Serif italic (hero headline accent)
  --font-space-grotesk:   Space Grotesk (wordmark "Cadence")
  --font-cormorant:       Cormorant Garamond (wordmark "Nova")

Glassmorphism (dark):
  bg-white/[0.06–0.12] border border-white/[0.10–0.22] backdrop-blur-md rounded-2xl
  box-shadow: 0 0 28px rgba(37,99,235,0.22), inset 0 1px 0 rgba(255,255,255,0.14)
```

---

## File Structure (Key Files)

```
nova-website/
├── CLAUDE.md                          ← Primary context, read first
├── design_spec.md                     ← Full design system
├── handover.md                        ← This file
├── app/
│   ├── layout.tsx                     ← Fonts loaded here
│   ├── HomePageClient.tsx             ← Section order
│   └── page.tsx
├── components/
│   ├── hero/
│   │   └── Hero.tsx                   ← Full-bleed hero
│   ├── nav/
│   │   ├── Navbar.tsx                 ← Sticky color-flip nav
│   │   ├── NavbarWrapper.tsx          ← transparentOnMount logic
│   │   └── MobileDrawer.tsx
│   ├── sections/
│   │   ├── PlatformSection.tsx        ← ← ← MAIN TASK: carousel cards
│   │   ├── AISection.tsx
│   │   ├── NovaCommandSection.tsx
│   │   ├── AppStoreSection.tsx
│   │   ├── CadenceCareSection.tsx
│   │   ├── MidCTASection.tsx
│   │   ├── ComparisonSection.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   └── Wordmark.tsx               ← Shared wordmark component
│   └── forms/
│       └── BookDemoModal.tsx
├── lib/
│   └── constants.ts                   ← All copy strings, nav items
└── public/
    └── assets/
        └── videos/                    ← Drop all .mp4 files here
```

---

## Git State

- Branch: `main`
- Latest local commit: `150b3af` — "New wordmark: Space Grotesk + Cormorant Garamond"
- **This commit has NOT been pushed to GitHub** (Netlify credit constraint)
- All prior commits ARE pushed
- When ready to push: confirm with Anand first, then `git push origin main`
