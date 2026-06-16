# website_plan.md — Cadence Nova Page Structure & Copy

> Referenced by: `CLAUDE.md` | Used by: developer, designer, copywriter
> This file defines every section of nova.cadenceinfotech.com with exact copy and layout notes.

---

## URL Structure

```
nova.cadenceinfotech.com/              ← homepage (this document)
nova.cadenceinfotech.com/platform      ← all 8 core modules detail
nova.cadenceinfotech.com/appstore      ← modular add-ons
nova.cadenceinfotech.com/cadence-care  ← managed service tiers
nova.cadenceinfotech.com/pricing       ← gated pricing page
nova.cadenceinfotech.com/book-demo     ← demo booking form (also modal)
nova.cadenceinfotech.com/resources     ← blog and updates (post-launch)
nova.cadenceinfotech.com/see-nova      ← 3-min product walkthrough video
```

---

## Navigation

### Desktop Nav (left → right)
```
[ Cadence Nova logo ] · Platform · AppStore · Cadence Care · Pricing · Resources · [ Login ] · [ Book a Demo ]
```

- Logo: "Cadence Nova" wordmark, Nova Indigo `#1E3A8A`
- Nav items: 15px Medium, `#111827`, hover `#1E3A8A`
- Login: ghost/outline button
- Book a Demo: filled blue pill `#2563EB`, always rightmost

### Mobile Nav
- Hamburger icon (top-right)
- Full-screen slide-in drawer
- "Book a Demo" full-width blue button pinned to drawer bottom
- Sticky bottom bar on all pages: "Book a Demo" always visible while scrolling

---

## SEO Meta

```html
<title>Cadence Nova — AI-Powered School Management Platform | India</title>
<meta name="description" content="Cadence Nova is India's most complete school ERP — fees, transport, hostel, LMS, and AI-powered insights in one platform. Book a demo today." />
<meta property="og:title" content="Cadence Nova — School management. School intelligence. One platform." />
<meta property="og:description" content="Fees, transport, hostel, learning, and AI-powered insights — giving school leaders complete, intelligent command of their institution." />
```

**Primary keyword:** `school management software India`
**Secondary keywords:** `school ERP India`, `AI school ERP`, `transport hostel LMS school software`

---

## Section 01 — HERO

**Layout:** Full-width, 100vh desktop. White background (`#FFFFFF`).
Left 60%: copy stack. Right 40%: module diagram.

### Copy (exact — do not paraphrase)

```
EYEBROW:    AI-POWERED SCHOOL MANAGEMENT PLATFORM
            [small caps, Nova Blue #2563EB, letter-spacing 0.08em]

HEADLINE:   School management.
            School [intelligence].
            One platform.

            ["intelligence" = Cadence gradient #E91E8C → #F97316]
            [all other words = Nova Indigo #1E3A8A]
            [font: 800 ExtraBold, 56–64px desktop / 36px mobile]

SUB:        Fees, transport, hostel, learning, and AI-powered insights —
            giving school leaders complete, intelligent command of
            their institution.
            [16–18px Regular, #6B7280]
```

### CTAs
- **Primary:** `Book a Demo` — filled blue pill `#2563EB`
- **Secondary:** `Watch Demo` — outline button, Nova Indigo

### Hero Visual — Module Diagram
Centre: "Nova" hub (80px circle, `#1E3A8A`)
8 spokes to nodes: SIS, Fees, Attendance, Transport, Hostel, Library, LMS, Communication
See `design_spec.md` Section 6 for full SVG specification.

---

## Section 02 — SOCIAL PROOF STRIP

**Layout:** Full-width thin strip. Nova Frost background `#EEF4FB`.
Two items centred, vertical divider between.

```
[ 🏫 icon ]  "8 core modules. 200+ features. Built for Indian schools."

    [ | divider ]

[ 🤝 icon ]  "Nova Lounge: We stay until your school is fully live. Every time."
```

Typography: 16px Medium, `#111827`. No client logos — Nova is a new launch.

---

## Section 03 — THE NOVA PLATFORM

**Layout:** White background. 2×4 or 3-column card grid.

### Copy

```
HEADLINE:   Everything your school runs on.
            Inside one platform.

SUB-COPY (below grid):
            All modules included in core.
            No hidden add-ons. No surprise invoices.
```

### 8 Module Cards

| Module | Icon | One-line Description |
|--------|------|---------------------|
| Student Information System | Graduation cap | Complete student profiles, admissions, academic history |
| Fee Management | Rupee / wallet | Online + offline collections, dues tracking, live dashboard |
| Attendance | Calendar checkmark | Biometric, app-based, real-time reporting |
| Transport | Bus / route pin | Live GPS tracking, route management, parent alerts |
| Hostel Management | Building / bed | Room allocation, mess billing, visitor management |
| Library | Open book | Catalogue management, issue tracking, overdue alerts |
| LMS / Learning | Screen / course | Content delivery, assignments, quizzes, leaderboard |
| Communication | Bell / message | Parent app, announcements, push notifications |

