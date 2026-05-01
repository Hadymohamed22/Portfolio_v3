import SectionHeader from "@/shared/components/section-header";
import CTA from "../../_components/sections/about/_components/cta";
import { useTranslations } from "next-intl";

export default function ServicesHero() {
  // Translations
  const t = useTranslations("services.hero");

  return (
    <section className="my-14 md:my-16">
      {/* CAPABILITIES */}
      <p className="text-cyan-500 dark:text-cyan-400 text-xs mb-4 tracking-[.3rem] uppercase font-jetbrains-mono rtl:font-tajawal font-semibold">
        {t("capabilities")}
      </p>

      {/* Section Header */}
      <SectionHeader
        title={t.rich("title", {
          span: (chunks) => (
            <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        subTitle={t("description")}
        titleClasses="text-7xl md:text-8xl w-4/5 md:w-3/5 lg:w-2/5 rtl:lg:w-3/5"
        subTitleClasses="w-3/4 md:w-2/5"
        className="mb-2!"
      />

      {/* CTA */}
      <CTA talkText={t("lets-start-together")} />
    </section>
  );
}
