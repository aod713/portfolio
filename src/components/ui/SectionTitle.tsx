import { type ReactNode } from "react";

type SectionTitleProps = {
  /** Small eyebrow text above the heading (e.g. "About Me"). */
  subtitle?: string;
  /** The heading. Wrap words in <span> to colour them lime, like the design. */
  title: ReactNode;
  /** Optional paragraph below the heading. */
  text?: ReactNode;
  /** Center the block (used by full-width sections). */
  centered?: boolean;
  className?: string;
};

/**
 * SectionTitle – the eyebrow + H2 + paragraph block that introduces nearly
 * every section. Highlighted words inside `title` should be wrapped in a
 * <span className="text-primary"> to match the original lime accent.
 */
export function SectionTitle({
  subtitle,
  title,
  text,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {subtitle && <span className="sub-title">{subtitle}</span>}
      <h2 className="mb-[25px] max-md:text-[35px] max-[479px]:text-[30px]">
        {title}
      </h2>
      {text && <p>{text}</p>}
    </div>
  );
}
