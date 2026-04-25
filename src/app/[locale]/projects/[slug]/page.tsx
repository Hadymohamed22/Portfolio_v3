import { INITIAL_PROJECTS_DATA } from "../../_components/sections/projects/_constants/projects.constant";
import CaseStudy from "./_components/case-study";
import Collaboration from "./_components/collaboration";
import ProjectHero from "./_components/project-hero";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  // Variables
  const { slug } = await params;
  const project = INITIAL_PROJECTS_DATA.find((p) => p.slug === slug);

  return (
    <main>
      {/* Hero */}
      <ProjectHero />

      {/* is A Collaborator */}
      <Collaboration />

      {/* Case Study */}
      <CaseStudy />
    </main>
  );
}
