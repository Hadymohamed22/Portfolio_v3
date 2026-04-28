import { Project } from "@/app/[locale]/_components/sections/projects/_types/projects";
import { Locale } from "next-intl";

type ProjectResult =
  | { ok: true; data: Project[] }
  | { ok: false; message: string };

export default async function getProjectBySlug(
  slug: string,
  locale?: Locale,
): Promise<ProjectResult> {
  try {
    console.log(
      `${process.env.API_URL}/api/projects?populate=*&locale=${locale ? locale : "en"}&filters[slug][$eq]=${slug}`,
    );
    const res = await fetch(
      `${process.env.API_URL}/api/projects?populate=*&locale=${locale ? locale : "en"}&filters[slug][$eq]=${slug}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Project[]> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }
    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
