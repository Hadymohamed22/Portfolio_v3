"use client";

import { useFormatter } from "next-intl";

// I make this component to get current year even if project is build
export default function CurrentDate() {
  // Translation
  const formate = useFormatter();

  return <> &copy;{formate.dateTime(new Date(), "yearOnly")} </>;
}
