interface WordmarkProps {
  /** Single color for both words — white on dark, #111827 on light */
  color?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { cadence: 14, nova: 16 },
  md: { cadence: 17, nova: 19 },
  lg: { cadence: 22, nova: 25 },
};

export default function Wordmark({ color = "#111827", size = "md" }: WordmarkProps) {
  const s = sizes[size];
  return (
    <span className="inline-flex items-baseline gap-1">
      <span
        style={{
          fontFamily: "var(--font-space-grotesk), 'Inter', sans-serif",
          fontWeight: 500,
          fontSize: s.cadence,
          color,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        Cadence
      </span>
      <span
        style={{
          fontFamily: "var(--font-cormorant), 'Georgia', serif",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: s.nova,
          color,
          letterSpacing: "0.01em",
          lineHeight: 1,
        }}
      >
        Nova
      </span>
    </span>
  );
}
