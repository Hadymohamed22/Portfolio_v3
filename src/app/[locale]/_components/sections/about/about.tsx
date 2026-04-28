import CoreStack from "./_components/core-stack";
import { Suspense } from "react";
import CoreStackSkeleton from "./_skeleton/core-stack.skeleton";
import Statistics from "./_components/statistics";
import StatisticsSkeleton from "./_skeleton/statistics.skeleton";
import Advantages from "./_components/advantages";
import { useTranslations } from "next-intl";
import CTA from "./_components/cta";
import MyImage from "./_components/my-image";
import Journey from "./_components/journey";

export default function About() {
  // Translation
  const t = useTranslations("home.about-me");
  return (
    <section className="about-section my-14 md:my-16">
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-12 items-center">
        {/* Image & Statistics */}
        <div className="image-statistics col-span-1">
          {/* Image */}
          <MyImage />
        </div>

        {/* About Me */}
        <div className="about-me col-span-1 lg:col-span-2">
          {/* Who Me */}
          <p className="text-gray-400 dark:text-gray-300 text-xs mb-4 tracking-[.3rem] uppercase font-jetbrains-mono rtl:font-tajawal">
            {t("about-me-text")}
          </p>

          {/* Title */}
          <h3 className="font-bold text-5xl md:text-6xl">
            {t.rich("title", {
              span: (chunks) => (
                <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                  {chunks}
                </span>
              ),
            })}
          </h3>

          {/* Description */}
          <p className="mt-3 font-inter rtl:font-tajawal text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            {t("description")}
          </p>

          {/* Core Stack */}
          <Suspense fallback={<CoreStackSkeleton />}>
            <CoreStack />
          </Suspense>

          {/* Statistics */}
          <Suspense fallback={<StatisticsSkeleton />}>
            <Statistics />
          </Suspense>

          <div className="journey-advantages-cta flex flex-col md:flex-row gap-4">
            {/* Journey */}
            <Journey />

            <div className="cta-advantages">
              {/* Advantages */}
              <Advantages />

              {/* CTA */}
              <CTA talkText={t("cta")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*


            



                      <div className="journey shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 rounded-3xl p-6 md:p-8 col-span-2 md:col-span-3">
            <p className="text-gray-400 dark:text-gray-500 text-xs mb-4 tracking-[.2rem] uppercase font-jetbrains-mono rtl:font-tajawal">
              EVOLUTION
            </p>

            <div className="content flex flex-col gap-5">
              <YearBox
                year={2023}
                text="STARTED LEARNING CODE"
                step="start-learn"
              />
              <YearBox
                year={2024}
                text="BUILT REAL-WORLD PROJECTS"
                step="start-projects"
              />
              <YearBox
                year={2025}
                text="WORKING WITH CLIENTS"
                step="work-with-clients"
                isEnd
              />
            </div>
          </div>
*/
