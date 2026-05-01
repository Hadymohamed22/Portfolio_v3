import ServiceInfoBox from "./service-info-box";

export default function AllServices() {
  return (
    <section className="all-services py-14 md:py-16 bg-gray-100 dark:bg-transparent ">
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ServiceInfoBox className="lg:col-span-2" icon="buildings" />
        <ServiceInfoBox icon="rocket" />
        <ServiceInfoBox icon="pen" />
        <ServiceInfoBox icon="speed" />
      </div>
    </section>
  );
}
