import "server-only";
import { Locale } from "next-intl";
import { Projects } from "../_types/projects";

type ProjectsResult =
  | { ok: true; data: Projects }
  | { ok: false; message: string };

export default async function getProjects(
  locale?: Locale,
): Promise<ProjectsResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/projects?populate=*&locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Projects> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
