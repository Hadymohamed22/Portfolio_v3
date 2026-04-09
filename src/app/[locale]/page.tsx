import { useTranslations } from "next-intl";

export default function Home() {
  // Translations
  const t = useTranslations("home");

  return <>{t("title")}</>;
}
