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
import { getMessages, setRequestLocale } from "next-intl/server";
import ToggleLang from "@/shared/components/toggle-lang";

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
        className="min-h-full flex flex-col font-space-grotesk rtl:font-tajawal bg-slate-50 dark:bg-bg text-bg dark:text-amber-50"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Providers locale={locale} messages={messages}>
          {children}
          <ToggleTheme />
          <div className="flex my-5 mx-auto">
            <ToggleLang />
          </div>
        </Providers>
      </body>
    </html>
  );
}
