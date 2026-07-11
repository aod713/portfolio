import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BgLines } from "@/components/ui/BgLines";
import { PageBanner } from "@/components/ui/PageBanner";
import { routes } from "@/lib/site";
import { blogPosts } from "@/lib/data/home";

export const metadata = { title: "Blog" };

const categories = [
  "Web Design",
  "Mobile Apps",
  "Brand Identity Design",
  "Web Development",
  "Business Automation",
  "AI Integrations",
];

const latestNews = [
  {
    img: "/assets/images/widgets/news1.jpg",
    title: "How Small Businesses Save Hours With Simple Automations",
    date: "July 2026",
  },
  {
    img: "/assets/images/widgets/news2.jpg",
    title: "Why Your Startup Needs A Website Before Anything Else",
    date: "July 2026",
  },
  {
    img: "/assets/images/widgets/news3.jpg",
    title: "What To Prepare Before Building Your First App",
    date: "July 2026",
  },
];

const popularTags = [
  "Branding",
  "Development",
  "Automation",
  "AI",
  "Websites",
  "Mobile Apps",
];

export default function BlogPage() {
  return (
    <SiteLayout>
      <PageBanner title="Blog" crumbs={[{ label: "Blog" }]} />

      <section className="relative z-[1] py-[100px] lg:py-[130px]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid gap-8 md:grid-cols-2">
                {blogPosts.map((post, i) => (
                  <Reveal key={post.title} delay={0.2 + (i % 2) * 0.2}>
                    <article className="overflow-hidden rounded-2xl border border-line">
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={420}
                        height={300}
                        className="h-auto w-full"
                      />
                      <div className="p-8">
                        <div className="mb-5 flex gap-3">
                          {post.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={routes.blog}
                              className="rounded bg-lighter px-3 py-1 text-sm hover:text-primary"
                            >
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
                          <i className="far fa-calendar-alt text-primary" />{" "}
                          {post.date}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2} className="mt-10 text-center">
                <Link href={routes.contact} className="theme-btn">
                  Discuss Your Project <i className="far fa-angle-right" />
                </Link>
              </Reveal>
            </div>

            <aside className="space-y-10 lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-line p-8">
                  <h4 className="mb-6">Search</h4>
                  <form action="#" className="relative">
                    <input
                      type="text"
                      placeholder="Keywords"
                      required
                      className="w-full rounded-lg bg-lighter px-5 py-3 pe-12 text-heading placeholder:text-base focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Search"
                      className="absolute end-4 top-1/2 -translate-y-1/2 text-primary"
                    >
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="rounded-2xl border border-line p-8">
                  <h4 className="mb-6">Category</h4>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={routes.blog}
                          className="flex items-center gap-3 hover:text-primary"
                        >
                          <i className="far fa-angle-right text-primary" />
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-line p-8">
                  <h4 className="mb-6">Latest Notes</h4>
                  <ul className="space-y-6">
                    {latestNews.map((news) => (
                      <li key={news.title} className="flex items-center gap-4">
                        <Image
                          src={news.img}
                          alt={news.title}
                          width={80}
                          height={80}
                          className="h-20 w-20 shrink-0 rounded-lg object-cover"
                        />
                        <div>
                          <span className="flex items-center gap-2 text-sm">
                            <i className="far fa-calendar-alt text-primary" />{" "}
                            {news.date}
                          </span>
                          <h5 className="mt-1 text-h6">
                            <Link href={routes.blog} className="hover:text-primary">
                              {news.title}
                            </Link>
                          </h5>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-line p-8">
                  <h4 className="mb-6">Popular Tags</h4>
                  <div className="flex flex-wrap gap-3">
                    {popularTags.map((tag) => (
                      <Link
                        key={tag}
                        href={routes.blog}
                        className="rounded bg-lighter px-4 py-2 text-sm hover:bg-primary hover:text-ink"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div
                  className="rounded-2xl bg-ink p-8 text-center"
                  style={{
                    backgroundImage: "url(/assets/images/widgets/widget-cta.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="sub-title">Get A Quote</span>
                  <h4 className="my-4">Need A Website, App Or Automation?</h4>
                  <Link href={routes.contact} className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
        <BgLines />
      </section>
    </SiteLayout>
  );
}
