import { useTranslations } from "next-intl";
import { advantages } from "../_constants/advantages.constant";
import AdvantageItem from "./advantage-item";

export default function Advantages() {
  // Translation
  const t = useTranslations("home.about-me");

  return (
    <div className="advantages flex items-center gap-4 flex-wrap mt-6">
      {advantages(t).map((advantage) => (
        <AdvantageItem
          key={advantage.id}
          iconName={advantage.iconName}
          text={advantage.text}
        />
      ))}
    </div>
  );
}
