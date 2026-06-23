# IB (International Baccalaureate) Compliance Requirements for Cadence Nova
> For the Tech Team — ERP capabilities required for IB World Schools.
> IB Programmes: PYP (Primary Years), MYP (Middle Years), DP (Diploma), CP (Career-related)
> Source: IBO documentation, IB World School research. Marked as COMING SOON on Nova roadmap.
> Status tags: 🔵 Future requirement | ⚠️ Assess feasibility | 🔴 Critical to build before launch in this segment

---

## Overview

There are ~240 IB World Schools in India (as of 2025), concentrated in metro cities and premium school chains. IB schools are the highest-fee-paying segment in Indian private education (₹3–15L/year fees per student).

**Key Principle:** IB is not a government board — it is a Geneva-based non-profit organisation (IBO). IB schools access the **IB Information System (IBIS)** for all official candidate and programme data. Nova must export to IBIS formats, not replicate IBO systems.

**IB programmes typically run alongside other boards** — a school may offer PYP (Primary), MYP (Middle), and then switch to CBSE or ISC for Class 10/12. Nova must handle mixed-programme students.

---

## 1. IB Diploma Programme (DP) — The Most Critical for ERP

The IB Diploma is the flagship. Schools that offer IB DP have the most complex assessment management needs.

### Subject Selection and Group Requirements
Students must take 6 subjects across IB subject groups:
- Group 1: Studies in Language & Literature
- Group 2: Language Acquisition
- Group 3: Individuals & Societies
- Group 4: Sciences
- Group 5: Mathematics
- Group 6: The Arts (or a 6th subject from Groups 1–5)
- Plus: Theory of Knowledge (TOK), Extended Essay (EE), CAS (Creativity, Activity, Service)

- [ ] IB subject group classification in SIS ⚠️
- [ ] Subject combination validation: ensure student has one subject per group 🔴
- [ ] Higher Level (HL) vs Standard Level (SL) designation per student per subject 🔴
- [ ] Subject change management (early in DP1, subject changes are allowed) ⚠️

### Internal Assessment (IA) Management
Every IB subject has an Internal Assessment component (20–50% of final grade). The IA is teacher-marked and externally moderated by IBO.

- [ ] IA mark entry per student per subject 🔴
- [ ] IA completion status tracking (draft → completed → submitted for moderation) 🔴
- [ ] IA marks export in IBIS-compatible format for moderation 🔴
- [ ] IA type per subject (e.g. Science IA = lab report; History IA = historical investigation) ⚠️

### TOK (Theory of Knowledge)
- TOK Essay: externally marked (submitted to IBO)
- TOK Exhibition: internally marked
- Combined TOK/EE grade awards Bonus Points (0, 1, 2, or 3)

- [ ] TOK Essay submission tracking 🔴
- [ ] TOK Exhibition internal marks 🔴
- [ ] TOK predicted grade entry 🔴
- [ ] Bonus point matrix display (TOK grade x EE grade → Bonus Points) ⚠️

### Extended Essay (EE)
3,500–4,000 word research essay. Subject-specific. Supervisor-assessed internally, moderated externally.

- [ ] EE subject and research question tracking per student 🔴
- [ ] Supervisor assignment per student 🔴
- [ ] EE draft submission and feedback tracking 🔴
- [ ] EE predicted grade entry 🔴

### CAS (Creativity, Activity, Service)
Mandatory completion — not graded but must be completed to receive the Diploma.

- [ ] CAS activity log per student (Creativity, Activity, Service separately tracked) 🔴
- [ ] CAS experience reflection recording 🔴
- [ ] CAS completion status per student (IB Coordinator dashboard) 🔴
- [ ] CAS advisor assignment per student 🔴
- [ ] Minimum hours/experiences alert if student is falling behind 🔴

### Predicted Grades and University Applications
IB DP students apply to universities 6–12 months before their final exams. Universities rely on IB predicted grades.

- [ ] Predicted grade entry (1–7) per subject per student 🔴
- [ ] Predicted diploma total calculation (max 45: 6 subjects × 7 + 3 bonus) 🔴
- [ ] UCAS/Common App data export support (student name, subjects, predicted grades) 🔴
- [ ] University application tracking per student ⚠️

---

## 2. IB MYP (Middle Years Programme) — Grades 6–10

MYP uses a 1–7 assessment scale across 8 subject groups with its own criteria-based assessment.

### MYP Assessment
- Each subject assessed against 4 criteria (A, B, C, D), each scored 0–8
- Final MYP grade = conversion of total criteria score to 1–7 scale
- Personal Project (Grade 10): independently assessed research project

