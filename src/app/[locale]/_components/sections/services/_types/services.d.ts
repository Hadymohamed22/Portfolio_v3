import { serviceIconType } from "../_components/service-box";

export type Service = {
  id: number;
  iconName: serviceIconType;
  serviceName: string;
  description: string;
  locale?: string;
};

type Services = Service[];
