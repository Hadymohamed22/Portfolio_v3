"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import PostCard from "./post-card";

type Props = {
  posts: Post[];
};

export default function PostsCarouselContent({ posts }: Props) {
  // Translations
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel
      opts={{
        align: "start",
        direction: dir,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1700,
        }),
      ]}
    >
      <CarouselContent className="-ms-6 md:-ms-8 items-stretch">
        {posts.map((post) => (
          <CarouselItem
            key={post.id}
            className="ps-6 md:ps-8 md:basis-1/2 lg:basis-1/3 flex"
          >
            <PostCard
              img={post.image.url}
              alt={post.image.alternativeText}
              category={post.blog_category.name}
              title={post.title}
              summary={post.summary}
              publishAt={post.publishedAt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
