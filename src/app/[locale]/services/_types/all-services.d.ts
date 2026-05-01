import { ServicesInfoBoxsIconType } from "../_components/service-info-box";

export type ServiceFeature = {
  id: number;
  text: string;
};

export type AllService = {
  id: number;
  iconVariant: ServicesInfoBoxsIconType;
  title: string;
  description: string;
  features: ServiceFeature[];
};

export type AllServices = AllService[];
