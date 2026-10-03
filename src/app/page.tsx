import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { BgLines } from "@/components/ui/BgLines";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { routes, siteInfo } from "@/lib/site";
import {
  heroStats,
  resumeItems,
  services,
  skills,
  featuredProjects,
  pricing,
  blogPosts,
  clientLogos,
} from "@/lib/data/home";

export default function HomeOnePage() {
  return (
    <SiteLayout>
      {/* ===================== Hero ===================== */}
      <section className="relative z-[1] pb-20 pt-[150px]">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Intro copy */}
            <Reveal delay={0.2} className="lg:col-span-4">
              <span className="mb-3 block text-h2 font-heading text-heading">
                Hello, i&apos;m
              </span>
              <h1 className="mb-5 max-lg:text-[45px]">
                <b>Aminu Daniel</b> full-stack developer
              </h1>
              <p className="mb-8">
                I build brands, websites, mobile apps and the automations that run
                them — end to end, for startups and small businesses.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href={routes.contact} className="theme-btn">
                  Hire Me <i className="far fa-angle-right" />
                </Link>
                <Link href={routes.contact} className="read-more">
                  Download Resume <i className="far fa-angle-right" />
                </Link>
              </div>
            </Reveal>

            {/* Stat counters */}
            <Reveal delay={0.4} className="space-y-8 lg:order-3 lg:col-span-3 lg:ms-auto">
              {heroStats.map((stat) => (
                <Counter key={stat.title} end={stat.end} suffix={stat.suffix} title={stat.title} />
              ))}
            </Reveal>

            {/* Author image with primary-colour circle backdrop */}
            <Reveal animation="fadeIn" delay={0.3} className="lg:col-span-5">
              <div className="relative mx-auto flex max-w-md items-end justify-center">
                <div className="absolute bottom-0 left-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-primary/90" />
                <Image
                  src="/assets/images/hero/me.png"
                  alt="Aminu Daniel"
                  width={500}
                  height={620}
                  priority
                  className="relative h-auto w-full object-contain"
                />
              </div>
            </Reveal>
          </div>
        </Container>
        <BgLines />
      </section>

      {/* ===================== About ===================== */}
      <section className="relative z-[1]">
        <div className="for-bgc-black py-[100px] lg:py-[130px]">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <SectionTitle
                  className="mb-9"
                  subtitle="About Me"
                  title={
                    <>
                      Professional <span className="text-primary">Problem Solutions</span> For
                      Digital Products
                    </>
                  }
                  text="Full-stack developer with 4+ years shipping production web and mobile products across fintech, eCommerce and internal tools. I take your idea from Figma design to deployed, documented code — one person, the whole stack."
                />
                <ul className="list-style-one two-column gap-y-5">
                  <li>Branding &amp; UI/UX Design</li>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>AI &amp; Business Automations</li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-10">
                  <div className="flex items-center gap-3">
                    <i className="far fa-envelope text-2xl text-primary" />
                    <div>
                      <span className="text-sm">Email Us</span>
                      <br />
                      <a href={`mailto:${siteInfo.email}`} className="text-heading hover:text-primary">
                        {siteInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="far fa-phone text-2xl text-primary" />
                    <div>
                      <span className="text-sm">Make A Call</span>
                      <br />
                      <a href={`tel:${siteInfo.phone}`} className="text-heading hover:text-primary">
                        {siteInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Reveal delay={0.3} className="lg:col-span-5">
                <div className="relative">
                  <Image
                    src="/assets/images/about/about.jpg"
                    alt="About Me"
                    width={520}
                    height={560}
                    className="h-auto w-full rounded-2xl"
                  />
                  <div className="absolute right-4 top-8 flex items-center gap-3 rounded-xl bg-lighter px-4 py-3">
                    <Image src="/assets/images/about/btn-image1.png" alt="" width={40} height={40} className="rounded-full" />
                    <h6>Design → Code → Launch</h6>
                    <i className="fas fa-arrow-right text-primary" />
                  </div>
                  <div className="absolute bottom-8 left-4 flex items-center gap-3 rounded-xl bg-lighter px-4 py-3">
                    <Image src="/assets/images/about/btn-image2.png" alt="" width={40} height={40} className="rounded-full" />
                    <h6>Aminuodun Prosper</h6>
                    <i className="fas fa-arrow-right text-primary" />
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>
        <BgLines />
      </section>

      {/* ===================== Resume ===================== */}
      <section className="relative z-[1] pt-[100px] lg:pt-[130px]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <i className="flaticon-asterisk-1 text-[80px] text-primary" />
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <SectionTitle
                className="mb-14"
                subtitle="My Resume"
                title={
                  <>
                    Real <span className="text-primary">Problem Solutions</span> Experience
                  </>
                }
              />
              <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                {resumeItems.map((item, i) => (
                  <Reveal key={`${item.company}-${item.years}`} delay={0.2 + (i % 2) * 0.1}>
                    <div className="flex gap-5 border-b border-line pb-8">
                      <i className="far fa-arrow-right mt-1 text-primary" />
                      <div>
                        <span className="text-sm text-base">{item.years}</span>
                        <h4 className="my-2">{item.role}</h4>
                        <span className="text-base">{item.company}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <BgLines />
      </section>

      {/* ===================== Services ===================== */}
      <section className="relative z-[1] pb-[70px] pt-[100px] lg:pb-[100px] lg:pt-[130px]">
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
                  <div className="font-heading text-3xl font-bold text-primary">{service.number}</div>
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
        <BgLines />
      </section>

      {/* ===================== Skills ===================== */}
      <section className="relative z-[1]">
        <div className="for-bgc-black pb-[70px] pt-[100px] lg:pb-[100px] lg:pt-[130px]">
          <Container>
            <div className="grid gap-16 lg:grid-cols-12">
              <Reveal delay={0.2} className="lg:col-span-5">
                <SectionTitle
                  className="mb-10"
                  subtitle="My Skills"
                  title={
                    <>
                      Let&apos;s Explore Popular <span className="text-primary">Skills &amp; Experience</span>
                    </>
                  }
                  text="React, Next.js and React Native on the frontend; Node.js and NestJS on the backend; Figma for design; n8n and LLM APIs for automation. One stack, zero hand-offs."
                />
                <Link href={routes.about} className="theme-btn">
                  Learn More <i className="far fa-angle-right" />
                </Link>
              </Reveal>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
                  {skills.map((skill, i) => (
                    <Reveal key={i} delay={0.2 + (i % 4) * 0.1}>
                      <div className="rounded-2xl border border-line p-6 text-center transition-colors hover:border-primary">
                        <Image src={skill.img} alt={skill.name} width={60} height={60} className="mx-auto mb-4" />
                        <h5 className="mb-1">{skill.name}</h5>
                        <span className="text-primary">{skill.percent}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BgLines />
      </section>

      {/* ===================== Projects ===================== */}
      <section className="relative z-[1] pb-[70px] pt-[100px] lg:pb-[100px] lg:pt-[130px]">
        <Container>
          <Reveal delay={0.2} className="mb-14 text-center">
            <SectionTitle
              centered
              subtitle="Latest Works"
              title={
                <>
                  Explore My Popular <span className="text-primary">Projects</span>
                </>
              }
            />
          </Reveal>
          <div className="space-y-12">
            {featuredProjects.map((project, i) => (
              <div key={i} className="grid items-center gap-10 lg:grid-cols-2">
                <Reveal
                  animation="fadeInLeft"
                  delay={0.2}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={720}
                    height={480}
                    className="h-auto w-full rounded-2xl"
                  />
                </Reveal>
                <Reveal animation="fadeInRight" delay={0.2} className={i % 2 === 1 ? "lg:ms-auto" : ""}>
                  <div className="max-w-md">
                    <span className="sub-title">{project.category}</span>
                    <h2 className="mb-4 text-h3">
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        {project.title}
                      </a>
                    </h2>
                    <p className="mb-6">{project.desc}</p>
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-14 text-center">
            <Link href={routes.projects} className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </Link>
          </Reveal>
        </Container>
        <BgLines />
      </section>

      {/* ===================== Testimonials ===================== */}
      <Testimonials />

      {/* ===================== Pricing ===================== */}
      <section className="relative z-[1] pt-[100px] lg:pt-[130px]">
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
                  <p className="my-6">Fixed scope, clear timeline, one point of contact from design to launch.</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-center gap-3 ${feature.enabled ? "" : "text-base/40 line-through"}`}
                      >
                        <i className={`fas fa-check ${feature.enabled ? "text-primary" : "text-base/40"}`} />
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

      {/* ===================== Contact ===================== */}
      <section className="relative z-[1] pb-[100px] pt-[95px] lg:pb-[130px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal delay={0.2} className="lg:col-span-4">
              <SectionTitle
                className="mb-10"
                subtitle="Get In Touch"
                title={
                  <>
                    Let&apos;s Talk For your <span className="text-primary">Next Projects</span>
                  </>
                }
                text="Tell me what you're building — I'll reply within 24 hours with a plan and a quote."
              />
              <ul className="list-style-two">
                <li>4+ Years Of Experience</li>
                <li>Web, Mobile &amp; Branding</li>
                <li>AI &amp; Workflow Automations</li>
                <li>Fixed Quotes, No Surprises</li>
              </ul>
            </Reveal>
            <Reveal delay={0.4} className="lg:col-span-8">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
        <BgLines />
      </section>

      {/* ===================== Blog ===================== */}
      <section className="relative z-[1]">
        <div className="for-bgc-black pb-[70px] pt-[100px] lg:pb-[100px] lg:pt-[130px]">
          <Container>
            <Reveal delay={0.2} className="mb-14 text-center">
              <SectionTitle
                centered
                subtitle="News & Blog"
                title={
                  <>
                    Latest News &amp; <span className="text-primary">Blog</span>
                  </>
                }
              />
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              {blogPosts.map((post, i) => (
                <Reveal key={i} delay={0.2}>
                  <article className="overflow-hidden rounded-2xl border border-line">
                    <Image src={post.img} alt={post.title} width={700} height={420} className="h-auto w-full" />
                    <div className="p-8">
                      <div className="mb-6 flex gap-3">
                        {post.tags.map((tag) => (
                          <Link key={tag} href={routes.blog} className="rounded bg-lighter px-3 py-1 text-sm hover:text-primary">
                            {tag}
                          </Link>
                        ))}
                      </div>
                      <h5>
                        <Link href={routes.blog} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </h5>
                      <hr className="my-6 border-line" />
                      <span className="flex items-center gap-2 text-sm">
                        <i className="far fa-calendar-alt text-primary" /> {post.date}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>
        <BgLines />
      </section>

      {/* ===================== Clients ===================== */}
      <section className="relative z-[1] pb-[60px] pt-[100px] lg:pt-[130px]">
        <Container>
          <Reveal delay={0.2} className="mb-16 text-center">
            <h6 className="text-lg">
              Trusted by <span className="text-primary">startups &amp; businesses</span> across fintech, eCommerce, food &amp; mobility
            </h6>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {clientLogos.map((logo, i) => (
              <Reveal key={i} delay={0.2 + (i % 5) * 0.1}>
                <Link href={routes.contact}>
                  <Image src={logo.img} alt="Client logo" width={120} height={40} className="opacity-70 transition-opacity hover:opacity-100" />
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
