import site from "@/data/site.json";
import ServiceInfoBox from "./service-info-box";
import { useLocale } from "next-intl";

export default function AllServices() {
  // Translations
  const locale = useLocale();

  // Variables
  const services = site.allServices;

  return (
    <section className="all-services py-14 md:py-16 bg-gray-100 dark:bg-transparent ">
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <ServiceInfoBox
            key={service.id}
            className={i === 0 ? "lg:col-span-2" : ""}
            icon={service.icon as "rocket" | "buildings" | "pen" | "speed"}
            title={service.title[locale as "en" | "ar"]}
            description={service.description[locale as "en" | "ar"]}
            features={service.features}
            num={(i + 1).toString()}
          />
        ))}
      </div>
    </section>
  );
}
