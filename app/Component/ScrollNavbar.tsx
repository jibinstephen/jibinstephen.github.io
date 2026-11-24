'use client'

import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

/** Sticky navbar that appears once the page is scrolled past the top. */
export default function ScrollNavbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur transition-all duration-300 ${show
        ? "translate-y-0 opacity-100 "
        : "-translate-y-full opacity-0 pointer-events-none  hidden"
        }`}
    >
      <Navbar />
    </div>
  );
}
