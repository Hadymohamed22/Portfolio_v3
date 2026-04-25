import SkillBox, {
  SkillsIconType,
} from "@/app/[locale]/_components/sections/skills/_components/skill-box";
import SectionHeader from "@/shared/components/section-header";

type Props = {
  skills: { icon: SkillsIconType; title: string; description: string }[];
};

export default function TechStack({ skills }: Props) {
  return (
    <section className="bg-gray-100 dark:bg-[#23262E4D] py-14 md:py-16">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <SectionHeader
          title={"Technologies Used"}
          className="text-center"
          subTitle="Powered By Cutting-Edge Tech"
        />

        {/* Content */}
        <div className="content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => {
            return (
              <SkillBox
                key={skill.title}
                skillIconClasses={"rounded-full"}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
