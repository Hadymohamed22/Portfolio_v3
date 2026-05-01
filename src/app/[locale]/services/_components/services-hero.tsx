import SectionHeader from "@/shared/components/section-header";
import CTA from "../../_components/sections/about/_components/cta";

export default function ServicesHero() {
  return (
    <section className="my-14 md:my-16">
      {/* CAPABILITIES */}
      <p className="text-cyan-500 dark:text-cyan-400 text-xs mb-4 tracking-[.3rem] uppercase font-jetbrains-mono rtl:font-tajawal font-semibold">
        CAPABILITIES
      </p>

      {/* Section Header */}
      <SectionHeader
        title={"What I Can Do For You"}
        subTitle={
          "Precision-engineered digital solutions at the intersection of high-end editorial design and robust technical architecture."
        }
        titleClasses="text-7xl md:text-8xl w-4/5 md:w-3/5 lg:w-2/5"
        subTitleClasses="w-3/4 md:w-2/5"
        className="mb-2!"
      />

      {/* CTA */}
      <CTA talkText="Let's Start Together" />
    </section>
  );
}
