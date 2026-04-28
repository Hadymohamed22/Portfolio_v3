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
  LockKeyhole,
  SquareMousePointer,
  TicketCheck,
  DatabaseSearch,
  AppWindowMac, // Added import for app-window-mac
} from "lucide-react";
import SkillBoxIcon from "./skill-box-icon";

// Variables
// i set icons here to can extract keys type
const icons = {
  // React
  react: <Hexagon className="text-sky-500 dark:text-sky-400" />,
  // React Router
  "react-router": (
    <GitBranch className="text-violet-500 dark:text-violet-400" />
  ),
  // React Query
  "react-query": <Gauge className="text-pink-500 dark:text-pink-400" />,
  // Zod (validation/schema)
  zod: <Braces className="text-green-500 dark:text-green-400" />,
  // Shadcn UI (component/UI library)
  shadcn: <Component className="text-indigo-500 dark:text-indigo-400" />,
  // Use-Intl (i18n/translation utilities)
  "use-intl": <TypeOutline className="text-orange-500 dark:text-orange-300" />,

  // keep the old icons for other techs (legacy/fallback)
  braces: <Braces className="text-purple-600 dark:text-purple-400" />,
  "type-outline": (
    <TypeOutline className="text-yellow-500 dark:text-yellow-300" />
  ),
  "app-window": <AppWindow className="text-cyan-500 dark:text-cyan-300" />,
  "app-window-mac": (
    <AppWindowMac className="text-cyan-700 dark:text-cyan-400" />
  ),
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
  "lock-keyhole": <LockKeyhole className="text-blue-600 dark:text-blue-300" />,
  "square-mouse-pointer": (
    <SquareMousePointer className="text-orange-500 dark:text-orange-300" />
  ),
  "ticket-check": (
    <TicketCheck className="text-green-600 dark:text-green-400" />
  ),
  "database-search": (
    <DatabaseSearch className="text-fuchsia-600 dark:text-fuchsia-400" />
  ),
} satisfies Record<string, React.ReactNode>;

export type SkillsIconType = keyof typeof icons;

type Props = {
  icon: SkillsIconType;
  title: string;
  description: string;
  skillIconClasses?: string;
};

export default function SkillBox({
  icon,
  title,
  description,
  skillIconClasses,
}: Props) {
  return (
    <div className="skill-box flex flex-col p-6 md:p-8 gap-6 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-3xl min-h-0 md:min-h-48">
      {/* Icon */}
      <SkillBoxIcon icon={icons[icon]} className={skillIconClasses} />

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
