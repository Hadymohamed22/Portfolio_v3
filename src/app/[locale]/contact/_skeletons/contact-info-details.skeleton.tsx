import { Skeleton } from "@/shared/ui/skeleton";

export default function ContactInfoDetailsSkeleton() {
  return (
    <div className="contact-info-details-skeleton flex flex-col gap-4">
      {[0, 1, 2].map((_, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 bg-muted/40 rounded-lg p-4 md:p-6"
        >
          {/* Icon Skeleton */}
          <Skeleton className="w-10 h-10 rounded-full" />

          {/* Text Skeleton */}
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="w-24 h-4 rounded-md" />
            <Skeleton className="w-40 h-3 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
