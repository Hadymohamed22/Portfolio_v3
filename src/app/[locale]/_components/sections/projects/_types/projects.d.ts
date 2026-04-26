import { Badge } from "@/shared/ui/badge";

export type ProjectCategory = {
  id: number;
  name: string;
};

export type ProjectsCategories = ProjectCategory[];

export type ProjectImage = {
  id: number;
  alternativeText: string;
  url: string;
};

export type Collaboration = {
  id: number;
  iconVariant: string;
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
};

export type Projects = Project[];
