import { cn } from "../lib/utils/tailwind-merge";

type Props = {
  title: string | React.ReactNode;
  subTitle?: string;
  className?: string;
  titleClasses?: string;
  subTitleClasses?: string;
};

export default function SectionHeader({
  title,
  subTitle,
  className,
  titleClasses,
  subTitleClasses,
}: Props) {
  return (
    <header className={cn("mb-14 md:mb-16", className)}>
      {/* Title */}
      <h3 className={cn("font-bold text-4xl md:text-5xl mb-1", titleClasses)}>
        {title}
      </h3>

      {/* Sub Title */}
      {subTitle && (
        <p
          className={cn(
            "text-sm md:text-base font-inter rtl:font-tajawal text-gray-500 dark:text-gray-400",
            subTitleClasses,
          )}
        >
          {subTitle}
        </p>
      )}
    </header>
  );
}
