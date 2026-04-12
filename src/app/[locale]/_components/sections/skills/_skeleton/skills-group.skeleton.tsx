import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export default function SkillsGroupSkeleton() {
  return (
    <div className="content grid grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className="skill-box flex flex-col p-6 md:p-8 gap-6 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-3xl min-h-0 md:min-h-48"
        >
          {/* Skeleton Icon */}
          <div className="flex items-center justify-center mx-auto rounded-2xl bg-zinc-200/70 dark:bg-white/10 size-12 md:size-14">
            <Skeleton className="w-6 h-6 md:w-7 md:h-7 rounded-md" />
          </div>

          {/* Skeleton Content */}
          <div className="skill-box-content">
            {/* Title */}
            <Skeleton className="mx-auto mb-2 w-20 h-4 rounded-md" />

            {/* Description */}
            <Skeleton className="mx-auto w-28 h-3 rounded-md mt-2" />
            <Skeleton className="mx-auto w-24 h-3 rounded-md mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}
