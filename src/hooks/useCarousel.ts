"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * useCarousel – minimal, dependency-free slider state machine.
 *
 * Replaces the jQuery "slick" plugin used for testimonials. It tracks the
 * active slide, supports autoplay, and exposes next/prev/goTo handlers. The
 * markup that consumes it uses a translateX track (see the Testimonials
 * section) so it stays smooth and CSS-driven.
 *
 * @param count     Total number of slides.
 * @param autoplay  Auto-advance interval in ms (0 disables it).
 */
export function useCarousel(count: number, autoplay = 2000) {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );
  const goTo = useCallback((i: number) => setIndex(i % count), [count]);

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    const timer = setInterval(next, autoplay);
    return () => clearInterval(timer);
  }, [autoplay, count, next]);

  return { index, next, prev, goTo };
}
