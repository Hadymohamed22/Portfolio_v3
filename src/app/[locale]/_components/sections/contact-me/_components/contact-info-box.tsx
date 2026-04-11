// Variables

import { Mail, MapPin, PhoneCall } from "lucide-react";

// i use it here to can extract typeof keys of icons
const icons = {
  phone: <PhoneCall className="text-m-secondary dark:text-m-primary" />,
  mail: <Mail className="text-m-secondary dark:text-m-primary" />,
  location: <MapPin className="text-m-secondary dark:text-m-primary" />,
} satisfies Record<string, React.ReactNode>;

type Props = {
  iconName: keyof typeof icons;
  title: string;
  infoText: string;
};

export default function ContactInfoBox({ iconName, title, infoText }: Props) {
  return (
    <div className="contact-info-box flex items-center gap-6">
      {/* Icon */}
      <div className="icon-container shadow-sm shadow-black dark:shadow-m-primary/55 size-12 rounded-full bg-white/3 flex items-center justify-center">
        {icons[iconName]}
      </div>

      {/* Text */}
      <div className="text">
        {/* Title */}
        <p className="text-gray-400 dark:text-gray-500 text-xs tracking-widest uppercase font-jetbrains-mono rtl:font-tajawal">
          {title}
        </p>

        {/* Info Text */}
        <p className="text-gray-600 dark:text-amber-50 font-bold">{infoText}</p>
      </div>
    </div>
  );
}
