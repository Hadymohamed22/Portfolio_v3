import ContactDetailsBox from "./contact-details-box";

export default function ContactInfoDetails() {
  return (
    <div className="contact-info-details flex flex-col gap-4">
      {/* Email */}
      <ContactDetailsBox
        iconVariant="mail"
        title="EMAIL ADDRESS"
        content="hadysapry60@gmail.com"
        link="mailto:hadysapry60@gmail.com"
      />

      {/* LinkedIn */}
      <ContactDetailsBox
        iconVariant="linkedin"
        title="LINKEDIN PROFILE"
        content="linkedin.com/in/hadysapry"
        link="https://linkedin.com/in/hady-elnifaly"
      />

      {/* WhatsApp */}
      <ContactDetailsBox
        iconVariant="whatsapp"
        title="WHATSAPP DIRECT"
        content="+201200253203"
        link="https://wa.me/+201200253203"
      />
    </div>
  );
}
