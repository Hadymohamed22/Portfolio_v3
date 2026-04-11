type ContactInfo = {
  id: number;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  locale: string;
  availableInCairo: boolean;
};

type CoreStackItem = {
  id: number;
  name: string;
  badgeVariant:
    | "react-default"
    | "next-default"
    | "typescript-default"
    | "node-default"
    | "tailwind-default";
};

type StatisticType = "projects" | "clients" | "exp";

type StatisticItem = {
  id: number;
  type: StatisticType;
  description: string;
  text: string;
};

type PersonalInfo = {
  coreStack: CoreStackItem[];
  statistics: StatisticItem[];
};
