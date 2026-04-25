"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import ProjectBox from "./project-box";
import { INITIAL_PROJECTS_DATA } from "../_constants/projects.constant";

export default function ProjectsCarouselContent() {
  // Translations
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel
      opts={{
        align: "start",
        direction: dir,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2200,
        }),
      ]}
    >
      <CarouselContent className="-ms-6 md:-ms-8 items-stretch pb-12">
        {INITIAL_PROJECTS_DATA.map((project) => (
          <CarouselItem
            className="ps-6 md:ps-8 md:basis-1/2 flex w-full"
            key={project.id}
          >
            <ProjectBox
              link={`/projects/${project.id}`}
              img={project.img}
              alt={project.alt}
              summary={project.summary}
              title={project.title}
              techStack={project.techStack}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
