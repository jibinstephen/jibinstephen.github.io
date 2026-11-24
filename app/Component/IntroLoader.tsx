'use client'

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const MAX_WAIT_MS = 4000;

/**
 * Shows the loading screen only until the first slide (img[data-hero])
 * has loaded, or MAX_WAIT_MS at most. The rest of the page lazy-loads.
 */
export default function IntroLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const done = () => setHidden(true);
    const hero = document.querySelector<HTMLImageElement>("img[data-hero]");
    if (!hero || hero.complete) {
      done();
      return;
    }
    hero.addEventListener("load", done, { once: true });
    hero.addEventListener("error", done, { once: true });
    const timeout = window.setTimeout(done, MAX_WAIT_MS);
    return () => {
      hero.removeEventListener("load", done);
      hero.removeEventListener("error", done);
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (hidden) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [hidden]);

  return <LoadingScreen hidden={hidden} />;
}
