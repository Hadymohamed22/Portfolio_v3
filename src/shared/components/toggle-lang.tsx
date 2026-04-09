"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function ToggleLang() {
  // Translation
  const currentLocale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();

  // Variables
  const locales = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  // This assumes your paths look like /en/... or /fr/..., and you want to replace the locale in the path.
  function changeLocale(locale: string) {
    if (locale === currentLocale) return;

    router.push(
      {
        pathname,
        query: Object.fromEntries(new URLSearchParams(location.search)),
      },
      {
        locale,
      },
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="toggleLang">
          {locales.find((l) => l.code === currentLocale)?.label ||
            currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={currentLocale === "ar" ? "end" : "start"}>
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => changeLocale(locale.code)}
            disabled={locale.code === currentLocale}
            className={locale.code === "ar" ? "font-tajawal" : ""}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
