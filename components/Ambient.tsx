"use client";

import { useEffect, useRef } from "react";

export default function Ambient() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      spotlightRef.current?.style.setProperty(
        "background",
        `radial-gradient(600px circle at ${x}px ${y}px, var(--glow), transparent 80%)`
      );
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);

      const card = (event.target as Element | null)?.closest<HTMLElement>(
        ".spotlight-card"
      );
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${ratio})`);
    };

    onScroll();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="aurora aurora-1 -left-[10vw] -top-[10vh] h-[45vh] w-[45vw]" />
        <div className="aurora aurora-2 -right-[10vw] top-[40vh] h-[50vh] w-[40vw]" />
      </div>
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 hidden lg:block"
      />
    </>
  );
}
