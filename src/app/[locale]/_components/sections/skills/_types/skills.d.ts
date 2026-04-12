import { SkillsIconType } from "../_components/skill-box";

export type SkillType = {
  id: number;
  skillName: string;
  description: string;
  iconName: SkillsIconType;
  lightColor: string;
  darkColor: string;
};

export type SkillsGroupType = {
  id: number;
  skillsName: string;
  skills: SkillType[];
  skill_category: {
    id: number;
    name: string;
  };
};

export type Skills = SkillsGroupType[];
