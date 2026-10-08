import { getLocale } from "next-intl/server";
import CaseStudy from "./_components/case-study";
import Collaboration from "./_components/collaboration";
import ContactMeNow from "./_components/contact-me-now";
import ProjectGallery from "./_components/project-gallery";
import ProjectHero from "./_components/project-hero";
import TechStack from "./_components/tech-stack";
import { getProject, Locale } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  // Translation
  const locale = await getLocale();

  // Variables
  const { slug } = await params;
  const project = getProject(slug, locale as Locale);

  return (
    <main>
      {/* Hero */}
      {project && (
        <ProjectHero
          title={project.title}
          description={project.description}
          repoLink={project.repoLink}
          imgSrc={project.mainImage?.url}
          imgAlt={project.mainImage?.alternativeText}
          liveLink={project.siteLink}
        />
      )}

      {/* is A Collaborator */}
      {project && project.isACollaborator && (
        <Collaboration
          role={project.collaborationRole}
          collaborations={project.collaborations}
        />
      )}

      {/* Case Study */}
      {project && (
        <CaseStudy
          bugs={project.bugs}
          motivation={project.purpose}
          solution={project.solutation}
          efficiencyPercentage={project.IncreasedEfficiencyPercentage}
          accuracyPercentage={project.accuracyPercentage}
        />
      )}

      {/* Tech Stack */}
      {project && <TechStack skills={project.technologies} />}

      {/* Project Gallery */}
      {project && <ProjectGallery projectGallery={project.projectGallary} />}

      {/* Contact Me */}
      <ContactMeNow />
    </main>
  );
}
