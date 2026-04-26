import { Badge } from "@/shared/ui/badge";

export type Project = {
  slug: string;
  id: string;
  img: string;
  alt: string;
  title: string;
  summary: string;
  techStack: {
    variant: React.ComponentProps<typeof Badge>["variant"];
    title: string;
  }[];
};

export type ProjectCategory = {
  id: number;
  name: string;
};

export type ProjectsCategories = ProjectCategory[];
