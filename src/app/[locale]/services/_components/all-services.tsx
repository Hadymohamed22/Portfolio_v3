import { getLocale } from "next-intl/server";
import getAllServices from "../_actions/get-all-services.action";
import ServiceInfoBox from "./service-info-box";

export default async function AllServices() {
  // Translations
  const locale = await getLocale();

  // Variables
  const allServices = await getAllServices(locale);

  return (
    <section className="all-services py-14 md:py-16 bg-gray-100 dark:bg-transparent ">
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {allServices.ok ? (
          allServices.data.map((service, i) => (
            <ServiceInfoBox
              key={service.id}
              className={i === 0 ? "lg:col-span-2" : ""}
              icon={service.iconVariant}
              title={service.title}
              description={service.description}
              features={service.features}
              num={(i + 1).toString()}
            />
          ))
        ) : (
          <>
            <ServiceInfoBox
              className="lg:col-span-2"
              icon="buildings"
              title="Business Consulting"
              description="Expert guidance to help your business grow and succeed."
              features={[
                { id: 1, text: "strategic_planning" },
                { id: 2, text: "market_analysis" },
                { id: 3, text: "growth_strategies" },
              ]}
              num={"1"}
            />
            <ServiceInfoBox
              icon="rocket"
              title="Startup Acceleration"
              description="Accelerate your startup journey with tailored support."
              features={[
                { id: 1, text: "mentorship" },
                { id: 2, text: "funding_advice" },
                { id: 3, text: "networking" },
              ]}
              num={"2"}
            />
            <ServiceInfoBox
              icon="pen"
              title="Content Creation"
              description="Professional content for web, marketing, and branding."
              features={[
                { id: 1, text: "copywriting" },
                { id: 2, text: "blog_posts" },
                { id: 3, text: "brand_messaging" },
              ]}
              num={"3"}
            />
            <ServiceInfoBox
              icon="speed"
              title="Performance Optimization"
              description="Improve your business efficiency and technology stack."
              features={[
                { id: 1, text: "process_automation" },
                { id: 2, text: "system_audits" },
                { id: 3, text: "speed_enhancements" },
              ]}
              num={"4"}
            />
          </>
        )}
      </div>
    </section>
  );
}
