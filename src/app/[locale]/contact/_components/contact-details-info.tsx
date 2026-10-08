import { useTranslations } from "next-intl";
import ContactDetailsBox from "./contact-details-box";
import site from "@/data/site.json";

export default function ContactInfoDetails() {
  // Translations
  const t = useTranslations("contact.contact-details-boxs");

  // Variables
  const contactMeInfo = [
    ...(site.contact?.email
      ? [{ id: "email", iconVariant: "mail", info: site.contact.email }]
      : []),
    ...(site.contact?.linkedin
      ? [
          {
            id: "linkedin",
            iconVariant: "linkedin",
            info: site.contact.linkedin.replace(/^https?:\/\//, ""),
          },
        ]
      : []),
    ...(site.contact?.whatsapp
      ? [
          {
            id: "whatsapp",
            iconVariant: "whatsapp",
            info: site.contact.whatsapp
              .replace(/^https?:\/\/wa\.me\//i, "")
              .replace(/[^+\d]/g, ""),
          },
        ]
      : []),
  ];

  return (
    <div className="contact-info-details flex flex-col gap-4">
      {contactMeInfo.length > 0
        ? contactMeInfo.map((ci) => (
            <ContactDetailsBox
              key={ci.id}
              iconVariant={ci.iconVariant as "mail" | "linkedin" | "whatsapp"}
              title={t(
                ci.iconVariant === "mail"
                  ? "email"
                  : ci.iconVariant === "linkedin"
                    ? "linkedin-profile"
                    : "whatsapp-direct",
              )}
              content={ci.info}
              link={
                ci.iconVariant === "mail"
                  ? `mailto:${ci.info}`
                  : ci.iconVariant === "linkedin"
                    ? `https://${ci.info}`
                    : `https://wa.me/${ci.info.replace(/[^+\d]/g, "")}`
              }
            />
          ))
        : null}
    </div>
  );
}
