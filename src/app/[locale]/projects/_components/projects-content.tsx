"use client";
import { getProjects, Locale } from "@/data/projects";
import ProjectDetailBox from "./project-detail-box";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { PROJECT_CATEGORY_QUERY_KEY } from "../../_components/sections/projects/_constants/projects.constant";

export default function ProjectsContent() {
  // Translation
  const locale = useLocale();

  // Navigation
  const searchParams = useSearchParams();

  // Variables
  const category = searchParams.get(PROJECT_CATEGORY_QUERY_KEY);
  const projects = useMemo(
    () =>
      getProjects(locale as Locale).filter(
        (p) => !category || p.category.query === category,
      ),
    [locale, category],
  );

  return (
    <div className="projects grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 mb-24">
      {projects.map((project) => (
        <ProjectDetailBox
          key={project.id}
          liveDemoLink={project.siteLink}
          slug={project.slug}
          imgSrc={project.subImage.url}
          alt={project.subImage.alternativeText}
          title={project.title}
          summary={project.summary}
          categoryName={project.category.name}
          badges={project.badges}
          badgeClassName={project.category.classname}
        />
      ))}
    </div>
  );
}
