import { Skeleton } from "@/shared/ui/skeleton";
import TestimonialBoxSkeleton from "./testimonial-box.skeleton";

/** Matches testimonials-content container + testimonials-carousel track layout. */
export default function TestimonialsSkeleton() {
  return (
    <div className="testimonials-skeleton">
      <div className="buttons flex items-center gap-2 container px-5 mb-5">
        <Skeleton className="w-16 h-10 rounded-full" />
        <Skeleton className="w-16 h-10 rounded-full" />
      </div>

      {/* CarouselContent track: overflow + flex row + same spacing as carousel */}
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-16">
        {Array.from({ length: 3 }).map((_, i) => (
          <TestimonialBoxSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
