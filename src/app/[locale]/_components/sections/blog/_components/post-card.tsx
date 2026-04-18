import { cn } from "@/shared/lib/utils/tailwind-merge";
import Image from "next/image";

type Props = {
  img: string;
  alt: string;
  category: Post["blog_category"]["name"];
  title: string;
  summary: string;
  publishAt: string;
};

export default function PostCard({
  img,
  alt,
  category,
  title,
  summary,
  publishAt,
}: Props) {
  // Variables
  const date = new Date(publishAt).toDateString().split(" "); // return ['Sat', 'Apr', '18', '2026']

  return (
    <div className="post-card shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 rounded-2xl md:rounded-3xl min-h-115 flex flex-col">
      {/* Image Container */}
      <div className="image-container relative rounded-t-2xl md:rounded-t-3xl overflow-hidden h-56 shrink-0">
        <Image src={img} alt={alt} fill />
      </div>

      {/* Content */}
      <div className="content p-6 md:p-8 flex flex-col h-full">
        {/* Category */}
        <p
          className={cn(
            "font-jetbrains-mono rtl:font-tajawal text-[0.5rem] md:text-[0.625rem]",
            category === "Development"
              ? "text-purple-600 dark:text-purple-500"
              : category === "Design"
                ? "text-cyan-600 dark:text-cyan-500"
                : "text-red-500 dark:text-red-400",
          )}
        >
          {category}
        </p>

        {/* Title */}
        <h4 className="font-bold text-lg md:text-xl uppercase my-4">{title}</h4>

        {/* Summary */}
        <p className="text-gray-500 dark:text-gray-400 font-inter rtl:font-tajawal text-xs md:text-sm">
          {summary}
        </p>

        {/* Publish At */}
        <p className="text-gray-300 dark:text-gray-600 font-jetbrains-mono rtl:font-tajawal uppercase text-[0.5rem] md:text-[0.625rem] mt-auto">
          {`${date[1]} ${date[2]} , ${date[3]}`}
        </p>
      </div>
    </div>
  );
}
