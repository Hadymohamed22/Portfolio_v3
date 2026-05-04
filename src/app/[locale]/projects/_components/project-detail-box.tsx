import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import Image from "next/image";

type Props = {
  id: string;
  liveDemoLink?: string;
  className?: string;
};

export default function ProjectDetailBox({
  id,
  liveDemoLink,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "project-detail-box rounded-xl shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10",
        className,
      )}
    >
      {/* Image */}
      <div className="image-container min-h-82.5 rounded-t-xl relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Project thumbnail"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {/* Content */}
      <div className="content p-8 md:p-10">
        {/* Title And Category */}
        <div className="title-category flex items-center justify-between">
          {/* Title */}
          <h4 className="text-2xl md:text-3xl font-bold font-space-grotesk rtl:font-tajawal">
            Lumina Analytics
          </h4>

          {/* Category Badge */}
          <Badge variant={"cat-badge"}>Web App</Badge>
        </div>

        {/* Summary */}
        <p className="text-xs md:text-sm font-jetbrains-mono rtl:font-tajawal text-zinc-500 dark:text-gray-400 my-4">
          A high-performance data orchestration platform for enterprise scale
          machine learning workflows.
        </p>

        {/* Tech Stack */}
        <div className="techs flex items-center gap-2 mb-8">
          {["React", "Next", "Tailwind", "Strapi"].map((t) => (
            <Badge key={t} variant={"main-tech"}>
              {t}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="actions flex items-center gap-4">
          {/* Case Study */}
          <Button asChild className="grow">
            <Link href={`/projects/${id || "exam-app"}`}>Case Study</Link>
          </Button>

          {/* Live Demo */}
          {liveDemoLink && (
            <Button variant={"secondary"} asChild className="grow">
              <Link href={liveDemoLink}>Live Demo</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
