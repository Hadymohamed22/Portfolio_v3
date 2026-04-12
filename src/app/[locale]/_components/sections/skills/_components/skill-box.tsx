import { AppWindow, Braces, LayoutPanelLeft, TypeOutline } from "lucide-react";
import SkillBoxIcon from "./skill-box-icon";

// Variables
// i set icons here to can extract keys type
const icons = {
  braces: <Braces />,
  "type-outline": <TypeOutline />,
  "app-window": <AppWindow />,
  "layout-panel-left": <LayoutPanelLeft />,
} satisfies Record<string, React.ReactNode>;

export type SkillsIconType = keyof typeof icons;

type Props = {
  icon: SkillsIconType;
  title: string;
  description: string;
};

export default function SkillBox({ icon, title, description }: Props) {
  return (
    <div className="skill-box flex flex-col p-6 md:p-8 gap-6 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-3xl min-h-0 md:min-h-48">
      {/* Icon */}
      <SkillBoxIcon icon={icons[icon]} />

      {/* Content */}
      <div className="skill-box-content">
        {/* Title */}
        <p className="text-center mb-2 font-inter font-bold text-zinc-700 dark:text-white">
          {title}
        </p>

        {/* Description */}
        <p className="text-center text-[0.625rem] md:text-xs font-jetbrains-mono rtl:font-tajawal text-zinc-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
