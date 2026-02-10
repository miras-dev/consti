"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Contact13() {
  const { t } = useLanguage();
  const locationImg = useCmsImage('home.contact13.location', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&crop=center&q=80');

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{t.contact.tagline}</p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">{t.contact.heading}</h2>
          <p className="md:text-md">{t.contact.subtitle}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4"><BiEnvelope className="size-8" /></div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.contact.email}</h3>
              <p className="mb-2">{t.contact.emailDescription}</p>
              <a className="underline" href="mailto:hello@relume.io">hello@relume.io</a>
            </div>
            <div>
              <div className="mb-3 md:mb-4"><BiPhone className="size-8" /></div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.contact.phone}</h3>
              <p className="mb-2">{t.contact.phoneDescription}</p>
              <a className="underline" href="tel:+491727488509">+49 172 7488509</a>
            </div>
            <div>
              <div className="mb-3 md:mb-4"><BiMap className="size-8" /></div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">{t.contact.office}</h3>
              <p className="mb-2">{t.contact.officeAddress}</p>
              <div className="mt-5 md:mt-6">
                <Button title="Plan route" variant="link" size="link" iconRight={<RxChevronRight />}>{t.contact.planRoute}</Button>
              </div>
            </div>
          </div>
          <div>
            <img src={locationImg} alt="Berlin cityscape and office location" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
