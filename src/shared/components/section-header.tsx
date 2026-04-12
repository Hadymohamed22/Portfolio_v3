type Props = {
  title: string | React.ReactNode;
  subTitle: string;
};

export default function SectionHeader({ title, subTitle }: Props) {
  return (
    <header className="mb-14 md:mb-16">
      {/* Title */}
      <h3 className="font-bold text-4xl md:text-5xl mb-1">{title}</h3>

      {/* Sub Title */}
      <p className="text-sm md:text-base font-inter rtl:font-tajawal text-gray-500 dark:text-gray-400">
        {subTitle}
      </p>
    </header>
  );
}
