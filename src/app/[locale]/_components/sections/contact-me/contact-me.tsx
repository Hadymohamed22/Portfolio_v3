import ContactInfo from "./_components/contact-info";

export default function ContactMe() {
  return (
    <section className="contact-me-section mt-14 mb-18 md:mt-16 md:mb-20 px-5">
      <div className="container mx-auto shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 p-18 md:p-20 lg:p-24 rounded-[3rem]">
        {/* Title */}
        <h2 className="font-bold text-4xl md:text-5xl w-3/4 md:w-8/12 lg:w-6/12">
          LET{"'"}S BUILD SOMETHING
          <p className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent">
            TOGETHER
          </p>
        </h2>

        {/* Sub Title */}
        <p className="text-base md:text-lg font-inter rtl:font-tajawal w-6/12 md:w-4/12 my-6 md:my-8 text-gray-500 dark:text-gray-400">
          Have a project in mind? Reach out and let{"'"}s discuss how we can
          bring your vision to life.
        </p>

        {/* Contact Info */}
        <ContactInfo />
      </div>
    </section>
  );
}
