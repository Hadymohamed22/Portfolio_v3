import { getLocale } from "next-intl/server";
import getProjectBySlug from "./_actions/get-product-by-slug.action";
import CaseStudy from "./_components/case-study";
import Collaboration from "./_components/collaboration";
import ContactMeNow from "./_components/contact-me-now";
import ProjectGallery from "./_components/project-gallery";
import ProjectHero from "./_components/project-hero";
import TechStack from "./_components/tech-stack";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  // Translation
  const locale = await getLocale();

  // Variables
  const { slug } = await params;
  const payload = await getProjectBySlug(slug, locale);
  const currentProject = payload.ok && payload.data[0];

  return (
    <main>
      {/* Hero */}
      {currentProject && (
        <ProjectHero
          title={currentProject.title}
          description={currentProject.description}
          repoLink={currentProject.repoLink}
          imgSrc={currentProject.mainImage?.url}
          imgAlt={currentProject.mainImage?.alternativeText}
          liveLink={currentProject.siteLink}
        />
      )}

      {/* is A Collaborator */}
      {currentProject && currentProject.isACollaborator && (
        <Collaboration
          role={currentProject.collaborationRole}
          collaborations={currentProject.collaborations}
        />
      )}

      {/* Case Study */}
      {currentProject && (
        <CaseStudy
          bugs={currentProject.bugs}
          motivation={currentProject.purpose}
          solution={currentProject.solutation}
          efficiencyPercentage={currentProject.IncreasedEfficiencyPercentage}
          accuracyPercentage={currentProject.accuracyPercentage}
        />
      )}

      {/* Tech Stack */}
      {currentProject && <TechStack skills={currentProject.technologies} />}

      {/* Project Gallery */}
      {currentProject && (
        <ProjectGallery projectGallery={currentProject.projectGallary} />
      )}

      {/* Contact Me */}
      <ContactMeNow />
    </main>
  );
}
