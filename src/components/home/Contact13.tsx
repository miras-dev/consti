"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Reach out</p>
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">Get in touch</h2>
          <p className="md:text-md">Based in Berlin with clients across Germany and beyond</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4"><BiEnvelope className="size-8" /></div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Email</h3>
              <p className="mb-2">Send me a message</p>
              <a className="underline" href="mailto:hello@relume.io">hello@relume.io</a>
            </div>
            <div>
              <div className="mb-3 md:mb-4"><BiPhone className="size-8" /></div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Phone</h3>
              <p className="mb-2">Call for a quick conversation</p>
              <a className="underline" href="tel:+491727488509">+49 172 7488509</a>
            </div>
            <div>
              <div className="mb-3 md:mb-4"><BiMap className="size-8" /></div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">Office</h3>
              <p className="mb-2">Jean-Monnet-Stra&szlig;e 4, 10557 Berlin</p>
              <div className="mt-5 md:mt-6">
                <Button title="Plan route" variant="link" size="link" iconRight={<RxChevronRight />}>Plan route</Button>
              </div>
            </div>
          </div>
          <div>
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg" alt="Map" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
