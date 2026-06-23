# ICSE / ISC Compliance Requirements for Cadence Nova
> For the Tech Team — these are mandatory ERP capabilities for any CISCE-affiliated school.
> ICSE = Class 10 (Indian Certificate of Secondary Education)
> ISC = Class 12 (Indian School Certificate)
> Source: CISCE Regulations 2025, ISC Syllabus documents, SUPW guidelines, school research.
> Status tags: ✅ Likely already in Nova | ⚠️ Needs verification | 🔴 Critical gap to build

---

## 1. Fundamental Difference from CBSE: Assessment Architecture

ICSE/ISC uses a **percentage-based system**, not CBSE's 9-point grade scale.
Internal assessment weightings vary by subject and by class — this is structurally different from CBSE CCE.

### ICSE (Class 10) Assessment Splits
- 80% external examination + 20% internal assessment per subject ⚠️
- Internal components vary by subject: periodic tests, notebook submission, class participation, project work, assignments
- No single formula applies — each subject has its own internal assessment structure
- [ ] Per-subject internal assessment component configuration (not a global formula) 🔴
- [ ] Percentage-based grade computation (not CBSE's grade-point scale) ⚠️
- [ ] Internal assessment marks disaggregated by component (test / project / notebook / class participation) 🔴

### ISC (Class 12) Assessment Splits
- **Group I & II subjects:** 80% external / 20% internal ⚠️
- **Group III (vocational/applied subjects):** 50% external / 50% internal — fundamentally different data structure 🔴
- [ ] Subject-group classification in SIS: Group I, Group II, Group III per student per subject 🔴
- [ ] Dual assessment weight engine: 80/20 for Group I&II, 50/50 for Group III 🔴
- [ ] Practical examination marks managed separately from theory marks 🔴
- [ ] Subject-specific practical weightages (range: 20% to 50%+) configurable per subject 🔴

---

## 2. CISCE Portal (CAREERS System)

CISCE implemented CAREERS (CISCE's Affiliation Registration Examination and ERP Systems) in 2013.
All internal assessment marks must be submitted through CAREERS — not a third-party portal.

- [ ] Export internal assessment marks in CAREERS-compatible format 🔴
- [ ] Candidate registration workflow (ICSE schools manage their own candidate registration through CAREERS, unlike CBSE's LOC) ⚠️
- [ ] CISCE affiliation documentation storage (separate from CBSE's SARAS) ⚠️
- [ ] Deadline tracking for CAREERS submission windows 🔴

---

## 3. SUPW (Socially Useful Productive Work) and Community Service
> **SUPW is almost entirely unaddressed by competitor ERPs — this is a true white space for Nova.**
> Source: CISCE SUPW Syllabus, ISC Regulations 2025

SUPW is mandatory for ICSE. Students:
- Select one main craft and one subsidiary community service activity annually
- Are assessed over two years across 5 criteria: Preparation, Organisation, Skills, Research, and Interest
- Graded A–E (letter grades, not percentages)

- [ ] SUPW activity selection per student: main craft + subsidiary service ⚠️
- [ ] Two-year tracking across 5 assessment criteria per student 🔴
- [ ] A–E letter grade entry per criterion per term 🔴
- [ ] SUPW progress report generation in CISCE format 🔴
- [ ] Teacher SUPW assessment dashboard: bulk grade entry for class 🔴
- [ ] SUPW completion tracking per student (alerts for students falling behind) 🔴

---

## 4. Practical Examination and Lab Record Management

ICSE/ISC schools have mandatory practical examinations with lab record requirements.
CISCE auditors may review lab records. This is not a digital requirement — but ERP can track readiness.

- [ ] Practical marks entry per student per subject (separate from theory marks) ✅
- [ ] Lab record completion status per student per subject ⚠️
- [ ] Internal practical examiner marks vs. external marks (ISC) 🔴
- [ ] Practical examination schedule management (separate from written exam schedule) ⚠️

---

## 5. ICSE Report Card and Progress Documents

ICSE report cards are percentage-based and structurally different from CBSE report cards.

- [ ] ICSE Marks Statement: subject-wise marks, total, percentage, grade ⚠️
- [ ] ISC Marks Statement: disaggregated by theory / practical / internal ⚠️
- [ ] Subject-wise internal assessment component breakdown on report card 🔴
- [ ] Best-of-five / best-of-six calculation support (for aggregate computation) 🔴
- [ ] Running percentage tracker per student (students and parents want to monitor this) ⚠️

---

## 6. Transfer Certificate (TC) — ICSE Format

ICSE TCs differ from CBSE TCs in format and required fields.

- [ ] CISCE-prescribed TC format (distinct from CBSE Appendix-V) 🔴
- [ ] CISCE Registration Number on TC ⚠️
- [ ] Subject combination and last class attended fields ⚠️
- [ ] Fee clearance and library clearance workflow before TC issuance ⚠️

---

## 7. Attendance Compliance

ICSE uses percentage attendance, not CBSE's 75%-rule-with-condonation framework. However:

- [ ] Minimum attendance percentage tracking per school's own threshold ✅
- [ ] CISCE does not prescribe condonation — school-specific policy engine needed ⚠️
- [ ] Subject-wise attendance for practicals (CISCE expects practical attendance tracked separately) 🔴

---

## Priority Summary for Tech Team

| Priority | Requirement | Impact |
|----------|-------------|--------|
| 🔴 P0 | CAREERS portal export — internal marks in CISCE format | Non-negotiable for ICSE schools |
| 🔴 P0 | SUPW tracking module: 5 criteria, 2-year, A–E grades | Unaddressed by all competitors |
| 🔴 P0 | Dual assessment weight engine: 80/20 and 50/50 | Structurally different from CBSE |
| 🔴 P0 | Subject-wise internal component configuration | Each subject has unique formula |
| 🔴 P1 | ISC Group III (vocational) support: 50/50 split | Large ISC schools have many Group III students |
| ⚠️ P1 | ICSE/ISC percentage-based report cards | Needed day one |
| ⚠️ P1 | CISCE TC format | High-frequency document |
| 🔴 P1 | Practical marks separated from theory marks | Core to ICSE assessment |

---

## Key Differences to Communicate in Nova Marketing (ICSE-Specific)

1. **SUPW tracking** — no competitor does this. Own it explicitly.
2. **CAREERS export** — direct integration removes the manual copy-paste nightmare schools face today.
3. **80/20 and 50/50 weight engine** — mention this in product copy. ICSE principals will immediately recognize you understand their school.
4. **Subject-specific internal assessment configuration** — not a global formula.

---

*Last updated: June 2026*
*Source research: CISCE Regulations 2025, ISC SUPW Syllabus, school admin research*
