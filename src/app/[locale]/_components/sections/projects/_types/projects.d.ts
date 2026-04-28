import { Badge } from "@/shared/ui/badge";
import { SkillsIconType } from "../../skills/_components/skill-box";

export type ProjectCategory = {
  id: number;
  name: string;
  query: string;
};

export type ProjectsCategories = ProjectCategory[];

export type ProjectImage = {
  id: number;
  formats?: {
    medium: {
      url: string;
    };
  };
  alternativeText: string;
  url: string;
  name: string;
};

export type Collaboration = {
  id: number;
  iconVariant: CollaborationIconBox;
  title: string;
  description: string;
};

type Badge = {
  id: number;
  title: string;
  variant: React.ComponentProps<typeof Badge>["variant"];
};

export type Project = {
  id: number;
  title: string;
  badges: Badge[];
  description: string;
  purpose: string;
  solutation: string;
  IncreasedEfficiencyPercentage: number;
  accuracyPercentage: number;
  summary: string;
  siteLink?: string;
  repoLink: string;
  isACollaborator?: boolean;
  collaborationRole?: string | null;
  slug: string;
  mainImage: ProjectImage;
  subImage: ProjectImage;
  projectGallary: ProjectImage[];
  collaborations: Collaboration[];
  bugs: { id: number; text: string }[];
  technologies: {
    id: number;
    title: string;
    iconName: SkillsIconType;
    techFor: string;
  }[];
};

export type Projects = Project[];
