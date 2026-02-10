"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Testimonial17() {
  const { t } = useLanguage();
  const avatar1 = useCmsImage('home.testimonial17.avatar1', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&q=80');
  const avatar2 = useCmsImage('home.testimonial17.avatar2', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&q=80');
  const avatar3 = useCmsImage('home.testimonial17.avatar3', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80');

  const testimonials = [
    {
      quote: t.testimonials.testimonial1,
      name: t.testimonials.client1Name,
      role: t.testimonials.client1Role,
      avatar: avatar1
    },
    {
      quote: t.testimonials.testimonial2,
      name: t.testimonials.client2Name,
      role: t.testimonials.client2Role,
      avatar: avatar2
    },
    {
      quote: t.testimonials.testimonial3,
      name: t.testimonials.client3Name,
      role: t.testimonials.client3Role,
      avatar: avatar3
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">{t.testimonials.heading}</h2>
          <p className="md:text-md">{t.testimonials.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
              <div className="rb-5 mb-5 md:mb-6">
                <div className="mb-5 flex md:mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <BiSolidStar key={s} className="mr-1 size-6" />
                  ))}
                </div>
                <blockquote className="md:text-md">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img src={testimonial.avatar} alt={`${testimonial.name} avatar`} className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
