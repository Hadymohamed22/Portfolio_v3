import ContactInfoBox from "./contact-info-box";
import Link from "next/link";
import site from "@/data/site.json";

export default function ContactInfo() {
  // Variables
  const contactMeInfo = site["contact"];

  return (
    <div className="contact-info">
      <div className="email-location flex flex-col gap-6 my-6 md:my-8">
        <ContactInfoBox
          iconName="phone"
          infoText={
            <Link href={`tel:${contactMeInfo.phone}`}>
              {contactMeInfo.phone}
            </Link>
          }
          title="Phone"
        />
        <ContactInfoBox
          iconName="mail"
          infoText={
            <Link href={`mailto:${contactMeInfo.email}`}>
              {contactMeInfo.email}
            </Link>
          }
          title="Email"
        />
        <ContactInfoBox
          iconName="location"
          infoText={contactMeInfo.location}
          title="Location"
        />
      </div>
    </div>
  );
}
