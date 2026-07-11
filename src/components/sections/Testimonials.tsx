"use client";

import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/home";

/**
 * Testimonials – the client feedback slider.
 *
 * Shows two cards at a time on desktop and one on mobile. The track slides
 * via a CSS transform driven by the useCarousel hook (our slick replacement).
 * Prev/next buttons live in the left content column, matching the design.
 */
export function Testimonials() {
  const { index, next, prev } = useCarousel(testimonials.length, 4000);

  return (
    <section className="relative z-[1]">
      <div className="for-bgc-black py-[100px] lg:py-[130px]">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: title + arrows */}
            <Reveal delay={0.2} className="lg:col-span-4">
              <SectionTitle
                className="mb-10"
                subtitle="Clients Testimonials"
                title={
                  <>
                    What My Clients <span className="text-primary">Say</span>
                  </>
                }
                text="Real feedback from founders and business owners I've built for."
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-heading transition-colors hover:bg-primary hover:text-ink"
                >
                  <i className="fal fa-arrow-left" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-heading transition-colors hover:bg-primary hover:text-ink"
                >
                  <i className="fal fa-arrow-right" />
                </button>
              </div>
            </Reveal>

            {/* Right: sliding track */}
            <div className="overflow-hidden lg:col-span-8">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * (100 / 1)}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="w-full shrink-0 px-3 md:w-1/2"
                  >
                    <div className="h-full rounded-2xl border border-line bg-lighter p-8">
                      <div className="mb-6">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <p className="mb-6 text-base">{t.text}</p>
                      <div>
                        <h5 className="mb-1">{t.name}</h5>
                        <span className="text-sm text-base">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
