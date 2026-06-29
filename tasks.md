# tasks.md — Cadence Nova Website Development Tasks

> Referenced by: `CLAUDE.md` | Used by: developer
> Prioritised task list. Work top to bottom. Do not skip Phase 1 tasks.

---

## How to Use This File

- Tasks are grouped by phase and priority
- Each task has acceptance criteria — a task is **done** only when all criteria pass
- Update status: `[ ]` pending → `[~]` in progress → `[x]` done
- Dependencies noted where they exist

---

## Phase 0 — Project Setup

- [x] **P0.1** Initialise Next.js 14 project with App Router
  - `npx create-next-app@latest nova-website --typescript --tailwind --app`
  - Acceptance: `npm run dev` runs without errors on localhost:3000

- [x] **P0.2** Configure Tailwind with Nova design tokens
  - Add all colours from `design_spec.md` Section 2 to `tailwind.config.js`
  - Add Inter font via `next/font/google`
  - Acceptance: `text-nova-indigo`, `bg-nova-frost`, `bg-nova-night` classes work

- [x] **P0.3** Set up folder structure
  - Create: `app/`, `components/nav/`, `components/hero/`, `components/sections/`, `components/forms/`, `components/ui/`, `lib/`, `public/images/`, `public/icons/`
  - Acceptance: All folders exist, no errors

- [x] **P0.4** Create `lib/constants.ts`
  - All copy strings from `website_plan.md` as typed constants
  - All colour hex values
  - Navigation items array
  - Module cards array (8 items)
  - AppStore modules array (6 items)
  - Comparison table rows array (13 items)
  - Acceptance: No magic strings in component files

- [x] **P0.5** SEO metadata setup
  - Add title tag, meta description from `website_plan.md` SEO section
  - Add Open Graph tags
  - Acceptance: `<title>` and `<meta name="description">` correct in page source

---

## Phase 1 — Core Components (Build First)

- [x] **P1.1** Navigation component (`components/nav/Navbar.tsx`)
  - Fixed sticky, white bg, shadow on scroll
  - Desktop: full horizontal nav with all items from `website_plan.md`
  - Login: ghost button
  - "Book a Demo": filled blue pill `#2563EB`
  - Hamburger on mobile (< 768px)
  - Acceptance: Nav visible and sticky on all viewport widths

- [x] **P1.2** Mobile nav drawer (`components/nav/MobileDrawer.tsx`)
  - Full-screen slide-in from right
  - All nav items stacked
  - "Book a Demo" full-width button pinned to bottom
  - Acceptance: Opens/closes smoothly, all links work

- [x] **P1.3** Sticky mobile CTA bar (`components/nav/MobileStickyCTA.tsx`)
  - Fixed to bottom of screen on mobile only (< 768px)
  - "Book a Demo" full-width blue button
  - White background, top border, subtle shadow
  - Hidden on desktop
  - Acceptance: Always visible on mobile while scrolling any page

- [x] **P1.4** Button components (`components/ui/Button.tsx`)
  - Variants: `primary` (filled blue pill), `secondary` (outline indigo), `ghost` (text link)
  - All hover/focus states from `design_spec.md` 5.1
  - Acceptance: All variants render correctly, keyboard-focusable

- [x] **P1.5** Book a Demo form (`components/forms/BookDemoForm.tsx`)
  - 6 fields exactly as specified in `website_plan.md`
  - React Hook Form + Zod validation
  - Honeypot hidden field (no CAPTCHA)
  - Success state message
  - Full-width submit button "Book My Demo"
  - Mobile: full-width fields, correct input types (email, tel)
  - Acceptance: Form submits, validates all required fields, shows success state, honeypot field invisible to users

- [x] **P1.6** Book a Demo modal (`components/forms/BookDemoModal.tsx`)
  - Wraps `BookDemoForm` in a modal overlay
  - Triggered by any "Book a Demo" CTA
  - Closes on ESC, backdrop click, or success
  - Acceptance: Opens from nav CTA and all section CTAs

---

## Phase 2 — Hero Section

