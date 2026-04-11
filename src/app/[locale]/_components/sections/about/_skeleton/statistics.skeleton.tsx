import { Skeleton } from "@/shared/ui/skeleton";

export default function StatisticsSkeleton() {
  return (
    <div className="statistics mt-12 flex flex-nowrap shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 rounded-3xl py-6 md:py-8 gap-0.5">
      {/* Project Skeleton */}
      <div className="statistic-item grow ps-8 border-e-2 border-gray-200 dark:border-gray-200/25">
        <div className="font-bold text-4xl text-m-secondary">
          <Skeleton className="h-8 w-16 rounded" />
        </div>
        <div className="font-inter rtl:font-tajawal text-xs mt-2 text-gray-500 dark:text-gray-400">
          <Skeleton className="h-4 w-32 rounded" />
        </div>
      </div>
      {/* Clients Skeleton */}
      <div className="statistic-item grow ps-8 border-e-2 border-gray-200 dark:border-gray-200/25">
        <div className="font-bold text-4xl text-m-primary">
          <Skeleton className="h-8 w-12 rounded" />
        </div>
        <div className="font-inter rtl:font-tajawal text-xs mt-2 text-gray-500 dark:text-gray-400">
          <Skeleton className="h-4 w-16 rounded" />
        </div>
      </div>
      {/* Experience Skeleton */}
      <div className="statistic-item grow ps-8">
        <div className="font-bold text-4xl text-m-thirdly">
          <Skeleton className="h-8 w-10 rounded" />
        </div>
        <div className="font-inter rtl:font-tajawal text-xs mt-2 text-gray-500 dark:text-gray-400">
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}
