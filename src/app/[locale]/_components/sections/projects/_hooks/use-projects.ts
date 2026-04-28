"use client";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import getProjects from "../_services/get-projects.service";
import { useSearchParams } from "next/navigation";
import { PROJECT_CATEGORY_QUERY_KEY } from "../_constants/projects.constant";

export default function useProjects() {
  // Translation
  const locale = useLocale();

  // Navigation
  const category = useSearchParams().get(PROJECT_CATEGORY_QUERY_KEY);

  // Query
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", locale, category],
    queryFn: () => getProjects(locale, category),
  });

  return { projects, isLoading };
}
