import SectionHeader from "@/shared/components/section-header";
import { Badge } from "@/shared/ui/badge";
import CollaborationBox from "./collaboration-box";
import { Laptop, Users, Lightbulb, Code2 } from "lucide-react";
import { useTranslations } from "next-intl";

// Dummy data for collaboration boxes
const collaborationBoxes = [
  {
    icon: <Laptop className="text-cyan-600 dark:text-cyan-400" />,
    iconClassNames: "bg-cyan-100 dark:bg-cyan-900/20",
    title: "Frontend Architecture",
    description:
      "Designed scalable component-driven architecture and patterns for robust development.",
  },
  {
    icon: <Users className="text-purple-600 dark:text-purple-400" />,
    iconClassNames: "bg-purple-100 dark:bg-purple-900/20",
    title: "Team Collaboration",
    description:
      "Facilitated seamless teamwork between designers, developers, and QA through clear documentation and agile rituals.",
  },
  {
    icon: <Lightbulb className="text-yellow-500 dark:text-yellow-400" />,
    iconClassNames: "bg-yellow-100 dark:bg-yellow-900/20",
    title: "UX Improvements",
    description:
      "Spearheaded user experience enhancements grounded in user feedback and analytics.",
  },
  {
    icon: <Code2 className="text-green-600 dark:text-green-400" />,
    iconClassNames: "bg-green-100 dark:bg-green-900/20",
    title: "Code Quality",
    description:
      "Established code review practices and enforced strict linting to ensure maintainability.",
  },
];

export default function Collaboration() {
  // Translations
  const t = useTranslations("projects.project-details.collaboration");

  return (
    <section className="bg-gray-100 dark:bg-[#23262E4D] py-14 md:py-16">
      <div className="container mx-auto px-5">
        {/* Header */}
        <header className="mb-12 md:mb-16 flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
          <div className="badge-title">
            {/* Badge */}
            <Badge variant="collaboration" className="mb-2">
              {t("collaboration")}
            </Badge>

            {/* Section Header */}
            <SectionHeader
              title={t.rich("title", {
                span: (chunks) => (
                  <span className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
                    {chunks}
                  </span>
                ),
              })}
              className="m-0!"
            />
          </div>

          <p className="text-lg md:text-xl font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 md:max-w-1/2 leading-7">
            As the Lead Frontend Architect, I orchestrated the interface logic
            and visualization systems that define the core user experience of
            Vortex.
          </p>
        </header>

        {/* Content */}
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {collaborationBoxes.map((box, idx) => (
            <CollaborationBox
              key={idx}
              icon={box.icon}
              iconClassNames={box.iconClassNames}
              title={box.title}
              description={box.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