Each card: Nova Blue icon (32px) + module name (Bold, Indigo) + description (14px, Gray).
Hover: subtle lift + shadow (see `design_spec.md` 5.3).

---

## Section 04 — NOVA AI

**Layout:** Full-width. **Nova Night background `#0F1B3C`** (only dark section on page). White text.

### Copy

```
HEADLINE:   Meet Nova's intelligence.
SUB:        Two AI features that change how your school operates.
```

### Ask Nova Card (Left)

```
BADGE:      ● AVAILABLE NOW    [green dot, green text]

HEADLINE:   Type anything. Nova knows.

COPY:       Search across your entire school in natural language.
            Type "Grade 9 students with fees overdue above ₹5,000"
            and get the answer instantly — no report builder, no filters.

VISUAL:     Animated search bar mockup.
            Shows query being typed → instant results appearing.
```

### Tell Nova Card (Right)

```
BADGE:      ● COMING SOON    [amber dot, amber text]

HEADLINE:   Tell Nova to do it. Consider it done.

COPY:       Type what you need — "Add Science Lab as a new course
            for Grade 8" or "Mark Rahul absent for today" — and
            Tell Nova executes it directly in your ERP.
            No clicks. No forms. Just conversation.

VISUAL:     Chat-style interface mockup.
            Shows natural language command → executed in ERP.
```

### Nova Command — Bottom Strip

```
[ ⌘K ]  Nova Command

"Hit ⌘K anywhere in Nova and a Spotlight-style command palette
opens — search students, open modules, enter accounting entries,
and navigate your entire school without lifting your hands off
the keyboard. Built for school leaders who refuse to slow down."
```

---

## Section 05 — NOVA APPSTORE

**Layout:** White background. 3-column card grid.

### Copy

```
HEADLINE:   Your school grows. Nova grows with it.
SUB:        Start with the core. Add powerful modules as your institution scales.

BELOW GRID: Book a Demo to explore the full AppStore →  [text link]
```

### 6 AppStore Modules

| Module | Description | Best For |
|--------|-------------|----------|
| HRMS | Staff attendance, leaves, performance tracking | Schools with 30+ staff |
| Payroll | Salary processing, PF/ESI compliance, payslips | Schools running manual payroll |
| Pulse | Student wellness and counselling tracker | Schools with formal counselling programs |
| Hire | Recruitment management for school staff | Growing institutions hiring frequently |
| Workflow Engine | Custom approval flows — leave, procurement, events | Multi-department schools |
| Warehouse / Inventory | Lab equipment, stationery, asset tracking | Schools with complex inventory |

Cards use a toggle-style visual element suggesting modularity (on/off switch icon).

---

## Section 06 — CADENCE CARE

**Layout:** Nova Frost background `#EEF4FB`. Two side-by-side cards.

### Copy

```
HEADLINE:   We don't just implement Nova. We stay.
SUB:        Cadence Care is our managed service layer —
            so your school gets a partner, not just a platform.
```

### Comparison Cards

| | Cadence Care Standard | Cadence Care Pro |
|---|---|---|
| Priority support | ✓ | ✓ |
| Quarterly health checks | ✓ | ✓ |
| Dedicated success manager | ✗ | ✓ |
| On-demand customisation credits | ✗ | ✓ |
| Annual on-site review | ✗ | ✓ |
| SLA | Standard | 99.9% uptime guaranteed |
| Price premium | Base + 50% | Base + 100% |

### Nova Lounge Callout (below cards)

```
"Nova Lounge: Our promise to every school that joins Nova.

We Stay Until You're Done.

Our implementation team stays — remotely and on-site — until
your staff are trained, your data is migrated, and your school
is fully live."
```

---

## Section 07 — MID-PAGE BOOK A DEMO CTA

**Layout:** Full-width. Nova Indigo background `#1E3A8A`. White text.

```
HEADLINE:   See Nova in action.
            Book a personalised demo for your school.

SUB:        30-minute walkthrough tailored to your school's size and needs.
            No commitment required.

CTA:        [ Book Your Demo ]    ← white filled button, indigo text

BELOW CTA:  or call us at +91-XXXXXXXXXX
```

---

## Section 08 — NOVA VS TRADITIONAL ERP

**Layout:** White background.

### Copy

```
HEADLINE:   Why schools are moving to Nova.
SUB:        See what your current ERP is missing.
```

### Comparison Table (13 rows)

