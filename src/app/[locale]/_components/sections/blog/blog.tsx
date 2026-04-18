import SectionHeader from "@/shared/components/section-header";
import { useTranslations } from "next-intl";
import PostsCarousel from "./_components/posts-carousel";

export default function Blog() {
  // Translations
  const t = useTranslations("home.blog");

  return (
    <section className="blog-section my-14 md:my-16">
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
        />

        {/* Posts Carousel */}
        <PostsCarousel />
      </div>
    </section>
  );
}
