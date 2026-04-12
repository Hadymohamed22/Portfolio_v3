import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export default function ServicesContentSkeleton() {
  return (
    <div className="services-section-content">
      <div className="embla">
        <div className="embla__viewport">
          <div className="embla__container flex gap-6 md:gap-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="min-w-0 flex-[0_0_80%] md:flex-[0_0_38%] lg:flex-[0_0_25%]"
              >
                <div className="flex flex-col p-6 md:p-8 gap-6 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-3xl min-h-0 md:min-h-48">
                  {/* Icon Skeleton */}
                  <div className="flex justify-center">
                    <Skeleton className="h-10 w-10 rounded-full" />
                  </div>
                  {/* Content Skeleton */}
                  <div>
                    <Skeleton className="h-5 w-2/3 mx-auto mb-2 rounded" />
                    <Skeleton className="h-3 w-5/6 mx-auto rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
