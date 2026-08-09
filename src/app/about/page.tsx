import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { BgLines } from "@/components/ui/BgLines";
import { PageBanner } from "@/components/ui/PageBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { routes } from "@/lib/site";

export const metadata = { title: "About Me" };

/** Services grid – mirrors the six numbered service items on the Blade page. */
const services = [
  { number: "01.", title: "Website Design & Development" },
  { number: "02.", title: "Brand Identity Design" },
  { number: "03.", title: "Mobile App Development" },
  { number: "04.", title: "UI/UX & Product Design" },
  { number: "05.", title: "AI Chatbots & Integrations" },
  { number: "06.", title: "Business Workflow Automation" },
];

/** FAQ accordion items. */
const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "Everything a business needs to exist online: brand identity, website design and development, mobile apps (design, frontend and backend), UI/UX, AI chatbots and workflow automations. One person, end to end.",
    open: true,
  },
  {
    question: "How much experience do you have?",
    answer:
      "4+ years building production web and mobile applications across fintech, eCommerce and internal tools — including work for Ecobank Nigeria, TechVerse and Devnnova.",
    open: false,
  },
  {
    question: "How do projects work?",
    answer:
      "We agree a fixed scope, timeline and quote up front. You get one point of contact (me), regular updates, and a launched product at the end — no hand-offs between agencies.",
    open: false,
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — I work remotely with clients worldwide. Based in Lagos (WAT), my working hours overlap fully with the UK and Europe and most of the US day.",
    open: false,
  },
];

/**
 * About Me – inner page ported from `frontend/pages/about.blade.php`.
 * Sections in order: page banner, full-width about image, about content with
 * floating cards, services grid, FAQ accordion, testimonials, client logos.
 */
export default function AboutPage() {
  return (
    <SiteLayout>
      <PageBanner title="About Me" crumbs={[{ label: "About Me" }]} />

      {/* ===================== Full-width About Image ===================== */}
      <div className="pt-10">
        <Container>
          <Reveal animation="fadeInUp" delay={0.2}>
            <Image
              src="/assets/images/about/about-page.jpg"
              alt="About Page"
              width={1320}
              height={620}
              priority
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>
        </Container>
      </div>

      {/* ===================== About Content ===================== */}
      <section className="relative z-[1] py-[100px] lg:py-[130px]">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <Reveal animation="fadeInUp" delay={0.2} className="lg:col-span-6">
              <SectionTitle
                className="mb-9"
                subtitle="About Me"
                title={
                  <>
                    Professional <span className="text-primary">Problem Solutions</span> For
                    Digital Products
                  </>
                }
                text="I'm Aminuodun Prosper — a full-stack developer with 4+ years shipping production web and mobile products across fintech, eCommerce and internal tools. I take your idea from Figma design to deployed, documented code: brand, website, app and the automations that run them."
              />
              <ul className="list-style-one two-column gap-y-5 pb-[30px]">
                <li>Branding &amp; UI/UX Design</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>AI &amp; Business Automations</li>
              </ul>
              <Link href={routes.about} className="theme-btn">
                Learn More <i className="far fa-angle-right" />
              </Link>
            </Reveal>

            <Reveal animation="fadeInLeft" delay={0.3} className="lg:col-span-5 lg:ms-auto">
              <div className="relative">
                <Image
                  src="/assets/images/about/about.jpg"
                  alt="About Me"
                  width={520}
                  height={620}
                  className="h-auto w-full rounded-2xl"
                />

                {/* Experience years badge */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 rounded-xl bg-primary px-6 py-4 text-center text-ink">
                  <b className="block font-heading text-4xl font-bold leading-none">4+</b>
                  <h5 className="mt-1 text-ink">Years Of Experience</h5>
                </div>

                {/* Floating cards */}
                <div className="absolute right-4 top-1/3 flex items-center gap-3 rounded-xl bg-lighter px-4 py-3">
                  <Image
                    src="/assets/images/about/btn-image1.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h6>Design → Code → Launch</h6>
                  <i className="fas fa-arrow-right text-primary" />
                </div>
                <div className="absolute bottom-8 left-4 flex items-center gap-3 rounded-xl bg-lighter px-4 py-3">
                  <Image
                    src="/assets/images/about/btn-image2.png"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h6>Aminuodun Prosper</h6>
                  <i className="fas fa-arrow-right text-primary" />
                </div>
              </div>
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

      {/* ===================== FAQs ===================== */}
      <section id="faqs" className="relative z-[1] py-[100px] lg:py-[130px]">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal animation="fadeInUp" delay={0.2}>
              <div className="relative">
                <Image
                  src="/assets/images/faqs/faq-one.jpg"
                  alt="FAQ"
                  width={420}
                  height={520}
                  className="h-auto w-full rounded-2xl"
                />
                <div className="absolute -bottom-12 right-0 hidden w-1/2 overflow-hidden rounded-2xl border-4 border-body sm:block">
                  <Image
                    src="/assets/images/faqs/faq-two.jpg"
                    alt="FAQ"
                    width={280}
                    height={320}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal animation="fadeInUp" delay={0.4}>
              <SectionTitle
                className="mb-10"
                title={
                  <>
                    Professional Solutions For Your <span className="text-primary">Digital Product</span>{" "}
                    Design and development
                  </>
                }
              />
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    open={faq.open}
                    className="group rounded-xl border border-line bg-lighter px-6 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-heading text-h5 text-heading">
                      {faq.question}
                      <i className="far fa-angle-down transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="pb-5">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
        <BgLines />
      </section>

      {/* ===================== Testimonials ===================== */}
      <Testimonials />

      {/* ===================== Clients ===================== */}
      <section className="relative z-[1] pb-[60px] pt-[100px] lg:pt-[130px]">
        <Container>
          <Reveal delay={0.2} className="mb-16 text-center">
            <h6 className="text-lg">
              Trusted by <span className="text-primary">startups &amp; businesses</span> across
              fintech, eCommerce, food &amp; mobility
            </h6>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {Array.from({ length: 10 }, (_, i) => (
              <Reveal key={i} delay={0.2 + (i % 5) * 0.1}>
                <Link href={routes.contact}>
                  <Image
                    src={`/assets/images/client-logos/client-logo${i + 1}.png`}
                    alt="Client logo"
                    width={120}
                    height={40}
                    className="opacity-70 transition-opacity hover:opacity-100"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
        <BgLines />
      </section>
    </SiteLayout>
  );
}
