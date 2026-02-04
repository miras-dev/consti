"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout359() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Career</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">Move forward with confidence</h2>
            <p className="md:text-md">Salary negotiation, interview preparation, and job search strategy</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80"
              className="size-full object-cover"
              alt="Career"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="mb-2 text-sm font-semibold">Career</p>
              <h3 className="mb-5 text-2xl font-bold leading-[1.2] md:mb-6 md:text-3xl lg:text-4xl">Advance your professional trajectory</h3>
              <p>I work with you on salary negotiation, CV reviews, and interview preparation. Whether you&apos;re starting out or making a significant move, you&apos;ll have a clear strategy and the confidence to execute it.</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">Explore</Button>
              <Button title="Learn more" variant="link" size="link" iconRight={<RxChevronRight />}>Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
