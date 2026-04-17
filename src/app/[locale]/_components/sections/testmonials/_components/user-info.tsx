import Image from "next/image";

type Props = {
  name: string;
  image: string;
  jobTitle: string;
};

export default function UserInfo({
  name,
  image = "/assets/images/default-user-image.png",
  jobTitle,
}: Props) {
  return (
    <div className="user flex items-center gap-4 mt-auto">
      {/* Image Container */}
      <div className="user-image size-8 md:size-10 rounded-full relative outline-2 outline-cyan-500 dark:outline-cyan-400 overflow-hidden">
        <Image src={image} alt={`${name} profile image`} fill />
      </div>

      {/* User Info */}
      <div className="user-info">
        {/* UserName */}
        <p className="font-inter rtl:font-tajawal uppercase text-gray-600 dark:text-[#E5E4ED] font-bold text-xs md:text-sm">
          {name}
        </p>

        {/* Job Title */}
        <p className="text-[0.5rem] md:text-[0.625rem] font-jetbrains-mono rtl:font-tajawal text-gray-300 dark:text-[#74757D]">
          {jobTitle}
        </p>
      </div>
    </div>
  );
}
