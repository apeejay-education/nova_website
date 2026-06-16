# CLAUDE.md — Cadence Nova Website

> This is the primary context file for the Cadence Nova website project.
> Read this first. Then read `design_spec.md`, `website_plan.md`, and `tasks.md`.

---

## What We Are Building

**Product:** Cadence Nova — Premium AI-powered School & Institution Management Platform
**URL:** `nova.cadenceinfotech.com`
**Owner:** Anand Arora, Head of Products, Business & Technology — Cadence Infotech
**Parent company:** Valedra India Pvt. Ltd. (Apeejay Stya Group)
**Launch target:** July 2026

This is a **marketing and conversion website** — not the product app. The single goal is to convert school Principals into demo bookings via a "Book a Demo" form.

---

## The One Metric That Matters

> **Demo booking conversions.** Every design, copy, and UX decision must be evaluated against: "Does this make a school Principal more or less likely to book a demo?"

---

## Hero Tagline (Do Not Change)

```
School management. School intelligence. One platform.
```

- "intelligence" is rendered in the Cadence brand gradient: `#E91E8C → #F97316`
- All other headline words: Nova Indigo `#1E3A8A`

---

## Product Context

Cadence Nova is a premium school ERP with:
- **8 core modules** (all included in base price — no add-ons): SIS, Fees, Attendance, Transport, Hostel, Library, LMS, Communication
- **Nova AppStore**: HRMS, Payroll, Pulse, Hire, Workflow, Warehouse
- **3 AI features**: Ask Nova (live), Tell Nova (coming soon), Nova Command ⌘K (live)
- **Cadence Care**: Managed service layer — Standard (+50%) and Pro (+100%)
- **Nova Lounge**: WSUYD onboarding — "We Stay Until You're Done"
- **Pricing**: Starts at ₹35/student/month (gated — demo required for full quote)

---

## Design Benchmark

**Primary:** PowerSchool (powerschool.com) — white canvas, bold headlines, spacious layout, product diagram hero
**Secondary:** Classe365 (classe365.com) — feature depth, outcome-led copy

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — primary context, read first |
| `design_spec.md` | Colours, typography, components, responsive rules |
| `website_plan.md` | All 9 page sections with exact copy and layout notes |
| `tasks.md` | Prioritised development task list with acceptance criteria |

---

## Tech Stack Recommendation

- **Framework:** Next.js 14 (App Router) — SSG for performance, SEO-friendly
- **Styling:** Tailwind CSS — utility-first, matches the design token system in `design_spec.md`
- **Animations:** Framer Motion — hero entrance, module diagram pulse, scroll reveals
- **Forms:** React Hook Form + Zod validation
- **Analytics:** Google Analytics 4 + Meta Pixel
- **Hosting:** Vercel (recommended) or Cloudflare Pages
- **CMS (optional):** Contentlayer or Sanity for blog/resources section

---

## Folder Structure (Recommended)

```
nova-website/
├── CLAUDE.md              ← you are here
├── design_spec.md
├── website_plan.md
├── tasks.md
├── app/
│   ├── page.tsx           ← homepage (9 sections)
│   ├── platform/
│   ├── appstore/
│   ├── cadence-care/
│   ├── pricing/
│   ├── book-demo/
│   └── resources/
├── components/
│   ├── nav/
│   ├── hero/
│   ├── sections/
│   ├── forms/
│   └── ui/
├── lib/
│   └── constants.ts       ← colours, copy strings, nav items
└── public/
    ├── images/
    └── icons/
```

---

## Critical Rules (Never Break These)

1. **"Book a Demo" is always the primary CTA** — never demoted to secondary
2. **Pricing shows ₹35/student/month floor only** — no other pricing disclosed on any page
3. **Tell Nova is always labelled "Coming Soon"** — never implied as live
4. **The Cadence gradient (#E91E8C → #F97316) is used ONLY on the word "intelligence"** in the hero — nowhere else
5. **No CAPTCHA on the demo form** — use honeypot hidden field only
6. **Mobile sticky CTA** — "Book a Demo" must always be visible on mobile as a sticky bottom bar
7. **Blog content lives on cadenceinfotech.com/blog** — NOT on this subdomain. Nova subdomain is conversion-only.

---

## AI Feature Names (Canonical — Do Not Change)

| Name | Status | Description |
|------|--------|-------------|
| Ask Nova | Live | Natural language school data queries |
| Tell Nova | Coming Soon | Conversational AI that modifies ERP entries |
| Nova Command | Live | ⌘K keyboard command palette |

---

## Contact / Approvals

All copy changes, design deviations, or new section additions require approval from:
**Anand Arora** — anand.arora@ets.apeejay.edu
