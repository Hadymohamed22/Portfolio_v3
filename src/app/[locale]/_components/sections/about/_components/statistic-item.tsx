import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  text: string;
  num: string | number;
  type: "projects" | "clients" | "exp";
  isEnd?: boolean;
};

export default function StatisticItem({ text, num, type, isEnd }: Props) {
  return (
    <div
      className={cn(
        "statistic-item grow ps-8",
        !isEnd && "border-e-2 border-gray-200 dark:border-gray-200/25",
      )}
    >
      {/* Num */}
      <p
        className={cn(
          "font-bold text-3xl md:text-4xl",
          type === "projects"
            ? "text-m-secondary"
            : type === "clients"
              ? "text-m-primary"
              : "text-m-thirdly",
        )}
      >
        {num}
      </p>

      {/* Text */}
      <p className="font-inter rtl:font-tajawal text-[0.625rem] md:text-xs mt-2 text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </div>
  );
}
