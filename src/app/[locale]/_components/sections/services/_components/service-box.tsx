import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { CircleGauge, Code, PlaneLanding, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = {
  rocket: <Rocket />,
  "circle-gauge": <CircleGauge />,
  "plane-landing": <PlaneLanding />,
  code: <Code />,
} satisfies Record<string, React.ReactNode>;

export type serviceIconType = keyof typeof icons;

type Props = {
  icon: serviceIconType;
  title: string;
  description: string;
  className?: string;
  boxClassName?: string;
};

export default function ServiceBox({
  title,
  description,
  className,
  boxClassName,
  icon,
}: Props) {
  // Translation
  const t = useTranslations("home.services");

  return (
    <div
      className={cn(
        "embla__slide flex flex-col service-box shadow-lg bg-white dark:bg-white/3 border-b-4 border-gray-400 dark:border-white/10 rounded-3xl p-6 md:p-8",
        boxClassName,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "icon flex items-center justify-center bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/10 shadow-sm rounded-xl size-12 mb-6",
          className,
        )}
      >
        {icons[icon]}
      </div>

      {/* Title */}
      <h5
        className={cn(
          "font-jetbrains-mono rtl:font-tajawal text-lg mb-4 font-bold",
          className,
        )}
      >
        {title}
      </h5>

      {/* Description */}
      <p className="text-xs md:text-sm font-jetbrains-mono rtl:font-tajawal text-zinc-500 dark:text-gray-400 mb-6">
        {description}
      </p>

      {/* Link */}
      <Link
        href={"/#contact-me"}
        className={cn(
          "underline text-[0.625rem] md:text-xs animate-pulse mt-auto",
          className,
        )}
      >
        {t("start-project")}
      </Link>
    </div>
  );
}
