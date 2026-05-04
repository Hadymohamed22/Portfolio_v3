import SectionHeader from "@/shared/components/section-header";
import { useTranslations } from "next-intl";

export default function ContactHero() {
  // Translation
  const t = useTranslations("contact.hero");

  return (
    <section className="my-14 md:my-16">
      <div className="container mx-auto- px-5">
        {/* Available for New Projects */}
        <p className="text-m-primary text-xs mb-4 tracking-[.1rem] uppercase font-jetbrains-mono rtl:font-tajawal font-semibold">
          {t("available")}
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
          titleClasses="text-7xl md:text-8xl w-full md:w-5/6 lg:w-4/6 rtl:lg:w-3/5 rtl:mb-5"
          subTitleClasses="w-3/4 md:w-2/5"
          className="mb-2!"
        />
      </div>
    </section>
  );
}
