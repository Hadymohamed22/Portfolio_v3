import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  icon: React.ReactNode;
  className?: string;
};

export default function SkillBoxIcon({ icon, className }: Props) {
  return (
    <div
      className={cn(
        `
        icon flex items-center justify-center 
        bg-white/70 dark:bg-white/3 
        border border-zinc-200 dark:border-white/10 
        shadow-sm 
        rounded-2xl 
        size-12 md:size-14 
        mx-auto
      `,
        className,
      )}
    >
      {icon}
    </div>
  );
}
