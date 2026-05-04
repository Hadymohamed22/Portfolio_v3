"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/shared/lib/utils/tailwind-merge";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col items-center md:items-end",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list flex gap-2 w-fit items-center justify-center rounded-full p-2 text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none border border-black/5 dark:border-white/10",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-white/10",
        line: "gap-1 bg-transparent",
        tabs: "border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // base styles
        "cursor-pointer relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 py-1 px-3 md:py-1.5 md:px-4 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pe-1 has-data-[icon=inline-start]:ps-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // default border, but remove border in tabs variant
        "border border-transparent group-data-[variant=tabs]/tabs-list:border-0",
        // base unactive color
        "text-foreground/60 dark:text-muted-foreground dark:hover:text-foreground",
        // ACTIVE STATES for default and line variants
        "group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none",
        // tabs variant: active and inactive styling
        // active: nice gradient bg and text color
        "group-data-[variant=tabs]/tabs-list:data-active:bg-linear-to-tr group-data-[variant=tabs]/tabs-list:data-active:from-violet-300 group-data-[variant=tabs]/tabs-list:data-active:to-amber-200 group-data-[variant=tabs]/tabs-list:data-active:text-violet-800 group-data-[variant=tabs]/tabs-list:data-active:shadow-md group-data-[variant=tabs]/tabs-list:data-active:scale-105",
        // inactive: pale border and background
        "group-data-[variant=tabs]/tabs-list:data-[state=inactive]:bg-white group-data-[variant=tabs]/tabs-list:data-[state=inactive]:shadow-none group-data-[variant=tabs]/tabs-list:data-[state=inactive]:text-muted-foreground group-data-[variant=tabs]/tabs-list:data-[state=inactive]:opacity-90 dark:group-data-[variant=tabs]/tabs-list:data-[state=inactive]:bg-black/20 dark:group-data-[variant=tabs]/tabs-list:data-[state=inactive]:text-gray-400",
        // line variant
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        // base active bg
        "data-active:bg-violet-400 dark:data-active:bg-violet-300 dark:data-active:text-violet-800 dark:data-active:hover:text-violet-800 data-active:hover:text-amber-50 data-active:text-amber-50 dark:data-active:border-input",
        // after underline effect for line variant only
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:-bottom-1.5 group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-inset-e-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
