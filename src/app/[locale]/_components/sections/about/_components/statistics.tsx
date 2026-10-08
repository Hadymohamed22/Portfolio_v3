import { useLocale } from "next-intl";
import StatisticItem from "./statistic-item";
import personalInfo from "@/data/personal-info.json";

export default function Statistics() {
  // Translation
  const locale = useLocale();

  return (
    <div className="statistics flex flex-nowrap shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 rounded-3xl py-6 md:py-8 gap-0.5 mt-6">
      {personalInfo.statistics ? (
        personalInfo.statistics.map((statistic, i) => (
          <StatisticItem
            key={statistic.id}
            num={statistic.value}
            text={statistic.label[locale as "en" | "ar"]}
            type={statistic.type as "projects" | "clients" | "exp"}
            isEnd={i === personalInfo.statistics.length - 1}
          />
        ))
      ) : (
        <>
          <StatisticItem num="+20" text="Projects Completed" type="projects" />
          <StatisticItem num="+10" text="Clients" type="clients" />
          <StatisticItem num="+2" text="Years Experience" type="exp" isEnd />
        </>
      )}
    </div>
  );
}
