import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { getLocale, getTranslations } from "next-intl/server";
import getProjectCategories from "../_actions/get-project-categories.action";

export default async function FiltersTabs() {
  // Translations
  const t = await getTranslations("home.projects.filters-tabs");
  const locale = await getLocale();

  // Variables
  const categories = await getProjectCategories(locale);

  // Variables
  return (
    <Tabs
      defaultValue="all"
      className="w-100"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <TabsList>
        <TabsTrigger value="all">{t("all")}</TabsTrigger>
        {categories.ok ? (
          categories.data.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.name}>
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
