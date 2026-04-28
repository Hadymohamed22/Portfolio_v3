import "server-only";
import { Locale } from "next-intl";

type PostsResult = { ok: true; data: Posts } | { ok: false; message: string };

export default async function getPosts(locale?: Locale): Promise<PostsResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/blogs?populate=*&locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Posts> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
