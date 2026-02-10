"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useCmsImage } from "@/hooks/useCmsImage";

export function Layout141() {
  const credentialsImg = useCmsImage('about.layout141.credentials', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop');
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Credentials</p>
              <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">MLP Financial Consultant qualification</h2>
              <p className="md:text-md">This qualification means I&apos;ve demonstrated comprehensive professional expertise and the ability to use structured consulting tools effectively. It&apos;s not just a title. It&apos;s a commitment to the standards that make good advice reliable.</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Learn" variant="secondary">Learn</Button>
                <Button title="Services" variant="link" size="link" iconRight={<RxChevronRight />}>Services</Button>
              </div>
            </div>
          </div>
          <div><img src={credentialsImg} className="w-full h-80 object-cover rounded-lg" alt="Credentials" /></div>
        </div>
      </div>
    </section>
  );
}
