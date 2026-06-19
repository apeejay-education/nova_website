"use client";

import { useRef, useEffect } from "react";

interface Props {
  src:       string;
  className?: string;
}

// Two overlapping videos crossfade near end-of-loop, eliminating the black
// flash that browsers show when a looping <video> seeks back to frame 0.
export default function SeamlessVideo({ src, className = "" }: Props) {
  const a = useRef<HTMLVideoElement>(null);
  const b = useRef<HTMLVideoElement>(null);
  const primary = useRef<"a" | "b">("a");

  useEffect(() => {
    const va = a.current;
    const vb = b.current;
    if (!va || !vb) return;

    // Start with A visible, B hidden and pre-loaded
    vb.style.opacity = "0";
    va.play().catch(() => {});
    vb.load();

    const XFADE  = 0.6; // seconds before end to begin crossfade
    const XDUR   = 500; // crossfade duration ms

    function tick() {
      const cur  = primary.current === "a" ? va : vb;
      const next = primary.current === "a" ? vb : va;
      if (!cur || !next) return;
      if (!cur.duration || cur.duration - cur.currentTime > XFADE) return;

      // Pre-roll next
      next.currentTime = 0;
      next.play().catch(() => {});

      // Crossfade
      cur.style.transition  = `opacity ${XDUR}ms ease-in-out`;
      next.style.transition = `opacity ${XDUR}ms ease-in-out`;
      cur.style.opacity  = "0";
      next.style.opacity = "1";

      primary.current = primary.current === "a" ? "b" : "a";

      // Pause the outgoing video after fade completes
      const outgoing = cur;
      setTimeout(() => { outgoing.pause(); }, XDUR + 50);
    }

    const id = setInterval(tick, 200);
    return () => clearInterval(id);
  }, []);

  const base = `absolute inset-0 w-full h-full object-cover pointer-events-none ${className}`;

  return (
    <>
      <video ref={a} src={src} muted playsInline preload="auto" className={base} />
      <video ref={b} src={src} muted playsInline preload="auto" className={base} />
    </>
  );
}
