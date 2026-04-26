import SectionHeader from "@/shared/components/section-header";
import { useTranslations } from "next-intl";
import ProjectsCarousel from "./_components/projects-carousel";
import FiltersTabs from "./_components/filters-tabs";
import { Suspense } from "react";
import FiltersTabsSkeleton from "./_skeleton/filters-tabs.skeleton";

export default function Projects() {
  // Translations
  const t = useTranslations("home.projects");

  return (
    <section className="projects mt-18 mb-14 md:mt-20 md:mb-16">
      <div className="container mx-auto px-5">
        {/* Header & Filters */}
        <div className="header-filters flex flex-col md:flex-row items-center justify-center md:justify-between mb-14 md:mb-16">
          {/* Section Header */}
          <SectionHeader
            title={t.rich("title", {
              span: (chunks) => (
                <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                  {chunks}
                </span>
              ),
            })}
            subTitle={t("description")}
            className="mb-0!"
          />

          {/* Filter Tabs */}
          <Suspense fallback={<FiltersTabsSkeleton />}>
            <FiltersTabs />
          </Suspense>
        </div>

        {/* Projects Carousel */}
        <ProjectsCarousel />
      </div>
    </section>
  );
}
