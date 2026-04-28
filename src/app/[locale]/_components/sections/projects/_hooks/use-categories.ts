import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import getProjectCategories from "../_services/get-project-categories.service";

export default function useCategories() {
  // Translation
  const locale = useLocale();

  // Query
  const { data: categories, isLoading } = useQuery({
    queryKey: ["project-categories"],
    queryFn: () => getProjectCategories(locale),
  });

  return { categories, isLoading };
}
