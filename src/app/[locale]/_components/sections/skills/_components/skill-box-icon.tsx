"use client";
import { useTheme } from "next-themes";

type Props = {
  icon: React.ReactNode;
  lightColor: string;
  darkColor: string;
};

export default function SkillBoxIcon({ icon, lightColor, darkColor }: Props) {
  // Hooks
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`
        icon flex items-center justify-center 
        bg-white/70 dark:bg-white/3 
        border border-zinc-200 dark:border-white/10 
        shadow-sm 
        rounded-2xl 
        size-12 md:size-14 
        mx-auto
      `}
      style={{ color: resolvedTheme === "dark" ? darkColor : lightColor }}
    >
      {icon}
    </div>
  );
}
