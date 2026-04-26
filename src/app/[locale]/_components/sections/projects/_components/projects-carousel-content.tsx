"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import ProjectBox from "./project-box";
import { INITIAL_PROJECTS_DATA } from "../_constants/projects.constant";
import { Projects } from "../_types/projects";

type Props = {
  projects?: Projects;
};

export default function ProjectsCarouselContent({ projects }: Props) {
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
          delay: 2500,
        }),
      ]}
    >
      <CarouselContent className="-ms-6 md:-ms-8 items-stretch pb-12">
        {(projects ? projects : INITIAL_PROJECTS_DATA).map((project) => {
          return (
            <CarouselItem
              className="ps-6 md:ps-8 md:basis-1/2 flex w-full"
              key={project.id}
            >
              <ProjectBox
                link={`/projects/${project.slug}`}
                img={
                  project.mainImage?.formats?.medium?.url ||
                  project.mainImage.url
                }
                alt={project.mainImage.alternativeText || ""}
                summary={project.summary}
                title={project.title}
                techStack={project.badges}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
