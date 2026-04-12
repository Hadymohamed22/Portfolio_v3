import "server-only";
import { Locale } from "next-intl";
import { Skills } from "../../../app/[locale]/_components/sections/skills/_types/skills";

type SkillsResult = { ok: true; data: Skills } | { ok: false; message: string };

export default async function getSkills(
  locale?: Locale,
  categoryName?: string,
): Promise<SkillsResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/skills?${categoryName ? `filters[skill_category][name][$eq]=${categoryName.replace(/\s/g, "%20")}&` : ""}locale=${locale ? locale : "en"}&populate=*`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Skills> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
