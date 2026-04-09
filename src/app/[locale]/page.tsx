import { useTranslations } from "next-intl";

export default function Home() {
  // Translations
  const t = useTranslations("home");

  return <div className="min-h-screen">{t("title")}</div>;
}
