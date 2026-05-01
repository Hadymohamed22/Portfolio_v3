import { Building, Code, Gauge, PencilRuler, Rocket } from "lucide-react";
import ServiceInfoBoxFeat from "./service-info-box-feat";
import CTA from "../../_components/sections/about/_components/cta";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";
import { ServiceFeature } from "../_types/all-services";

const ServicesInfoBoxsIcons = {
  buildings: (
    <div className="icon size-12 md:size-14 rounded-lg flex items-center justify-center bg-violet-500/10 text-violet-500">
      <Building />
    </div>
  ),
  rocket: (
    <div className="icon size-12 md:size-14 rounded-lg flex items-center justify-center bg-[#00D2FD]/10 text-[#00D2FD]">
      <Rocket />
    </div>
  ),
  pen: (
    <div className="icon size-12 md:size-14 rounded-lg flex items-center justify-center bg-[#FF9DD0]/10 text-[#FF9DD0]">
      <PencilRuler />
    </div>
  ),
  speed: (
    <div className="icon size-12 md:size-14 rounded-lg flex items-center justify-center bg-[#FF6E84]/10 text-[#FF6E84]">
      <Gauge />
    </div>
  ),
};

export type ServicesInfoBoxsIconType = keyof typeof ServicesInfoBoxsIcons;

type Props = {
  className?: string;
  icon: ServicesInfoBoxsIconType;
  title: string;
  description: string;
  num: string;
  features: ServiceFeature[];
};

export default function ServiceInfoBox({
  className,
  icon,
  title,
  description,
  num,
  features,
}: Props) {
  // Translations
  const t = useTranslations("services.all-services");

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
          {num.padStart(2, "0")} /
        </p>

        {/* Icon */}
        {ServicesInfoBoxsIcons[icon]}
      </div>

      {/* Content */}
      <div className="content flex flex-col grow">
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm md:text-base font-inter rtl:font-tajawal text-gray-500 dark:text-gray-400 w-4/5 md:w-3/4">
          {description}
        </p>

        {/* Service Info Feature Box */}
        <div className="features flex flex-wrap gap-x-6 gap-y-2 mt-4 mb-2">
          {features.map((feat) => (
            <ServiceInfoBoxFeat key={feat.id} text={feat.text} />
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
