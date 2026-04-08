"use client";
import {
  AbstractIntlMessages,
  Locale,
  NextIntlClientProvider,
} from "next-intl";
import { ThemeProvider } from "./components/theme-provider";

type Props = {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: Locale;
};

export default function Providers({ children, messages, locale }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
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
