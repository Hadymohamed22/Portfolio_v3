import { useTranslations } from "next-intl";
import BugParagraph from "./bug-paragraph";
import DecoratedTitle from "./decorated-title";
import DetailSummaryBox from "./detail-summary-box";

export default function CaseStudy() {
  // Translations
  const t = useTranslations("projects.project-details.case-study");

  return (
    <section className="my-26 md:my-30">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-24">
        {/* Problem And Motivation */}
        <div className="problem-motivation md:min-h-100 flex flex-col">
          {/* Title */}
          <DecoratedTitle
            title={t("the-motivation")}
            className="text-m-primary before:bg-m-primary"
          />

          {/* Text */}
          <p className="text-sm md:text-base font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            consectetur, a eveniet quibusdam quas, dolore ad, earum totam
            voluptate quidem minus blanditiis? Magni dignissimos totam
            temporibus debitis esse. Debitis, asperiores!
          </p>

          {/* Bugs */}
          <div className="bugs flex flex-col gap-1.5 mt-6 md:mt-auto">
            {/* List of bugs this project solves */}
            {[
              "Students often forget to complete",
              "Difficult to track individual progress",
              "Limited collaboration features",
              "Uninspiring UI leads to decreased ",
            ].map((bug, idx) => (
              <BugParagraph key={idx} p={bug} />
            ))}
          </div>
        </div>

        {/* Software Solution */}
        <div className="software-solution md:min-h-100 flex flex-col">
          {/* Title */}
          <DecoratedTitle
            title={t("software-solution")}
            className="text-cyan-700 before:bg-cyan-700 dark:text-m-secondary dark:before:bg-m-secondary"
          />

          {/* Text */}
          <p className="text-sm md:text-base font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            consectetur, a eveniet quibusdam quas, dolore ad, earum totam
            voluptate quidem minus blanditiis? Magni dignissimos totam
            temporibus debitis esse. Debitis, asperiores!
          </p>

          <div className="accuracy-efficiency flex flex-col md:flex-row gap-4 md:gap-2 mt-6 md:mt-auto">
            <DetailSummaryBox
              percentage={98}
              text={t("accuracy")}
              className="bg-m-secondary/10 dark:bg-m-primary/5 shadow-xl border-2 border-m-secondary/25 dark:border-m-primary/25"
            />
            <DetailSummaryBox
              percentage={90}
              text={t("efficiency")}
              className="bg-m-primary/10 dark:bg-m-secondary/5 shadow-xl border-2 border-m-primary/25 dark:border-m-secondary/25"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
