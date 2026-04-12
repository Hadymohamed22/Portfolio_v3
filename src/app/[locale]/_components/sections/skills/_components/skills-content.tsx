import { getLocale } from "next-intl/server";
import { SKILLS_CATEGORIES } from "../_constants/skills-categories.constant";
import getSkills from "@/shared/lib/actions/get-skills.action";
import SkillBox from "./skill-box";

type Props = {
  skillCategory: (typeof SKILLS_CATEGORIES)[keyof typeof SKILLS_CATEGORIES];
};

export default async function SkillsContent({ skillCategory }: Props) {
  // Translation
  const locale = await getLocale();

  // Variables
  const skills = await getSkills(locale, skillCategory);

  return (
    <div className="content grid grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.ok ? (
        skills.data.flatMap((data) =>
          data.skills.map((skill) => (
            <SkillBox
              lightColor={skill.lightColor}
              darkColor={skill.darkColor}
              key={skill.id}
              title={skill.skillName}
              description={skill.description}
              icon={skill.iconName}
            />
          )),
        )
      ) : (
        <>Backend Not work</>
      )}
    </div>
  );
}
