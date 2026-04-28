import { TriangleAlert } from "lucide-react";

type Props = {
  p: string;
};

export default function BugParagraph({ p }: Props) {
  return (
    <p className="text-red-500 dark:text-red-400 flex items-center gap-2 text-xs md:text-base">
      <TriangleAlert size={18} />
      <span>{p}</span>
    </p>
  );
}
