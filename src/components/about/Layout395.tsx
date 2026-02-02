"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const cards = [
  { label: "Financial", title: "Personal financial planning and wealth building", desc: "Investment strategies, retirement planning, and insurance analysis" },
  { label: "Career", title: "Salary negotiation and interview preparation", desc: "CV reviews, job search strategy, and career orientation" },
  { label: "Specialisation", title: "Tax-efficient structuring and sustainable investing", desc: "Guidance for newcomers to Germany and support for entrepreneurs" },
];

export function Layout395() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Expertise</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">What I offer</h1>
          <p className="md:text-md">Comprehensive guidance across financial and career matters</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.label} className="flex flex-col border border-border-primary">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt={c.label} />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div>
                  <p className="mb-2 font-semibold">{c.label}</p>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">{c.title}</h2>
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
