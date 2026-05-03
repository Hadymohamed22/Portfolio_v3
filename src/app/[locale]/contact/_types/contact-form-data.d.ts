import { contactFormDataSchema } from "./../_schemas/contact-form-data.schema";
import z from "zod";

export type ContactFormData = z.infer<ReturnType<typeof contactFormDataSchema>>;
