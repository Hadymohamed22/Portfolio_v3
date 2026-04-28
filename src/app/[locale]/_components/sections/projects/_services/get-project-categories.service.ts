import { Locale } from "next-intl";
import { ProjectsCategories } from "../_types/projects";

type ProjectsCategoriesResult =
  | { ok: true; data: ProjectsCategories }
  | { ok: false; message: string };

export default async function getProjectCategories(
  locale?: Locale,
): Promise<ProjectsCategoriesResult> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories?locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<ProjectsCategories> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
