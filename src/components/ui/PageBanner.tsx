import Link from "next/link";
import { routes } from "@/lib/site";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { BgLines } from "./BgLines";

type Crumb = { label: string; href?: string };

type PageBannerProps = {
  /** The big page title (e.g. "About Me"). */
  title: string;
  /** Breadcrumb trail. The last item is rendered as the current page. */
  crumbs?: Crumb[];
};

/**
 * PageBanner – the centered hero/breadcrumb strip at the top of every inner
 * page. Reproduces the design's `page-banner-area`.
 */
export function PageBanner({ title, crumbs = [] }: PageBannerProps) {
  return (
    <section className="relative z-[1] pb-[60px] pt-[140px] text-center lg:pb-[100px] lg:pt-[200px]">
      <Container>
        <Reveal delay={0.2}>
          <h1 className="mb-4 text-[45px] font-medium capitalize sm:text-[55px] lg:text-[65px] xl:text-[75px]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <nav aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-lg capitalize">
              <li>
                <Link href={routes.home} className="hover:text-primary">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span className="text-base">/</span>
                  {crumb.href && i < crumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-primary">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>
      </Container>
      <BgLines />
    </section>
  );
}
