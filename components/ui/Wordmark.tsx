interface WordmarkProps {
  /** "cadence" text color — white on dark, #111827 on light */
  cadenceColor?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { cadence: 14, nova: 15 },
  md: { cadence: 17, nova: 18 },
  lg: { cadence: 22, nova: 24 },
};

export default function Wordmark({ cadenceColor = "#111827", size = "md" }: WordmarkProps) {
  const s = sizes[size];
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span
        style={{
          fontFamily: "var(--font-dm-sans), 'Inter', sans-serif",
          fontWeight: 700,
          fontSize: s.cadence,
          color: cadenceColor,
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        cadence
      </span>
      <span
        style={{
          fontFamily: "var(--font-playfair), 'Georgia', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: s.nova,
          color: "#2563EB",
          letterSpacing: "0.01em",
          lineHeight: 1,
        }}
      >
        nova
      </span>
    </span>
  );
}
