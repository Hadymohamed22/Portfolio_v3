"use client";
import ProjectsCarouselContent from "./projects-carousel-content";
import useProjects from "../_hooks/use-projects";
import ProjectsCarouselSkeleton from "../_skeleton/projects-carousel.skeleton";

export default function ProjectsCarousel() {
  // Hooks
  const { projects, isLoading } = useProjects();

  return isLoading ? (
    <ProjectsCarouselSkeleton />
  ) : projects?.ok ? (
    <ProjectsCarouselContent projects={projects.data} />
  ) : (
    <ProjectsCarouselContent />
  );
}
