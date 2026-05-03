import { Link } from "@/i18n/navigation";
import { Mail, MessageCircleMore, Share2 } from "lucide-react";

const icons = {
  mail: (
    <div className="icon min-w-12 min-h-12 size-12 md:size-14 rounded-lg flex items-center justify-center bg-blue-50 dark:bg-blue-900/10">
      <Mail className="text-blue-500 dark:text-blue-300" />
    </div>
  ),
  linkedin: (
    <div className="icon min-w-12 min-h-12 size-12 md:size-14 rounded-lg flex items-center justify-center bg-cyan-50 dark:bg-cyan-900/10">
      <Share2 className="text-cyan-600 dark:text-cyan-300" />
    </div>
  ),
  whatsapp: (
    <div className="icon min-w-12 min-h-12 size-12 md:size-14 rounded-lg flex items-center justify-center bg-green-50 dark:bg-green-900/10">
      <MessageCircleMore className="text-green-600 dark:text-green-300" />
    </div>
  ),
};

export type ContactDetailsBoxIconType = keyof typeof icons;

type Props = {
  iconVariant: ContactDetailsBoxIconType;
  link: string;
  title: string;
  content: string;
};

export default function ContactDetailsBox({
  iconVariant,
  title,
  content,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className="contact-details-box p-4 md:p-6 gap-6 shadow-lg bg-white dark:bg-white/3 dark:hover:bg-white/5 border border-transparent dark:border-white/10 rounded-xl flex items-center duration-500 hover:scale-102"
      target="_blank"
    >
      {/* Icon */}
      {icons[iconVariant]}

      {/* Content */}
      <div className="content">
        {/* Title */}
        <p className="text-gray-300 dark:text-gray-600 text-[8px] md:text-[10px] font-jetbrains-mono rtl:font-tajawal tracking-widest">
          {title}
        </p>

        {/* Text */}
        <p className=" text-lg md:text-xl font-bold">{content}</p>
      </div>
    </Link>
  );
}
