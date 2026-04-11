import getPersonalInfo from "@/shared/lib/actions/get-personal-info.action";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default async function MyImage() {
  // Variables
  const personalInfo = await getPersonalInfo();
  const data = personalInfo.ok
    ? {
        src: personalInfo.data.myImage.formats.large.url,
        alt: personalInfo.data.myImage.alternativeText,
      }
    : {
        src: "/assets/images/default-profile-image.jpeg",
        alt: "Hady Mohamed Image",
      };

  return (
    <div className="image-container w-96 h-130 mx-auto md:w-110 md:h-145 lg:w-full lg:h-170 relative rounded-2xl shadow before:absolute before:size-full before:-bottom-2 before:-inset-e-2 md:before:-bottom-4 md:before:-inset-e-4 before:border-2 before:border-m-primary/55 dark:before:border-m-secondary/55 before:rounded-2xl">
      {/* Image */}
      <Image
        src={data.src}
        alt={data.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-2xl"
      />

      {/* Animated Icon */}
      <div className="animated-icon absolute shadow-md -top-4 inset-s-2 rounded-lg w-12 h-14 bg-white/1 backdrop-blur-md animate-bounce text-cyan-500 dark:text-purple-300 duration-1000 flex items-center justify-center">
        <ShieldCheck size={28} />
      </div>
    </div>
  );
}
