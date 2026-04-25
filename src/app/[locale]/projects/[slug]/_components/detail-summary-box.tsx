import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  percentage: number | string;
  text: string;
  className?: string;
};

export default function DetailSummaryBox({
  percentage,
  text,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "detail-summary-box p-4 bg-gray-400/25 dark:bg-white/5 rounded-2xl grow",
        className,
      )}
    >
      {/* Percentage */}
      <p className="font-bold text-2xl md:text-3xl font-inter rtl:font-tajawal">
        {percentage}%
      </p>

      {/* Paragraph */}
      <p className="text-xs md:text-sm font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 mt-1">
        {text}
      </p>
    </div>
  );
}
