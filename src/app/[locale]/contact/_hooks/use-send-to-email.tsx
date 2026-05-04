import { useMutation } from "@tanstack/react-query";
import { submitToFormspree } from "../_actions/submit-to-formspree.action";
import { ContactFormData } from "../_types/contact-form-data";

export default function useSendToEmail() {
  // Mutation
  const {
    mutate: sendEmail,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: (data: ContactFormData) => submitToFormspree(data),
  });

  return { sendEmail, isPending, isSuccess, error };
}
