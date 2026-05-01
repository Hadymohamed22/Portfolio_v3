import Image from "next/image";
import WorkflowStep from "./workflow-step";
import { useTranslations } from "next-intl";
import { workflowSteps } from "../_constants/workflow-steps.constant";

export default function Workflow() {
  // Translations
  const t = useTranslations("services.workflow");

  // Variables
  const translatedWorkflowSteps = workflowSteps(t);

  return (
    <section className="workflow-section my-14 md:my-16 dark:mt-0!">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row lg:items-center gap-10 md:gap-12 justify-between">
        {/* Image */}
        <div className="image-container w-full lg:w-xl h-120 lg:h-90 rounded-2xl shadow-xl relative overflow-hidden">
          <Image
            src="/assets/images/workflow-img.png"
            alt="Workflow process illustration"
            fill
            objectFit="cover"
          />
        </div>

        {/* Content */}
        <div className="content grow">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>

          {/* Steps */}
          <div className="steps flex flex-col gap-6">
            {translatedWorkflowSteps.map((wfs, i) => (
              <div className="workflow-step flex gap-6" key={wfs.id}>
                {/* Step */}
                <WorkflowStep
                  num={(i + 1).toString()}
                  className={wfs.className}
                />

                {/* Text */}
                <div className="text">
                  {/* Title */}
                  <h5 className="text-lg md:text-xl font-bold mb-1">
                    {wfs.title}
                  </h5>

                  {/* Description */}
                  <p className="text-sm md:text-base font-inter rtl:font-tajawal text-gray-500 dark:text-gray-400 w-4/5 md:w-3/4">
                    {wfs.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
