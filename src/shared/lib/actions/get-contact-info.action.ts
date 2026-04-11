import "server-only";

type ContactInfoResult =
  | { ok: true; data: ContactInfo }
  | { ok: false; message: string };

export default async function getContactInfo(): Promise<ContactInfoResult> {
  try {
    const res = await fetch(`${process.env.API_URL}/api/contact-us-section`);

    if (!res.ok) {
      return { ok: false, message: `Request failed (${res.status})` };
    }

    const payload: APIResponse<ContactInfo> = await res.json();

    if ("error" in payload) {
      return { ok: false, message: payload.error?.message ?? "Request failed" };
    }

    return { ok: true, data: payload.data };
  } catch (e) {
    console.error((e as Error).message);
    return { ok: false, message: "Error to fetch Data" };
  }
}
