"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Layout219() {
  const tabData = [
    {
      value: "tab-one",
      title: "Transparent guidance",
      description: "You'll understand every recommendation and the reasoning behind it. No jargon, no hidden agendas, just clear advice you can trust.",
      content: "image",
      imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
      imageAlt: "Transparent guidance illustration"
    },
    {
      value: "tab-two",
      title: "Personalized approach",
      description: "Every financial situation is unique. I take time to understand your specific goals, constraints, and preferences before making recommendations.",
      content: "video",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      imageAlt: "Personalized approach video",
      videoUrl: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW"
    },
    {
      value: "tab-three",
      title: "Long-term partnership",
      description: "Financial planning isn't a one-time event. I provide ongoing support and adjust strategies as your life and goals evolve.",
      content: "image",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=800&q=80",
      imageAlt: "Long-term partnership illustration"
    }
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Tabs defaultValue="tab-one" className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="max-size-full order-last flex items-center justify-center overflow-hidden md:order-first">
            {tabData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
              >
                {tab.content === "video" ? (
                  <Dialog>
                    <DialogTrigger className="relative flex w-full items-center justify-center">
                      <img
                        src={tab.imageSrc}
                        alt={tab.imageAlt}
                        className="size-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <FaCirclePlay className="absolute z-20 size-16 text-white" />
                      <span className="absolute inset-0 z-10 bg-black/50" />
                    </DialogTrigger>
                    <DialogContent>
                      <VideoIframe video={tab.videoUrl || "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW"} />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <img
                    src={tab.imageSrc}
                    alt={tab.imageAlt}
                    className="size-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                )}
              </TabsContent>
            ))}
          </div>
          <TabsList className="order-first flex-col gap-8 py-8 md:order-last md:py-0">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-l-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl lg:text-3xl">
                  {tab.title}
                </h3>
                <p>{tab.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
