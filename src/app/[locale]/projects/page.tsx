import SectionHeader from "@/shared/components/section-header";
import FiltersTabs from "../_components/sections/projects/_components/filters-tabs";
import ProjectsFiltersTabsSkeleton from "./_skeletons/projects-filters-tabs.skeleton";
import ProjectDetailBox from "./_components/project-detail-box";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translations
  const t = useTranslations("projects");

  return (
    <main className="projects-page">
      <div className="container mx-auto px-5">
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

        {/* Projects */}
        <div className="projects flex flex-wrap gap-8 md:gap-10 mt-12 mb-24">
          {[
            {
              id: "lumina-analytics",
              liveDemoLink: "https://lumina-demo.com",
            },
            {
              id: "taskflow-app",
              liveDemoLink: "https://taskflow-demo.com",
            },
            {
              id: "creolabs",
              liveDemoLink: undefined,
            },
            {
              id: "exam-app",
              liveDemoLink: "https://exam-app-demo.com",
            },
          ].map((project, i) => (
            <div
              key={project.id}
              className={`w-full lg:w-[calc(50%-1.25rem)] ${
                i % 2 !== 0 ? "md:mt-10" : ""
              }`}
            >
              <ProjectDetailBox
                id={project.id}
                liveDemoLink={project.liveDemoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
