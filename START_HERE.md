# START_HERE.md — Claude Code Startup Prompt

> Copy the prompt below and paste it into Claude Code CLI when starting this project.
> Run this from the `nova-website/` directory.

---

## How to Start

```bash
# 1. Navigate to the project folder
cd "nova-website"

# 2. Launch Claude Code
claude

# 3. Paste the prompt below
```

---

## Startup Prompt (copy everything between the lines)

---

I'm building the marketing website for **Cadence Nova** — a premium AI-powered school management platform by Cadence Infotech (Valedra India Pvt. Ltd., Apeejay Stya Group).

**Read these files in order before doing anything:**
1. `CLAUDE.md` — project context, rules, tech stack, critical constraints
2. `design_spec.md` — colour palette, typography, component specs, responsive rules
3. `website_plan.md` — all 9 page sections with exact copy and layout notes
4. `tasks.md` — prioritised development task list with acceptance criteria

**The site:** `nova.cadenceinfotech.com`
**One goal:** Convert school Principals into "Book a Demo" bookings.
**Design benchmark:** PowerSchool (powerschool.com) — white canvas, bold, spacious.

**Tech stack:**
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (design tokens in `design_spec.md`)
- Framer Motion for animations
- React Hook Form + Zod for the demo booking form

**Start with Phase 0 tasks in `tasks.md`:**
- Initialise the Next.js project
- Configure Tailwind with Nova design tokens
- Set up the folder structure
- Create `lib/constants.ts` with all copy strings and data

**Critical rules (never break these):**
1. "Book a Demo" is always the primary CTA
2. Pricing shows ₹35/student/month floor only — nothing else disclosed
3. "Tell Nova" is always labelled "Coming Soon" with an amber badge
4. The Cadence gradient (`#E91E8C → #F97316`) is used ONLY on the word "intelligence" in the hero headline — nowhere else
5. No CAPTCHA on the demo form — honeypot hidden field only
6. Mobile sticky CTA ("Book a Demo") must always be visible at the bottom of the screen

Ask me before making any copy changes that differ from `website_plan.md`. All design decisions are in `design_spec.md` — do not introduce new colours or fonts.

Let's start with Phase 0. Read all four files and then begin P0.1.

---

## Quick Reference

| What you need | Where to find it |
|---------------|-----------------|
| Hero tagline (exact) | `CLAUDE.md` → Hero Tagline section |
| All colours + Tailwind config | `design_spec.md` → Section 2 |
| Typography scale | `design_spec.md` → Section 3 |
| Component specs (buttons, cards, forms) | `design_spec.md` → Section 5 |
| Module diagram SVG spec | `design_spec.md` → Section 6 |
| Dark AI section spec | `design_spec.md` → Section 7 |
| Responsive breakpoints | `design_spec.md` → Section 8 |
| All 9 page sections with copy | `website_plan.md` |
| Navigation structure | `website_plan.md` → Navigation |
| Book a Demo form fields | `website_plan.md` → Book a Demo Form |
| Pricing page copy | `website_plan.md` → Pricing Page |
| All development tasks | `tasks.md` |
| Phase 0 (setup) | `tasks.md` → Phase 0 |
| Phase 1 (core components) | `tasks.md` → Phase 1 |

---

## AI Feature Names (Canonical)

| Name | Status | What It Does |
|------|--------|-------------|
| Ask Nova | Live ✓ | Natural language school data queries |
| Tell Nova | Coming Soon ⏳ | Conversational AI that modifies ERP entries |
| Nova Command | Live ✓ | ⌘K keyboard command palette |

---

## Contacts

**Product Owner:** Anand Arora — anand.arora@ets.apeejay.edu
**Approvals required for:** copy changes, new colours/fonts, new sections, pricing display changes
