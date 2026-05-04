import { Skeleton } from "@/shared/ui/skeleton";

export default function ProjectsSkeleton() {
  return (
    <div className="projects grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 mb-24">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <div className="rounded-xl border bg-background p-6 flex flex-col gap-6">
            {/* Image skeleton */}
            <Skeleton className="w-full h-100 rounded-lg" />
            {/* Title skeleton */}
            <Skeleton className="h-7 w-2/3 rounded" />
            {/* Subtitle skeleton */}
            <Skeleton className="h-4 w-1/2 rounded" />
            {/* Description skeleton */}
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-4/5 rounded" />
            {/* Actions skeleton */}
            <div className="flex gap-4 mt-4">
              <Skeleton className="h-10 grow rounded" />
              <Skeleton className="h-10 grow rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
