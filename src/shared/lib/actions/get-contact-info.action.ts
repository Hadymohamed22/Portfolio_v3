import { Locale } from "next-intl";
import "server-only";

type ContactInfoResult =
  | { ok: true; data: ContactInfo }
  | { ok: false; message: string };

export default async function getContactInfo(
  locale?: Locale,
): Promise<ContactInfoResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/contact-us-section?locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<ContactInfo> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
