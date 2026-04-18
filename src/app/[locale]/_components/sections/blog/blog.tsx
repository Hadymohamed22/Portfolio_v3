import SectionHeader from "@/shared/components/section-header";
import { useTranslations } from "next-intl";
import PostsCarousel from "./_components/posts-carousel";
import { Suspense } from "react";
import PostsCarouselSkeleton from "./_skeleton/posts-carousel.skeleton";

export default function Blog() {
  // Translations
  const t = useTranslations("home.blog");

  return (
    <section className="blog-section my-14 md:my-16 relative before:absolute before:z-10 before:size-full before:bg-gray-100/25 dark:before:bg-gray-100/5 before:backdrop-blur-2xl before:content-['In_Progress'] rtl:before:content-['تحت_التطوير'] before:font-bold before:-top-4 before:inset-s-0 before:flex before:items-center before:justify-center before:text-3xl md:before:text-4xl">
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
        <Suspense fallback={<PostsCarouselSkeleton />}>
          <PostsCarousel />
        </Suspense>
      </div>
    </section>
  );
}
