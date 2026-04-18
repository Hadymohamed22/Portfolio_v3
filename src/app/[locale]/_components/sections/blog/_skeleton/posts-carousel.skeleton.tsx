import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export default function PostsCarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="post-card shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 rounded-2xl md:rounded-3xl min-h-115 flex flex-col"
        >
          {/* Skeleton Image */}
          <div className="image-container relative rounded-t-2xl md:rounded-t-3xl overflow-hidden h-56 shrink-0">
            <Skeleton className="absolute inset-0 w-full h-full" />
          </div>
          {/* Content */}
          <div className="content p-6 md:p-8 flex flex-col h-full">
            {/* Category skeleton */}
            <Skeleton className="mb-2 w-20 h-3 rounded" />
            {/* Title skeleton */}
            <Skeleton className="my-4 h-5 w-3/4 rounded" />
            {/* Summary skeleton */}
            <Skeleton className="mb-2 h-3 w-full rounded" />
            <Skeleton className="mb-2 h-3 w-5/6 rounded" />
            <Skeleton className="mb-2 h-3 w-2/3 rounded" />
            {/* Publish At skeleton */}
            <Skeleton className="mt-auto h-2 w-16 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
