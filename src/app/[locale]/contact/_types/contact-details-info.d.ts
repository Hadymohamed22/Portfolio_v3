import { ContactDetailsBoxIconType } from "../_components/contact-details-box";

export type ContactInfo = {
  id: number;
  iconVariant: ContactDetailsBoxIconType;
  info: string;
};

export type ContactInfoDetails = ContactInfo[];
