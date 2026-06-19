// ─── Colours ────────────────────────────────────────────────────────────────

export const COLORS = {
  novaIndigo: "#1E3A8A",
  novaBlue: "#2563EB",
  novaFrost: "#EEF4FB",
  novaNight: "#0F1B3C",
  novaSubtle: "#F5F7FA",
  cadencePink: "#E91E8C",
  cadenceOrange: "#F97316",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  divider: "#E5E7EB",
  gold: "#C9A84C",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Platform", href: "/platform" },
  { label: "AppStore", href: "/appstore" },
  { label: "Cadence Care", href: "/cadence-care" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
] as const;

// ─── Hero copy ────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "AI-POWERED SCHOOL MANAGEMENT PLATFORM",
  headlinePart1: "School management.",
  headlinePart2: "School ",
  headlineGradientWord: "intelligence",
  headlinePart3: ".",
  headlinePart4: "One platform.",
  sub: "Fees, transport, hostel, learning, and AI-powered insights — giving school leaders complete, intelligent command of their institution.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "Watch Demo",
} as const;

// ─── Social proof strip ───────────────────────────────────────────────────────

export const PROOF_STRIP = [
  {
    icon: "school",
    text: "8 core modules. 200+ features. Built for Indian schools.",
  },
  {
    icon: "handshake",
    text: "Nova Lounge: We stay until your school is fully live. Every time.",
  },
] as const;

// ─── Platform section ─────────────────────────────────────────────────────────

export const PLATFORM_SECTION = {
  headline: "Everything your school runs on.",
  headlineLine2: "Inside one platform.",
  footerCopy: "All modules included in core. No hidden add-ons. No surprise invoices.",
} as const;

export const MODULE_CARDS = [
  {
    id: "sis",
    name: "Student Information System",
    icon: "graduation-cap",
    description: "Complete student profiles, admissions, academic history",
  },
  {
    id: "fees",
    name: "Fee Management",
    icon: "rupee",
    description: "Online + offline collections, dues tracking, live dashboard",
  },
  {
    id: "attendance",
    name: "Attendance",
    icon: "calendar-check",
    description: "Biometric, app-based, real-time reporting",
  },
  {
    id: "transport",
    name: "Transport",
    icon: "bus",
    description: "Live GPS tracking, route management, parent alerts",
  },
  {
    id: "hostel",
    name: "Hostel Management",
    icon: "building",
    description: "Room allocation, mess billing, visitor management",
  },
  {
    id: "library",
    name: "Library",
    icon: "book",
    description: "Catalogue management, issue tracking, overdue alerts",
  },
  {
    id: "lms",
    name: "LMS / Learning",
    icon: "screen",
    description: "Content delivery, assignments, quizzes, leaderboard",
  },
  {
    id: "communication",
    name: "Communication",
    icon: "bell",
    description: "Parent app, announcements, push notifications",
  },
] as const;

// ─── AI section ───────────────────────────────────────────────────────────────

export const AI_SECTION = {
  headline: "Meet Nova's intelligence.",
  sub: "Ask anything. Nova answers from across your entire school — instantly.",
  askNova: {
    badge: "AVAILABLE NOW",
    badgeStatus: "live" as const,
    headline: "Type anything. Nova knows.",
    copy: "Search across your entire school in natural language. Type \"Grade 9 students with fees overdue above ₹5,000\" and get the answer instantly — no report builder, no filters.",
  },
  tellNova: {
    badge: "COMING SOON",
    badgeStatus: "coming-soon" as const,
    headline: "Tell Nova to do it. Consider it done.",
    copy: "Type what you need — \"Add Science Lab as a new course for Grade 8\" or \"Mark Rahul absent for today\" — and Tell Nova executes it directly in your ERP. No clicks. No forms. Just conversation.",
  },
  novaCommand: {
    headline: "Nova Command",
    copy: "Hit ⌘K anywhere in Nova and a Spotlight-style command palette opens — search students, open modules, enter accounting entries, and navigate your entire school without lifting your hands off the keyboard. Built for school leaders who refuse to slow down.",
  },
} as const;

