import { Skeleton } from "@/shared/ui/skeleton";

export default function AvailabilitySkeleton() {
  return (
    <div className="flex flex-col gap-2 mb-8 rtl:mb-12">
      <Skeleton className="h-3 w-24 mb-1" />
      <Skeleton className="h-6 w-32 rounded-full" />
    </div>
  );
}
