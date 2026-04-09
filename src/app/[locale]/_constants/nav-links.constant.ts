import { _Translator } from "next-intl";

export const createNavLinks: (t: _Translator) => NavLink[] = (
  t: _Translator,
) => {
  return [
    {
      id: crypto.randomUUID(),
      label: t("work"),
      href: "/projects",
    },
    {
      id: crypto.randomUUID(),
      label: t("about"),
      href: "/about",
    },
    {
      id: crypto.randomUUID(),
      label: t("services"),
      href: "/services",
    },
    {
      id: crypto.randomUUID(),
      label: t("blog"),
      href: "/blog",
    },
    {
      id: crypto.randomUUID(),
      label: t("contact"),
      href: "/contact",
    },
  ];
};