// ─── AppStore section ─────────────────────────────────────────────────────────

export const APPSTORE_SECTION = {
  headline: "Your school grows. Nova grows with it.",
  sub: "Start with the core. Add powerful modules as your institution scales.",
  linkText: "Book a Demo to explore the full AppStore →",
} as const;

export const APPSTORE_MODULES = [
  {
    id: "hrms",
    name: "HRMS",
    description: "Staff attendance, leaves, performance tracking",
    bestFor: "Schools with 30+ staff",
  },
  {
    id: "payroll",
    name: "Payroll",
    description: "Salary processing, PF/ESI compliance, payslips",
    bestFor: "Schools running manual payroll",
  },
  {
    id: "pulse",
    name: "Pulse",
    description: "Student wellness and counselling tracker",
    bestFor: "Schools with formal counselling programs",
  },
  {
    id: "hire",
    name: "Hire",
    description: "Recruitment management for school staff",
    bestFor: "Growing institutions hiring frequently",
  },
  {
    id: "workflow",
    name: "Workflow Engine",
    description: "Custom approval flows — leave, procurement, events",
    bestFor: "Multi-department schools",
  },
  {
    id: "warehouse",
    name: "Warehouse / Inventory",
    description: "Lab equipment, stationery, asset tracking",
    bestFor: "Schools with complex inventory",
  },
] as const;

// ─── Cadence Care section ─────────────────────────────────────────────────────

export const CADENCE_CARE_SECTION = {
  headline: "We don't just implement Nova. We stay.",
  sub: "Cadence Care is our managed service layer — so your school gets a partner, not just a platform.",
  novaLounge: {
    headline: "Nova Lounge: Our promise to every school that joins Nova.",
    promise: "We Stay Until You're Done.",
    copy: "Our implementation team stays — remotely and on-site — until your staff are trained, your data is migrated, and your school is fully live.",
  },
} as const;

export const CARE_TIERS = [
  {
    name: "Cadence Care Standard",
    features: [
      { label: "Priority support", included: true },
      { label: "Quarterly health checks", included: true },
      { label: "Dedicated success manager", included: false },
      { label: "On-demand customisation credits", included: false },
      { label: "Annual on-site review", included: false },
      { label: "SLA", value: "Standard" },
    ],
    premium: "Base + 50%",
  },
  {
    name: "Cadence Care Pro",
    features: [
      { label: "Priority support", included: true },
      { label: "Quarterly health checks", included: true },
      { label: "Dedicated success manager", included: true },
      { label: "On-demand customisation credits", included: true },
      { label: "Annual on-site review", included: true },
      { label: "SLA", value: "99.9% uptime guaranteed" },
    ],
    premium: "Base + 100%",
    highlighted: true,
  },
] as const;

// ─── Mid-page CTA section ─────────────────────────────────────────────────────

export const MID_CTA_SECTION = {
  headline: "See Nova in action.",
  headlineLine2: "Book a personalised demo for your school.",
  sub: "30-minute walkthrough tailored to your school's size and needs. No commitment required.",
  cta: "Book Your Demo",
  phone: "+91-XXXXXXXXXX",
} as const;

// ─── Comparison table ─────────────────────────────────────────────────────────

export const COMPARISON_SECTION = {
  headline: "Why schools are moving to Nova.",
  sub: "See what your current ERP is missing.",
} as const;

export type ComparisonStatus = "check" | "cross" | "warning";

