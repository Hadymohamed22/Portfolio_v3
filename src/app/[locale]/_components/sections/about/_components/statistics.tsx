import StatisticItem from "./statistic-item";
import getPersonalInfo from "@/shared/lib/actions/get-personal-info.action";
import { getLocale } from "next-intl/server";

export default async function Statistics() {
  // Translation
  const locale = await getLocale();

  // Variables
  const stacks = await getPersonalInfo(locale);

  return (
    <div className="statistics mt-12 flex flex-nowrap shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 rounded-3xl py-6 md:py-8 gap-0.5">
      {stacks.ok ? (
        stacks.data.statistics.map((statistic, i) => (
          <StatisticItem
            key={statistic.id}
            num={statistic.text}
            text={statistic.description}
            type={statistic.type}
            isEnd={i === stacks.data.statistics.length - 1}
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
