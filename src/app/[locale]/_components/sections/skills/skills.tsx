import SectionHeader from "@/shared/components/section-header";
import FrontendCoreSkills from "./_components/frontend-core-skills";
import UIAndStylingSkills from "./_components/ui-and-styling-skills";
import ToolsSkills from "./_components/tools-skills";
import BackendSkills from "./_components/backend-skills";

export default function Skills() {
  return (
    <section className="skills-section my-14 md:my-16">
      <div className="container px-5 mx-auto">
        {/* Section Header */}
        <SectionHeader
          title={
            <>
              Skills &{" "}
              <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                Technologies
              </span>
            </>
          }
          subTitle={
            "My curated collection of tools for building exceptional digital solutions."
          }
        />

        {/* Frontend Core Skills */}
        <FrontendCoreSkills />

        {/* UI And Styling Skills */}
        <UIAndStylingSkills />

        {/* Tools Skills */}
        <ToolsSkills />

        {/* Backend Skills */}
        <BackendSkills />
      </div>
    </section>
  );
}
