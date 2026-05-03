import ContactInfoDetails from "./_components/contact-details-info";
import ContactForm from "./_components/contact-form";
import ContactHero from "./_components/contact-hero";

export default function Page() {
  return (
    <main>
      {/* Contact Hero */}
      <ContactHero />

      {/* Contact Info And Contact Form */}
      <section className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-14 md:mb-16">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <ContactInfoDetails />
      </section>
    </main>
  );
}