- [ ] 4-criteria assessment entry (A, B, C, D) per subject per student ⚠️
- [ ] 1–7 grade conversion from criteria scores ⚠️
- [ ] Personal Project tracking and grade entry 🔴
- [ ] MYP report card generation in IB format 🔴
- [ ] Inter-disciplinary unit (IDU) tracking ⚠️

### MYP e-Assessment (optional, for Grade 10)
Schools can submit students for official IB MYP certification via e-Assessments.

- [ ] e-Assessment candidate registration export 🔴
- [ ] On-screen examination scheduling (MYP e-Assessment is computer-based) ⚠️

---

## 3. IB PYP (Primary Years Programme) — Age 3–12

PYP is inquiry-based; traditional grading does not apply. Assessment is portfolio and exhibition-based.

- [ ] Portfolio management: upload and tag student work samples per unit 🔴
- [ ] Exhibition (Grade 5) project tracking and assessment 🔴
- [ ] Learner profile attribute tracking (IB's 10 Learner Profile attributes) ⚠️
- [ ] Unit of Inquiry planner — teacher-facing planning tool ⚠️
- [ ] Narrative report card generation (PYP does not use grades/marks) 🔴

---

## 4. IBIS (IB Information System) Integration

All official IB candidate data is managed through IBIS. Schools log in to IBIS to:
- Register students for programmes and examinations
- Submit internal assessment marks
- Manage teacher authorizations

- [ ] IBIS candidate data export (name, DOB, programme, subjects, HL/SL) ⚠️
- [ ] IA marks export in IBIS format 🔴
- [ ] Subject/syllabus code mapping to IBO subject codes 🔴

> **Note:** Direct IBIS API access requires IBO approval. Investigate feasibility with IBO before building. Likely first version will be export files, not direct integration.

---

## 5. Fee Management for IB Schools

IB schools pay significant fees to IBO per student:
- Annual school programme fees (per programme offered)
- Per-student examination fees (DP: ~$119–175 USD per candidate)
- IA moderation fees

- [ ] IBO fee tracking per student per programme 🔴
- [ ] Multi-currency fee ledger (IBO fees billed in USD/CHF) 🔴
- [ ] IBO fee invoice generation and tracking ⚠️

---

## 6. Mixed Programme Management

Most IB schools in India offer IB alongside a national board:
- PYP (Grades 1–5) → MYP (Grades 6–8) → IBDP (Grades 11–12) with CBSE/ICSE in between
- OR: IB DP only in Grades 11–12, CBSE for earlier grades

- [ ] Per-student programme designation (which IB programme are they currently enrolled in?) ⚠️
- [ ] Programme transition management (student moves from national board to IB DP) 🔴
- [ ] Dual-board SIS support: same student in CBSE for some subjects, IB DP for others 🔴

---

## Priority Summary for Tech Team

| Priority | Requirement | Impact |
|----------|-------------|--------|
| 🔴 P0 | CAS activity log and completion tracking | Every IB DP school needs this — no ERP does it well |
| 🔴 P0 | IA mark entry + IBIS export | Core to IB DP administration |
| 🔴 P0 | Predicted grade management + diploma total | University applications depend on this |
| 🔴 P0 | EE tracking (subject, supervisor, draft, grade) | EE coordinator pain point |
| 🔴 P1 | TOK Exhibition + Essay + Bonus Points matrix | Small feature, huge principal/coordinator value |
| 🔴 P1 | MYP criteria-based assessment (A–D, 1–7 scale) | Required for MYP schools |
| ⚠️ P1 | IBIS export formats | Investigate IBO API access first |
| 🔴 P2 | PYP portfolio management | Large primary IB schools will value this |
| 🔴 P2 | Multi-currency (USD for IBO fees) | IB school finance teams expect this |

---

## Key IB-Specific USPs for Nova Marketing

1. **CAS Tracker** — the single most painful administrative task for IB Coordinators. No competitor does this well. "Nova tracks every CAS hour so your Coordinator doesn't."
2. **Predicted Grade Dashboard** — Principals and University Counsellors need this. "Know every student's predicted DP score at a glance."
3. **IA Completion Pipeline** — "See which Internal Assessments are on track and which are at risk. Six weeks before the IBO deadline."
4. **EE Supervisor Matching** — small feature, but IB schools will recognize it as genuine IB-native design.

---

*Last updated: June 2026*
*Source research: IBO documentation, IB World School research, DP Coordinator interviews*
