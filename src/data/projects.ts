// content/projects.ts
import projectsJson from "./projects.json";
import categoriesJson from "./categories.json";
import type { Project } from "@/app/[locale]/_components/sections/projects/_types/projects"; // عدّل المسار حسب مشروعك

export type Locale = "en" | "ar";
type Localized<T = string> = { en: T; ar: T };

type RawImage = {
  src: string;
  alt: Localized;
  width: number;
  height: number;
};

type RawProject = {
  id: number;
  slug: string;
  order: number;
  category: string;
  title: Localized;
  summary: Localized;
  description: Localized;
  purpose: Localized;
  solution: Localized;
  metrics: { efficiency: number; accuracy: number };
  links: { live: string | null; repo: string };
  collaboration: { isCollaborator: boolean; role: Localized<string | null> };
  badges: { title: string; variant: string }[];
  technologies: { title: string; icon: string; usedFor: Localized }[];
  challenges: Localized[];
  contributions: { icon: string; title: Localized; description: Localized }[];
  images: { main: RawImage; sub: RawImage; gallery: RawImage[] };
};

type RawCategory = {
  id: number;
  query: string;
  name: Localized;
  classname: string;
};

// cast واحد لكل ملف
const projects = projectsJson as unknown as RawProject[];
const categories = categoriesJson as unknown as RawCategory[];

/* ---------- Mapping للـ UI types ---------- */

const toImage = (img: RawImage, id: number, locale: Locale) => ({
  id,
  url: img.src,
  name: img.src.split("/").pop() ?? "",
  alternativeText: img.alt[locale],
  width: img.width, // مفيدين لـ next/image، ضيفهم لـ ProjectImage لو عايز
  height: img.height,
});

function toProject(p: RawProject, locale: Locale): Project {
  const cat = categories.find((c) => c.query === p.category)!;
  let imgId = p.id * 100;

  return {
    id: p.id,
    title: p.title[locale],
    badges: p.badges.map((b, i) => ({
      id: p.id * 100 + i,
      title: b.title,
      variant: b.variant as Project["badges"][number]["variant"],
    })),
    description: p.description[locale],
    purpose: p.purpose[locale],
    solutation: p.solution[locale],
    IncreasedEfficiencyPercentage: p.metrics.efficiency,
    accuracyPercentage: p.metrics.accuracy,
    summary: p.summary[locale],
    siteLink: p.links.live ?? undefined,
    repoLink: p.links.repo,
    isACollaborator: p.collaboration.isCollaborator,
    collaborationRole: p.collaboration.role[locale],
    slug: p.slug,
    mainImage: toImage(p.images.main, imgId++, locale),
    subImage: toImage(p.images.sub, imgId++, locale),
    projectGallary: p.images.gallery.map((g) => toImage(g, imgId++, locale)),
    collaborations: p.contributions.map((c, i) => ({
      id: i + 1,
      iconVariant: c.icon as Project["collaborations"][number]["iconVariant"],
      title: c.title[locale],
      description: c.description[locale],
    })),
    bugs: p.challenges.map((c, i) => ({ id: i + 1, text: c[locale] })),
    technologies: p.technologies.map((t, i) => ({
      id: i + 1,
      title: t.title,
      iconName: t.icon as Project["technologies"][number]["iconName"],
      techFor: t.usedFor[locale],
    })),
    category: {
      id: cat.id,
      name: cat.name[locale],
      query: cat.query,
      classname: cat.classname,
    },
  };
}

/* ---------- الـ API اللي هتستخدمه في الصفحات ---------- */

export const getProjects = (locale: Locale): Project[] =>
  projects.map((p) => toProject(p, locale)).sort((a, b) => a.id - b.id);

export const getProject = (slug: string, locale: Locale): Project | undefined =>
  getProjects(locale).find((p) => p.slug === slug);
