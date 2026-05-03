import "server-only";
import { Locale } from "next-intl";
import { ContactInfoDetails } from "../_types/contact-details-info";

type ContactInfoDetailsResult =
  | { ok: true; data: ContactInfoDetails }
  | { ok: false; message: string };

export default async function getContactInfoDetails(
  locale?: Locale,
): Promise<ContactInfoDetailsResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/contact-info-details?locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<ContactInfoDetails> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
