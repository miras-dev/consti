"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout1() {
  const financeImg = useCmsImage('services.layout1.finance', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80');
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Finance</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">Personal wealth building and security</h1>
            <p className="md:text-md">I handle the details of your financial life so you can focus on what matters. From investment strategies and retirement planning to insurance analysis and tax-efficient structuring, every decision serves your long-term stability.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">Explore</Button>
              <Button title="Learn more" variant="link" size="link" iconRight={<RxChevronRight />}>Learn more</Button>
            </div>
          </div>
          <div>
            <img
              src={financeImg}
              className="w-full object-cover"
              alt="Finance"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
