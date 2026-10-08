"use client";
import { useMemo } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { PROJECT_CATEGORY_QUERY_KEY } from "../_constants/projects.constant";
import { getCategories } from "@/data/categories";

type Props = {
  tabListVariant?: "default" | "line" | "tabs";
};

export default function FiltersTabs({ tabListVariant = "default" }: Props) {
  // Translations
  const t = useTranslations("home.projects.filters-tabs");
  const locale = useLocale() as "en" | "ar";

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const categories = useMemo(() => getCategories(locale), [locale]);
  const activeTab = searchParams.get(PROJECT_CATEGORY_QUERY_KEY) ?? "all";

  // Functions
  const setCategory = (value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(PROJECT_CATEGORY_QUERY_KEY, value);
    else params.delete(PROJECT_CATEGORY_QUERY_KEY);

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return (
    <Tabs value={activeTab} dir={locale === "ar" ? "rtl" : "ltr"}>
      <TabsList variant={tabListVariant} className="md:flex-row">
        <TabsTrigger value="all" onClick={() => setCategory()}>
          {t("all")}
        </TabsTrigger>

        {categories.map((cat) => (
          <TabsTrigger
            key={cat.id}
            value={cat.query}
            onClick={() => setCategory(cat.query)}
          >
            {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