- [x] **P2.1** Hero layout (`components/hero/Hero.tsx`)
  - Two-column desktop (60/40), single-column mobile
  - White background
  - Eyebrow tag: "AI-POWERED SCHOOL MANAGEMENT PLATFORM"
  - Headline with gradient on "intelligence" (CSS `background-clip: text`)
  - Sub-headline copy from `website_plan.md`
  - Primary + secondary CTAs
  - Acceptance: Gradient renders on "intelligence" only; layout correct at all breakpoints

- [x] **P2.2** Gradient text implementation
  ```css
  .gradient-text {
    background: linear-gradient(90deg, #E91E8C, #F97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  ```
  - Acceptance: "intelligence" shows gradient; no gradient on other headline words; fallback solid colour if CSS clip not supported

- [x] **P2.3** Module diagram (`components/hero/ModuleDiagram.tsx`)
  - SVG or React component
  - Hub + 8 spokes + 8 nodes with icons and labels
  - Spoke draw-in animation on load (desktop only)
  - Hub pulse animation (desktop only)
  - Mobile: simplified 2×4 icon grid (no SVG animation)
  - Acceptance: All 8 modules shown; animated on desktop; static grid on mobile

---

## Phase 3 — Homepage Sections

- [x] **P3.1** Social proof strip (`components/sections/ProofStrip.tsx`)
  - Nova Frost background
  - Two proof items with icons and vertical divider
  - Copy from `website_plan.md` Section 02
  - Acceptance: Renders correctly desktop + mobile

- [x] **P3.2** Nova Platform section (`components/sections/PlatformSection.tsx`)
  - Headline + 8 module cards in grid
  - Card hover effects from `design_spec.md` 5.3
  - Footer copy: "All modules included in core..."
  - Acceptance: All 8 cards render; hover states work

- [x] **P3.3** Nova AI section (`components/sections/AISection.tsx`)
  - Nova Night background (`#0F1B3C`)
  - Headline + sub
  - Ask Nova card (left/top) with Available Now badge
  - Tell Nova card (right/bottom) with Coming Soon badge
  - Nova Command strip at bottom
  - Status badges from `design_spec.md` 5.7
  - Acceptance: Dark background; badges correct colours; layout correct at all breakpoints

- [x] **P3.4** AppStore section (`components/sections/AppStoreSection.tsx`)
  - White background
  - Headline + 6 module cards in 3-column grid
  - Toggle visual element on each card
  - Text link CTA below grid
  - Acceptance: All 6 AppStore modules render; link works

- [x] **P3.5** Cadence Care section (`components/sections/CadenceCareSection.tsx`)
  - Nova Frost background
  - Headline + sub
  - Two-card comparison (Standard vs Pro) from `website_plan.md`
  - Nova Lounge callout below cards
  - Acceptance: Both cards render; all rows correct; callout box styled

- [x] **P3.6** Mid-page CTA section (`components/sections/MidCTASection.tsx`)
  - Nova Indigo background
  - Headline, sub, white button
  - Phone number below button
  - Acceptance: Full-width section; button triggers demo modal

- [x] **P3.7** Comparison table section (`components/sections/ComparisonSection.tsx`)
  - Headline + sub
  - 13-row table with correct ✓ ✗ ⚠ styling
  - Alternating row colours
  - Integration logos strip below table
  - Mobile: card-per-row stacked layout
  - Acceptance: All 13 rows correct; colour-coded indicators; mobile layout stacks properly

- [x] **P3.8** Footer CTA + Footer (`components/sections/Footer.tsx`)
  - Pre-footer strip with headline, pricing note, CTA
  - 4-column footer layout
  - Bottom bar with copyright
  - Acceptance: All links present; mobile collapses to 2-column or accordion

---

## Phase 4 — Inner Pages

- [x] **P4.1** Book a Demo page (`app/book-demo/page.tsx`)
  - Full-page form (not just modal)
  - Same 6 fields, same validation
  - Acceptance: Accessible via `/book-demo`; form works

- [x] **P4.2** Pricing page (`app/pricing/page.tsx`)
  - Headline, price display (₹35/student/month), trust line
  - 8-item checklist of included modules
  - Cadence Care upsell cards
  - Acceptance: Copy matches `website_plan.md` exactly; no other pricing disclosed

