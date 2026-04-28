import { Project } from "@/app/[locale]/_components/sections/projects/_types/projects";
import SkillBox from "@/app/[locale]/_components/sections/skills/_components/skill-box";
import SectionHeader from "@/shared/components/section-header";
import { useTranslations } from "next-intl";

type Props = {
  skills: Project["technologies"];
};

export default function TechStack({ skills }: Props) {
  // Translations
  const t = useTranslations("projects.project-details.tech-stack");

  return (
    <section className="bg-gray-100 dark:bg-[#23262E4D] py-14 md:py-16">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title={t.rich("title", {
            span: (chunks) => (
              <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
          className="text-center"
          subTitle={t("sub-title")}
        />

        {/* Content */}
        <div className="content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => {
            return (
              <SkillBox
                key={skill.id}
                skillIconClasses={"rounded-full"}
                icon={skill.iconName}
                title={skill.title}
                description={skill.techFor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
