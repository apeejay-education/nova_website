# CBSE Compliance Requirements for Cadence Nova
> For the Tech Team — these are mandatory ERP capabilities for any CBSE-affiliated school.
> Source: CBSE Bye-Laws, CBSE Circulars 2024–2025, OASIS documentation, school admin research.
> Status tags: ✅ Likely already in Nova | ⚠️ Needs verification | 🔴 Critical gap to build

---

## 1. Government Portal Integrations

### OASIS (Online Affiliated School Information System)
- [ ] Annual compliance data export in CBSE-prescribed format and data dictionary ⚠️
- [ ] Validator that catches data mismatches (student count, staff qualifications, infrastructure) BEFORE export ⚠️
- [ ] Infrastructure records: library sq. ft., lab specifications, playground area ⚠️
- [ ] Staff qualification tracking: B.Ed., experience, subject alignment — inspection-ready at all times ⚠️
- [ ] Financial records in CBSE-prescribed format for annual disclosure ⚠️

### SARAS (School Affiliation Re-Engineered Automation System) v7.0
- [ ] Affiliation lifecycle documentation storage (new, renewal, upgradation) ⚠️
- [ ] Year-round compliance-readiness dashboard (SARAS 7.0 window is always open) ⚠️
- [ ] Document checklist and status tracker per affiliation requirement ⚠️

### LOC (List of Candidates) — Class 10 & 12 Board Exam Registration
- [ ] Student subject combination validation against CBSE rules (e.g. blocks Math Basic + Math Standard simultaneously) 🔴
- [ ] Photo upload with CBSE-specified pixel dimensions and file size constraints 🔴
- [ ] APAAR ID linked per student in LOC export 🔴
- [ ] "REFUSED" and "NOGEN" tagging for students who have not provided APAAR consent 🔴
- [ ] LOC data export in CBSE-compatible format 🔴
- [ ] Deadline tracking and alerts for LOC submission windows 🔴

### UDISE+ (Unified District Information System for Education)
- [ ] PEN (Permanent Education Number) field captured and stored per student in SIS ✅
- [ ] UDISE+ annual data entry export ⚠️
- [ ] Name and DOB transliteration validator against Aadhaar data (reduces ~30–40% error rate) 🔴
- [ ] Mismatch report: flags entries where student name/DOB doesn't match Aadhaar format 🔴

### APAAR ID (Academic Bank of Credits)
- [ ] Bulk APAAR ID capture for all students 🔴
- [ ] Consent status tracking per student: Collected / Refused / Pending / NOGEN 🔴
- [ ] Digital audit trail for consent refusals (CBSE mandate January 2025) 🔴
- [ ] UIDAI correction request tracking (corrections can take weeks; track status) 🔴
- [ ] Bulk verification workflow against Aadhaar data 🔴

---

## 2. Academic Assessment Compliance

### CCE (Continuous Comprehensive Evaluation)
- [ ] Scholastic grading: 9-point scale (A1, A2, B1, B2, C1, C2, D, E1, E2) ✅
- [ ] Co-scholastic grading: 5-point scale (Art Education, Health & Physical Education, Work Education) ⚠️
- [ ] Periodic test weightage management ✅
- [ ] Notebook submission tracking ⚠️
- [ ] Subject enrichment activity tracking ⚠️
- [ ] Automatic grade computation from marks ✅

### NEP 2020 Holistic Progress Card (HPC)
> ~25,000+ CBSE schools required to implement. Most ERPs treat this as a checkbox feature — Nova should treat it as first-class.
- [ ] 5-domain assessment: Cognitive, Social-Emotional, Physical, Creative, Values 🔴
- [ ] Self-assessment module (student fills their own HPC sections) 🔴
- [ ] Peer assessment module 🔴
- [ ] Portfolio-based assessment: upload and link evidence per student per term 🔴
- [ ] Life skills tracking per student 🔴
- [ ] Health records integration (physical wellness domain) ⚠️
- [ ] HPC report generation in CBSE-prescribed format 🔴
- [ ] Teacher dashboard: fill HPC for 30+ students without repetitive entry (bulk fill where same value applies) 🔴
- [ ] Principal summary view: school-wide HPC completion status 🔴

### Art Integrated Learning (AIL)
- [ ] Project tracking per subject, per term ⚠️
- [ ] Auto-population of 'Subject Enrichment' field in HPC from AIL records ⚠️

### 75% Attendance Rule (Examination Bye-Laws, Rules 13 & 14)
- [ ] Automatic flag when student drops below 75% threshold ✅
- [ ] Early warning alert: flag at 80% (approaching threshold) with time to recover ⚠️
- [ ] CBSE SOP-compliant condonation format for Regional Office ⚠️
- [ ] Parent WhatsApp/SMS alert before the condonation window closes 🔴
- [ ] Student-wise attendance trend report for exam eligibility review ✅

---

## 3. Document Generation (CBSE Formats)

### Transfer Certificate (TC)
- [ ] Appendix-V CBSE format ⚠️
- [ ] PEN and Affiliation Number auto-fill ⚠️
- [ ] Principal countersignature workflow ⚠️
- [ ] Digital archive with searchable history ✅
- [ ] TC issuance linked to library clearance, fee clearance (no outstanding dues) ⚠️

### CBSE Circular Management
- [ ] CBSE circular intake and tagging (schools receive 100+ circulars/year) 🔴
- [ ] Auto-alert to relevant staff when a circular affects their domain (e.g. new LOC format → registrar) 🔴
- [ ] Circular acknowledgement tracking (confirm that key staff have read critical circulars) 🔴

---

## 4. Staff Compliance
- [ ] Staff B.Ed. certification status and expiry tracking ⚠️
- [ ] Subject-qualification alignment check (CBSE requires teachers qualified in their teaching subject) ⚠️
- [ ] Service book / service records maintenance ⚠️
- [ ] CBSE inspection readiness dashboard: all staff records, infrastructure, financials in one view 🔴

---

## Priority Summary for Tech Team

| Priority | Requirement | Impact |
|----------|-------------|--------|
| 🔴 P0 | APAAR ID bulk collection + consent tracking | Active CBSE mandate, massive admin pain |
| 🔴 P0 | NEP 2020 HPC as native first-class feature | 25,000+ schools, competitors scrambling |
| 🔴 P0 | LOC subject combination validation + APAAR link | Board exam registration — cannot fail |
| 🔴 P0 | UDISE+ transliteration mismatch validator | 30–40% error rate in schools today |
| ⚠️ P1 | OASIS data export in CBSE format | Annual compliance, affects affiliation |
| ⚠️ P1 | CCE co-scholastic tracking | Already partially done, needs completion |
| ⚠️ P1 | TC in Appendix-V format with clearance links | Requested in every school |
| ⚠️ P1 | 75% attendance condonation format | Legal requirement |
| 🔴 P1 | CBSE circular alert system | Unique to Nova — no competitor does this |

---

*Last updated: June 2026*
*Source research: CBSE circulars Jan 2025, Sep 2025, school admin interviews, competitor analysis*
