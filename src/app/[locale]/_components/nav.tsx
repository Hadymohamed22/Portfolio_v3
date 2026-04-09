"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { createNavLinks } from "../_constants/nav-links.constant";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { useTranslations } from "next-intl";
import { TextAlignCenter, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  // Translation
  const t = useTranslations("layout.nav");

  // Navigation
  const pathname = usePathname();

  // States
  const [menuActive, setMenuActive] = useState(false);

  // Variables
  const navLinks = createNavLinks(t);

  return (
    <>
      {/* Nav in medium & large screens */}
      <nav className="gap-8 items-center hidden md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              "text-p font-normal transition-colors duration-300 hover:text-m-primary hover:pb-1",
              pathname.includes(link.href) &&
                "text-m-primary pb-2 border-b-2 border-m-primary font-bold hover:pb-2",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Nav in small Screens */}
      <div className="nav-small-screens block md:hidden">
        {/* Menu Icon */}
        <div className="menu-icon">
          {menuActive ? (
            <X />
          ) : (
            <TextAlignCenter
              className="duration-300 hover:text-m-primary hover:rotate-12 cursor-pointer"
              onClick={() => setMenuActive(true)}
            />
          )}
        </div>

        {/* Nav */}
        <div
          className={cn(
            "nav-container w-screen h-screen fixed inset-0 bg-m-primary/5 dark:bg-bg/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 transition-opacity duration-200 z-50",
            menuActive
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
          onClick={() => setMenuActive(false)}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "text-p font-semibold pb-1 text-center text-3xl hover:text-m-primary",
                pathname.includes(link.href) &&
                  "text-4xl text-m-primary hover:pb-2",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
