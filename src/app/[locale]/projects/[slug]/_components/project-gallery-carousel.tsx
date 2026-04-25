"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import { useMemo, useRef } from "react";
import ProjectImageBox from "./project-image-box";

export default function ProjectGalleryCarousel() {
  // Translation
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
    }),
  );

  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    ],
    [],
  );

  return (
    <Carousel
      className="relative"
      opts={{
        direction: dir,
        loop: true,
      }}
      plugins={[autoplay.current]}
    >
      <CarouselContent className="-ms-4 md:-ml-6 py-12 items-stretch">
        {images.map((imgUrl, idx) => (
          <CarouselItem
            key={idx}
            className="ps-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex"
          >
            <ProjectImageBox src={imgUrl} alt={imgUrl} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="actions absolute -top-px inset-e-12">
        <CarouselPrevious className="-inset-s-26" />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
