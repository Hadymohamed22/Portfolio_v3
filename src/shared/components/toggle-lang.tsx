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
    // // For locale-prefixed routes: replace the first segment with the new locale
    // const segments = pathname.split('/');
    // segments[1] = locale; // ['','en','foo'] -> ['','fr','foo']
    // const newPath = segments.join('/') || '/';

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
        <Button variant="outline">
          {locales.find((l) => l.code === currentLocale)?.label ||
            currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => changeLocale(locale.code)}
            disabled={locale.code === currentLocale}
          >
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
