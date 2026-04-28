import { Skeleton } from "@/shared/ui/skeleton";

export default function ProjectsCarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="project-card shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 rounded-2xl md:rounded-3xl min-h-72 md:min-h-96 flex flex-col grow"
        >
          {/* Image Skeleton */}
          <div className="image-container relative rounded-t-2xl md:rounded-t-3xl overflow-hidden h-96 shrink-0">
            <Skeleton className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

          {/* Content Skeleton */}
          <div className="content p-6 md:p-8 flex flex-col h-full">
            {/* Title & Tech Stack */}
            <div className="title-techStack flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-0 mb-4 w-full">
              {/* Title Skeleton */}
              <Skeleton className="h-7 w-32 md:w-40 rounded" />

              {/* TechStack Badges Skeleton */}
              <div className="tech-stack flex items-center gap-2">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>

            {/* Summary Skeleton */}
            <Skeleton className="h-4 w-full md:w-2/3 rounded mb-2" />
            <Skeleton className="h-4 w-5/6 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
