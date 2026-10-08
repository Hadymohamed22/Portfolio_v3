import SkillsGroupTitle from "./skills-group-title";
import SkillsContent from "./skills-content";
import { useTranslations } from "next-intl";

export default function FrontendCoreSkills() {
  // Translation
  const t = useTranslations("home.skills");

  return (
    <>
      {/* Skills Group Title */}
      <SkillsGroupTitle
        title={t("frontend-skills-title")}
        className="dark:text-cyan-400 text-cyan-700 dark:before:to-m-secondary/55 before:to-cyan-800 dark:after:to-m-secondary/55 after:to-cyan-600"
      />

      {/* Content */}
      <SkillsContent skillGroupName="frontend-development-skill-group" />
    </>
  );
}
