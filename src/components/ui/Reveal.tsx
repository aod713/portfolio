"use client";

import { type ElementType, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Animation =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeIn";

const animationClass: Record<Animation, string> = {
  fadeInUp: "animate-fadeInUp",
  fadeInDown: "animate-fadeInDown",
  fadeInLeft: "animate-fadeInLeft",
  fadeInRight: "animate-fadeInRight",
  fadeIn: "animate-fadeIn",
};

type RevealProps = {
  children: ReactNode;
  /** Which entrance animation to play. Mirrors the original `wow fadeInUp`. */
  animation?: Animation;
  /** Delay in seconds, e.g. 0.2 for the old `delay-0-2s`. */
  delay?: number;
  /** Render as a different element (default <div>). */
  as?: ElementType;
  className?: string;
};

/**
 * Reveal – animates its children in when they scroll into view.
 *
 * This is the declarative replacement for the design's
 * `class="wow fadeInUp delay-0-2s"` markup. Until the element is visible it
 * stays at opacity 0, then the chosen keyframe animation plays once.
 */
export function Reveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`${inView ? animationClass[animation] : "opacity-0"} ${className}`}
      style={inView && delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
