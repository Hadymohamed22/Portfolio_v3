import { Link } from "@/i18n/navigation";
import getContactInfo from "@/shared/lib/actions/get-contact-info.action";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {
  projectsText: string;
  talkText: string;
};

export default async function HeroActions({ talkText, projectsText }: Props) {
  // Variables
  const contactInfo = await getContactInfo();

  return (
    <div className="mt-10 md:mt-12 flex gap-4 items-center">
      {/* See My Work Button */}
      <Button className="font-inter rtl:font-tajawal" asChild>
        <Link href="/projects">
          <span>{projectsText}</span>
          <ArrowRight className="rtl:rotate-180" />
        </Link>
      </Button>

      {/* Let's Talk Button */}
      <Button
        className="font-inter rtl:font-tajawal animate-pulse"
        variant={"outline"}
      >
        <Link
          href={`https://wa.me/${contactInfo.ok ? contactInfo.data.phone : "+201029379363"}`}
        >
          {talkText}
        </Link>
      </Button>
    </div>
  );
}