| Feature | Cadence Nova | Traditional ERP |
|---------|-------------|-----------------|
| Transport management | ✓ Included in core | ✗ Extra cost or unavailable |
| Hostel management | ✓ Included in core | ✗ Extra cost or unavailable |
| LMS / Learning | ✓ Included in core | ✗ Separate system required |
| Library management | ✓ Included in core | ✗ Extra cost or unavailable |
| AI-powered queries | ✓ Ask Nova | ✗ Not available |
| Conversational AI assistant | ✓ Tell Nova (coming soon) | ✗ Not available |
| Keyboard command palette | ✓ Nova Command ⌘K | ✗ Not available |
| Implementation support | ✓ We stay until you're done | ✗ Handoff after go-live |
| Mobile app | ✓ Parents + Staff both | ⚠ Limited or none |
| Setup fee | ✓ Zero | ✗ ₹50,000 – ₹2,00,000 |
| Data migration | ✓ Included | ✗ Chargeable extra |
| Real-time fee dashboard | ✓ Live, always on | ⚠ Manual reports only |
| Integrations | ✓ Razorpay, Frappe HRMS, LeadSquared, Meritto | ⚠ Limited / custom dev required |

**Colour rules:** ✓ = `#10B981` green, ✗ = `#EF4444` red, ⚠ = `#F59E0B` amber

**Integrations logo strip below table:**
```
"Nova connects with the tools your school already uses."
[ Razorpay ] [ Frappe HRMS ] [ LeadSquared ] [ Meritto ]
```

---

## Section 09 — FOOTER CTA + FOOTER

### Pre-Footer Strip

```
HEADLINE:   Your school deserves Nova.
SUB:        Pricing tailored to your school's size.
            Starts at ₹35/student/month.
CTA:        [ Book a Demo ]    ← filled blue button
```

### Footer (4 columns)

| Product | Company | Resources | Contact |
|---------|---------|-----------|---------|
| Platform | About Cadence | Blog | Book a Demo |
| AppStore | Cadence Infotech | Product Updates | +91-XXXXXXXXXX |
| Cadence Care | ETS / Apeejay Group | Help Docs | hello@cadenceinfotech.com |
| Pricing | Careers | Video Tutorials | nova.cadenceinfotech.com |

**Footer bottom bar:**
```
© 2026 Valedra India Pvt. Ltd. (Cadence Infotech). All rights reserved.
Privacy Policy  ·  Terms of Service
```

---

## Book a Demo Form

**Trigger:** Nav CTA, all "Book a Demo" buttons, `/book-demo` page
**Display:** Modal overlay (desktop) + full page (mobile)

### Fields

| # | Field | Type | Placeholder |
|---|-------|------|-------------|
| 1 | Full Name | text | Your name |
| 2 | School Name | text | Name of your school or institution |
| 3 | Email Address | email | Work email preferred |
| 4 | Mobile Number | tel | Mobile number |
| 5 | City | text | City |
| 6 | Number of Students | select | Under 300 / 300–800 / 800–2,000 / 2,000+ |

**Submit CTA:** `Book My Demo` — full-width Nova Blue `#2563EB`

**Below button:**
```
No commitment required. We'll confirm within 4 hours.
```

**Success state:**
```
✓ Your demo is booked!
Check your email and WhatsApp for confirmation.
```

**Anti-spam:** Honeypot hidden field only. No CAPTCHA.

---

## Pricing Page (`/pricing`)

```
HEADLINE:   Pricing tailored to your school's size.
SUB:        Nova is priced per student per month —
            transparent, predictable, and fair.

PRICE:      Starting at  ₹35 / student / month
            Minimum commitment: ₹60,000/year

TRUST LINE: No setup fee. No implementation fee. No hidden modules.

CTA:        [ Book a Demo for your custom quote ]

CHECKLIST:  ✓ Student Information System
            ✓ Fee Management
            ✓ Attendance
            ✓ Transport
            ✓ Hostel Management
            ✓ Library
            ✓ LMS / Learning
            ✓ Communication & Parent App
            All included in base price.

LINK:       Want more? Explore the Nova AppStore →
```

**Cadence Care upsell (below):** Two cards — Standard (+50%) and Pro (+100%).
Both cards end with: *"Ask about Care in your demo."*

---

## Video Brief Summary

### Homepage Video — "Watch Demo" CTA (90 seconds)
- Style: Animation-led motion graphics
- Budget: ₹60,000–₹1,20,000
- Script arc: Chaotic ops → Nova reveal → Modules → AI features → WSUYD

### Product Walkthrough — `/see-nova` (3 minutes)
- Style: Screen recording with narration
- Tool: Loom or Descript
- Sections: Dashboard → Fees → Transport → Ask Nova → Nova Command → LMS → Outro
