import { Locale } from "next-intl";

export function getFormats(locale: Locale) {
  return {
    number: {
      currency: {
        style: "currency",
        currency: locale === "ar" ? "EGP" : "USD",
      },
      percent: {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      },
    },
    dateTime: {
      global: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      short: {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      },
      long: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      time: {
        hour: "2-digit",
        minute: "2-digit",
      },
      full: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      },
      yearOnly: {
        year: "numeric",
      },
    },
  } as const;
}
