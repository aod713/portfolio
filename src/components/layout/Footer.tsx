import Image from "next/image";
import Link from "next/link";
import { routes, siteInfo } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";

const quickLinks = [
  { label: "Service", href: routes.services },
  { label: "Projects", href: routes.projects },
  { label: "Pricing", href: routes.services },
  { label: "Faqs", href: routes.about },
  { label: "Contact", href: routes.contact },
];

const bottomNav = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

/**
 * Footer – the dark footer shared across pages: brand, quick links,
 * newsletter signup and contact details.
 */
export function Footer() {
  return (
    <footer className="relative z-[1]">
      <div className="bg-ink pb-[75px] pt-[100px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Logo */}
            <Reveal delay={0.2} className="lg:col-span-2">
              <Link href={routes.home}>
                <Image
                  src={siteInfo.logo}
                  alt={siteInfo.name}
                  width={140}
                  height={40}
                />
              </Link>
            </Reveal>

            {/* Quick links + newsletter */}
            <Reveal delay={0.4} className="lg:col-span-7">
              <h6 className="footer-title mb-6 uppercase tracking-wide text-base">
                Quick Link
              </h6>
              <ul className="mb-8 flex flex-wrap gap-x-8 gap-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <NewsletterForm />
            </Reveal>

            {/* Address */}
            <Reveal delay={0.6} className="lg:col-span-3">
              <h6 className="footer-title mb-6 uppercase tracking-wide text-base">
                Address
              </h6>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <i className="far fa-map-marker-alt mt-1 text-primary" />
                  {siteInfo.address}
                </li>
                <li className="flex gap-3">
                  <i className="far fa-envelope mt-1 text-primary" />
                  <a href={`mailto:${siteInfo.email}`} className="hover:text-primary">
                    {siteInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <i className="far fa-phone mt-1 text-primary" />
                  <a href={`tel:${siteInfo.phone}`} className="hover:text-primary">
                    {siteInfo.phone}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Footer bottom bar */}
      <div className="py-5">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p>
              Copyright @2025,{" "}
              <Link href={routes.home} className="text-primary">
                {siteInfo.name}
              </Link>{" "}
              All Rights Reserved
            </p>
            <ul className="flex gap-6">
              {bottomNav.map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
