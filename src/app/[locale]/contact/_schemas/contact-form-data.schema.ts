import { _Translator } from "next-intl";
import z from "zod";

export const contactFormDataSchema = (t: _Translator) => {
  return z.object({
    name: z.string(t("name-required")).min(2, t("name-min")),
    email: z.email(t("email-valid")).min(1, t("email-required")),
    message: z.string(t("message-required")).min(5, t("message-min")),
  });
};
