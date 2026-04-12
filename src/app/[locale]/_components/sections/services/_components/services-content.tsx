import EmblaCarousel from "@/shared/components/embla-carousel";
import ServiceBox from "./service-box";

export default function ServicesContent() {
  return (
    <div className="services-section-content grid grid-cols-4 gap-4">
      {/* <EmblaCarousel /> */}
      <ServiceBox
        title="Business Websites"
        description="Scalable, fast, and search engine-optimized websites designed to convert visitors into loyal customers."
        className="text-purple-500 dark:text-m-primary"
        boxClassName="border-purple-500"
      />
      <ServiceBox
        title="Business Websites"
        description="Scalable, fast, and search engine-optimized websites designed to convert visitors into loyal customers."
        className="text-purple-500 dark:text-m-primary"
        boxClassName="border-purple-500"
      />
      <ServiceBox
        title="Business Websites"
        description="Scalable, fast, and search engine-optimized websites designed to convert visitors into loyal customers."
        className="text-purple-500 dark:text-m-primary"
        boxClassName="border-purple-500"
      />
      <ServiceBox
        title="Business Websites"
        description="Scalable, fast, and search engine-optimized websites designed to convert visitors into loyal customers."
        className="text-purple-500 dark:text-m-primary"
        boxClassName="border-purple-500"
      />
    </div>
  );
}
