import { Skeleton } from "@/shared/ui/skeleton";

export default function CoreStackSkeleton() {
  return (
    <div className="core-stack mt-4">
      {/* Title (skeleton) */}
      <div className="mb-2 w-20">
        <Skeleton className="h-3 w-full rounded" />
      </div>
      {/* Stack skeleton badges */}
      <div className="content flex items-center gap-3">
        <Skeleton className="h-8 w-20 rounded-4xl" />
        <Skeleton className="h-8 w-20 rounded-4xl" />
        <Skeleton className="h-8 w-24 rounded-4xl" />
        <Skeleton className="h-8 w-24 rounded-4xl" />
      </div>
    </div>
  );
}
