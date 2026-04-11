import { advantages } from "../_constants/advantages.constant";
import AdvantageItem from "./advantage-item";

export default function Advantages() {
  return (
    <div className="advantages flex items-center gap-4 flex-wrap mt-6">
      {advantages.map((advantage) => (
        <AdvantageItem
          key={advantage.id}
          iconName={advantage.iconName}
          text={advantage.text}
        />
      ))}
    </div>
  );
}
