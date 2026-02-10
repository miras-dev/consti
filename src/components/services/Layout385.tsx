"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout385() {
  const financialImg = useCmsImage('services.layout385.financial', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80');
  const careerImg = useCmsImage('services.layout385.career', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80');
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Services</p>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">Two paths to success</h1>
          <p className="md:text-md">Integrated consulting for your financial and career goals.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 flex-col border border-border-primary sm:grid-cols-2 lg:col-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src={financialImg}
                alt="Financial"
                className="size-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Financial</p>
                <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl">Build lasting wealth and security</h2>
                <p>Personal planning, investments, retirement strategies, and insurance guidance.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button title="Explore" variant="link" size="link" iconRight={<RxChevronRight />}>Explore</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src={careerImg}
                alt="Career"
                className="size-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Career</p>
                <h2 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl">Advance your professional trajectory</h2>
                <p>Salary negotiation, CV reviews, interview prep, and job search strategy.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button title="Explore" variant="link" size="link" iconRight={<RxChevronRight />}>Explore</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
