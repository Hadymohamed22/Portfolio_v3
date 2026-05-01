import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  num: string;
  className?: string;
};

export default function WorkflowStep({ num, className }: Props) {
  return (
    <div
      className={cn(
        "workflow-step size-8 min-w-8 min-h-8 md:size-10 rounded-full border shrink-0 font-jetbrains-mono! flex items-center justify-center text-xs md:text-sm",
        className,
      )}
    >
      {num.padStart(2, "0")}
    </div>
  );
}
