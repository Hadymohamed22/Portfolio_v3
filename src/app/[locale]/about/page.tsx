import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations("about");

  return <div className="min-h-screen">{t("title")}</div>;
}
