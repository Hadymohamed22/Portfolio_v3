import { Skeleton } from "@/shared/ui/skeleton";

export default function AllServicesSkeleton() {
  return (
    <div className="all-services-skeleton container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="lg:col-span-2">
        <div className="p-6 md:p-8 bg-white dark:bg-white/10 rounded-3xl h-64 md:h-72 flex flex-col min-h-100 relative overflow-hidden border border-transparent dark:border-white/10">
          <div className="flex justify-between mb-6 md:mb-8">
            <div className="flex items-center">
              <span className="text-xs md:text-sm text-gray-400 font-mono mr-2">
                <Skeleton className="w-8 h-4" />
              </span>
            </div>
            <Skeleton className="size-12 md:size-14 rounded-lg" />
          </div>
          <div className="flex flex-col grow">
            <Skeleton className="h-8 w-3/5 mb-2" />
            <Skeleton className="h-4 w-4/5 md:w-3/4 mb-6" />
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 mb-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-24" />
              ))}
            </div>
            <div className="mt-auto w-fit">
              <Skeleton className="h-10 w-36 rounded-full" />
            </div>
          </div>
          <div className="absolute -bottom-10 md:-bottom-12 -inset-e-4">
            <Skeleton className="size-40 rounded-xl" />
          </div>
        </div>
      </div>
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="">
          <div className="p-6 md:p-8 bg-white dark:bg-white/10 rounded-3xl h-64 md:h-72 flex flex-col min-h-100 relative overflow-hidden border border-transparent dark:border-white/10">
            <div className="flex justify-between mb-6 md:mb-8">
              <div className="flex items-center">
                <span className="text-xs md:text-sm text-gray-400 font-mono mr-2">
                  <Skeleton className="w-8 h-4" />
                </span>
              </div>
              <Skeleton className="size-12 md:size-14 rounded-lg" />
            </div>
            <div className="flex flex-col grow">
              <Skeleton className="h-8 w-3/5 mb-2" />
              <Skeleton className="h-4 w-4/5 md:w-3/4 mb-6" />
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-24" />
                ))}
              </div>
              <div className="mt-auto w-fit">
                <Skeleton className="h-10 w-36 rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-10 md:-bottom-12 -inset-e-4">
              <Skeleton className="size-40 rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
