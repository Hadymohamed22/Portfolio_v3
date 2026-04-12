import {
  AppWindow,
  Braces,
  Coffee,
  Component,
  FileCheck,
  Gauge,
  GitBranch,
  Hexagon,
  LayoutPanelLeft,
  SquareRoundCorner,
  TabletSmartphone,
  Terminal,
  TowelRack,
  TypeOutline,
} from "lucide-react";
import SkillBoxIcon from "./skill-box-icon";

// Variables
// i set icons here to can extract keys type
const icons = {
  braces: <Braces className="text-purple-600 dark:text-purple-400" />,
  "type-outline": (
    <TypeOutline className="text-yellow-500 dark:text-yellow-300" />
  ),
  "app-window": <AppWindow className="text-cyan-500 dark:text-cyan-300" />,
  "layout-panel-left": (
    <LayoutPanelLeft className="text-teal-500 dark:text-teal-300" />
  ),
  "file-check": <FileCheck className="text-green-500 dark:text-green-300" />,
  gauge: <Gauge className="text-indigo-400 dark:text-indigo-300" />,
  terminal: <Terminal className="text-slate-500 dark:text-slate-300" />,
  "git-branch": <GitBranch className="text-amber-500 dark:text-amber-300" />,
  hexagon: <Hexagon className="text-rose-500 dark:text-rose-300" />,
  "square-round-corner": (
    <SquareRoundCorner className="text-lime-500 dark:text-lime-300" />
  ),
  component: <Component className="text-pink-400 dark:text-pink-300" />,
  "towel-rack": <TowelRack className="text-pink-500 dark:text-pink-300" />,
  "tablet-smartphone": (
    <TabletSmartphone className="text-sky-500 dark:text-sky-300" />
  ),
  coffee: <Coffee className="text-amber-700 dark:text-amber-300" />,
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
