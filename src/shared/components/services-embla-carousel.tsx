"use client";

import ServiceBox from "@/app/[locale]/_components/sections/services/_components/service-box";
import { Service } from "@/app/[locale]/_components/sections/services/_types/services";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import { useRef } from "react";

type Props = {
  slides?: Service[];
};

const INITIAL_SLIDES: Service[] = [
  {
    id: 0,
    iconName: "rocket",
    serviceName: "Web Development",
    description: "Building and maintaining websites and web applications.",
  },
  {
    id: 1,
    iconName: "circle-gauge",
    serviceName: "Performance Optimization",
    description: "Enhancing speed and efficiency of digital products.",
  },
  {
    id: 2,
    iconName: "plane-landing",
    serviceName: "Deployment",
    description: "Reliably deploying and managing web projects.",
  },
  {
    id: 3,
    iconName: "code",
    serviceName: "Code Review",
    description: "Professional review and improvement of codebases.",
  },
];

const ServicesEmblaCarousel = ({ slides = INITIAL_SLIDES }: Props) => {
  // Translation
  const locale = useLocale();

  // Refs
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  // Hooks
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true, // ← must be true for autoplay to work continuously
      align: "start",
      slidesToScroll: 1,
      containScroll: "keepSnaps",
      direction: locale === "ar" ? "rtl" : "ltr",
    },
    [autoplayRef.current],
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <ServiceBox
              key={slide.id}
              icon={slide.iconName}
              title={slide.serviceName}
              description={slide.description}
              className={
                slide.iconName === "rocket"
                  ? "text-red-500 dark:text-red-400"
                  : slide.iconName === "circle-gauge"
                    ? "text-green-500 dark:text-green-400"
                    : slide.iconName === "plane-landing"
                      ? "text-blue-500 dark:text-blue-400"
                      : slide.iconName === "code"
                        ? "text-yellow-500 dark:text-yellow-400"
                        : "text-purple-500 dark:text-m-primary"
              }
              boxClassName={
                slide.iconName === "rocket"
                  ? "border-red-500"
                  : slide.iconName === "circle-gauge"
                    ? "border-green-500"
                    : slide.iconName === "plane-landing"
                      ? "border-blue-500"
                      : slide.iconName === "code"
                        ? "border-yellow-500"
                        : "border-purple-500"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesEmblaCarousel;
