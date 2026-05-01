import { Suspense } from "react";
import ContactMe from "../_components/sections/contact-me/contact-me";
import AllServices from "./_components/all-services";
import ServicesHero from "./_components/services-hero";
import Workflow from "./_components/workflow";
import AllServicesSkeleton from "./_skeletons/all-services.skeleton";

export default function Page() {
  return (
    <main className="services-page">
      {/* Services Hero */}
      <ServicesHero />

      {/* All Services */}
      <Suspense fallback={<AllServicesSkeleton />}>
        <AllServices />
      </Suspense>

      {/* Workflow */}
      <Workflow />

      {/* Contact Me */}
      <ContactMe />
    </main>
  );
}
