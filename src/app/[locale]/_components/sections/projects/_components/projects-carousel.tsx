import { getLocale } from "next-intl/server";
import ProjectsCarouselContent from "./projects-carousel-content";
import getProjects from "../_actions/get-projects.action";

export default async function ProjectsCarousel() {
  // Translations
  const locale = await getLocale();

  // Variables
  const projects = await getProjects(locale);

  return projects.ok ? (
    <ProjectsCarouselContent projects={projects.data} />
  ) : (
    <ProjectsCarouselContent />
  );
}
