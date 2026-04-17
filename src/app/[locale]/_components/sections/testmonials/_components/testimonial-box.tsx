import Stars from "./stars";
import UserInfo from "./user-info";

type Props = {
  comment: string;
  username: string;
  jobTitle: string;
  starsNum: number;
  image: string;
};

export default function TestimonialBox({
  comment,
  username,
  jobTitle,
  starsNum,
  image,
}: Props) {
  return (
    <div className="testimonial-box relative shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 p-8 md:p-10 rounded-4xl md:rounded-[2.5rem] flex flex-col">
      {/* Quote Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute top-5 inset-e-5 fill-gray-300 dark:fill-[#A8A4FF1A] lucide lucide-quote-icon lucide-quote rotate-180 size-8 md:size-10"
      >
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      </svg>

      {/* Stars */}
      <Stars num={starsNum} />

      {/* Comment */}
      <p className="my-6 font-inter rtl:font-tajawal text-gray-500 dark:text-[#E5E4ED] text-sm md:text-base">{`"${comment}"`}</p>

      {/* User */}
      <UserInfo image={image} name={username} jobTitle={jobTitle} />
    </div>
  );
}
