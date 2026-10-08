import SkillsGroupTitle from "./skills-group-title";
import SkillsContent from "./skills-content";
import { useTranslations } from "next-intl";

export default function BackendSkills() {
  // Translation
  const t = useTranslations("home.skills");

  return (
    <>
      {/* Skills Group Title */}
      <SkillsGroupTitle
        title={t("backend-skills-title")}
        className="dark:text-amber-400 text-amber-700 dark:before:to-amber-300/60 before:to-amber-800 dark:after:to-amber-400/55 after:to-amber-600"
      />

      {/* Content */}
      <SkillsContent skillGroupName="backend-development-skill-group" />
    </>
  );
}
