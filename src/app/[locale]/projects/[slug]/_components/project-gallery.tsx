import SectionHeader from "@/shared/components/section-header";
import ProjectGalleryCarousel from "./project-gallery-carousel";
import { useTranslations } from "next-intl";
import { ProjectImage } from "@/app/[locale]/_components/sections/projects/_types/projects";

type Props = {
  projectGallery: ProjectImage[];
};

export default function ProjectGallery({ projectGallery }: Props) {
  // Translations
  const t = useTranslations("projects.project-details.gallery");

  return (
    <section className="my-14 md:my-16">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title={t.rich("title", {
            span: (chunks) => (
              <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
          subTitle={t("sub-title")}
        />

        {/* Content */}
        <ProjectGalleryCarousel images={projectGallery} />
      </div>
    </section>
  );
}
