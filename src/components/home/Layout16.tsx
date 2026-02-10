"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout16() {
  const { t } = useLanguage();
  const consultingImg = useCmsImage('home.layout16.consulting', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center&q=80');

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{t.personalized.tagline}</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {t.personalized.heading}
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              {t.personalized.description}
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <svg className="size-6 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{t.personalized.students}</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <svg className="size-6 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{t.personalized.entrepreneurs}</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <svg className="size-6 text-brand-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{t.personalized.internationals}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Discover" variant="secondary">{t.personalized.discover}</Button>
              <Button title="Explore" variant="link" size="link" iconRight={<RxChevronRight />}>{t.personalized.explore}</Button>
            </div>
          </div>
          <div>
            <img src={consultingImg} className="w-full object-cover" alt="Professional consulting meeting" />
          </div>
        </div>
      </div>
    </section>
  );
}
