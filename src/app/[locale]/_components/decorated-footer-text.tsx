import { useTranslations } from "next-intl";

export default function DecoratedFooterText() {
  // Translation
  const t = useTranslations("layout.footer");

  return (
    <p className="be-unique block text-[11rem] md:text-[15rem] lg:text-[16rem] font-extrabold uppercase text-gray-900/25 dark:text-white/15 text-center relative before:absolute before:inset-0 before:w-full before:h-full before:bg-linear-180 before:to-slate-50 before:to-85% dark:before:to-bg">
      {t("decorated-text")}
    </p>
  );
}
