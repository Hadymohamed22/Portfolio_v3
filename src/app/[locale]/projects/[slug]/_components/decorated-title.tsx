import { cn } from "@/shared/lib/utils/tailwind-merge";

type Props = {
  title: string;
  className?: string;
};

export default function DecoratedTitle({ title, className }: Props) {
  return (
    <h3
      className={cn(
        "relative before:absolute before:-bottom-4 before:inset-s-0 before:h-1 before:w-16 md:before:w-20 text-3xl md:text-4xl font-bold",
        className,
      )}
    >
      {title}
    </h3>
  );
}
