"use client";

import { useEffect, useRef } from "react";

export default function ZoomLensProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lensRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      if (!lensRef.current) return;

      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        lensRef.current!.style.transform = `translate3d(${e.clientX - 25}px, ${
          e.clientY - 25
        }px, 0)`;

        lensRef.current!.style.opacity = "1";
        rafRef.current = null;
      });
    };

    const leave = () => {
      if (!lensRef.current) return;
      lensRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {children}

      {/* Glass lens */}
      <div
        ref={lensRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none opacity-0 transition-opacity duration-150"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.4)",
          background:
            "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.25), rgba(255,255,255,0) 70%)",
          backdropFilter: "blur(6px) brightness(1.2) saturate(1.2)",
          WebkitBackdropFilter: "blur(6px) brightness(1.2) saturate(1.2)",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.15), inset 0 0 8px rgba(255,255,255,0.3)",
          willChange: "transform",
        }}
      />
    </>
  );
}