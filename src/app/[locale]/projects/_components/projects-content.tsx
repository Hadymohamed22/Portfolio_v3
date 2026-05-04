"use client";

import useProjects from "../../_components/sections/projects/_hooks/use-projects";
import ProjectsSkeleton from "../_skeletons/projects.skeleton";
import ProjectDetailBox from "./project-detail-box";

export default function ProjectsContent() {
  // Hooks
  const { projects, isLoading, error } = useProjects();

  return isLoading ? (
    <ProjectsSkeleton />
  ) : (
    <div className="projects grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 mb-24">
      {projects?.ok ? (
        projects.data.map((project) => (
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
          />
        ))
      ) : (
        <p className="text-center my-5 text-sm md:text-base">
          Failed to load projects {error?.message && `: ${error.message}`}
        </p>
      )}
    </div>
  );
}
