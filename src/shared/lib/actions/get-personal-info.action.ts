import { Locale } from "next-intl";
import "server-only";

type PersonalInfoResult =
  | { ok: true; data: PersonalInfo }
  | { ok: false; message: string };

export default async function getPersonalInfo(
  locale?: Locale,
): Promise<PersonalInfoResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/personal-info?populate=*&locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<PersonalInfo> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
