import { useTranslations } from "next-intl";
import YearBox from "./year-box";

export default function Journey() {
  // Translation
  const t = useTranslations("home.about-me");

  return (
    <div className="journey shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 rounded-3xl p-6 md:p-8 mt-6">
      <p className="text-gray-400 dark:text-gray-500 text-xs mb-4 tracking-[.2rem] uppercase font-jetbrains-mono rtl:font-tajawal">
        {t("statistic-title")}
      </p>

      <div className="content flex flex-col gap-5 min-w-72">
        <YearBox
          year={new Date("2023")}
          text={t("start-learn")}
          step="start-learn"
        />
        <YearBox
          year={new Date("2024")}
          text={t("real-world-projects")}
          step="start-projects"
        />
        <YearBox
          year={new Date("2025")}
          text={t("work-with-clients")}
          step="work-with-clients"
          isEnd
        />
      </div>
    </div>
  );
}
