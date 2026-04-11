import getContactInfo from "@/shared/lib/actions/get-contact-info.action";
import ContactInfoBox from "./contact-info-box";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export default async function ContactInfo() {
  // Translations
  const locale = await getLocale();

  // Variables
  const contactMeInfo = await getContactInfo(locale);

  return (
    <div className="contact-info">
      <div className="email-location flex flex-col gap-6 my-6 md:my-8">
        {contactMeInfo.ok ? (
          <>
            <ContactInfoBox
              iconName="phone"
              infoText={
                <Link href={`tel:${contactMeInfo.data.phone}`}>
                  {contactMeInfo.data.phone}
                </Link>
              }
              title="Phone"
            />
            <ContactInfoBox
              iconName="mail"
              infoText={
                <Link href={`mailto:${contactMeInfo.data.email}`}>
                  {contactMeInfo.data.email}
                </Link>
              }
              title="Email"
            />
            <ContactInfoBox
              iconName="location"
              infoText={contactMeInfo.data.location}
              title="Location"
            />
          </>
        ) : (
          <>
            <ContactInfoBox
              iconName="phone"
              infoText="+201029379363"
              title="Phone"
            />
            <ContactInfoBox
              iconName="mail"
              infoText="hadysapry60@gmail.com"
              title="Email"
            />
            <ContactInfoBox
              iconName="location"
              infoText="Al Mansoura"
              title="Location"
            />
          </>
        )}
      </div>
    </div>
  );
}
