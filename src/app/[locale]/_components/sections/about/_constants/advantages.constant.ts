import { IconsKeysType } from "../_components/advantage-item";

export const advantages: {
  id: string;
  text: string;
  iconName: IconsKeysType;
}[] = [
  {
    id: crypto.randomUUID(),
    text: "BUSINESS THINKING",
    iconName: "trend",
  },
  {
    id: crypto.randomUUID(),
    text: "CLEAN CODE FIRST",
    iconName: "clean-code",
  },
  {
    id: crypto.randomUUID(),
    text: "Fast delivery",
    iconName: "fast",
  },
  {
    id: crypto.randomUUID(),
    text: "Detail-oriented",
    iconName: "search",
  },
];
