"use client";

import { useCountUp } from "@/hooks/useCountUp";

type CounterProps = {
  /** Number to count up to. */
  end: number;
  /** Optional suffix glyph: "+", "k+", "%" – matches the design variants. */
  suffix?: "plus" | "k-plus" | "percent" | null;
  title: string;
};

const suffixText: Record<NonNullable<CounterProps["suffix"]>, string> = {
  plus: "+",
  "k-plus": "k+",
  percent: "%",
};

/**
 * Counter – one animated stat (number + label) from the hero / fact sections.
 * The number ticks from 0 to `end` the first time it scrolls into view.
 */
export function Counter({ end, suffix = null, title }: CounterProps) {
  const { ref, value } = useCountUp(end);

  return (
    <div className="counter-item">
      <span ref={ref} className="font-heading text-[45px] font-bold text-heading">
        {value}
        {suffix && suffixText[suffix]}
      </span>
      <span className="block text-base">{title}</span>
    </div>
  );
}
