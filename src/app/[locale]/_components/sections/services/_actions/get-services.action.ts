import "server-only";
import { Locale } from "next-intl";
import { Services } from "../_types/services";

type ServicesResult =
  | { ok: true; data: Services }
  | { ok: false; message: string };

export default async function getServices(
  locale?: Locale,
): Promise<ServicesResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/services?locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Services> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
