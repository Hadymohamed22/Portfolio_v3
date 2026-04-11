import { Skeleton } from "@/shared/ui/skeleton";

export default function ContactInfoSkeleton() {
  return (
    <div className="contact-info">
      <div className="email-location flex flex-col gap-6 my-6 md:my-8">
        {/* Phone Skeleton */}
        <div className="contact-info-box flex items-center gap-6">
          <div className="icon-container shadow-sm shadow-cyan-800/55 dark:shadow-m-primary/55 size-12 rounded-full bg-white/3 flex items-center justify-center">
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
          <div className="text flex flex-col gap-1">
            <Skeleton className="h-3 w-16 rounded mb-1" />
            <Skeleton className="h-4 w-32 rounded" />
          </div>
        </div>

        {/* Email Skeleton */}
        <div className="contact-info-box flex items-center gap-6">
          <div className="icon-container shadow-sm shadow-cyan-800/55 dark:shadow-m-primary/55 size-12 rounded-full bg-white/3 flex items-center justify-center">
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
          <div className="text flex flex-col gap-1">
            <Skeleton className="h-3 w-16 rounded mb-1" />
            <Skeleton className="h-4 w-36 rounded" />
          </div>
        </div>

        {/* Location Skeleton */}
        <div className="contact-info-box flex items-center gap-6">
          <div className="icon-container shadow-sm shadow-cyan-800/55 dark:shadow-m-primary/55 size-12 rounded-full bg-white/3 flex items-center justify-center">
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
          <div className="text flex flex-col gap-1">
            <Skeleton className="h-3 w-16 rounded mb-1" />
            <Skeleton className="h-4 w-28 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
