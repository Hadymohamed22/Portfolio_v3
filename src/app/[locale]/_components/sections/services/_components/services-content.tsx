import ServicesCarousel, {
  IconVariantsType,
} from "@/shared/components/services-carousel";
import site from "@/data/site.json";

export default function ServicesContent() {
  // Variables
  const services = site.services;
  const slides = site.services.map((s) => ({
    ...s,
    icon: s.icon as IconVariantsType,
  }));

  return (
    <div className="services-section-content">
      {/* Services Carousel */}
      {services && Array.isArray(services) && services.length > 0 ? (
        <ServicesCarousel slides={slides} />
      ) : (
        <ServicesCarousel />
      )}
    </div>
  );
}
