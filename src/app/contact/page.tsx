import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BgLines } from "@/components/ui/BgLines";
import { PageBanner } from "@/components/ui/PageBanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteInfo } from "@/lib/site";

export const metadata = { title: "Contact" };

/** Telephone href: strip spaces and formatting so `tel:` links dial correctly. */
const phoneHref = `tel:${siteInfo.phone.replace(/[^\d+]/g, "")}`;

/**
 * Contact – inner page ported from `frontend/pages/contact.blade.php`.
 * Sections in order: page banner, contact info + form, location map embed.
 */
export default function ContactPage() {
  return (
    <SiteLayout>
      <PageBanner title="Contact" crumbs={[{ label: "Contact" }]} />

      {/* ===================== Contact Info + Form ===================== */}
      <section className="relative z-[1] py-[100px] lg:py-[130px]">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12">
            {/* Contact details */}
            <Reveal animation="fadeInUp" delay={0.2} className="lg:col-span-4">
              <SectionTitle
                className="mb-8"
                subtitle="Get In Touch"
                title={
                  <>
                    Let&apos;s Talk For your <span className="text-primary">Next Projects</span>
                  </>
                }
                text="Tell me what you're building — I'll reply within 24 hours with a plan and a quote."
              />

              <h6 className="mb-4">Based In</h6>
              <ul className="list-style-two mb-9 space-y-3">
                <li className="flex items-start gap-3">
                  <i className="far fa-map-marker-alt mt-1 text-primary" />
                  <span>{siteInfo.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="far fa-envelope mt-1 text-primary" />
                  <a href={`mailto:${siteInfo.email}`} className="hover:text-primary">
                    {siteInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <i className="far fa-phone mt-1 text-primary" />
                  <a href={phoneHref} className="hover:text-primary">
                    {siteInfo.phone}
                  </a>
                </li>
              </ul>

              <h5 className="mb-4">Follow Me</h5>
              <div className="flex items-center gap-3">
                {siteInfo.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-heading transition-colors hover:border-primary hover:bg-primary hover:text-ink"
                  >
                    <i className={social.icon} />
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal animation="fadeInUp" delay={0.3} className="lg:col-span-8">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
        <BgLines />
      </section>

      {/* ===================== Location Map ===================== */}
      <section className="relative z-[1] pb-[100px] lg:pb-[120px]">
        <Container>
          <Reveal animation="fadeInUp" delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Lagos,+Nigeria&output=embed"
                className="h-[450px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
        <BgLines />
      </section>
    </SiteLayout>
  );
}
