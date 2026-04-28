import "server-only";

type AvailabilityResult =
  | { ok: true; data: Availability }
  | { ok: false; message: string };

export default async function getAvailability(): Promise<AvailabilityResult> {
  try {
    const res = await fetch(`${process.env.API_URL}/api/availability`);

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<Availability> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Not Available Now" };
  }
}
