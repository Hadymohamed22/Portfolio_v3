import SectionHeader from "@/shared/components/section-header";
import { useTranslations } from "next-intl";
import TestimonialsCarousel from "./_components/testimonials-carousel";

export default function Testimonials() {
  // Translations
  const t = useTranslations("home.testimonials");

  return (
    <section className="testimonials-section my-14 md:my-16">
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
      <div className="container mx-auto px-5">
        {/* Carousel */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
