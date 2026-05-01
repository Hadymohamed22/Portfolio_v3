import AllServices from "./_components/all-services";
import ServicesHero from "./_components/services-hero";

export default function Page() {
  return (
    <main className="services-page">
      {/* Services Hero */}
      <ServicesHero />

      {/* All Services */}
      <AllServices />
    </main>
  );
}
