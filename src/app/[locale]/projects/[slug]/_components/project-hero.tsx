import { Link } from "@/i18n/navigation";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Eye, GitBranch } from "lucide-react";
import Image from "next/image";

export default function ProjectHero({}) {
  return (
    <section
      className="
        project-hero-section relative overflow-hidden
        before:absolute before:-top-15 before:-left-15 before:size-55 before:rounded-full 
        before:bg-m-primary before:blur-[70px] before:opacity-80 before:z-0 before:pointer-events-none
        after:absolute after:-bottom-20 after:-right-12.5 after:size-50 after:rounded-full
        after:bg-m-secondary after:blur-[80px] after:opacity-80 after:z-0 after:pointer-events-none
        lg:before:hidden lg:after:hidden
      "
    >
      <div className="container mx-auto px-5 flex flex-col justify-center min-h-[65vh] my-14 md:my-16 relative">
        {/* Text */}
        <div className="text relative z-10">
          {/* Case Study Badge */}
          <Badge variant="case-study" className="mb-1">
            Case Study
          </Badge>

          {/* Title */}
          <h2
            className="
            font-extrabold
            text-[3.3rem] 
            md:text-[4.1rem] 
            leading-[1.08]
            tracking-tight
            text-m-primary
            dark:text-[#fafaff]
            text-shadow-lg
            dark:[text-shadow:0_2px_10px_#A8A4FF77,0_0_18px_#a8a4ff44]
            select-none
            outline-none
            whitespace-pre-line
          "
          >
            Education Landing Page
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 mt-6 max-w-3/4 md:max-w-1/2 leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            tempore, sit excepturi voluptatem exercitationem culpa dolores nobis
            provident quidem quod, nostrum non voluptates minus laborum
            officiis! Deleniti esse dicta a?
          </p>

          {/* User Actions : Preview & Repo Buttons */}
          <div className="user-actions flex items-center gap-3 mt-12">
            {/* Preview */}
            <Button className="font-bold" asChild>
              <Link href="">
                <Eye />
                <span>Preview Live</span>
              </Link>
            </Button>

            {/* Repo */}
            <Button variant="outline" asChild>
              <Link href="">
                <GitBranch />
                Github Repo
              </Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block image absolute inset-e-20 top-1/2 -translate-y-1/2 lg:w-130 lg:h-100 p-2 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-lg rotate-6 overflow-hidden shadow-[0_8px_40px_0_rgba(90,104,242,0.15)] dark:shadow-[0_10px_50px_0_rgba(168,164,255,0.15)]">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt=""
            fill
            className="relative! rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
