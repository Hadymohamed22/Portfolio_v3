"use client";
import { Service } from "@/app/[locale]/_components/sections/services/_types/services";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ServiceBox from "@/app/[locale]/_components/sections/services/_components/service-box";
import { useLocale } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

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

export default function ServicesCarousel({ slides = INITIAL_SLIDES }: Props) {
  // Translation
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel
      opts={{
        align: "start",
        direction: dir,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-2 items-stretch">
        {slides.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="pl-2 md:basis-1/2 lg:basis-1/4 flex"
          >
            <ServiceBox
              icon={slide.iconName}
              description={slide.description}
              title={slide.serviceName}
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
