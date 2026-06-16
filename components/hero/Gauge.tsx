interface GaugeProps {
  value: number;          // 0–100
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
}

const TOTAL_TICKS = 40;
const CENTER_X = 100;
const CENTER_Y = 100;
const RADIUS = 80;

export default function Gauge({
  value,
  color = "#2563EB",
  showLabels = false,
  min = "0",
  max = "100",
}: GaugeProps) {
  const activeTicks = Math.round((value / 100) * TOTAL_TICKS);

  const r4 = (n: number) => Math.round(n * 1e4) / 1e4; // round to 4 dp — identical on SSR & client

  const ticks = Array.from({ length: TOTAL_TICKS }, (_, i) => {
    // Sweep 180° from left (π) to right (2π / 0)
    const angle = Math.PI + (i / (TOTAL_TICKS - 1)) * Math.PI;
    const inner = RADIUS - 10;
    const outer = RADIUS;
    return {
      x1: r4(CENTER_X + inner * Math.cos(angle)),
      y1: r4(CENTER_Y + inner * Math.sin(angle)),
      x2: r4(CENTER_X + outer * Math.cos(angle)),
      y2: r4(CENTER_Y + outer * Math.sin(angle)),
      active: i < activeTicks,
    };
  });

  return (
    <div className="w-full" style={{ maxWidth: 260 }}>
      <svg viewBox="0 0 200 120" className="w-full">
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1}
            x2={t.x2} y2={t.y2}
            stroke={t.active ? color : "#d4d4d8"}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        ))}
        <text
          x={CENTER_X}
          y={107}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#111827"
        >
          {value}%
        </text>
      </svg>
      {showLabels && (
        <div className="flex justify-between px-2 -mt-1">
          <span className="text-[11px] text-neutral-500">{min}</span>
          <span className="text-[11px] text-neutral-500">{max}</span>
        </div>
      )}
    </div>
  );
}
