import SectionHeader from "@/shared/components/section-header";
import ServicesContent from "./_components/services-content";
import { Suspense } from "react";
import ServicesContentSkeleton from "./_skeleton/services-content.skeleton";

export default function Services() {
  return (
    <section className="services-section my-14 md:my-16">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <SectionHeader title="Services & Experiences" className="text-center" />

        {/* Content */}
        <Suspense fallback={<ServicesContentSkeleton />}>
          <ServicesContent />
        </Suspense>
      </div>
    </section>
  );
}
