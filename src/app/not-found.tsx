import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BgLines } from "@/components/ui/BgLines";
import { routes } from "@/lib/site";

export const metadata = { title: "Page Not Found" };

/**
 * Global 404 page – ported from `frontend/pages/errorPage.blade.php`.
 * Centered error graphic, heading and a button back to the homepage.
 * Rendered automatically by Next.js for unmatched routes.
 */
export default function NotFound() {
  return (
    <SiteLayout>
      <section className="relative z-[1] py-[150px] text-center">
        <Container>
          <Reveal animation="fadeInUp" delay={0.2}>
            <div className="mx-auto max-w-2xl">
              <Image
                src="/assets/images/shape/404-error.png"
                alt="Error"
                width={753}
                height={750}
                priority
                className="mx-auto mb-[85px] h-auto w-auto max-md:mb-[55px]"
              />
              <SectionTitle
                centered
                className="mb-10"
                subtitle="Oops!"
                title="This Page Can't Be Found"
              />
              <Link href={routes.home} className="theme-btn">
                Go To Homepage <i className="far fa-angle-right" />
              </Link>
            </div>
          </Reveal>
        </Container>
        <BgLines />
      </section>
    </SiteLayout>
  );
}
