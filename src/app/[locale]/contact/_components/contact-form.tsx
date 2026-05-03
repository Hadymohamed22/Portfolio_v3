import { Button } from "@/shared/ui/button";
import { Field, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

export default function ContactForm() {
  return (
    <form className="p-10 pb-14 md:p-12 md:pb-16 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-xl flex flex-col gap-8">
      {/* Name And Email */}
      <div className="nam-email flex flex-col md:flex-row gap-8 md:items-center">
        {/* Name Input */}
        <Field>
          <FieldLabel htmlFor="Name" className="capitalize">
            Full Name
          </FieldLabel>
          <Input type="text" placeholder="Hady Mohamed" id="Name" />
        </Field>

        {/* Email Input */}
        <Field>
          <FieldLabel htmlFor="Email" className="capitalize">
            EMAIL ADDRESS
          </FieldLabel>
          <Input type="email" placeholder="hadysapry60@gmail.com" id="Email" />
        </Field>
      </div>

      {/* Textarea Input */}
      <Field>
        <FieldLabel htmlFor="Message" className="capitalize">
          MESSAGE
        </FieldLabel>
        <Textarea
          placeholder="Tell me about your project vision..."
          id="Message"
          className="min-h-44"
        />
      </Field>

      {/* Send Button */}
      <Button type="submit">Send Now</Button>
    </form>
  );
}
