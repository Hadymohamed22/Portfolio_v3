import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations("about");

  return <div>{t("title")}</div>;
}
