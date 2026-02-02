"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout145() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <div className="rb-5 mb-5 md:mb-6">
              <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" className="size-20" alt="Icon" />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Approach</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Clear advice, built on what matters to you</h2>
            <p className="md:text-md">I listen first. Your situation is unique, and generic solutions don&apos;t work. Whether you&apos;re building your first investment portfolio or navigating a career shift, I take time to understand what you need and why it matters.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">Explore</Button>
              <Button title="vCard" variant="link" size="link" iconRight={<RxChevronRight />}>vCard</Button>
            </div>
          </div>
        </div>
        <div><img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" className="size-full object-cover" alt="Approach" /></div>
      </div>
    </section>
  );
}
