import { Link } from "@/i18n/navigation";
import { Button } from "@/shared/ui/button";

export default function ContactMeNow() {
  return (
    <section className="my-10 py-14 md:py-16 flex items-center">
      <div className="container mx-auto px-5 gap-8">
        {/* Text */}
        <div className="text text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-jetbrains-mono rtl:font-tajawal uppercase md:w-3/4 lg:max-w-1/2 mx-auto">
            Would you like to build something similar?
          </h2>

          <p className="text-xs md:text-sm font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 mt-2">
            I am currently available for new projects and creative
            collaborations.
          </p>
        </div>

        {/* User Actions */}
        <div className="user-actions flex flex-col md:flex-row justify-center items-center gap-3 mt-8">
          {/* Preview */}
          <Button
            className="font-bold rounded-full animate-pulse w-full md:w-auto"
            asChild
          >
            <Link href="">{"Let's Talk"}</Link>
          </Button>

          {/* Repo */}
          <Button
            variant="outline"
            className="rounded-full w-full md:w-auto"
            asChild
          >
            <Link href="">Watch Another Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
