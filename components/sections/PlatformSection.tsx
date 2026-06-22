"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  UserPlus, CreditCard, Bus, BookOpen,
  CalendarCheck, Building2, GraduationCap, Bell,
  MapPin, Users, CheckCircle2,
  BedDouble, UtensilsCrossed,
} from "lucide-react";
import JourneyBackground from "@/components/ui/JourneyBackground";
import AnimateIn from "@/components/ui/AnimateIn";

// ─── Shared primitives ────────────────────────────────────────────────────────

function BrowserChrome({ time }: { time: string }) {
  return (
    <div className="shrink-0 h-5 flex items-center gap-1.5 px-2.5 bg-[#f0f0f0] border-b border-neutral-200">
      <span className="w-[7px] h-[7px] rounded-full bg-[#FF5F57] shrink-0" />
      <span className="w-[7px] h-[7px] rounded-full bg-[#FEBC2E] shrink-0" />
      <span className="w-[7px] h-[7px] rounded-full bg-[#28C840] shrink-0" />
      <span className="ml-1 text-[7px] font-semibold text-neutral-500 shrink-0 tabular-nums">
        {time}
      </span>
      <div className="ml-auto h-[9px] w-20 bg-[#dedede] rounded-full" />
    </div>
  );
}

function TopBar({
  icon: Icon,
  title,
  badge,
  badgeClass = "bg-green-100 text-green-700",
}: {
  icon: React.ElementType;
  title: string;
  badge: string;
  badgeClass?: string;
}) {
  return (
    <div className="shrink-0 flex items-center gap-2 px-3 py-2 border-b border-neutral-100">
      <div className="w-5 h-5 rounded bg-[#2563EB]/10 flex items-center justify-center shrink-0">
        <Icon size={10} className="text-[#2563EB]" />
      </div>
      <span className="text-[10px] font-semibold text-[#111827]">{title}</span>
      <span className={`ml-auto shrink-0 text-[8px] font-medium rounded-full px-2 py-0.5 ${badgeClass}`}>
        {badge}
      </span>
    </div>
  );
}

