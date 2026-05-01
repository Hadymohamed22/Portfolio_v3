import Image from "next/image";
import WorkflowStep from "./workflow-step";

export default function Workflow() {
  // Variables
  const workflowSteps: {
    id: string;
    title: string;
    desc: string;
    className: string;
  }[] = [
    {
      id: crypto.randomUUID(),
      title: "Discovery & Strategy",
      desc: "Defining technical requirements and creative objectives through deep consultation.",
      className:
        "text-[#6b68a1] dark:text-[#A8A4FF] border-[#6b68a1] dark:border-[#A8A4FF]",
    },
    {
      id: crypto.randomUUID(),
      title: "Editorial UI Design",
      desc: "Crafting unique, high-fidelity layouts that prioritize visual storytelling.",
      className:
        "text-[#017087] dark:text-[#00D2FD] border-[#017087] dark:border-[#00D2FD]",
    },
    {
      id: crypto.randomUUID(),
      title: "Architecture & Deployment",
      desc: "Developing clean, semantic code optimized for global distribution.",
      className:
        "text-[#884869] dark:text-[#FF9DD0] border-[#884869] dark:border-[#FF9DD0]",
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Precision Workflow
          </h2>

          {/* Steps */}
          <div className="steps flex flex-col gap-6">
            {workflowSteps.map((wfs, i) => (
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
