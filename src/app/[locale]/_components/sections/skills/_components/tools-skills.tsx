import SkillsGroupTitle from "./skills-group-title";
import SkillsContent from "./skills-content";
import { useTranslations } from "next-intl";

export default function ToolsSkills() {
  // Translation
  const t = useTranslations("home.skills");

  return (
    <>
      {/* Skills Group Title */}
      <SkillsGroupTitle
        title={t("tools-skills-title")}
        className="dark:text-rose-400 text-rose-700 dark:before:to-rose-400/55 before:to-rose-800 dark:after:to-rose-400/55 after:to-rose-600"
      />

      {/* Content */}
      <SkillsContent skillGroupName="tools-skill-group" />
    </>
  );
}
