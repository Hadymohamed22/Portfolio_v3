import { useTranslations } from "next-intl";
import ContactDetailsBox from "./contact-details-box";

export default function ContactInfoDetails() {
  // Translations
  const t = useTranslations("contact.contact-details-boxs");

  return (
    <div className="contact-info-details flex flex-col gap-4">
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
        content="linkedin.com/in/hadysapry"
        link="https://linkedin.com/in/hady-elnifaly"
      />

      {/* WhatsApp */}
      <ContactDetailsBox
        iconVariant="whatsapp"
        title={t("whatsapp-direct")}
        content="+201200253203"
        link="https://wa.me/+201200253203"
      />
    </div>
  );
}
