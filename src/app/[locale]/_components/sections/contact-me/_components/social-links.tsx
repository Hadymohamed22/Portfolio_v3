import getContactInfo from "@/shared/lib/actions/get-contact-info.action";
import LinkBox from "./link-box";
import { GitCompare, MessageCircleMore } from "lucide-react";

export default async function SocialLinks() {
  // Variables
  const contactMeInfo = await getContactInfo();

  return (
    <div className="social-links flex items-center gap-4 mt-10">
      {contactMeInfo.ok ? (
        <>
          {/* Github */}
          <LinkBox
            href={contactMeInfo.data.github}
            icon={<GitCompare />}
            className="bg-gray-950/90 hover:bg-gray-800 text-white border border-gray-800 shadow-[0_2px_18px_0_rgba(36,37,46,0.13)] transition-all duration-200"
          />

          {/* Linkedin */}
          <LinkBox
            href={contactMeInfo.data.linkedin}
            icon={<p className="font-bold text-white">in</p>}
            className="bg-[#0A66C2] hover:bg-[#084e94] text-white border border-[#0A66C2]/80 shadow-[0_2px_18px_0_rgba(10,102,194,0.10)] transition-all duration-200"
          />

          {/* Whatsapp */}
          <LinkBox
            href={contactMeInfo.data.whatsapp}
            icon={<MessageCircleMore />}
            className="bg-[#25D366] hover:bg-[#1DA851] text-white border border-[#25D366]/80 shadow-[0_2px_18px_0_rgba(37,211,102,0.12)] transition-all duration-200"
          />
        </>
      ) : (
        <>
          <LinkBox
            href="https://github.com/Hadymohamed22"
            icon={<GitCompare />}
            className="bg-gray-950/90 hover:bg-gray-800 text-white border border-gray-800 shadow-[0_2px_18px_0_rgba(36,37,46,0.13)] transition-all duration-200"
          />
        </>
      )}
    </div>
  );
}
