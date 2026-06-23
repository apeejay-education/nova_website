# Cambridge IGCSE Compliance Requirements for Cadence Nova
> For the Tech Team — these are ERP capabilities required for Cambridge International schools.
> IGCSE = International General Certificate of Secondary Education (Cambridge Assessment International Education / CAIE)
> Source: Cambridge International documentation, school research. Marked as COMING SOON on Nova roadmap.
> Status tags: 🔵 Future requirement | ⚠️ Assess feasibility | 🔴 Critical to build before launch in this segment

---

## Overview

Cambridge IGCSE is offered in ~10,000+ schools worldwide (~500–700 in India). Schools are registered Cambridge Centres with their own Centre Number. All candidate data flows through Cambridge's own systems (CAIE School Support Hub, Cambridge Centre Administration).

**Key Principle:** Unlike CBSE/ICSE, Cambridge's own platform (Cambridge Centre Administration) handles examination registration, mark submission, and certificates. Nova's role is to prepare and export data that feeds Cambridge's platforms — not to replicate them.

---

## 1. Assessment Architecture

### IGCSE (Cambridge O-Level equivalent)
- A*–G grading scale (some newer syllabi use 1–9 scale like UK GCSEs)
- **Coursework (internal assessment):** Some subjects have a coursework component (20–50% of final grade depending on syllabus)
- **Oral examinations:** Modern languages require recorded oral assessments
- **Practical assessments:** Sciences, Art, Design & Technology

- [ ] A*–G grade entry and display (as well as 1–9 for updated syllabi) 🔴
- [ ] Per-subject coursework component percentage configuration 🔴
- [ ] Subject-specific assessment component breakdown (varies by CAIE syllabus code) 🔴
- [ ] Coursework marks entry and submission tracking 🔴
- [ ] Internal assessment mark export in CAIE-compatible format ⚠️

### AS & A Level (for schools offering Pre-University)
- AS: Advanced Subsidiary (Year 12 equivalent)
- A Level: Full A Level (Year 13 equivalent)
- Some subjects allow AS marks to count toward A Level
- [ ] AS and A Level subject distinction in SIS ⚠️
- [ ] Predicted grades management (required for UCAS/university applications) 🔴

---

## 2. Cambridge Centre Administration Integration

Every registered Cambridge Centre must:
- Submit candidate registrations (name, DOB, Centre Number, subject/syllabus codes)
- Submit internal assessment marks for moderation
- Manage absent candidates and special consideration requests

- [ ] Candidate registration export in Cambridge Centre Administration format 🔴
- [ ] Subject and syllabus code configuration (each IGCSE subject has a unique CAIE code) 🔴
- [ ] Internal assessment marks export for moderation submission 🔴
- [ ] Absent/special consideration candidate management 🔴
- [ ] Cambridge Centre Number and Candidate Number management per student 🔴

---

## 3. International Student Records

Cambridge schools are often international or expatriate-community schools. Student records needs differ:

- [ ] Passport number field in student SIS (alongside Aadhaar for Indian students) ⚠️
- [ ] Nationality field 🔵
- [ ] Multiple address support (home country + current address) 🔵
- [ ] International TC format (not CBSE Appendix-V) 🔴
- [ ] Multi-currency fee management (some schools collect in USD/GBP alongside INR) 🔴

---

## 4. Grading and Report Cards

Cambridge report cards differ significantly from CBSE/ICSE formats.

- [ ] A*–G grade display per subject ⚠️
- [ ] Predicted grade entry alongside current grade 🔴
- [ ] Cambridge "Learner Profile" concept (from Cambridge International framework) 🔵
- [ ] University counselling module integration: subject choices, predicted grades, UCAS reference ⚠️
- [ ] IB vs IGCSE track indicator if school offers both ⚠️

---

## 5. Language of Instruction and Localization

Many Cambridge schools operate in English exclusively. Some offer bilingual programs.

- [ ] English as primary interface language ✅
- [ ] Report card and document generation in English ✅
- [ ] No mandatory Hindi/regional language requirement (unlike CBSE) ✅

---

## 6. Fee Structure Differences

Cambridge schools are often premium-fee private schools with:
- Tuition fees in INR but CAIE examination fees in GBP/USD
- Per-subject examination entry fees (paid to CAIE per candidate per subject)
- [ ] CAIE examination entry fee tracking per student per subject 🔴
- [ ] Multi-currency fee ledger (INR + foreign currency CAIE fees) 🔴
- [ ] CAIE fee invoice generation (separate from school fees) ⚠️

---

## Priority Summary for Tech Team

| Priority | Requirement | Impact |
|----------|-------------|--------|
| 🔴 P0 | Cambridge Centre Administration export format | Core registration workflow |
| 🔴 P0 | Subject syllabus code configuration (CAIE codes) | Required for all candidate registrations |
| 🔴 P0 | A*–G (and 1–9) grading engine | Assessment core |
| 🔴 P0 | CAIE examination fee tracking (GBP/USD) | Cambridge schools pay per subject per student |
| 🔴 P1 | International TC format | TC is a daily operation |
| 🔴 P1 | Predicted grades | University application support is a selling point |
| ⚠️ P1 | Multi-currency fee ledger | Premium schools need this |
| 🔵 P2 | Passport number + nationality fields | Nice to have for international student SIS |

---

## Note on Roadmap

IGCSE support is listed as **Coming Soon** on the Nova website. Before marketing to Cambridge schools:
1. CAIE developer/integration documentation must be reviewed (CAIE has restricted API access)
2. A pilot with one Cambridge Centre school is recommended before broad claims
3. Key differentiator to build: **predicted grades + university counselling** — no Indian ERP does this well and Cambridge schools have high demand for it

---

*Last updated: June 2026*
*Source research: Cambridge International documentation, school research*
