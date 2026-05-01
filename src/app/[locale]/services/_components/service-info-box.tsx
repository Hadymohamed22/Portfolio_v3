import { Building, Code } from "lucide-react";
import ServiceInfoBoxFeat from "./service-info-box-feat";
import CTA from "../../_components/sections/about/_components/cta";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";

const ServicesInfoBoxsIcons = {
  buildings: (
    <div className="icon size-12 md:size-14 rounded-lg flex items-center justify-center bg-violet-500/10 text-violet-500">
      <Building />
    </div>
  ),
};

type Props = {
  className?: string;
};

export default function ServiceInfoBox({ className }: Props) {
  // Translations
  const t = useTranslations("services.all-services");

  // Variables
  const features = [
    "CMS Integration",
    "Multi-page Architecture",
    "SEO Strategy",
    "Advanced Analytics",
  ];

  return (
    <div
      className={cn(
        "service-info-box p-6 md:p-8 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-3xl flex flex-col min-h-100 relative overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <div className="num-icon flex justify-between mb-6 md:mb-8">
        {/* Num */}
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-jetbrains-mono!">
          {"1".padStart(2, "0")} /
        </p>

        {/* Icon */}
        {ServicesInfoBoxsIcons["buildings"]}
      </div>

      {/* Content */}
      <div className="content flex flex-col grow">
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold mb-2">
          Business Websites
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base font-inter rtl:font-tajawal text-gray-500 dark:text-gray-400 w-4/5 md:w-3/4">
          Scalable, secure, and professional ecosystems designed for established
          enterprises seeking a digital transformation that reflects their
          market authority.
        </p>

        {/* Service Info Feature Box */}
        <div className="features flex flex-wrap gap-3 justify-between mt-4 mb-2">
          {features.map((feat) => (
            <ServiceInfoBoxFeat key={feat} text={feat} />
          ))}
        </div>

        {/* CTA */}
        <CTA talkText={t("lets-to-deal")} className="mt-auto w-fit" />

        {/* Icon To Add Decoration For Box */}
        <div className="code-icon absolute -bottom-10 md:-bottom-12 -inset-e-4 *:size-34 md:*:size-40 text-gray-200 dark:text-gray-700/25 -rotate-12 rtl:rotate-12">
          <Code strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}
