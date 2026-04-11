import { _Translator } from "next-intl";
import { IconsKeysType } from "../_components/advantage-item";

export const advantages: (t: _Translator) => {
  id: string;
  text: string;
  iconName: IconsKeysType;
}[] = (t) => [
  {
    id: crypto.randomUUID(),
    text: t("business"),
    iconName: "trend",
  },
  {
    id: crypto.randomUUID(),
    text: t("clean-code"),
    iconName: "clean-code",
  },
  {
    id: crypto.randomUUID(),
    text: t("fast"),
    iconName: "fast",
  },
  {
    id: crypto.randomUUID(),
    text: t("details"),
    iconName: "search",
  },
];
