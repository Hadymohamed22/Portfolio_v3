"use client";
import {
  AbstractIntlMessages,
  Locale,
  NextIntlClientProvider,
} from "next-intl";
import { ThemeProvider } from "./components/theme-provider";
import { getFormats } from "@/i18n/formats";

type Props = {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: Locale;
};

export default function Providers({ children, messages, locale }: Props) {
  // Variables
  const formats = getFormats(locale);
  const timeZone = "Africa/Cairo";

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      formats={formats}
      timeZone={timeZone}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
