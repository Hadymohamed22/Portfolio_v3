import { Skeleton } from "@/shared/ui/skeleton";

export default function FiltersTabsSkeleton() {
  return (
    <div className="w-100 flex justify-end">
      <div className="flex gap-2 w-fit items-center justify-center rounded-full p-2 border border-black/5 dark:border-white/10 bg-white dark:bg-white/10">
        <div className="rounded-full px-4 py-2">
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <div className="rounded-full px-4 py-2">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <div className="rounded-full px-4 py-2">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
