"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout395() {
  const financialImg = useCmsImage('about.layout395.financial', 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop');
  const careerImg = useCmsImage('about.layout395.career', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop');
  const specialisationImg = useCmsImage('about.layout395.specialisation', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop');

  const cards = [
    { label: "Financial", title: "Personal financial planning and wealth building", desc: "Investment strategies, retirement planning, and insurance analysis", image: financialImg },
    { label: "Career", title: "Salary negotiation and interview preparation", desc: "CV reviews, job search strategy, and career orientation", image: careerImg },
    { label: "Specialisation", title: "Tax-efficient structuring and sustainable investing", desc: "Guidance for newcomers to Germany and support for entrepreneurs", image: specialisationImg },
  ];
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Expertise</p>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">What I offer</h1>
          <p className="md:text-md">Comprehensive guidance across financial and career matters</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.label} className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img src={c.image} alt={c.label} className="w-full h-48 object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold">{c.label}</p>
                  <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl md:leading-[1.3] lg:text-3xl">{c.title}</h2>
                  <p>{c.desc}</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <Button title="Services" variant="link" size="link" iconRight={<RxChevronRight />}>Services</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
