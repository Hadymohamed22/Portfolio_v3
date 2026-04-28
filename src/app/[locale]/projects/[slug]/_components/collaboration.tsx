import SectionHeader from "@/shared/components/section-header";
import { Badge } from "@/shared/ui/badge";
import CollaborationBox from "./collaboration-box";
import { useTranslations } from "next-intl";
import { Project } from "@/app/[locale]/_components/sections/projects/_types/projects";

type Props = {
  role?: string | null;
  collaborations: Project["collaborations"];
};

export default function Collaboration({ role, collaborations }: Props) {
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
            {role || "Frontend Developer"}
          </p>
        </header>

        {/* Content */}
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {collaborations.map((box) => (
            <CollaborationBox
              key={box.id}
              icon={box.iconVariant}
              title={box.title}
              description={box.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
