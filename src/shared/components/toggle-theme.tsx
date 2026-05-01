"use client";

import { useTheme } from "next-themes";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ToggleTheme() {
  // Translation
  const t = useTranslations("shared.toggle-theme");

  // Theme
  const { setTheme, theme } = useTheme();

  // Theme options
  const themes = [
    { key: "light", label: t("light") },
    { key: "dark", label: t("dark") },
    { key: "system", label: t("system") },
  ];

  // Handler
  function changeTheme(next: string) {
    if (next === theme) return;
    setTheme(next);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="toggleTheme" size="icon">
          <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">{t("text")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} collisionPadding={8}>
        {themes.map((th) => (
          <DropdownMenuItem
            key={th.key}
            onClick={() => changeTheme(th.key)}
            disabled={theme === th.key}
          >
            {th.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
