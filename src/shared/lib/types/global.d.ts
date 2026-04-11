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

type ImageDataType = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type ImageSizesType = "small" | "medium" | "large" | "thumbnail";

type PersonalInfo = {
  coreStack: CoreStackItem[];
  statistics: StatisticItem[];
  myImage: {
    alternativeText: string;
    formats: Record<ImageSizesType, ImageDataType>;
  };
};
