import { Badge } from "@/shared/ui/badge";
import Image from "next/image";

type Props = {
  img: string;
  alt: string;
  title: string;
  summary: string;
  techStack: {
    variant: React.ComponentProps<typeof Badge>["variant"];
    title: string;
  }[];
};

export default function ProjectBox({
  img,
  alt,
  title,
  summary,
  techStack,
}: Props) {
  return (
    <div className="project-card shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 rounded-2xl md:rounded-3xl min-h-96 flex flex-col grow">
      {/* Image Container */}
      <div className="image-container relative rounded-t-2xl md:rounded-t-3xl overflow-hidden h-56 shrink-0">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* Content */}
      <div className="content p-6 md:p-8 flex flex-col h-full">
        {/* Title & Tech Stack */}
        <div className="title-techStack flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-0 mb-4">
          {/* Title */}
          <h4 className="font-bold text-xl md:text-2xl uppercase">{title}</h4>

          {/* TechStack Badges */}
          <div className="tech-stack flex items-center gap-2">
            {techStack.map((tech) => (
              <Badge key={tech.title} variant={tech.variant}>
                {tech.title}
              </Badge>
            ))}
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-500 dark:text-gray-400 font-inter rtl:font-tajawal text-xs md:text-sm">
          {summary}
        </p>
      </div>
    </div>
  );
}
