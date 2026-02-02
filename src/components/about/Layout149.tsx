"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout149() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">Foundation</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Economics shaped my approach to life</h2>
              <p className="mb-5 md:mb-6 md:text-md">I hold a Master of Science in Economics and work as an independent MLP Financial Consultant. My practice combines rigorous financial planning with practical career coaching, helping clients across Germany build lasting stability and achieve meaningful professional growth.</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
                {["webflow-logo", "relume-logo", "webflow-logo", "relume-logo"].map((logo, i) => (
                  <img key={i} src={`https://d22po4pjz3o32e.cloudfront.net/${logo}.svg`} alt={logo} className="max-h-14" />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">Explore</Button>
                <Button title="vCard" variant="link" size="link" iconRight={<RxChevronRight />}>vCard</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="About" />
        </div>
      </div>
    </section>
  );
}
