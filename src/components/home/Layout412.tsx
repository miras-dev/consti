'use client';
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
    src: string;
    alt?: string;
};

type SubHeadingProps = {
    title: string;
    description: string;
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    subHeadings: SubHeadingProps[];
    buttons: ButtonProps[];
    image: ImageProps;
};

export type Layout412Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout412 = (props: Layout412Props) => {
    const { tagline, heading, description, buttons, image } = {
        ...Layout412Defaults,
        ...props,
    };

    const sectionRef = useRef<HTMLElement>(null);
    const isMobile = useMediaQuery("(max-width: 767px)");

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageWidth = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5],
        isMobile ? ["100%", "100%", "100%"] : ["200%", "120%", "100%"]
    );

    return (
        <section ref={sectionRef} id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-0">
                    <motion.div
                        className="md:mr-12 lg:mr-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            {heading}
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">{description}</p>
                        <div className="mt-6 flex items-center gap-4 md:mt-8">
                            {buttons.map((button, index) => (
                                <Button key={index} {...button}>
                                    {button.title}
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative justify-self-end overflow-hidden"
                        style={{ width: imageWidth, paddingTop: "100%" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute inset-0 size-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const Layout412Defaults: Props = {
    tagline: "Trusted",
    heading: "Who I am and what I do",
    description:
        "I work with students, professionals, and internationals to build financial stability and advance their careers. My approach combines practical expertise with straightforward communication, cutting through complexity to reveal what matters most for your future.",
    subHeadings: [],
    buttons: [
        { title: "About me", variant: "secondary" },
        {
            title: "Explore",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
        },
    ],
    image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Constantin Nixdorff",
    },
};
