"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Stats42() {
  const { t } = useLanguage();
  const consultationImg = useCmsImage('home.stats42.consultation', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&q=80');
  const growthImg = useCmsImage('home.stats42.growth', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=center&q=80');

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-2xl font-bold leading-[1.2] md:text-3xl lg:text-4xl">
              {t.stats.heading}
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              {t.stats.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary p-8 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">{t.stats.yearsConsulting}</h3>
            <p className="mt-auto text-right text-10xl font-bold leading-[1.3] md:text-[3rem] lg:text-[3.5rem]">10+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">{t.stats.yearsDescription}</p>
          </div>
          <div>
            <img className="aspect-[3/2] size-full object-cover" src={consultationImg} alt="Professional financial consultation" />
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">{t.stats.clientsServed}</h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[3rem] lg:text-[3.5rem]">500+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">{t.stats.clientsDescription}</p>
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">{t.stats.successRate}</h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[3rem] lg:text-[3.5rem]">95%</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">{t.stats.successDescription}</p>
          </div>
          <div>
            <img className="aspect-[3/2] size-full object-cover" src={growthImg} alt="Investment and financial growth" />
          </div>
        </div>
      </div>
    </section>
  );
}
