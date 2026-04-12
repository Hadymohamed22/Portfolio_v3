import SectionHeader from "@/shared/components/section-header";
import ServicesContent from "./_components/services-content";
import { Suspense } from "react";
import ServicesContentSkeleton from "./_skeleton/services-content.skeleton";
import { useTranslations } from "next-intl";

export default function Services() {
  // Translation
  const t = useTranslations("home.services");

  return (
    <section className="services-section my-14 md:my-16">
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
          className="text-center"
        />

        {/* Content */}
        <Suspense fallback={<ServicesContentSkeleton />}>
          <ServicesContent />
        </Suspense>
      </div>
    </section>
  );
}
