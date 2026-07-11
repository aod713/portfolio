import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BgLines } from "@/components/ui/BgLines";
import { PageBanner } from "@/components/ui/PageBanner";
import { routes } from "@/lib/site";
import { featuredProjects } from "@/lib/data/home";

export const metadata = { title: "Projects" };

const filters = [
  "Show All",
  "Branding",
  "Development",
  "Mobile Apps",
  "Automations",
  "Websites",
];

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <PageBanner title="Projects" crumbs={[{ label: "Projects" }]} />

      <section className="relative z-[1] pb-[100px] pt-10 lg:pb-[130px]">
        <Container>
          <Reveal delay={0.2} className="mb-9">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-heading text-lg capitalize text-heading">
              {filters.map((filter, i) => (
                <li
                  key={filter}
                  className={
                    i === 0
                      ? "cursor-pointer text-primary"
                      : "cursor-pointer transition-colors hover:text-primary"
                  }
                >
                  {filter}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={`${project.title}-${i}`} delay={0.2 + (i % 2) * 0.2}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={636}
                      height={480}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <Link
                      href={project.href}
                      aria-label={project.title}
                      target="_blank"
                      rel="noreferrer"
                      className="details-btn absolute right-6 top-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="pt-6">
                    <span className="sub-title">{project.category}</span>
                    <h3 className="mt-2">
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-3">{project.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <Link href={routes.contact} className="theme-btn">
              Start A Project <i className="far fa-angle-right" />
            </Link>
          </Reveal>
        </Container>
        <BgLines />
      </section>
    </SiteLayout>
  );
}
