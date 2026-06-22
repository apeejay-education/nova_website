interface NovaLogoProps {
  /** true when rendered on a dark background (hero transparent state) */
  dark?: boolean;
}

export default function NovaLogo({ dark = false }: NovaLogoProps) {
  const cadenceColor = dark ? "rgba(255,255,255,0.60)" : "#64748b";
  const novaColor    = dark ? "#ffffff"                 : "#0f172a";

  return (
    <div className="flex items-center h-12 shrink-0">

      {/* ── Emblem: arc + N, full gradient — mirrors CI parent mark ── */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {/*
            Gradient runs top-to-bottom in viewBox space:
            pink (#E91E8C) at top → orange (#F97316) at bottom.
            Matches the Cadence Infotech parent logo gradient exactly.
          */}
          <linearGradient
            id="nova-ci-grad"
            x1="18" y1="3"
            x2="18" y2="33"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#E91E8C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>

        {/*
          Arc — 300° sweep, opens on the right side (like the "C" in CI logo).
          Start: 330° (upper right)  → (29.3, 11.5)
          End:    30° (lower right)  → (29.3, 24.5)
          large-arc=1, sweep=1 (clockwise through top → left → bottom)
        */}
        <path
          d="M 29.3,11.5 A 13,13 0 1 1 29.3,24.5"
          stroke="url(#nova-ci-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* N letterform — three strokes, same gradient */}
        {/* Left vertical  */}
        <line
          x1="13" y1="12" x2="13" y2="24"
          stroke="url(#nova-ci-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Right vertical */}
        <line
          x1="23" y1="12" x2="23" y2="24"
          stroke="url(#nova-ci-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Diagonal (top-left → bottom-right) */}
        <line
          x1="13" y1="12" x2="23" y2="24"
          stroke="url(#nova-ci-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* ── Typography stack ── */}
      <div className="flex flex-col justify-center leading-none pl-2.5" style={{ gap: 3 }}>

        {/* CADENCE — light supporting line */}
        <span
          style={{
            fontFamily:    "var(--font-space-grotesk), 'Inter', sans-serif",
            fontWeight:    500,
            fontSize:      11,
            letterSpacing: "0.15em",
            color:         cadenceColor,
            textTransform: "uppercase" as const,
            lineHeight:    1,
          }}
        >
          Cadence
        </span>

        {/* NOVA — dominant platform name */}
        <span
          style={{
            fontFamily:    "var(--font-space-grotesk), 'Inter', sans-serif",
            fontWeight:    700,
            fontSize:      17,
            letterSpacing: "0.20em",
            color:         novaColor,
            textTransform: "uppercase" as const,
            lineHeight:    1,
          }}
        >
          Nova
        </span>

      </div>
    </div>
  );
}
