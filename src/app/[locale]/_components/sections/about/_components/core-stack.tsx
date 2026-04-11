import getPersonalInfo from "@/shared/lib/actions/get-personal-info.action";
import { Badge } from "@/shared/ui/badge";

export default async function CoreStack() {
  // Variables
  const stacks = await getPersonalInfo();

  return (
    <div className="core-stack mt-4">
      {/* Title */}
      <p className="text-gray-400 dark:text-gray-500 text-xs mb-2 tracking-widest uppercase font-jetbrains-mono rtl:font-tajawal">
        Core Stack
      </p>

      {/* Stack */}
      <div className="content flex items-center gap-3">
        {stacks.ok ? (
          stacks.data.coreStack.map((tech) => (
            <Badge variant={tech.badgeVariant} key={tech.id}>
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
