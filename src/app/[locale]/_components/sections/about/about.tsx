import { Button } from "@/shared/ui/button";
import { MessageCircleMore } from "lucide-react";
import YearBox from "./_components/year-box";
import CoreStack from "./_components/core-stack";
import { Suspense } from "react";
import CoreStackSkeleton from "./_skeleton/core-stack.skeleton";
import Statistics from "./_components/statistics";
import StatisticsSkeleton from "./_skeleton/statistics.skeleton";
import Advantages from "./_components/advantages";

export default function About() {
  return (
    <section className="about-section my-14 md:my-16">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-12">
        {/* Image & Statistics */}
        <div className="image-statistics col-span-1"></div>

        {/* About Me */}
        <div className="about-me col-span-1 lg:col-span-2">
          {/* Who Me */}
          <p className="text-gray-400 dark:text-gray-300 text-xs mb-4 tracking-[.3rem] uppercase font-jetbrains-mono rtl:font-tajawal">
            About Me
          </p>

          {/* Title */}
          <h3 className="font-bold text-5xl md:text-6xl">
            HONEST. AMBITIOUS.{" "}
            <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
              ALWAYS LEARNING.
            </span>
          </h3>

          {/* Description */}
          <p className="mt-3 font-inter rtl:font-tajawal text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            {`My journey from junior explorer to mid-level craftsman is fueled by a simple obsession: bridging the gap between raw code and profitable user experiences. I don't just "write HTML"; I architect digital environments that breathe your brand's identity.`}
          </p>

          {/* Core Stack */}
          <Suspense fallback={<CoreStackSkeleton />}>
            <CoreStack />
          </Suspense>

          {/* Statistics */}
          <Suspense fallback={<StatisticsSkeleton />}>
            <Statistics />
          </Suspense>

          {/* Advantages */}
          <Advantages />

          {/* CTA */}
          <Button className="min-w-48 mt-8">
            <MessageCircleMore />
            {"Let's Work Together"}
          </Button>
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
