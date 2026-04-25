import SectionHeader from "@/shared/components/section-header";
import ProjectGalleryCarousel from "./project-gallery-carousel";

export default function ProjectGallery() {
  return (
    <section className="my-14 md:my-16">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title="Project Gallery"
          subTitle="An in-depth look at UI and the digital experience."
        />

        {/* Content */}
        <ProjectGalleryCarousel />
      </div>
    </section>
  );
}
