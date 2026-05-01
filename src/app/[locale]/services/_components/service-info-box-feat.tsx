import { CheckCircle } from "lucide-react";

type Props = {
  text: string;
};

export default function ServiceInfoBoxFeat({ text }: Props) {
  return (
    <p className="service-info-box-feat min-w-fit flex items-center gap-2 text-m-primary dark:text-cyan-500 text-xs md:text-sm">
      {/* Icon */}
      <CheckCircle size={14} />

      {/* Text */}
      <span>{text}</span>
    </p>
  );
}
