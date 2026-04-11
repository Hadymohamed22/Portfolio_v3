import { Gauge, Search, SquareChevronRight, TrendingUp } from "lucide-react";

type IconData = {
  icon: React.ReactNode;
};

// Variables
// i set it here to can extract iconName type from it
const icons = {
  "clean-code": {
    icon: (
      <SquareChevronRight
        size={18}
        className="text-amber-600 dark:text-amber-300"
      />
    ),
  },
  trend: {
    icon: (
      <TrendingUp
        size={18}
        className="text-emerald-600 dark:text-emerald-300"
      />
    ),
  },
  fast: {
    icon: <Gauge size={18} className="text-sky-600 dark:text-sky-300" />,
  },
  search: {
    icon: (
      <Search size={18} className="text-fuchsia-600 dark:text-fuchsia-300" />
    ),
  },
} satisfies Record<string, IconData>;

export type IconsKeysType = keyof typeof icons;

type Props = {
  text: string;
  iconName: IconsKeysType;
};

export default function AdvantageItem({ text, iconName }: Props) {
  return (
    <div className="advantage-item flex items-center gap-2 min-w-44">
      {/* Icon */}
      {icons[iconName].icon}

      {/* Text */}
      <p className="text-gray-400 dark:text-gray-300 text-sm uppercase font-semibold">
        {text}
      </p>
    </div>
  );
}
