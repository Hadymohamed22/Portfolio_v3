import { useTranslations } from "next-intl";

export default function Page() {
  // Translations
  const t = useTranslations("blog");

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 via-white to-gray-200 dark:from-[#18181b] dark:via-[#23272f] dark:to-[#111112] transition-colors duration-500 backdrop-blur-2xl px-4">
      <div className="rounded-3xl shadow-xl bg-white/70 dark:bg-zinc-900/70 py-10 px-8 flex flex-col items-center gap-4 border border-zinc-200 dark:border-zinc-800">
        <svg
          className="w-14 h-14 text-zinc-300 dark:text-zinc-700 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 48 48"
        >
          <path
            d="M24 4C13.057 4 4 12.954 4 24c0 5.634 2.2 10.75 5.81 14.473A2.5 2.5 0 0 0 11.6 40.83l4.212-1.24A19.957 19.957 0 0 0 24 44c10.943 0 20-8.954 20-20S34.943 4 24 4z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="24"
            cy="24"
            r="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-zinc-800 dark:text-white text-2xl md:text-3xl font-extrabold font-jetbrains-mono">
          {t("in-progress")}
        </span>
        <span className="text-zinc-500 dark:text-zinc-300 text-base mt-2 font-inter text-center max-w-md">
          🚧 This section is still under construction. Please check back soon!
        </span>
      </div>
    </main>
  );
}
