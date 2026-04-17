type Props = {
  comment: string;
  username: string;
  jobTitle: string;
  stars: number;
  image?: string;
};

export default function TestimonialBox({
  comment,
  username,
  jobTitle,
  stars,
  image,
}: Props) {
  return (
    <div className="testimonial-box shadow-lg bg-white dark:bg-white/3 border border-gray-300 dark:border-white/10 p-8 md:p-10 rounded-4xl md:rounded-[2.5rem]"></div>
  );
}
