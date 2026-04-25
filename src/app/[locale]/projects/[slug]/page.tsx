import { INITIAL_PROJECTS_DATA } from "../../_components/sections/projects/_constants/projects.constant";
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

      {/* Tech Stack */}
      <TechStack
        skills={[
          {
            icon: "braces",
            title: "TypeScript",
            description: "Strongly-typed JavaScript for scalable applications.",
          },
          {
            icon: "terminal",
            title: "Node.js",
            description:
              "Server-side JavaScript runtime powering backend logic.",
          },
          {
            icon: "layout-panel-left",
            title: "React",
            description: "Interactive UIs with component-based architecture.",
          },
          {
            icon: "file-check",
            title: "Jest",
            description: "Robust testing framework for code reliability.",
          },
          {
            icon: "git-branch",
            title: "Git",
            description: "Version control to manage code changes effectively.",
          },
        ]}
      />

      {/* Project Gallery */}
      <ProjectGallery />

      {/* Contact Me */}
      <ContactMeNow />
    </main>
  );
}
