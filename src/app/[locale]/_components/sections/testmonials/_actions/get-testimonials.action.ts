import "server-only";
import { Locale } from "next-intl";

type TestimonialsResult =
  | { ok: true; data: Testimonials }
  | { ok: false; message: string };

export default async function getTestimonials(
  locale?: Locale,
): Promise<TestimonialsResult> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/testimonial?populate[testimonialItem][populate][customerProfileImage][fields][0]=url&locale=${locale ? locale : "en"}`,
    );

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Testimonials> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
