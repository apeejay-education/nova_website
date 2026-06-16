"use client";

import { useEffect, useRef } from "react";

const MODULES = [
  { id: "sis", label: "Student Info", icon: "🎓" },
  { id: "fees", label: "Fee Management", icon: "₹" },
  { id: "attendance", label: "Attendance", icon: "📅" },
  { id: "transport", label: "Transport", icon: "🚌" },
  { id: "hostel", label: "Hostel", icon: "🏨" },
  { id: "library", label: "Library", icon: "📚" },
  { id: "lms", label: "LMS / Learning", icon: "🖥" },
  { id: "communication", label: "Communication", icon: "🔔" },
] as const;

// 8 nodes arranged clockwise from top, evenly spaced
const ANGLES = [270, 315, 0, 45, 90, 135, 180, 225]; // degrees
const RADIUS = 150; // px from centre to node centre
const SVG_SIZE = 420;
const CENTRE = SVG_SIZE / 2;
const HUB_R = 44;
const NODE_R = 30;

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTRE + r * Math.cos(rad),
    y: CENTRE + r * Math.sin(rad),
  };
}

export default function ModuleDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);

  // Trigger spoke draw-in animation after mount (desktop only via CSS media query)
  useEffect(() => {
    const spokes = svgRef.current?.querySelectorAll<SVGLineElement>(".spoke");
    spokes?.forEach((el, i) => {
      el.style.setProperty("--delay", `${i * 0.08}s`);
    });
  }, []);

  return (
    <>
      {/* Desktop: hub-and-spoke SVG */}
      <div className="hidden lg:flex items-center justify-center w-full">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          width={SVG_SIZE}
          height={SVG_SIZE}
          aria-label="Nova platform module diagram"
          role="img"
        >
          {/* Spokes */}
          {MODULES.map((mod, i) => {
            const end = polar(ANGLES[i], RADIUS);
            const spokeStart = polar(ANGLES[i], HUB_R + 2);
            const spokeEnd = polar(ANGLES[i], RADIUS - NODE_R - 2);
            const len = Math.hypot(spokeEnd.x - spokeStart.x, spokeEnd.y - spokeStart.y);
            return (
              <line
                key={mod.id}
                className="spoke"
                x1={spokeStart.x}
                y1={spokeStart.y}
                x2={spokeEnd.x}
                y2={spokeEnd.y}
                stroke="#CBD5E1"
                strokeWidth="1.5"
                strokeDasharray={len}
                strokeDashoffset={len}
                style={{
                  animationDelay: `var(--delay, 0s)`,
                }}
              />
            );
          })}

          {/* Node circles */}
          {MODULES.map((mod, i) => {
            const pos = polar(ANGLES[i], RADIUS);
            return (
              <g key={mod.id}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={NODE_R}
                  fill="white"
                  stroke="#2563EB"
                  strokeWidth="2"
                />
                <text
                  x={pos.x}
                  y={pos.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  className="select-none"
                >
                  {mod.icon}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + NODE_R + 14}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fontWeight="600"
                  fill="#111827"
                  className="select-none"
                >
                  {mod.label}
                </text>
              </g>
            );
          })}

          {/* Hub */}
          <circle
            cx={CENTRE}
            cy={CENTRE}
            r={HUB_R}
            fill="#1E3A8A"
            className="hub-pulse"
          />
          <text
            x={CENTRE}
            y={CENTRE}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="15"
            fontWeight="700"
            fill="white"
            className="select-none"
          >
            Nova
          </text>
        </svg>
      </div>

      {/* Mobile: 2×4 icon grid */}
      <div className="lg:hidden grid grid-cols-4 gap-4 w-full max-w-sm mx-auto">
        {MODULES.map((mod) => (
          <div key={mod.id} className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl border-2 border-nova-blue bg-white flex items-center justify-center text-xl shadow-sm">
              {mod.icon}
            </div>
            <span className="text-[10px] font-semibold text-text-primary text-center leading-tight">
              {mod.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .spoke {
            animation: draw-spoke 0.5s ease forwards;
            animation-delay: var(--delay, 0s);
          }
          @keyframes draw-spoke {
            to { stroke-dashoffset: 0; }
          }
          .hub-pulse {
            animation: hub-pulse 2.5s ease-in-out infinite 0.8s;
          }
          @keyframes hub-pulse {
            0%, 100% { filter: drop-shadow(0 0 0px rgba(30,58,138,0)); }
            50% { filter: drop-shadow(0 0 10px rgba(30,58,138,0.35)); }
          }
        }
      `}</style>
    </>
  );
}
