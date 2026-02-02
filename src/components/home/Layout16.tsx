"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Personalised</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Consulting shaped around your circumstances
            </h1>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Whether you&apos;re a student navigating your first steps, a
              professional seeking advancement, or an international relocating
              to Germany, I craft strategies that fit your unique situation and
              ambitions.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" alt="Icon" className="size-6" />
                </div>
                <span>Students and young professionals</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" alt="Icon" className="size-6" />
                </div>
                <span>Entrepreneurs and freelancers</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" alt="Icon" className="size-6" />
                </div>
                <span>Internationals relocating to Germany</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Discover" variant="secondary">Discover</Button>
              <Button title="Explore" variant="link" size="link" iconRight={<RxChevronRight />}>Explore</Button>
            </div>
          </div>
          <div>
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="w-full object-cover" alt="Consulting" />
          </div>
        </div>
      </div>
    </section>
  );
}
