import { Link } from "@/i18n/navigation";
import getContactInfo from "@/shared/lib/actions/get-contact-info.action";
import { Button } from "@/shared/ui/button";
import { MessageCircleCode } from "lucide-react";

type Props = {
  talkText: string;
};

export default async function CTA({ talkText }: Props) {
  // Variables
  const contactInfo = await getContactInfo();

  return (
    <Button className="font-inter rtl:font-tajawal animate-pulse mt-8">
      <Link
        href={`https://wa.me/${contactInfo.ok ? contactInfo.data.phone : "+201029379363"}`}
        className="flex items-center gap-2"
      >
        <MessageCircleCode />
        {talkText}
      </Link>
    </Button>
  );
}
