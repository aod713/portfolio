import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BgLines } from "@/components/ui/BgLines";
import { PageBanner } from "@/components/ui/PageBanner";
import { routes } from "@/lib/site";
import { services, pricing } from "@/lib/data/home";

export const metadata = { title: "Services" };

/**
 * Services – inner page ported from `frontend/pages/services.blade.php`.
 * Sections in order: page banner, "What I Do" (image + content), the numbered
 * services grid (dark band), and the pricing packages.
 */
export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageBanner title="Services" crumbs={[{ label: "Services" }]} />

      {/* ===================== What I Do ===================== */}
      <section className="relative z-[1] pb-[100px] pt-[25px] lg:pb-[130px]">
        <Container>
          <div className="grid items-center justify-between gap-16 lg:grid-cols-2">
            <Reveal animation="fadeInUp" delay={0.2}>
              <div className="relative">
                <Image
                  src="/assets/images/about/what-i-do1.jpg"
                  alt="What I do"
                  width={520}
                  height={620}
                  className="h-auto w-full rounded-2xl"
                />
                <div className="absolute -bottom-12 right-0 hidden w-1/2 overflow-hidden rounded-2xl border-4 border-body sm:block">
                  <Image
                    src="/assets/images/about/what-i-do2.jpg"
                    alt="What I do"
                    width={280}
                    height={320}
                    className="h-auto w-full"
                  />
                </div>
                <span className="absolute -left-4 top-8 flaticon-asterisk-1 text-4xl text-primary" />
                <span className="absolute bottom-4 right-1/3 flaticon-asterisk-1 text-4xl text-primary" />
              </div>
            </Reveal>

            <Reveal animation="fadeInUp" delay={0.4} className="lg:ms-auto">
              <SectionTitle
                className="mb-10"
                subtitle="What I Do"
                title={
                  <>
                    Real <span className="text-primary">Problem Solutions</span> Experience
                  </>
                }
                text="I design it, build it and launch it — brand, website, mobile app and the automations that keep your business running."
              />
              <ul className="list-style-two pb-[50px]">
                <li>4+ Years Of Experience</li>
                <li>Web, Mobile &amp; Branding</li>
                <li>AI &amp; Workflow Automations</li>
              </ul>
              <Link href={routes.about} className="theme-btn">
                Learn More <i className="far fa-angle-right" />
              </Link>
            </Reveal>
          </div>
        </Container>
        <BgLines />
      </section>

      {/* ===================== Services ===================== */}
      <section className="relative z-[1]">
        <div className="for-bgc-black pb-[70px] pt-[100px] lg:pb-[100px] lg:pt-[130px]">
          <Container>
            <Reveal delay={0.2} className="mx-auto mb-14 max-w-2xl">
              <SectionTitle
                centered
                subtitle="Popular Services"
                title={
                  <>
                    My <span className="text-primary">Special Service</span> For your Business
                    Development
                  </>
                }
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.number} delay={0.2 + (i % 2) * 0.2}>
                  <div className="group flex items-center gap-6 rounded-2xl border border-line p-8 transition-colors hover:border-primary">
                    <div className="font-heading text-3xl font-bold text-primary">
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2">{service.title}</h4>
                      <p>Done for you, end to end</p>
                    </div>
                    <span className="details-btn shrink-0">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>
        <BgLines />
      </section>

      {/* ===================== Pricing ===================== */}
      <section id="pricing" className="relative z-[1] pb-[70px] pt-[100px] lg:pb-[100px] lg:pt-[130px]">
        <Container>
          <Reveal delay={0.2} className="mb-14 text-center">
            <SectionTitle
              centered
              subtitle="Pricing Package"
              title={
                <>
                  Amazing <span className="text-primary">Pricing</span> For your Projects
                </>
              }
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan, i) => (
              <Reveal key={i} delay={0.2 + i * 0.2}>
                <div className="h-full rounded-2xl border border-line p-8 transition-colors hover:border-primary">
                  <h4 className="mb-2">{plan.title}</h4>
                  <p className="mb-4 text-sm">
                    <span className="text-primary">{plan.save}</span>
                  </p>
                  <span className="font-heading text-4xl font-bold text-heading">${plan.price}</span>
                  <p className="my-6">
                    Fixed scope, clear timeline, one point of contact from design to launch.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-center gap-3 ${
                          feature.enabled ? "" : "text-base/40 line-through"
                        }`}
                      >
                        <i
                          className={`fas fa-check ${
                            feature.enabled ? "text-primary" : "text-base/40"
                          }`}
                        />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <Link href={routes.contact} className="theme-btn w-full">
                    Choose Package <i className="far fa-angle-right" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
        <BgLines />
      </section>
    </SiteLayout>
  );
}