- [x] **P4.3** Platform page (`app/platform/page.tsx`)
  - All 8 core modules detailed
  - Integration logos section
  - Acceptance: All modules have icon, name, full description

- [x] **P4.4** AppStore page (`app/appstore/page.tsx`)
  - All 6 AppStore modules detailed
  - Acceptance: All modules render with full descriptions

- [x] **P4.5** Cadence Care page (`app/cadence-care/page.tsx`)
  - Full tier comparison
  - Nova Lounge section
  - WSUYD explained in detail
  - Acceptance: Both tiers clearly explained

- [x] **P4.6** See Nova page (`app/see-nova/page.tsx`)
  - Video embed (placeholder until video produced)
  - Fallback: "Video coming soon" with Book a Demo CTA
  - Acceptance: Page loads; video plays in-page or modal

---

## Phase 5 — Analytics & SEO

- [ ] **P5.1** Google Analytics 4
  - Install GA4 script via `next/script`
  - Track: page views, "Book a Demo" button clicks, form submissions, video plays
  - Acceptance: Events visible in GA4 DebugView

- [ ] **P5.2** Meta Pixel
  - Install Meta Pixel for retargeting campaigns
  - Track: page views, demo form submissions (lead event)
  - Acceptance: Pixel fires on page load and form submission

- [ ] **P5.3** Sitemap
  - Generate `sitemap.xml` via `next-sitemap`
  - Include all pages
  - Acceptance: `nova.cadenceinfotech.com/sitemap.xml` accessible

- [ ] **P5.4** Robots.txt
  - Allow all crawlers
  - Reference sitemap
  - Acceptance: `nova.cadenceinfotech.com/robots.txt` accessible

---

## Phase 6 — Performance & QA

- [ ] **P6.1** Image optimisation
  - All images converted to WebP
  - Use `next/image` for all images
  - Lazy loading on all below-fold images
  - Acceptance: No images served as JPG/PNG; LCP image not lazy-loaded

- [ ] **P6.2** Font optimisation
  - Inter loaded via `next/font/google` with `font-display: swap`
  - Acceptance: No layout shift from font loading

- [ ] **P6.3** Animation guard
  - Disable all Framer Motion animations on viewport < 768px
  - Respect `prefers-reduced-motion` media query
  - Acceptance: No animation on mobile; reduced-motion respected

- [ ] **P6.4** Core Web Vitals audit
  - Run Lighthouse on mobile and desktop
  - Targets: LCP < 2.5s, CLS < 0.1, FID < 100ms
  - Acceptance: Lighthouse scores ≥ 90 performance on desktop, ≥ 75 mobile

- [ ] **P6.5** Cross-browser testing
  - Chrome, Firefox, Safari (desktop + mobile)
  - Acceptance: No visual regressions on any browser

- [ ] **P6.6** Form testing
  - Submit empty form → all required field errors show
  - Submit with invalid email → email error shows
  - Submit valid form → success state shows
  - Honeypot field: hidden and not submitted
  - Acceptance: All cases pass

- [ ] **P6.7** Mobile UX audit
  - Sticky CTA always visible on mobile
  - All tap targets ≥ 48px
  - No horizontal scroll on any page
  - Demo modal full-screen on mobile
  - Acceptance: All items pass on iPhone SE (375px) and Pixel 7

---

## Phase 7 — Pre-Launch Checklist

- [ ] **P7.1** Copy review against `website_plan.md`
  - All 9 section headlines match brief exactly
  - All 13 comparison table rows correct
  - "intelligence" gradient applied correctly
  - Tell Nova labelled "Coming Soon" with amber badge
  - Pricing strip shows "Starts at ₹35/student/month" only

- [ ] **P7.2** Brand review
  - Cadence gradient used ONLY on "intelligence" in hero
  - Nova Indigo `#1E3A8A` consistent across all elements
  - Nova Blue `#2563EB` on all CTA buttons
  - "Cadence Nova" wordmark correct weight split

