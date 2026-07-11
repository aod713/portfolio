"use client";

import { useEffect, useState } from "react";

/**
 * Preloader – the full-screen spinner shown until the page has loaded.
 * It fades out shortly after mount (the React equivalent of the jQuery
 * `$(window).on('load')` fade in the previous implementation).
 */
export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-body transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-line border-t-primary" />
    </div>
  );
}
