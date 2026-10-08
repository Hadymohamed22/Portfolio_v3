"use client";
import { useMemo } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import ProjectsCarouselContent from "./projects-carousel-content";
import { getProjects } from "@/data/projects";
import { PROJECT_CATEGORY_QUERY_KEY } from "../_constants/projects.constant";

export default function ProjectsCarousel() {
  // Translations
  const locale = useLocale() as "en" | "ar";

  // Navigation
  const searchParams = useSearchParams();

  // Variables
  const category = searchParams.get(PROJECT_CATEGORY_QUERY_KEY); // مثلاً "education" أو null

  const projects = useMemo(
    () =>
      getProjects(locale).filter(
        (p) => !category || p.category.query === category,
      ),
    [locale, category],
  );

  return <ProjectsCarouselContent projects={projects} />;
}
