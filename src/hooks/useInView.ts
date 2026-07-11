"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useInView – fires once when an element scrolls into the viewport.
 *
 * This is the React replacement for the WOW.js / appear.js plugins the
 * previous implementation used. We rely on the native IntersectionObserver, which
 * is supported everywhere and needs no extra dependency.
 *
 * @param options.threshold  How much of the element must be visible (0–1).
 * @param options.once       Stop observing after the first reveal (default true).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  once?: boolean;
}) {
  const { threshold = 0.15, once = true } = options ?? {};
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
