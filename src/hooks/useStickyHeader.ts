"use client";

import { useEffect, useState } from "react";

/**
 * useStickyHeader – returns true once the page is scrolled past `offset`.
 *
 * The previous implementation toggled a `fixed-header` class on scroll; we expose
 * a boolean instead so the Header component can switch its styles declaratively.
 */
export function useStickyHeader(offset = 100) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY >= offset);
    onScroll(); // run once in case the page loads already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return stuck;
}
