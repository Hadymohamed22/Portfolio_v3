import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Logo() {
  // Translation
  const t = useTranslations("layout.logo");

  return (
    <Link href="/">
      <h1 className="uppercase text-xl md:text-2xl font-bold">{t("name")}</h1>
    </Link>
  );
}
