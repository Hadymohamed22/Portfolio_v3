import SectionHeader from "@/shared/components/section-header";
import FiltersTabs from "../_components/sections/projects/_components/filters-tabs";
import ProjectsFiltersTabsSkeleton from "./_skeletons/projects-filters-tabs.skeleton";
import { useTranslations } from "next-intl";
import ProjectsContent from "./_components/projects-content";

export default function Page() {
  // Translations
  const t = useTranslations("projects");

  return (
    <main className="projects-page">
      <div className="container mx-auto px-5 relative before:">
        {/* Header */}
        <SectionHeader
          title={t.rich("title", {
            span: (chunks) => (
              <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
          titleClasses="text-7xl md:text-8xl w-full md:w-5/6 lg:w-4/6 rtl:lg:w-3/5"
          className="mb-6! mt-12"
        />

        {/* Filters Container */}
        <div className="filter-container flex justify-start">
          <FiltersTabs
            tabListVariant="tabs"
            filtersSkeleton={<ProjectsFiltersTabsSkeleton />}
          />
        </div>

        {/* Project Content */}
        <ProjectsContent />
      </div>
    </main>
  );
}
