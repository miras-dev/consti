"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout220() {
  const { t } = useLanguage();
  const financialImg = useCmsImage('home.layout220.financial', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&crop=center&q=80');

  const services = [
    {
      title: t.financialServices.banking.title,
      desc: t.financialServices.banking.description,
      icon: (
        <svg className="size-12 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
        </svg>
      )
    },
    {
      title: t.financialServices.investment.title,
      desc: t.financialServices.investment.description,
      icon: (
        <svg className="size-12 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: t.financialServices.financing.title,
      desc: t.financialServices.financing.description,
      icon: (
        <svg className="size-12 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      title: t.financialServices.insurance.title,
      desc: t.financialServices.insurance.description,
      icon: (
        <svg className="size-12 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img src={financialImg} className="w-full object-cover" alt="Financial planning and analysis" />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title}>
                  <div className="mb-3 md:mb-4">
                    {s.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">{t.financialServices.explore}</Button>
              <Button title="Learn" variant="link" size="link" iconRight={<RxChevronRight />}>{t.financialServices.learn}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
