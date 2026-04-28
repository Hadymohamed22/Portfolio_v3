"use client";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useLocale, useTranslations } from "next-intl";
import useCategories from "../_hooks/use-categories";
import FiltersTabsSkeleton from "../_skeleton/filters-tabs.skeleton";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { PROJECT_CATEGORY_QUERY_KEY } from "../_constants/projects.constant";

export default function FiltersTabs() {
  // Translations
  const t = useTranslations("home.projects.filters-tabs");
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Hooks
  const { categories, isLoading } = useCategories();

  // Variables
  const activeTab = searchParams.get(PROJECT_CATEGORY_QUERY_KEY) ?? "all";

  // Functions
  const appendQuery = (
    key: string = PROJECT_CATEGORY_QUERY_KEY,
    value: string,
  ) => {
    const queryString = new URLSearchParams(searchParams.toString());
    queryString.set(key, value);
    router.replace(`${pathname}?${queryString.toString()}`, { scroll: false });
  };

  const deleteQuery = (key: string = PROJECT_CATEGORY_QUERY_KEY) => {
    const queryString = new URLSearchParams(searchParams.toString());
    queryString.delete(key);
    router.replace(`${pathname}?${queryString.toString()}`, { scroll: false });
  };

  return isLoading ? (
    <FiltersTabsSkeleton />
  ) : (
    <Tabs
      value={activeTab}
      className="w-100"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <TabsList>
        <TabsTrigger
          value="all"
          onClick={() => deleteQuery(PROJECT_CATEGORY_QUERY_KEY)}
        >
          {t("all")}
        </TabsTrigger>
        {categories?.ok ? (
          categories.data.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.query}
              onClick={() => appendQuery(PROJECT_CATEGORY_QUERY_KEY, cat.query)}
            >
              {cat.name}
            </TabsTrigger>
          ))
        ) : (
          <>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="landing-pages">Landing Pages</TabsTrigger>
          </>
        )}
      </TabsList>
    </Tabs>
  );
}
