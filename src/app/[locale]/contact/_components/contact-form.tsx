import { Button } from "@/shared/ui/button";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  // Translations
  const t = useTranslations("contact.contact-form");

  return (
    <form className="p-10 pb-14 md:p-12 md:pb-16 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-xl flex flex-col gap-8">
      {/* Name And Email */}
      <div className="nam-email flex flex-col md:flex-row gap-8 md:items-center">
        {/* Name Input */}
        <Field>
          <FieldLabel
            htmlFor="Name"
            className="capitalize font-jetbrains-mono rtl:font-tajawal"
          >
            {t("full-name")}
          </FieldLabel>
          <Input
            type="text"
            placeholder={t("full-name-placeholder")}
            id="Name"
          />
        </Field>

        {/* Email Input */}
        <Field>
          <FieldLabel
            htmlFor="Email"
            className="capitalize font-jetbrains-mono rtl:font-tajawal"
          >
            {t("email-address")}
          </FieldLabel>
          <Input type="email" placeholder="hadysapry60@gmail.com" id="Email" />
        </Field>
      </div>

      {/* Textarea Input */}
      <Field>
        <FieldLabel
          htmlFor="Message"
          className="capitalize font-jetbrains-mono rtl:font-tajawal"
        >
          {t("message")}
        </FieldLabel>
        <Textarea
          placeholder={t("message-placeholder")}
          id="Message"
          className="min-h-44 resize-none"
        />
      </Field>

      {/* Send Button */}
      <Button type="submit" className="w-fit px-10! md:px-14! cursor-pointer">
        {t("send-now")}
      </Button>
    </form>
  );
}