- [ ] **P7.3** All internal links working
  - `/platform`, `/appstore`, `/cadence-care`, `/pricing`, `/book-demo`, `/resources`, `/see-nova`

- [ ] **P7.4** DNS and subdomain setup
  - `nova.cadenceinfotech.com` pointing to Vercel/hosting
  - SSL certificate active

- [ ] **P7.5** Google Search Console
  - Property verified for `nova.cadenceinfotech.com`
  - Sitemap submitted on launch day

- [ ] **P7.6** Smoke test on production URL
  - Homepage loads
  - "Book a Demo" modal opens and form submits
  - All pages accessible
  - Mobile sticky CTA visible

---

## Phase 8 — Navigation & Site Architecture Redesign
> Decisions locked 2026-06-22. Build in order — nav shell first, then pages.

**Final nav:** `Solutions | Pricing | Resources | Company | Client Portal | [Book a Demo]`
**Solutions mega-menu:** CBSE & ICSE (Live) · IB & Cambridge (Coming Soon) · Groups & Chains (Live)
**Footer:** 4 columns — Nova · Solutions · Resources · Company (with WhatsApp + legal)

- [ ] **N1** Update `lib/constants.ts`
  - Replace `NAV_ITEMS` with new 4-item structure + dropdowns config
  - Add `SOLUTIONS_ITEMS`, `RESOURCES_ITEMS`, `COMPANY_ITEMS` arrays with labels, hrefs, descriptions, status badges
  - Update `FOOTER_COLUMNS` to new 4-column structure (Nova / Solutions / Resources / Company)
  - Add WhatsApp link constant (`wa.me/91XXXXXXXXXX`)
  - Update pricing to show `$1 USD` benchmark + `₹35` launch offer framing
  - Acceptance: No nav/footer hardcodes in components; all copy sourced from constants

- [ ] **N2** Navbar mega-menu redesign (`components/nav/Navbar.tsx`)
  - Remove: Platform, AppStore, Cadence Care, old Resources from nav
  - Add: Solutions (mega-menu panel, ~480px wide), Resources (simple dropdown), Company (simple dropdown)
  - Solutions mega-menu: each item has icon, title, 1-line description, Coming Soon badge where applicable
  - Resources + Company: clean minimal dropdown cards
  - Replace "Login" with "Client Portal" text link (links to Nova app URL)
  - Transparent-on-mount + floating pill scroll states preserved
  - Mobile drawer updated to match new structure
  - Acceptance: All dropdowns open/close correctly; mega-menu keyboard accessible; mobile drawer shows all new items

- [ ] **N3** Footer redesign (`components/sections/Footer.tsx`)
  - 4 columns: Nova · Solutions · Resources · Company
  - Nova column: Homepage, Pricing, Book a Demo
  - Solutions column: CBSE & ICSE, IB & Cambridge (Coming Soon tag), Groups & Chains
  - Resources column: Product Updates, Video Demos, Blog ↗, Help & Support ↗, WhatsApp Us ↗
  - Company column: About Nova, Contact Us, Cadence Infotech ↗, Privacy Policy, Terms of Service
  - Bottom bar: copyright only
  - Acceptance: All links correct; WhatsApp opens wa.me; external links open new tab; mobile collapses cleanly

- [ ] **N4** Pricing page redesign (`app/pricing/page.tsx`)
  - Hero: global benchmark `$1 / student / month` (muted/struck) → `₹35 / student / month` (bold, launch offer badge)
  - "Introductory Launch Pricing" framing
  - 8 included modules checklist
  - Cadence Care upsell (Standard / Pro)
  - Book a Demo CTA
  - Same dark split aesthetic as /book-demo page
  - Acceptance: Both price points visible; $1 USD clearly a benchmark; ₹35 is the hero number

- [ ] **N5** Solutions / CBSE & ICSE Schools page (`app/solutions/cbse-icse/page.tsx`)
  - Curriculum-specific hero headline + subtext
  - 4 module spotlights most relevant to CBSE/ICSE: Fees, Attendance, SIS, Communication
  - AI feature highlight (Ask Nova)
  - Book a Demo CTA
  - SEO metadata: title "School ERP for CBSE & ICSE Schools — Cadence Nova"
  - Acceptance: Page accessible at `/solutions/cbse-icse`; all content curriculum-specific

