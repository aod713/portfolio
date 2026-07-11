import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
import { ScrollToTop } from "./ScrollToTop";

type SiteLayoutProps = {
  children: ReactNode;
  /** Swap in an alternative header (e.g. the alternate variant). */
  header?: ReactNode;
  /** Swap in an alternative footer. */
  footer?: ReactNode;
};

/**
 * SiteLayout – the page chrome shared by every route: preloader, header,
 * main content, footer and the scroll-to-top button. Individual pages only
 * render their own sections and wrap them in this component.
 */
export function SiteLayout({ children, header, footer }: SiteLayoutProps) {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Preloader />
      {header ?? <Header />}
      <main>{children}</main>
      {footer ?? <Footer />}
      <ScrollToTop />
    </div>
  );
}
