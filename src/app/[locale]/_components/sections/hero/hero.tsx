import { Suspense } from "react";
import { useTranslations } from "next-intl";
import Availability from "./_components/availability";
import AvailabilitySkeleton from "./_skeleton/availability-skeleton";
import HeroActions from "./_components/hero-actions";

export default function Hero() {
  // Translations
  const t = useTranslations("home.hero");

  return (
    <section className="my-14 md:my-16">
      <div className="container mx-auto px-5">
        {/* Availability Component */}
        <Suspense fallback={<AvailabilitySkeleton />}>
          <Availability />
        </Suspense>

        {/* Title */}
        <h1 className="md:max-w-10/12 text-6xl md:text-8xl rtl:md:text-9xl font-bold mb-6">
          {t.rich("title", {
            span: (chunks) => (
              <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
        </h1>

        {/* Description */}
        <p className="text-slate-600 dark:text-p font-inter rtl:font-tajawal md:max-w-3/4 lg:max-w-1/2 text-base md:text-xl lg:text-2xl">
          {t("sub-title")}
        </p>

        {/* Actions : see my work & let's talk buttons */}
        <HeroActions
          projectsText={t("projects-button")}
          talkText={t("talk-button")}
        />
      </div>
    </section>
  );
}
