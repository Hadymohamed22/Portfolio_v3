import { ContactFormData } from "../_types/contact-form-data";

export const submitToFormspree = async (data: ContactFormData) => {
  const res = await fetch("https://formspree.io/f/mjglgbzo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Submission failed");
  return res.json();
};
