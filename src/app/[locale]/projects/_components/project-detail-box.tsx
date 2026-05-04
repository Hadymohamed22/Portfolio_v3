import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { Project } from "../../_components/sections/projects/_types/projects";
import { useTranslations } from "next-intl";

type Props = {
  slug: string;
  liveDemoLink?: string;
  className?: string;
  title: string;
  summary: string;
  imgSrc: string;
  alt: string;
  categoryName: string;
  badges: Project["badges"];
};

export default function ProjectDetailBox({
  slug,
  liveDemoLink,
  className,
  title,
  categoryName,
  summary,
  imgSrc,
  alt,
  badges,
}: Props) {
  // Translations
  const t = useTranslations("projects");

  return (
    <div
      className={cn(
        "project-detail-box rounded-xl shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10",
        className,
      )}
    >
      {/* Image */}
      <div className="image-container min-h-80 lg:min-h-110 rounded-t-xl relative overflow-hidden">
        <Image
          src={imgSrc}
          alt={alt || `${title} Image`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {/* Content */}
      <div className="content p-8 md:p-10 flex flex-col">
        {/* Title And Category */}
        <div className="title-category flex items-center justify-between">
          {/* Title */}
          <h4 className="text-2xl md:text-3xl font-bold font-space-grotesk rtl:font-tajawal">
            {title}
          </h4>

          {/* Category Badge */}
          <Badge variant={"cat-badge"}>{categoryName}</Badge>
        </div>

        {/* Summary */}
        <p className="text-xs md:text-sm font-jetbrains-mono rtl:font-tajawal text-zinc-500 dark:text-gray-400 my-4">
          {summary}
        </p>

        {/* Tech Stack */}
        <div className="techs flex items-center gap-2 mb-8">
          {badges.map((badge) => (
            <Badge key={badge.id} variant={"main-tech"}>
              {badge.title}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="actions flex items-center gap-4 mt-auto">
          {/* Case Study */}
          <Button asChild className="grow">
            <Link href={`/projects/${slug || "exam-app"}`}>
              {t("project-case-study")}
            </Link>
          </Button>

          {/* Live Demo */}
          {liveDemoLink && (
            <Button variant={"secondary"} asChild className="grow">
              <Link href={liveDemoLink}>{t("project-live-demo")}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
