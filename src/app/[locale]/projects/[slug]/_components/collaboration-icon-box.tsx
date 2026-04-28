import { cn } from "@/shared/lib/utils/tailwind-merge";
import {
  Laptop,
  Users,
  Lightbulb,
  Code2,
  Star,
  Layout,
  Grid,
  Database,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

const icons = {
  laptop: {
    icon: <Laptop className="text-cyan-600 dark:text-cyan-400" />,
    iconClassNames: "bg-cyan-100 dark:bg-cyan-900/20",
  },
  users: {
    icon: <Users className="text-purple-600 dark:text-purple-400" />,
    iconClassNames: "bg-purple-100 dark:bg-purple-900/20",
  },
  lightbulb: {
    icon: <Lightbulb className="text-yellow-500 dark:text-yellow-400" />,
    iconClassNames: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  code2: {
    icon: <Code2 className="text-green-600 dark:text-green-400" />,
    iconClassNames: "bg-green-100 dark:bg-green-900/20",
  },
  // Additional icons
  monitor: {
    icon: <Laptop className="text-blue-500 dark:text-blue-300" />, // fallback: using Laptop for Monitor
    iconClassNames: "bg-blue-100 dark:bg-blue-900/20",
  },
  shield: {
    icon: <Lightbulb className="text-red-600 dark:text-red-400" />, // fallback: using Lightbulb for Shield
    iconClassNames: "bg-red-100 dark:bg-red-900/20",
  },
  team: {
    icon: <Users className="text-sky-500 dark:text-sky-300" />,
    iconClassNames: "bg-sky-100 dark:bg-sky-900/20",
  },
  idea: {
    icon: <Lightbulb className="text-orange-400 dark:text-orange-300" />,
    iconClassNames: "bg-orange-100 dark:bg-orange-900/20",
  },
  dev: {
    icon: <Code2 className="text-emerald-500 dark:text-emerald-400" />,
    iconClassNames: "bg-emerald-100 dark:bg-emerald-900/20",
  },
  // Added requested variants
  star: {
    icon: <Star className="text-yellow-400 dark:text-yellow-300" />,
    iconClassNames: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  layout: {
    icon: <Layout className="text-fuchsia-500 dark:text-fuchsia-400" />,
    iconClassNames: "bg-fuchsia-100 dark:bg-fuchsia-900/20",
  },
  grid: {
    icon: <Grid className="text-indigo-500 dark:text-indigo-400" />,
    iconClassNames: "bg-indigo-100 dark:bg-indigo-900/20",
  },
  database: {
    icon: <Database className="text-rose-500 dark:text-rose-300" />,
    iconClassNames: "bg-rose-100 dark:bg-rose-900/20",
  },
  cart: {
    icon: <ShoppingCart className="text-green-700 dark:text-green-400" />,
    iconClassNames: "bg-green-100 dark:bg-green-900/20",
  },
  "credit-card": {
    icon: <CreditCard className="text-blue-600 dark:text-blue-400" />,
    iconClassNames: "bg-blue-100 dark:bg-blue-900/20",
  },

  // Variants from screenshot, using Lucide icons for icon
  keyround: {
    icon: <CreditCard className="text-indigo-600 dark:text-indigo-300" />, // best guess: credit card shape is closest to "keyround"
    iconClassNames: "bg-indigo-100 dark:bg-indigo-900/20",
  },
  bot: {
    icon: <Grid className="text-pink-600 dark:text-pink-400" />, // robot/grid: grid as tech/metaphor for bot/AI
    iconClassNames: "bg-pink-100 dark:bg-pink-900/20",
  },
};

export type CollaborationIconType = keyof typeof icons;

type Props = {
  icon: CollaborationIconType;
};

export default function CollaborationIconBox({ icon }: Props) {
  return (
    <div
      className={cn(
        "collaboration-icon-box size-12 rounded-2xl flex items-center justify-center",
        icons[icon].iconClassNames,
      )}
    >
      {icons[icon].icon}
    </div>
  );
}
