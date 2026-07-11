"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";

/**
 * useCountUp – animates a number from 0 to `end` when it enters the viewport.
 *
 * Replaces the jQuery "fact counter" that ticked up the experience / project
 * numbers in the hero. Uses requestAnimationFrame for a smooth, framerate
 * independent count.
 *
 * @param end       Target number to count to.
 * @param duration  Animation length in milliseconds.
 */
export function useCountUp(end: number, duration = 3000) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return { ref, value };
}
