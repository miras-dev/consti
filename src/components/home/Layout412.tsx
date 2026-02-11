'use client';
import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { RxChevronRight } from "react-icons/rx";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCmsImage } from "@/hooks/useCmsImage";

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
    image: ImageProps;
};

export type Layout412Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout412 = (props: Layout412Props) => {
    const { t } = useLanguage();
    const { image } = {
        ...Layout412Defaults,
        ...props,
    };
    const mainImage = useCmsImage("home.layout412.main", image.src);

    const sectionRef = useRef<HTMLElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const isMobile = useMediaQuery("(max-width: 767px)");

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });

    // Image starts centered (translateX: -50%) then slides to right (translateX: 0%)
    const imageX = useTransform(
        scrollYProgress,
        [0, 0.6, 1],
        isMobile ? ["0%", "0%", "0%"] : ["-50%", "-10%", "0%"]
    );

    // Text fades in and slides up as image moves right
    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6],
        [0, 0.7, 1]
    );
    const textY = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6],
        [40, 10, 0]
    );

    return (
        <section ref={sectionRef} id="relume" className="relative h-screen overflow-hidden bg-black text-white">
            <div className="relative h-full">
                {/* Text content - left side, vertically centered */}
                <motion.div
                    className="relative z-10 flex h-full items-center px-[5%]"
                    style={!hasMounted || isMobile ? {} : { opacity: textOpacity, y: textY }}
                >
                    <div className="container">
                        <div className="max-w-md lg:max-w-lg">
                            <p className="mb-3 font-semibold md:mb-4">{t.about.tagline}</p>
                            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                {t.about.heading}
                            </h1>
                            <p className="mb-6 md:mb-8 md:text-lg">{t.about.description}</p>
                            <div className="mt-6 flex items-center gap-4 md:mt-8">
                                <a
                                    href="/about-constantin-nixdorff"
                                    className="btn-outline-light"
                                >
                                    {t.about.aboutMe}
                                </a>
                                <a
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4 transition-all duration-200 hover:text-white/80 hover:gap-3"
                                >
                                    {t.about.explore}
                                    <RxChevronRight className="transition-transform duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image - starts centered, slides right, anchored to bottom */}
                <motion.div
                    className="absolute bottom-0 right-0 h-full w-full md:w-[55%]"
                    style={!hasMounted || isMobile ? {} : { x: imageX }}
                >
                    <img
                        src={mainImage}
                        alt={image.alt}
                        className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom"
                    />
                </motion.div>
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
    image: {
        src: "Main.png",
        alt: "Constantin Nixdorff - Financial and Career Consultant",
    },
};
