import getContactInfo from "@/shared/lib/actions/get-contact-info.action";
import ContactInfo from "./_components/contact-info";
import { Badge } from "@/shared/ui/badge";
import { getTranslations } from "next-intl/server";
import SocialLinks from "./_components/social-links";
import { Suspense } from "react";
import ContactInfoSkeleton from "./_skeleton/contact-info.skeleton";
import SocialLinksSkeleton from "./_skeleton/social-links.skeleton";

export default async function ContactMe() {
  // Translation
  const t = await getTranslations("home.contact-me");

  // Variables
  const contactMeInfo = await getContactInfo();

  return (
    <section
    id="contact-me"
      className={`
        contact-me-section relative
        mt-14 mb-18 md:mt-16 md:mb-20 px-5
        before:absolute
        before:-z-10
        before:size-80
        before:rounded-full
        before:bg-linear-to-br before:from-m-primary/30 before:to-m-secondary/20
        before:top-20 before:inset-s-20
        `}
    >
      <div className="container mx-auto shadow-sm bg-white/70 dark:bg-white/3 border border-zinc-200 dark:border-white/5 p-18 md:p-20 lg:p-24 rounded-[3rem] backdrop-blur-lg">
        {/* Available In Cairo */}
        {contactMeInfo.ok && contactMeInfo.data.availableInCairo && (
          <Badge variant={"full-time"} className="mb-4">
            {t("available-in-cairo")}
          </Badge>
        )}

        {/* Title */}
        <h2 className="font-bold text-4xl md:text-5xl w-3/4 md:w-8/12 lg:w-6/12">
          {t.rich("title", {
            p: (chunks) => (
              <p className="bg-linear-to-r from-m-primary to-m-secondary rtl:from-m-secondary rtl:to-m-primary bg-clip-text text-transparent rtl:inline">
                {chunks}
              </p>
            ),
          })}
        </h2>

        {/* Sub Title */}
        <p className="text-base md:text-lg font-inter rtl:font-tajawal w-11/12 md:w-4/12 my-6 md:my-8 text-gray-500 dark:text-gray-400">
          {t("sub-title")}
        </p>

        {/* Contact Info */}
        <Suspense fallback={<ContactInfoSkeleton />}>
          <ContactInfo />
        </Suspense>

        {/* Social Links */}
        <Suspense fallback={<SocialLinksSkeleton />}>
          <SocialLinks />
        </Suspense>
      </div>
    </section>
  );
}
