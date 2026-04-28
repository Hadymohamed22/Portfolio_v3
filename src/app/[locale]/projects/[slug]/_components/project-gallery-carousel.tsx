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
import { useRef } from "react";
import ProjectImageBox from "./project-image-box";
import { ProjectImage } from "@/app/[locale]/_components/sections/projects/_types/projects";

type Props = {
  images: ProjectImage[];
};

export default function ProjectGalleryCarousel({ images }: Props) {
  // Translation
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
    }),
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
        {images.map((img) => (
          <CarouselItem
            key={img.id}
            className="ps-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex"
          >
            <ProjectImageBox
              smallImageSrc={img.formats?.medium.url || img.url}
              largeImageSrc={img.url}
              alt={img.alternativeText}
              name={img.name}
            />
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
