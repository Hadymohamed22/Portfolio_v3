import CollaborationIconBox from "./collaboration-icon-box";

type Props = {
  icon: React.ReactNode;
  iconClassNames?: string;
  title: string;
  description: string;
};

export default function CollaborationBox({
  icon,
  iconClassNames,
  title,
  description,
}: Props) {
  return (
    <div className="collaboration-box p-6 md:p-8 shadow-lg bg-white dark:bg-white/3 border border-transparent dark:border-white/10 rounded-2xl flex flex-col gap-6">
      {/* Icon */}
      <CollaborationIconBox icon={icon} className={iconClassNames} />

      <div className="text">
        {/* Title */}
        <h5 className="font-bold text-base md:text-lg mb-2.5">{title}</h5>

        {/* Description */}
        <p className="text-sm md:text-base font-inter rtl:font-tajawal text-zinc-500 dark:text-gray-400 mt-6 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}
