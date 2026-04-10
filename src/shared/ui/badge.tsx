import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/shared/lib/utils/tailwind-merge";

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-3 py-1 text-[0.625rem] font-jetbrains-mono font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        next: "bg-gray-200 text-secondary-foreground dark:bg-gray-500/50 dark:text-gray-100 [a]:hover:bg-secondary/80 dark:[a]:hover:bg-secondary/30",
        tailwind:
          "bg-cyan-400/10 text-cyan-600 dark:bg-cyan-400/20 dark:text-cyan-300",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 [a]:hover:bg-destructive/20 dark:bg-destructive/30 dark:text-destructive-foreground dark:focus-visible:ring-destructive/40 dark:[a]:hover:bg-destructive/50",
        react:
          "bg-indigo-300/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
        reactHookForm:
          "bg-green-700/10 text-green-700 dark:bg-green-400/15 dark:text-green-300",
        zod: "bg-teal-700/10 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300",
        nextAuth:
          "bg-yellow-200/25 text-yellow-700 dark:bg-yellow-300/15 dark:text-yellow-200",
        shadcn:
          "bg-gray-950/10 text-gray-900 dark:bg-gray-50/15 dark:text-gray-100",
        nextIntl:
          "bg-lime-200/15 text-lime-700 dark:bg-lime-200/10 dark:text-lime-300",
        reactQuery:
          "bg-rose-300/15 text-rose-500 dark:bg-rose-400/10 dark:text-rose-300",
        html: "bg-orange-100 text-orange-700 dark:bg-orange-300/20 dark:text-orange-800",
        css: "bg-blue-100 text-blue-700 dark:bg-blue-300/20 dark:text-blue-300",
        js: "bg-yellow-100 text-yellow-700 dark:bg-yellow-300/20 dark:text-yellow-300",
        sass: "bg-pink-100 text-pink-700 dark:bg-pink-300/20 dark:text-pink-300",
        bootstrap:
          "bg-purple-100 text-purple-700 dark:bg-purple-300/20 dark:text-purple-300",
        wordpress:
          "bg-blue-200/40 text-blue-900 dark:bg-blue-200/10 dark:text-blue-200",
        salla:
          "bg-green-200/40 text-green-900 dark:bg-green-200/10 dark:text-green-200",
        zid: "bg-yellow-300/30 text-yellow-900 dark:bg-yellow-300/10 dark:text-yellow-300",
        notAvailable:
          "bg-gray-200 text-gray-500 border-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 border",

        fullTime:
          "bg-green-200/70 text-green-800 border-green-300 outline outline-1 outline-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700 dark:outline-green-700 border before:content-[''] before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-green-500 before:me-1 before:align-middle before:ring before:ring-green-400 before:ring-opacity-70 dark:before:bg-green-400 dark:before:ring-green-600",
        partTime:
          "bg-blue-200/70 text-blue-800 border-blue-300 outline outline-1 outline-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700 dark:outline-blue-700 border before:content-[''] before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-blue-500 before:me-1 before:align-middle before:ring before:ring-blue-400 before:ring-opacity-70 dark:before:bg-blue-400 dark:before:ring-blue-600",
        remote:
          "bg-purple-100 text-purple-700 border-purple-300 outline outline-1 outline-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700 dark:outline-purple-700 border before:content-[''] before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-purple-500 before:me-1 before:align-middle before:ring before:ring-purple-400 before:ring-opacity-70 dark:before:bg-purple-400 dark:before:ring-purple-600",
      },
    },
    defaultVariants: {
      variant: "next",
    },
  },
);

function Badge({
  className,
  variant = "next",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
