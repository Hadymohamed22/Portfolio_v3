import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  title: string;
  className?: string;
};

export default function SkillsGroupTitle({ title, className }: Props) {
  return (
    <div className="skills-group-title mb-10">
      <span
        className={cn(
          "flex items-center relative flex-1 text-xs uppercase font-mono rtl:font-tajawal font-semibold tracking-wide text-[#bfbff9] before:inline-block before:me-4 before:align-middle before:w-14 md:before:w-32 before:h-px before:bg-linear-to-l rtl:before:bg-linear-to-r before:to-[#bfbff9] after:block after:bg-linear-to-r rtl:after:bg-linear-to-l after:from-transparent after:to-[#bfbff9] after:h-px after:flex-1",
          className,
        )}
      >
        {title}
      </span>
    </div>
  );
}
