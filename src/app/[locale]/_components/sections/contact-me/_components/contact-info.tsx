import ContactInfoBox from "./contact-info-box";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="email-location flex flex-col gap-6 my-6 md:my-8">
        <ContactInfoBox
          iconName="phone"
          infoText="+201029379363"
          title="Phone"
        />
      </div>
    </div>
  );
}
