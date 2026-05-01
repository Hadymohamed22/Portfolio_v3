import "server-only";
import { Locale } from "next-intl";
import { AllServices } from "../_types/all-services";

type AllServicesResult =
  | { ok: true; data: AllServices }
  | { ok: false; message: string };

export default async function getAllServices(
  locale?: Locale,
): Promise<AllServicesResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/all-services?populate=*&locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<AllServices> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
