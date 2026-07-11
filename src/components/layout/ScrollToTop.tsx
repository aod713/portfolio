"use client";

import { useStickyHeader } from "@/hooks/useStickyHeader";

/**
 * ScrollToTop – the round button that appears after scrolling and smoothly
 * returns the visitor to the top of the page.
 */
export function ScrollToTop() {
  const visible = useStickyHeader(250);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-ink shadow-lg transition-all duration-500 hover:opacity-90 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <i className="fas fa-angle-double-up" />
    </button>
  );
}
