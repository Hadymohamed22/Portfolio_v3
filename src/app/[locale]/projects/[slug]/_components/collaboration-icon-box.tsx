import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  icon: React.ReactNode;
  className?: string;
};

export default function CollaborationIconBox({ icon, className }: Props) {
  return (
    <div
      className={cn(
        "collaboration-icon-box size-12 rounded-2xl flex items-center justify-center",
        className,
      )}
    >
      {icon}
    </div>
  );
}
