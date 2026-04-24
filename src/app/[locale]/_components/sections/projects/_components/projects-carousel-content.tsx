"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import ProjectBox from "./project-box";
import { Badge } from "@/shared/ui/badge";

export default function ProjectsCarouselContent() {
  // Translations
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  type Project = {
    img: string;
    alt: string;
    title: string;
    summary: string;
    techStack: {
      variant: React.ComponentProps<typeof Badge>["variant"];
      title: string;
    }[];
  };

  const INITIAL_PROJECTS_DATA: Project[] = [
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      alt: "Screenshot of project dashboard",
      title: "Business Dashboard",
      summary:
        "A powerful dashboard for managing business operations and analytics in real time.",
      techStack: [
        { variant: "Next.js", title: "Next.js" },
        { variant: "TypeScript", title: "TypeScript" },
        { variant: "React Query", title: "React Query" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      alt: "Landing page screenshot",
      title: "Creative Landing",
      summary:
        "Stunning landing page optimized for conversions using responsive and modern design.",
      techStack: [
        { variant: "Tailwind CSS", title: "Tailwind" },
        { variant: "react", title: "React" },
        { variant: "ZOD", title: "Zod" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      alt: "Ecommerce platform UI",
      title: "E-commerce Platform",
      summary:
        "A scalable e-commerce site supporting multiple payment methods and internationalization.",
      techStack: [
        { variant: "NextAuth", title: "NextAuth" },
        { variant: "salla", title: "Salla" },
        { variant: "bootstrap", title: "Bootstrap" },
      ],
    },
  ];

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
        {INITIAL_PROJECTS_DATA.map((project, idx) => (
          <CarouselItem
            className="ps-6 md:ps-8 md:basis-1/2 flex w-full"
            key={project.title + idx}
          >
            <ProjectBox
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
