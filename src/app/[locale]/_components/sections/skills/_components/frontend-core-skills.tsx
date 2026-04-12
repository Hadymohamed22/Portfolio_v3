import { Suspense } from "react";
import SkillsGroupTitle from "./skills-group-title";
import SkillsGroupSkeleton from "../_skeleton/skills-group.skeleton";
import SkillsContent from "./skills-content";
import { SKILLS_CATEGORIES } from "../_constants/skills-categories.constant";

export default function FrontendCoreSkills() {
  return (
    <>
      {/* Skills Group Title */}
      <SkillsGroupTitle
        title="Frontend Core"
        className="dark:text-cyan-400 text-cyan-700 dark:before:to-m-secondary/55 before:to-cyan-800 dark:after:to-m-secondary/55 after:to-cyan-600"
      />

      {/* Content */}
      <Suspense fallback={<SkillsGroupSkeleton />}>
        <SkillsContent skillCategory={SKILLS_CATEGORIES.FRONTEND} />
      </Suspense>
    </>
  );
}
