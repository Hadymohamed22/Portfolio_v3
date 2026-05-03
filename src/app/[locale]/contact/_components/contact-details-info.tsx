import getContactInfoDetails from "../_actions/get-contact-info-details.action";
import ContactDetailsBox from "./contact-details-box";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ContactInfoDetails() {
  // Translations
  const t = await getTranslations("contact.contact-details-boxs");
  const locale = await getLocale();

  // Variables
  const contactInfo = await getContactInfoDetails(locale);
  const INITIAL_DATA = (
    <>
      {/* Email */}
      <ContactDetailsBox
        iconVariant="mail"
        title={t("email")}
        content="hadysapry60@gmail.com"
        link="mailto:hadysapry60@gmail.com"
      />

      {/* LinkedIn */}
      <ContactDetailsBox
        iconVariant="linkedin"
        title={t("linkedin-profile")}
        content="linkedin.com/in/hady-elnifaly"
        link="https://linkedin.com/in/hady-elnifaly"
      />

      {/* WhatsApp */}
      <ContactDetailsBox
        iconVariant="whatsapp"
        title={t("whatsapp-direct")}
        content="+201200253203"
        link="https://wa.me/+201200253203"
      />
    </>
  );

  return (
    <div className="contact-info-details flex flex-col gap-4">
      {contactInfo.ok
        ? contactInfo.data.map((ci) => (
            <ContactDetailsBox
              key={ci.id}
              iconVariant={ci.iconVariant}
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
        : INITIAL_DATA}
    </div>
  );
}
