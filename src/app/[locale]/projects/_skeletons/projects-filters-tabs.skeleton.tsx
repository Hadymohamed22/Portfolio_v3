import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export default function ProjectsFiltersTabsSkeleton() {
  return (
    <div className="flex items-center gap-2 mb-3 mt-2">
      <Skeleton className="h-8 w-14 rounded-full" />
      <Skeleton className="h-8 w-20 rounded-full" />
      <Skeleton className="h-8 w-24 rounded-full" />
      <Skeleton className="h-8 w-26 rounded-full" />
    </div>
  );
}
