"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats41() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Track record</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">Years of work across Germany</h2>
          </div>
          <div>
            <p className="md:text-md">I&apos;ve worked with students finding their footing, young professionals making their first major financial decisions, academics planning for long-term security, and internationals building new lives in Germany. Each brings different challenges. Each gets the same rigorous attention.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">Learn</Button>
              <Button title="Contact" variant="link" size="link" iconRight={<RxChevronRight />}>Contact</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary p-8 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">Client backgrounds</h3>
            <p className="mt-auto text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">5+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">Years supporting diverse professional groups</p>
          </div>
          <div><img className="aspect-[3/2] size-full object-cover" src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Stats" /></div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">Client backgrounds</h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">5+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">Years supporting diverse professional groups</p>
          </div>
          <div className="border border-border-primary p-8">
            <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">Client backgrounds</h3>
            <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">5+</p>
            <div className="my-4 h-px w-full bg-border-primary" />
            <p className="text-right">Years supporting diverse professional groups</p>
          </div>
          <div><img className="aspect-[3/2] size-full object-cover" src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" alt="Stats" /></div>
        </div>
      </div>
    </section>
  );
}
