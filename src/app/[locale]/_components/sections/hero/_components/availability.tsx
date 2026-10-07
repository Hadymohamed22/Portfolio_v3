import { Badge } from "@/shared/ui/badge";
import site from "@/data/site.json";
import { useTranslations } from "next-intl";

export default function Availability() {
  // Translations
  const t = useTranslations("home.hero.availability");

  // Variables

  return (
    <div className="flex flex-col gap-2 mb-8 rtl:mb-12">
      {!site.availability ? (
        "Data Not Available Now"
      ) : (
        <>
          <p className="text-xs rtl:text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
            {t("available-for")} :
          </p>
          <Badge
            variant={
              site.availability.isAvailable
                ? (site.availability.workType as BadgeVariant)
                : "notAvailable"
            }
          >
            {t(
              site.availability.isAvailable
                ? site.availability.workType
                : "not-available",
            )}
          </Badge>
        </>
      )}
    </div>
  );
}
