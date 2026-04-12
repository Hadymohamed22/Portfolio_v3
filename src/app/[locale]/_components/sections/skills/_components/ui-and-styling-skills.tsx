import { Suspense } from "react";
import SkillsGroupTitle from "./skills-group-title";
import SkillsGroupSkeleton from "../_skeleton/skills-group.skeleton";
import SkillsContent from "./skills-content";
import { SKILLS_CATEGORIES } from "../_constants/skills-categories.constant";

export default function UIAndStylingSkills() {
  return (
    <>
      {/* Skills Group Title */}
      <SkillsGroupTitle
        title="UI And Styling"
        className="dark:text-emerald-400 text-emerald-700 dark:before:to-m-secondary/55 before:to-emerald-800 dark:after:to-m-secondary/55 after:to-emerald-600"
      />

      {/* Content */}
      <Suspense fallback={<SkillsGroupSkeleton />}>
        <SkillsContent skillCategory={SKILLS_CATEGORIES.UI_AND_STYLES} />
      </Suspense>
    </>
  );
}
