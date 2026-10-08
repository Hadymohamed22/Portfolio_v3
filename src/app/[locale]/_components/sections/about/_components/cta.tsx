import { Link } from "@/i18n/navigation";
import site from "@/data/site.json";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { Button } from "@/shared/ui/button";
import { MessageCircleCode } from "lucide-react";

type Props = {
  talkText: string;
  className?: string;
};

export default async function CTA({ talkText, className }: Props) {
  // Variables
  const contactMeInfo = site["contact"];

  return (
    <Button
      className={cn(
        "font-inter rtl:font-tajawal animate-pulse mt-8",
        className,
      )}
      asChild
    >
      <Link
        href={`https://wa.me/${contactMeInfo.phone}`}
        className="flex items-center gap-2"
      >
        <MessageCircleCode />
        {talkText}
      </Link>
    </Button>
  );
}