- [ ] **N6** Solutions / Groups & Chains page (`app/solutions/groups-chains/page.tsx`)
  - Pain-led hero: multi-campus visibility, centralised fee management, shared transport
  - 4 module spotlights: SIS (multi-campus), Fees, Transport, Communication
  - AI feature highlight (Nova Command ⌘K for ops leads)
  - Book a Demo CTA
  - SEO metadata: title "Multi-Branch School ERP — Cadence Nova"
  - Acceptance: Page accessible at `/solutions/groups-chains`

- [ ] **N7** Solutions / IB & Cambridge Schools page (`app/solutions/ib-cambridge/page.tsx`)
  - Coming Soon treatment (same as Tell Nova badge pattern)
  - Teaser hero: "Built for IB & Cambridge Schools — Coming Soon"
  - Express Interest form (name + email + school) — same component as footer pre-footer
  - SEO metadata: title "IB & Cambridge School ERP — Cadence Nova (Coming Soon)"
  - Acceptance: Page accessible at `/solutions/ib-cambridge`; no false "live" claims

- [ ] **N8** Resources page (`app/resources/page.tsx`)
  - 3 sections: Product Updates (changelog cards) · Video Walkthroughs (placeholder grid) · Blog (redirects to cadenceinfotech.com/blog)
  - Same design language as homepage
  - Acceptance: Page accessible at `/resources`; Blog link opens cadenceinfotech.com/blog in new tab

- [ ] **N9** About Nova page (`app/about/page.tsx`)
  - Nova story: built by Cadence Infotech (Valedra India / Apeejay Stya Group)
  - Team/backing section
  - Cadence Infotech ↗ link prominent
  - Book a Demo CTA
  - Acceptance: Page accessible at `/about`

- [ ] **N10** Contact Us page (`app/contact/page.tsx`)
  - Phone, email, WhatsApp (wa.me link)
  - Office location (Cadence Infotech address)
  - Book a Demo form embedded
  - Acceptance: Page accessible at `/contact`; all contact methods working

---

## Product Feature Ideas — Share With Developer

> These are product (app) feature ideas captured during website strategy sessions. Not website tasks — pass these to the Nova product/dev team.

- [ ] **PF1** Student Portfolio Builder *(HIGH PRIORITY — strong NEP 2020 alignment)*
  - Teachers tag students in activities (academic, co-curricular, sports, projects) from any module
  - Portfolio builds automatically and longitudinally from Nursery through Grade 12
  - Exportable as PDF (CV/resume format) — student can download at any point
  - Student-publishable: student can mark portfolio as public or share via link
  - **Unique Student URL**: each enrolled student gets a subdomain/slug profile page (e.g., `nova.school.edu/student/aarav-sharma`) — school-sponsored, active only while student is enrolled
  - Profile URL acts as a living resume + achievement record — shareable to colleges, employers
  - Post-graduation: school can choose to keep URL live for alumni or let it expire
  - **NEP 2020 connection**: directly implements holistic development tracking, 360° assessment evidence, and competency portfolio mandated by NEP
  - *Note from Anand: discuss with dev team — URL sponsorship model, data retention policy post-graduation, student privacy controls (DPDP compliance)*

---

## Backlog (Post-Launch)

- [ ] **B1** Resources/blog section with first 5 articles (SEO)
- [ ] **B2** Homepage brand video embed (once produced)
- [ ] **B3** Product walkthrough video on `/see-nova`
- [ ] **B4** Swap hero module diagram with real product screenshot (after 3 live clients)
- [ ] **B5** Add "Trusted by X schools" counter to social proof strip (dynamic)
- [ ] **B6** A/B test hero headline variants
- [ ] **B7** Live chat integration (Intercom or Crisp)
- [ ] **B8** School type landing pages: `/for-schools`, `/for-colleges`
- [ ] **B9** Integration partner logos on `/platform`
- [ ] **B10** Multi-language support (Hindi) for Tier-2 market expansion
