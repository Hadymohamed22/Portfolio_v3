"use client";
import { Button } from "@/shared/ui/button";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormData } from "../_types/contact-form-data";
import ErrorMessage from "@/shared/components/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormDataSchema } from "../_schemas/contact-form-data.schema";
import useSendToEmail from "../_hooks/use-send-to-email";
import { Shell } from "lucide-react";
import { cn } from "@/shared/lib/utils/tailwind-merge";
import { useEffect, useState } from "react";

export default function ContactForm() {
  // Translations
  const t = useTranslations("contact.contact-form");

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormDataSchema(t)),
    mode: "onTouched",
  });

  // Mutation
  const { sendEmail, isPending, error } = useSendToEmail();

  // Local state to control showing success box
  const [showSuccessBox, setShowSuccessBox] = useState(false);

  // Timer ID state; only stored here for cleanup, not for logical flow
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // Clean up timer on unmount or when timer is reset
  useEffect(() => {
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timerId]);

  // Handler
  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    sendEmail(data, {
      onSuccess: () => {
        reset();
        setShowSuccessBox(true);
        // Set timeout for hiding
        const id = setTimeout(() => {
          setShowSuccessBox(false);
        }, 4000);
        setTimerId(id);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 pb-14 md:p-12 md:pb-16 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-xl flex flex-col gap-8"
    >
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
            {...register("name")}
          />
          {/* Name Error if found */}
          {errors.name && errors.name.message && (
            <ErrorMessage message={errors.name.message} />
          )}
        </Field>

        {/* Email Input */}
        <Field>
          <FieldLabel
            htmlFor="Email"
            className="capitalize font-jetbrains-mono rtl:font-tajawal"
          >
            {t("email-address")}
          </FieldLabel>
          <Input
            type="email"
            placeholder="hadysapry60@gmail.com"
            id="Email"
            {...register("email")}
          />
          {/* Email Error if found */}
          {errors.email && errors.email.message && (
            <ErrorMessage message={errors.email.message} />
          )}
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
          {...register("message")}
        />
        {/* Message Error if found */}
        {errors.message && errors.message.message && (
          <ErrorMessage message={errors.message.message} />
        )}
      </Field>

      {/* Backend Error */}
      {error && (
        <div
          className="
            bg-red-100
            text-red-700
            border-l-4
            border-red-500
            px-4
            py-3
            my-4
            rounded
            font-jetbrains-mono rtl:font-tajawal
            text-sm
            dark:bg-red-900
            dark:text-red-200
            dark:border-red-700
          "
          role="alert"
        >
          {error.message || "An unexpected error occurred. Please try again."}
        </div>
      )}

      {/* Success Message */}
      {showSuccessBox && (
        <div
          className="
            bg-green-100
            text-green-800
            border-l-4
            border-green-500
            px-4
            py-3
            my-2
            rounded
            font-jetbrains-mono rtl:font-tajawal
            text-sm
            transition-colors
            dark:bg-green-950
            dark:text-green-200
            dark:border-green-600
          "
          role="status"
        >
          {t("success-message") ||
            "Thank you! Your message has been sent successfully."}
        </div>
      )}

      {/* Send Button */}
      <Button
        type="submit"
        className={cn(
          "w-fit px-10! md:px-14! cursor-pointer",
          isPending && "animate-pulse",
        )}
        disabled={isPending}
      >
        {isPending && <Shell className="animate-spin" />}
        <span>{t("send-now")}</span>
      </Button>
    </form>
  );
}
