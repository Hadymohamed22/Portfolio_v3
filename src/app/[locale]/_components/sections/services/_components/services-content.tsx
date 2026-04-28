import { getLocale } from "next-intl/server";
import getServices from "../_actions/get-services.action";
import ServicesCarousel from "@/shared/components/services-carousel";

export default async function ServicesContent() {
  // Translation
  const locale = await getLocale();

  // Variables
  const services = await getServices(locale);

  return (
    <div className="services-section-content">
      {/* Services Carousel */}
      {services.ok &&
      Array.isArray(services.data) &&
      services.data.length > 0 ? (
        <ServicesCarousel slides={services.data} />
      ) : (
        <ServicesCarousel />
      )}
    </div>
  );
}
