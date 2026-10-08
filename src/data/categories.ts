import categoriesJson from "./categories.json";
import type { ProjectsCategories } from "@/app/[locale]/_components/sections/projects/_types/projects"; // عدّل المسار لمكان الـ types

type Locale = "en" | "ar";
type RawCategory = {
  id: number;
  query: string;
  name: { en: string; ar: string };
  classname: string;
};

const categories = categoriesJson as unknown as RawCategory[];

export const getCategories = (locale: Locale): ProjectsCategories =>
  categories.map((c) => ({
    id: c.id,
    name: c.name[locale],
    query: c.query,
    classname: c.classname,
  }));
