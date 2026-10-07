import site from "@/data/site.json";
import SkillBox, { SkillsIconType } from "./skill-box";
import { useLocale } from "next-intl";

type Props = {
  skillGroupName:
    | "frontend-development-skill-group"
    | "ui-styling-skill-group"
    | "tools-skill-group"
    | "backend-development-skill-group";
};

export default function SkillsContent({ skillGroupName }: Props) {
  // Translation
  const locale = useLocale();

  // Variables
  const frontendSkills = site.skillGroups.find(
    (skill) => skill.id === skillGroupName,
  );

  return (
    <div className="content grid grid-cols-2 lg:grid-cols-4 gap-6">
      {frontendSkills ? (
        frontendSkills.items.map((skill) => (
          <SkillBox
            key={skill.id}
            title={skill.name}
            description={skill.note[locale as "en" | "ar"]}
            icon={skill.icon as SkillsIconType}
          />
        ))
      ) : (
        <>Skills Not Available Now</>
      )}
    </div>
  );
}
