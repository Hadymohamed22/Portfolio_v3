import SkillsGroupTitle from "./skills-group-title";
import SkillsContent from "./skills-content";
import { useTranslations } from "next-intl";

export default function UIAndStylingSkills() {
  // Translation
  const t = useTranslations("home.skills");

  return (
    <>
      {/* Skills Group Title */}
      <SkillsGroupTitle
        title={t("ui-skills-title")}
        className="dark:text-emerald-400 text-emerald-700 dark:before:to-m-secondary/55 before:to-emerald-800 dark:after:to-m-secondary/55 after:to-emerald-600"
      />

      {/* Content */}
      <SkillsContent skillGroupName="ui-styling-skill-group" />
    </>
  );
}