export const COMPARISON_ROWS: {
  feature: string;
  nova: string;
  novaStatus: ComparisonStatus;
  traditional: string;
  traditionalStatus: ComparisonStatus;
}[] = [
  {
    feature: "All 8 modules included",
    nova: "SIS, Fees, Transport, Hostel, LMS & more",
    novaStatus: "check",
    traditional: "Add-ons or separate systems",
    traditionalStatus: "cross",
  },
  {
    feature: "AI-powered queries",
    nova: "Ask Nova — talk to your school data",
    novaStatus: "check",
    traditional: "Not available",
    traditionalStatus: "cross",
  },
  {
    feature: "Conversational AI",
    nova: "Tell Nova (coming soon)",
    novaStatus: "check",
    traditional: "Not available",
    traditionalStatus: "cross",
  },
  {
    feature: "Hotkey-based ERP",
    nova: "Nova Command ⌘K — shortcuts that save hours",
    novaStatus: "check",
    traditional: "Not available",
    traditionalStatus: "cross",
  },
  {
    feature: "Implementation support",
    nova: "We stay until you're done",
    novaStatus: "check",
    traditional: "Handoff after go-live",
    traditionalStatus: "cross",
  },
  {
    feature: "Setup fee",
    nova: "Zero",
    novaStatus: "check",
    traditional: "₹50,000 – ₹2,00,000",
    traditionalStatus: "cross",
  },
  {
    feature: "Mobile app",
    nova: "Parents + Staff both",
    novaStatus: "check",
    traditional: "Limited or none",
    traditionalStatus: "warning",
  },
];

export const INTEGRATION_LOGOS = [
  { name: "Razorpay", id: "razorpay" },
  { name: "Frappe HRMS", id: "frappe" },
  { name: "LeadSquared", id: "leadsquared" },
  { name: "Meritto", id: "meritto" },
] as const;

// ─── Pre-footer CTA + Footer ──────────────────────────────────────────────────

export const PRE_FOOTER = {
  headline: "Your school deserves Nova.",
  sub: "Pricing tailored to your school's size.",
  pricingNote: "Starts at ₹35/student/month.",
  cta: "Book a Demo",
} as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "AppStore", href: "/appstore" },
      { label: "Cadence Care", href: "/cadence-care" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Cadence", href: "#" },
      { label: "Cadence Infotech", href: "#" },
      { label: "ETS / Apeejay Group", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "https://cadenceinfotech.com/blog" },
      { label: "Product Updates", href: "/resources" },
      { label: "Help Docs", href: "#" },
      { label: "Video Tutorials", href: "/see-nova" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Book a Demo", href: "/book-demo" },
      { label: "+91-XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
      { label: "hello@cadenceinfotech.com", href: "mailto:hello@cadenceinfotech.com" },
      { label: "nova.cadenceinfotech.com", href: "/" },
    ],
  },
] as const;

export const FOOTER_COPY_RIGHT =
  "© 2026 Valedra India Pvt. Ltd. (Cadence Infotech). All rights reserved.";

// ─── Book a Demo form ─────────────────────────────────────────────────────────

export const BOOK_DEMO_FORM = {
  fields: [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Your name", required: true },
    { name: "schoolName", label: "School Name", type: "text", placeholder: "Name of your school or institution", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Work email preferred", required: true },
    { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "Mobile number", required: true },
    { name: "city", label: "City", type: "text", placeholder: "City", required: true },
    {
      name: "studentCount",
      label: "Number of Students",
      type: "select",
      placeholder: "Select student count",
      required: true,
      options: ["Under 300", "300–800", "800–2,000", "2,000+"],
    },
  ],
  submitLabel: "Book My Demo",
  disclaimer: "No commitment required. We'll confirm within 4 hours.",
  successHeadline: "Your demo is booked!",
  successMessage: "Check your email and WhatsApp for confirmation.",
} as const;

// ─── Pricing page ─────────────────────────────────────────────────────────────

export const PRICING_PAGE = {
  headline: "Pricing tailored to your school's size.",
  sub: "Nova is priced per student per month — transparent, predictable, and fair.",
  price: "₹35",
  priceUnit: "/ student / month",
  minimumCommitment: "Minimum commitment: ₹60,000/year",
  trustLine: "No setup fee. No implementation fee. No hidden modules.",
  cta: "Book a Demo for your custom quote",
  includedModules: [
    "Student Information System",
    "Fee Management",
    "Attendance",
    "Transport",
    "Hostel Management",
    "Library",
    "LMS / Learning",
    "Communication & Parent App",
  ],
  appStoreLink: "Want more? Explore the Nova AppStore →",
} as const;
