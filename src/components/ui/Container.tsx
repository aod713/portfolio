import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /**
   * default → matches Tailwind's centered container (max 1320px)
   * wide    → the 1650px hero/header container (was `container-1620`)
   * narrow  → the 1230px reading container (was `container-1200`)
   */
  size?: "default" | "wide" | "narrow";
  className?: string;
};

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "container",
  wide: "mx-auto w-full max-w-container-wide px-[15px]",
  narrow: "mx-auto w-full max-w-container-narrow px-[15px]",
};

/**
 * Container – centers content and caps its width, reproducing the three
 * container widths the previous implementation used.
 */
export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return <div className={`${sizeClass[size]} ${className}`}>{children}</div>;
}
