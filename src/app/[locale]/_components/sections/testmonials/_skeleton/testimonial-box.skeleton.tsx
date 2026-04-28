import { Skeleton } from "@/shared/ui/skeleton";

export default function TestimonialBoxSkeleton() {
  return (
    <div className="testimonial-box relative shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 p-8 md:p-10 rounded-4xl md:rounded-[2.5rem] flex flex-col">
      <Skeleton className="absolute top-5 inset-e-5 size-8 md:size-10 rounded-md" />

      <div className="stars-container flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="size-6 shrink-0 rounded-sm" />
        ))}
      </div>

      <div className="my-6 space-y-2">
        <Skeleton className="h-4 w-full rounded-md md:h-5" />
        <Skeleton className="h-4 w-full rounded-md md:h-5" />
        <Skeleton className="h-4 w-[88%] rounded-md md:h-5" />
      </div>

      <div className="user flex items-center gap-4 mt-auto">
        <Skeleton className="size-8 md:size-10 shrink-0 rounded-full ring-2 ring-cyan-500/40 dark:ring-cyan-400/40" />
        <div className="user-info flex min-w-0 flex-1 flex-col gap-1.5">
          <Skeleton className="h-3.5 w-28 rounded-md md:h-4 md:w-32" />
          <Skeleton className="h-2.5 w-24 rounded-md md:h-3 md:w-28" />
        </div>
      </div>
    </div>
  );
}
