import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export default function SocialLinksSkeleton() {
  return (
    <div className="social-links flex items-center gap-4 mt-10">
      {/* Github Skeleton */}

      <Skeleton className="size-10 rounded-full" />

      {/* Linkedin Skeleton */}

      <Skeleton className="size-10 rounded-full" />

      {/* Whatsapp Skeleton */}

      <Skeleton className="size-10 rounded-full" />
    </div>
  );
}
