/**
 * BgLines – the faint, slowly drifting vertical lines that sit behind every
 * section in the design. Purely decorative, so it is hidden from assistive
 * tech and never intercepts clicks.
 */
export function BgLines() {
  return (
    <div className="bg-lines" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} style={{ left: `${(i + 1) * 10}%` }} />
      ))}
    </div>
  );
}
