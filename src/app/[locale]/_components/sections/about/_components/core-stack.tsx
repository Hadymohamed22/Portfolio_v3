import site from "@/data/site.json";
import { Badge } from "@/shared/ui/badge";
import { useTranslations } from "next-intl";

export default function CoreStack() {
  // Translation
  const t = useTranslations("home.about-me");

  return (
    <div className="core-stack mt-4">
      {/* Title */}
      <p className="text-gray-400 dark:text-gray-500 text-xs mb-2 tracking-widest uppercase font-jetbrains-mono rtl:font-tajawal">
        {t("core-stack-title")}
      </p>

      {/* Stack */}
      <div className="content flex items-center gap-3 flex-wrap">
        {site.coreStack ? (
          site.coreStack.map((tech) => (
            <Badge variant={tech.badgeVariant as BadgeVariant} key={tech.id}>
              {tech.name}
            </Badge>
          ))
        ) : (
          <>
            <Badge variant="react-default">React</Badge>
            <Badge variant="next-default">Next.js</Badge>
            <Badge variant="typescript-default">TypeScript</Badge>
            <Badge variant="tailwind-default">Tailwindcss</Badge>
          </>
        )}
      </div>
    </div>
  );
}
