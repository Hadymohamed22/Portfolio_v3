import { cn } from "../lib/utils/tailwind-merge";

type Props = {
  title: string | React.ReactNode;
  subTitle?: string;
  className?: string;
};

export default function SectionHeader({ title, subTitle, className }: Props) {
  return (
    <header className={cn("mb-14 md:mb-16", className)}>
      {/* Title */}
      <h3 className="font-bold text-4xl md:text-5xl mb-1">{title}</h3>

      {/* Sub Title */}
      {subTitle && (
        <p className="text-sm md:text-base font-inter rtl:font-tajawal text-gray-500 dark:text-gray-400">
          {subTitle}
        </p>
      )}
    </header>
  );
}
