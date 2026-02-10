"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout361() {
  const { t } = useLanguage();
  const financeImg = useCmsImage('home.layout361.finance', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center&q=80');
  const careerImg = useCmsImage('home.layout361.career', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&crop=center&q=80');

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{t.servicesSection.tagline}</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {t.servicesSection.heading}
            </h2>
            <p className="md:text-md">
              {t.servicesSection.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary">
            <div className="flex items-center justify-center">
              <img
                src={financeImg}
                className="size-full object-cover"
                alt="Finance consulting"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center&q=80";
                }}
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold">{t.servicesSection.finance.title}</p>
              <h3 className="mb-5 text-xl font-bold leading-[1.2] md:mb-6 md:text-2xl lg:text-3xl">
                {t.servicesSection.finance.heading}
              </h3>
              <p>
                {t.servicesSection.finance.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  {t.servicesSection.explore}
                </Button>
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  {t.servicesSection.learn}
                </Button>
              </div>
            </div>
          </div>
          <div className="border border-border-primary">
            <div className="flex items-center justify-center">
              <img
                src={careerImg}
                className="size-full object-cover"
                alt="Career coaching"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&h=600&fit=crop&crop=center&q=80";
                }}
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold">{t.servicesSection.career.title}</p>
              <h3 className="mb-5 text-xl font-bold leading-[1.2] md:mb-6 md:text-2xl lg:text-3xl">
                {t.servicesSection.career.heading}
              </h3>
              <p>
                {t.servicesSection.career.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  {t.servicesSection.explore}
                </Button>
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  {t.servicesSection.learn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
