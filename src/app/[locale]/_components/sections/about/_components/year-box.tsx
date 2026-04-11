import { cn } from "@/shared/lib/utils/tailwind-merge";
import { useFormatter } from "next-intl";

type Props = {
  year: Date;
  isEnd?: boolean;
  text: string;
  step: "start-learn" | "start-projects" | "work-with-clients";
};

export default function YearBox({ isEnd, year, text, step }: Props) {
  // Translation
  const format = useFormatter();

  // Variables
  const stepStyles: Record<
    "start-learn" | "start-projects" | "work-with-clients",
    {
      light: string;
      dark: string;
      beforeLight?: string;
      beforeDark?: string;
      textColor: string;
    }
  > = {
    "start-learn": {
      // First/learning step: purple
      light: "bg-red-600/10 border-red-600",
      dark: "dark:bg-red-500/5 dark:border-red-500",
      beforeLight: "before:bg-red-600",
      beforeDark: "dark:before:bg-red-500",
      textColor: "text-red-600 dark:text-red-400",
    },
    "start-projects": {
      // Second/projects step: yellow
      light: "bg-[#FFFBF3] border-yellow-400",
      dark: "dark:bg-[#222018] dark:border-yellow-400/60",
      beforeLight: "before:bg-yellow-400",
      beforeDark: "dark:before:bg-yellow-300",
      textColor: "text-yellow-500 dark:text-yellow-300",
    },
    "work-with-clients": {
      // Third/final step: green
      light: "bg-green-100 border-green-400",
      dark: "dark:bg-green-900/30 dark:border-green-400/60",
      beforeLight: "before:bg-green-400",
      beforeDark: "dark:before:bg-green-300",
      textColor: "text-green-500 dark:text-green-300",
    },
  };
  return (
    <div className="year-box flex items-center gap-3">
      {/* Dot */}
      <span
        className={cn(
          "size-6 rounded-full border relative before:absolute before:size-2 before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
          // Light mode styles
          stepStyles[step].light,
          // Dark mode styles
          stepStyles[step].dark,
          // Before Light Mode
          stepStyles[step].beforeLight,
          // Before Dark Mode
          stepStyles[step].beforeDark,
          !isEnd &&
            "after:absolute after:h-9 after:w-0.5 after:top-full after:inset-s-1/2 after:-translate-x-1/2 after:bg-gray-300/55 dark:after:bg-white/15",
        )}
      ></span>

      <div className="text">
        {/* Year */}
        <p className={cn("text-sm font-bold", stepStyles[step].textColor)}>
          {format.dateTime(year, "yearOnly")}
        </p>

        {/* Text */}
        <p className="text-xs font-inter rtl:font-tajawal uppercase text-[#AAAAB3] mt-0.5">
          {text}
        </p>
      </div>
    </div>
  );
}
