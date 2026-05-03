type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <div
      className={`
        text-destructive
        text-xs
        font-jetbrains-mono rtl:font-tajawal
        mt-1
        transition-colors
        dark:text-red-400
      `}
      role="alert"
    >
      {message}
    </div>
  );
}