function StatPills({
  stats,
}: {
  stats: { label: string; value: string; valueClass?: string }[];
}) {
  return (
    <div className="shrink-0 grid grid-cols-3 gap-1.5 px-3 py-2">
      {stats.map(({ label, value, valueClass = "text-[#111827]" }) => (
        <div key={label} className="bg-[#f5f7ff] rounded-lg px-2 py-1.5 text-center">
          <div className={`text-[12px] font-bold leading-none ${valueClass}`}>{value}</div>
          <div className="text-[7.5px] text-neutral-400 mt-1 leading-none">{label}</div>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="shrink-0 mb-1.5 text-[8px] font-semibold text-neutral-400 uppercase tracking-widest">
      {children}
    </p>
  );
}

// ─── Module mockups ───────────────────────────────────────────────────────────

function AdmissionsMockup() {
  const stages = [
    { label: "Enquiries", count: 156, pct: 100 },
    { label: "Applied",   count: 89,  pct: 57  },
    { label: "Enrolled",  count: 67,  pct: 43  },
  ];
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={UserPlus}
        title="Admissions & SIS"
        badge="AY 2025–26"
        badgeClass="bg-[#2563EB]/10 text-[#2563EB]"
      />
      <StatPills
        stats={[
          { label: "Enquiries", value: "156" },
          { label: "Applied",   value: "89"  },
          { label: "Enrolled",  value: "67", valueClass: "text-[#2563EB]" },
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <SectionLabel>Admission Pipeline</SectionLabel>
        {stages.map((s) => (
          <div key={s.label} className="mb-2.5 last:mb-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-[#111827]">{s.label}</span>
              <span className="text-[9px] font-bold text-[#111827]">{s.count}</span>
            </div>
            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#2563EB]"
                style={{ width: `${s.pct}%`, opacity: 0.35 + (s.pct / 100) * 0.65 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeesMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={CreditCard}
        title="Fee Management"
        badge="₹2.4L Due"
        badgeClass="bg-amber-100 text-amber-700"
      />
      <StatPills
        stats={[
          { label: "Total",     value: "₹20.8L" },
          { label: "Collected", value: "₹18.4L", valueClass: "text-green-600" },
          { label: "Due",       value: "₹2.4L",  valueClass: "text-red-500"   },
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <div className="shrink-0 mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-[8px] text-neutral-400">Collection Progress</span>
            <span className="text-[8px] font-semibold text-[#111827]">88.5%</span>
          </div>
          <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-[#2563EB]" style={{ width: "88.5%" }} />
          </div>
        </div>
        <SectionLabel>Top Defaulters</SectionLabel>
        {[
          { name: "Aryan Sharma", cls: "VII-B", due: "₹12,400" },
          { name: "Priya Mehta",  cls: "IX-A",  due: "₹8,750"  },
          { name: "Rohit Kapoor", cls: "VI-C",  due: "₹15,200" },
        ].map((d, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-1.5 border-b border-neutral-100 last:border-0"
          >
            <div>
              <div className="text-[9px] font-medium text-[#111827]">{d.name}</div>
              <div className="text-[7.5px] text-neutral-400">{d.cls}</div>
            </div>
            <span className="text-[9px] font-semibold text-red-500">{d.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransportMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={Bus}
        title="Transport"
        badge="12 Active"
        badgeClass="bg-green-100 text-green-700"
      />
      <StatPills
        stats={[
          { label: "Vehicles", value: "12" },
          { label: "Routes",   value: "8"  },
          { label: "Students", value: "432"},
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <SectionLabel>Live Routes</SectionLabel>
        {[
          { name: "Route A · Sector 14",   students: 38, onTime: true  },
          { name: "Route B · Civil Lines",  students: 42, onTime: true  },
          { name: "Route C · Rajpur Road",  students: 29, onTime: false },
          { name: "Route D · Model Town",   students: 35, onTime: true  },
        ].map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-1.5 border-b border-neutral-100 last:border-0"
          >
            <div className="min-w-0 mr-2">
              <div className="text-[9px] font-medium text-[#111827] truncate">{r.name}</div>
              <div className="text-[7.5px] text-neutral-400">{r.students} students</div>
            </div>
            <span
              className={`shrink-0 text-[7.5px] font-medium rounded-full px-1.5 py-0.5 ${
                r.onTime ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              }`}
            >
              {r.onTime ? "On Time" : "Delayed"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CampusLifeMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={BookOpen}
        title="Campus Life"
        badge="Library"
        badgeClass="bg-violet-100 text-violet-700"
      />
      <StatPills
        stats={[
          { label: "Issued",  value: "284" },
          { label: "Overdue", value: "12",  valueClass: "text-red-500" },
          { label: "Catalog", value: "2.8K" },
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <SectionLabel>Recent Checkouts</SectionLabel>
        {[
          { name: "Anika Singh",  book: "Wings of Fire",       overdue: false },
          { name: "Dev Patel",    book: "The Alchemist",        overdue: true  },
          { name: "Riya Sharma",  book: "Sapiens",              overdue: false },
          { name: "Kabir Mehta",  book: "Rich Dad Poor Dad",    overdue: true  },
        ].map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-1.5 border-b border-neutral-100 last:border-0"
          >
            <div className="min-w-0 mr-2">
              <div className="text-[9px] font-medium text-[#111827] truncate">{c.name}</div>
              <div className="text-[7.5px] text-neutral-400 truncate">{c.book}</div>
            </div>
            <span
              className={`shrink-0 text-[7.5px] font-medium rounded-full px-1.5 py-0.5 ${
                c.overdue ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"
              }`}
            >
              {c.overdue ? "Overdue" : "Active"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AttendanceMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={CalendarCheck}
        title="Attendance"
        badge="Today"
        badgeClass="bg-[#2563EB]/10 text-[#2563EB]"
      />
      {/* Big percentage */}
      <div className="shrink-0 flex flex-col items-center pt-2 pb-1 px-3">
        <span className="text-[28px] font-bold text-[#111827] leading-none tabular-nums">94.2%</span>
        <span className="text-[8px] text-neutral-400 mt-0.5">Overall School Attendance</span>
        <div className="mt-1.5 w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-[#2563EB]" style={{ width: "94.2%" }} />
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col mt-1">
        <SectionLabel>By Class · Today</SectionLabel>
        {[
          { name: "Class VI-A",  present: 47, total: 50 },
          { name: "Class VI-B",  present: 44, total: 48 },
          { name: "Class VII-A", present: 51, total: 53 },
          { name: "Class VII-B", present: 46, total: 49 },
        ].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 py-1 border-b border-neutral-100 last:border-0"
          >
            <span className="text-[8.5px] font-medium text-[#111827] w-16 shrink-0">{c.name}</span>
            <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#2563EB]"
                style={{ width: `${(c.present / c.total) * 100}%` }}
              />
            </div>
            <span className="text-[7.5px] text-neutral-400 shrink-0 tabular-nums">
              {c.present}/{c.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HostelMockup() {
  const rooms = [
    "occupied", "occupied", "available", "occupied", "maintenance", "occupied",
    "occupied", "available", "occupied",  "occupied", "available",   "occupied",
  ];
  const roomNos  = ["101","102","103","104","105","106","201","202","203","204","205","206"];
  const colorMap: Record<string, string> = {
    occupied:    "bg-[#2563EB]/10 text-[#2563EB]",
    available:   "bg-green-100 text-green-700",
    maintenance: "bg-amber-100 text-amber-700",
  };
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={Building2}
        title="Hostel"
        badge="Block A · Boys"
        badgeClass="bg-[#2563EB]/10 text-[#2563EB]"
      />
      <StatPills
        stats={[
          { label: "Occupied",  value: "84", valueClass: "text-[#2563EB]"  },
          { label: "Available", value: "12", valueClass: "text-green-600"  },
          { label: "On Mess",   value: "76" },
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <SectionLabel>Room Status</SectionLabel>
        <div className="grid grid-cols-6 gap-1">
          {rooms.map((status, i) => (
            <div
              key={i}
              className={`rounded text-center py-1.5 text-[7.5px] font-semibold ${colorMap[status]}`}
            >
              {roomNos[i]}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-2">
          {[
            { color: "bg-[#2563EB]/10", label: "Occupied"  },
            { color: "bg-green-100",    label: "Available" },
            { color: "bg-amber-100",    label: "Maint."    },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-sm shrink-0 ${l.color}`} />
              <span className="text-[7.5px] text-neutral-400">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LMSMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={GraduationCap}
        title="LMS"
        badge="Assignments"
        badgeClass="bg-violet-100 text-violet-700"
      />
      <StatPills
        stats={[
          { label: "Assigned",  value: "24" },
          { label: "Submitted", value: "18" },
          { label: "Graded",    value: "14", valueClass: "text-green-600" },
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <SectionLabel>Pending Submissions</SectionLabel>
        {[
          { subject: "Mathematics", cls: "VIII-A", submitted: 28, total: 34 },
          { subject: "Science",     cls: "VII-B",  submitted: 31, total: 37 },
          { subject: "English",     cls: "IX-A",   submitted: 22, total: 40 },
          { subject: "History",     cls: "VI-C",   submitted: 18, total: 29 },
        ].map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-2 py-1 border-b border-neutral-100 last:border-0"
          >
            <div className="shrink-0 w-[70px]">
              <div className="text-[9px] font-medium text-[#111827] truncate">{a.subject}</div>
              <div className="text-[7.5px] text-neutral-400">{a.cls}</div>
            </div>
            <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-[#2563EB]"
                style={{ width: `${(a.submitted / a.total) * 100}%` }}
              />
            </div>
            <span className="shrink-0 text-[7.5px] text-neutral-400 tabular-nums">
              {a.submitted}/{a.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunicationMockup() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden select-none">
      <TopBar
        icon={Bell}
        title="Communication"
        badge="Sent Today"
        badgeClass="bg-green-100 text-green-700"
      />
      <StatPills
        stats={[
          { label: "SMS",      value: "432" },
          { label: "App Push", value: "387" },
          { label: "Email",    value: "412" },
        ]}
      />
      <div className="flex-1 min-h-0 overflow-hidden px-3 pb-2 flex flex-col">
        <SectionLabel>Recent Announcements</SectionLabel>
        {[
          { title: "PTM on Dec 20th",        audience: "All Parents", delivered: 432 },
          { title: "Winter Break Schedule",  audience: "All",         delivered: 820 },
          { title: "Fee Due Reminder",       audience: "Class VIII",  delivered: 148 },
        ].map((a, i) => (
          <div
            key={i}
            className="py-1.5 border-b border-neutral-100 last:border-0"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9px] font-medium text-[#111827] truncate">{a.title}</span>
              <span className="shrink-0 text-[7.5px] text-green-600 font-medium tabular-nums">
                ✓ {a.delivered}
              </span>
            </div>
            <span className="mt-0.5 inline-block text-[7.5px] bg-neutral-100 text-neutral-500 rounded-full px-1.5 py-0.5">
              {a.audience}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Carousel data ────────────────────────────────────────────────────────────

type MockupKey =
  | "admissions" | "fees"   | "transport" | "campus"
  | "attendance" | "hostel" | "lms"        | "communication";

const MOCKUP_COMPONENTS: Record<MockupKey, React.ComponentType> = {
  admissions:    AdmissionsMockup,
  fees:          FeesMockup,
  transport:     TransportMockup,
  campus:        CampusLifeMockup,
  attendance:    AttendanceMockup,
  hostel:        HostelMockup,
  lms:           LMSMockup,
  communication: CommunicationMockup,
};

const CAROUSEL_ITEMS: { time: string; name: string; micro: string; mockup: MockupKey }[] = [
  { time: "7:45 AM",  name: "Admissions & SIS", micro: "Every student. Every detail. One profile.",      mockup: "admissions"    },
  { time: "8:30 AM",  name: "Attendance",       micro: "Mark 400 students in under 30 seconds.",         mockup: "attendance"    },
  { time: "9:00 AM",  name: "Fee Management",   micro: "Collect fees in seconds. Track everything.",     mockup: "fees"          },
  { time: "10:30 AM", name: "Transport",        micro: "GPS-tracked buses. Live parent alerts.",          mockup: "transport"     },
  { time: "2:00 PM",  name: "Campus Life",      micro: "Library, hostel, labs — all connected.",         mockup: "campus"        },
  { time: "4:30 PM",  name: "LMS",              micro: "Assignments, lessons, grades — digital-first.",  mockup: "lms"           },
  { time: "5:00 PM",  name: "Hostel",           micro: "Room allocation, food, laundry — unified.",      mockup: "hostel"        },
  { time: "6:00 PM",  name: "Communication",    micro: "SMS, app push, email — one click.",              mockup: "communication" },
];

// ─── Section ──────────────────────────────────────────────────────────────────

const CARD_WIDTH = 336; // 320px card + 16px gap
const AUTO_INTERVAL = 3200;

export default function PlatformSection() {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const paused     = useRef(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? CARD_WIDTH : -CARD_WIDTH, behavior: "smooth" });
  };

  const goTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * CARD_WIDTH, behavior: "smooth" });
    setActiveIdx(idx);
  };

  // Auto-scroll: loop through all cards, pause on hover
  useEffect(() => {
    const id = setInterval(() => {
      if (paused.current) return;
      setActiveIdx(prev => {
        const next = (prev + 1) % CAROUSEL_ITEMS.length;
        scrollRef.current?.scrollTo({ left: next * CARD_WIDTH, behavior: "smooth" });
        return next;
      });
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white py-24 overflow-hidden relative">
      <JourneyBackground tone="light" nodes={[
        { icon: "GraduationCap", x: 6,  y: 18, delay: 0   },
        { icon: "UserPlus",      x: 24, y: 80, delay: 150 },
        { icon: "Users",         x: 60, y: 12, delay: 300 },
        { icon: "CalendarCheck", x: 88, y: 72, delay: 450 },
      ]} paths={[
        "M 6,18 C 12,45 18,66 24,80",
        "M 24,80 C 36,52 48,26 60,12",
        "M 60,12 C 70,38 80,58 88,72",
      ]} />
      {/* Header */}
      <AnimateIn className="text-center px-6 mb-12">
        <p className="text-[11px] font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
          Core Platform
        </p>
        <h2 className="text-[36px] lg:text-[44px] font-medium tracking-tight text-[#111827] leading-tight">
          A day in the life of{" "}
          <span
            style={{
              fontFamily: "var(--font-instrument-serif), 'Georgia', serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            your school.
          </span>
        </h2>
        <p className="mt-3 text-base text-neutral-500 max-w-xl mx-auto">
          Everything runs on Nova — from the first bell to the last bus home.
        </p>
      </AnimateIn>

      {/* Carousel */}
      <div className="relative">

        {/* Timeline spine — decorative path behind cards */}
        <div className="absolute inset-x-0 top-0 bottom-6 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg
            viewBox="0 0 1440 260"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="spine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#2563EB" stopOpacity="0.35" />
                <stop offset="50%"  stopColor="#7C3AED" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#2563EB" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            {/* Curved spine path */}
            <path
              d="M 0,130 C 90,90 170,170 270,120 C 370,70 450,160 540,110 C 640,60 720,150 820,100 C 920,50 1000,140 1100,90 C 1200,40 1300,120 1440,80"
              stroke="url(#spine-grad)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            {/* Node dots at each module station */}
            {[90, 270, 450, 630, 810, 990, 1170, 1350].map((x, i) => {
              const ys = [108, 120, 134, 107, 122, 93, 107, 88];
              return (
                <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="url(#node-grad)" opacity="0.7" />
              );
            })}
          </svg>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-6 px-6"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
        >
          {CAROUSEL_ITEMS.map((item, i) => {
            const Mockup = MOCKUP_COMPONENTS[item.mockup];
            return (
              <motion.div
                key={item.mockup}
                className="shrink-0 w-[300px] sm:w-[320px] rounded-2xl overflow-hidden border border-neutral-200 bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow relative z-10"
                style={{ scrollSnapAlign: "start" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Visual: chrome strip + mockup */}
                <div className="w-full aspect-[4/3] flex flex-col overflow-hidden">
                  <BrowserChrome time={item.time} />
                  <div className="flex-1 min-h-0 overflow-hidden">
                    <Mockup />
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 border-t border-neutral-100">
                  <h3 className="text-[16px] font-semibold text-[#111827] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-neutral-500 mt-1">{item.micro}</p>
                </div>
              </motion.div>
            );
          })}

          {/* End spacer */}
          <div className="shrink-0 w-2" />
        </div>

        {/* Centered scroll controls + dot indicators */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { paused.current = true; scroll("left"); }}
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-[#111827] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronRight size={16} className="rotate-180" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {CAROUSEL_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { paused.current = true; goTo(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:      i === activeIdx ? 20 : 6,
                    height:     6,
                    background: i === activeIdx ? "#2563EB" : "#d1d5db",
                  }}
                  aria-label={`Go to module ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { paused.current = true; scroll("right"); }}
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-[#111827] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
