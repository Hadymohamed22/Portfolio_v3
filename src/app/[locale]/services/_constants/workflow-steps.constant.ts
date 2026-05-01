import { _Translator } from "next-intl";

export const workflowSteps: (t: _Translator) => {
  id: string;
  title: string;
  desc: string;
  className: string;
}[] = (t: _Translator) => {
  return [
    {
      id: crypto.randomUUID(),
      title: t("discovery-and-strategy"),
      desc: t("discovery-desc"),
      className:
        "text-[#6b68a1] dark:text-[#A8A4FF] border-[#6b68a1] dark:border-[#A8A4FF]",
    },
    {
      id: crypto.randomUUID(),
      title: t("editorial-ui-design"),
      desc: t("ui-desc"),
      className:
        "text-[#017087] dark:text-[#00D2FD] border-[#017087] dark:border-[#00D2FD]",
    },
    {
      id: crypto.randomUUID(),
      title: t("architecture-and-deployment"),
      desc: t("architecture-desc"),
      className:
        "text-[#884869] dark:text-[#FF9DD0] border-[#884869] dark:border-[#FF9DD0]",
    },
  ];
};
