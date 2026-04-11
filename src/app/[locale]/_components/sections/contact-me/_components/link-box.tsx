import { cn } from "@/shared/lib/utils/tailwind-merge";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  href: string;
  className?: string;
};

export default function LinkBox({ href, icon, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "link-box flex items-center justify-center rounded-full size-10",
        className,
      )}
      target="_blank"
    >
      {icon}
    </Link>
  );
}
