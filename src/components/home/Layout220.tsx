"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const services = [
  { title: "Banking and accounts", desc: "Guidance on accounts, cards, and banking solutions suited to your needs" },
  { title: "Investment and wealth", desc: "ETF strategies and ethical investing for long-term asset growth and sustainability" },
  { title: "Financing and mortgages", desc: "Real estate, home loans, and professional practice financing with transparent terms" },
  { title: "Insurance and protection", desc: "Liability, health, and disability coverage analysis to safeguard your future" },
];

export function Layout220() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg" className="w-full object-cover" alt="Financial services" />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title}>
                  <div className="mb-3 md:mb-4">
                    <img src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg" className="size-12" alt="Icon" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">Explore</Button>
              <Button title="Learn" variant="link" size="link" iconRight={<RxChevronRight />}>Learn</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
