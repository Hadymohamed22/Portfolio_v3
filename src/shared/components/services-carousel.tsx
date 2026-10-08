"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ServiceBox from "@/app/[locale]/_components/sections/services/_components/service-box";
import { useLocale } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  slides?: {
    id: number;
    icon: "rocket" | "circle-gauge" | "plane-landing" | "code";
    name: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
  }[];
};

export type IconVariantsType =
  | "rocket"
  | "circle-gauge"
  | "plane-landing"
  | "code";

const INITIAL_SLIDES: {
  id: number;
  icon: "rocket" | "circle-gauge" | "plane-landing" | "code";
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}[] = [
  {
    id: 0,
    icon: "rocket",
    name: {
      en: "Web Development",
      ar: "تطوير المواقع",
    },
    description: {
      en: "Building and maintaining websites and web applications.",
      ar: "بناء وصيانة المواقع والتطبيقات الإلكترونية.",
    },
  },
  {
    id: 1,
    icon: "circle-gauge",
    name: {
      en: "Performance Optimization",
      ar: "تحسين الأداء",
    },
    description: {
      en: "Enhancing speed and efficiency of digital products.",
      ar: "تحسين سرعة وكفاءة المنتجات الرقمية.",
    },
  },
  {
    id: 2,
    icon: "plane-landing",
    name: {
      en: "Deployment",
      ar: "النشر",
    },
    description: {
      en: "Reliably deploying and managing web projects.",
      ar: "نشر وإدارة المشاريع الإلكترونية بشكل موثوق.",
    },
  },
  {
    id: 3,
    icon: "code",
    name: {
      en: "Code Review",
      ar: "مراجعة الأكواد",
    },
    description: {
      en: "Professional review and improvement of codebases.",
      ar: "مراجعة وتحسين الأكواد بشكل احترافي.",
    },
  },
];

export default function ServicesCarousel({ slides = INITIAL_SLIDES }: Props) {
  // Translation
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";
  const currentLocale = locale === "ar" ? "ar" : "en";

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
      <CarouselContent className="-ms-4 items-stretch">
        {slides.map((slide) => {
          const title = slide.name[currentLocale] ?? slide.name.en;
          const description =
            slide.description[currentLocale] ?? slide.description.en;

          return (
            <CarouselItem
              key={slide.id ?? slide.icon}
              className="ps-4 md:basis-1/2 lg:basis-1/4 flex"
            >
              <ServiceBox
                icon={slide.icon}
                description={description}
                title={title}
                className={
                  slide.icon === "rocket"
                    ? "text-red-500 dark:text-red-400"
                    : slide.icon === "circle-gauge"
                      ? "text-green-500 dark:text-green-400"
                      : slide.icon === "plane-landing"
                        ? "text-blue-500 dark:text-blue-400"
                        : slide.icon === "code"
                          ? "text-yellow-500 dark:text-yellow-400"
                          : "text-purple-500 dark:text-m-primary"
                }
                boxClassName={
                  slide.icon === "rocket"
                    ? "border-red-500"
                    : slide.icon === "circle-gauge"
                      ? "border-green-500"
                      : slide.icon === "plane-landing"
                        ? "border-blue-500"
                        : slide.icon === "code"
                          ? "border-yellow-500"
                          : "border-purple-500"
                }
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
