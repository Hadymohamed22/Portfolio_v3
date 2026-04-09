import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Providers from "@/shared/providers";
import ToggleTheme from "@/shared/components/toggle-theme";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Tajawal,
} from "next/font/google";
import { Metadata } from "next";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import ToggleLang from "@/shared/components/toggle-lang";
import Logo from "./_components/logo";
import Nav from "./_components/nav";
import DecoratedFooterText from "./_components/decorated-footer-text";
import CurrentDate from "@/shared/components/current-date";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hady Mohamed Portfolio",
  description:
    "Personal portfolio of Hady Mohamed – explore projects, skills, and contact information.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  // Translation
  const t = await getTranslations("layout.footer");

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Variables
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${jetbrainsMono.variable} ${spaceGrotesk.className} ${inter.variable} ${tajawal.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-space-grotesk rtl:font-tajawal bg-slate-50 dark:bg-bg text-bg dark:text-amber-50 relative"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Providers locale={locale} messages={messages}>
          {/* Header */}
          <header className="bg-white dark:bg-[#02061766] border-b border-black/5 dark:border-white/10">
            <div className="container px-5 mx-auto flex justify-between items-center h-20">
              {/* Logo */}
              <Logo />

              {/* Nav Links */}
              <Nav />

              {/* Site Settings */}
              <div className="site-settings flex items-center gap-2">
                <ToggleTheme />
                <ToggleLang />
              </div>
            </div>
          </header>

          {children}

          {/* Footer */}
          <DecoratedFooterText />
          <footer className="bg-white dark:bg-[#02061766] border-t border-black/5 dark:border-white/10">
            <div className="footer-container container mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-2">
              <span>
                <CurrentDate />
                {t("copy-right")}
              </span>
              <span>
                {t("made-with")} <span className="text-red-500">&#10084;</span>{" "}
                {t("and-next")}
              </span>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
