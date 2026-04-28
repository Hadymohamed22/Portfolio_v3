import { Skeleton } from "@/shared/ui/skeleton";

export default function ServicesContentSkeleton() {
  return (
    <div className="services-section-content">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 md:p-8 gap-6 shadow-lg bg-white dark:bg-white/3 border-b-4 border-gray-400 dark:border-white/10 rounded-3xl min-h-0 md:min-h-48"
          >
            {/* Icon Skeleton */}
            <div className="flex items-center justify-center bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/10 shadow-sm rounded-xl size-12 mb-6">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            {/* Title Skeleton */}
            <Skeleton className="h-5 w-1/2 mb-4 rounded mx-auto" />
            {/* Description Skeleton */}
            <Skeleton className="h-3 w-full mb-2 rounded" />
            <Skeleton className="h-3 w-5/6 mb-6 rounded" />
            {/* Link Skeleton (bottom, simulate underline link) */}
            <Skeleton className="h-2 w-20 mt-auto rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
