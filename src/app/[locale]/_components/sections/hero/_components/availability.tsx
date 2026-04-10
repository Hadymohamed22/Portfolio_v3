import { Badge } from "@/shared/ui/badge";
import getAvailability from "../_utils/get-availability.util";
import { getTranslations } from "next-intl/server";

export default async function Availability() {
  // Translations
  const t = await getTranslations("home.hero.availability");

  // Variables
  const availability = await getAvailability();

  return (
    <div className="flex flex-col gap-2 mb-8 rtl:mb-12">
      {!availability.ok ? (
        availability.message
      ) : (
        <>
          <p className="text-xs rtl:text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
            {t("available-for")} :
          </p>
          <Badge
            variant={
              availability.data.isAvailable
                ? availability.data.workType
                : "notAvailable"
            }
          >
            {t(
              availability.data.isAvailable
                ? availability.data.workType
                : "not-available",
            )}
          </Badge>
        </>
      )}
    </div>
  );
}
