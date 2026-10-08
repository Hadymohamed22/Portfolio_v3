import personalInfo from "@/data/personal-info.json";
import TestimonialsCarousel from "./testimonials-carousel";

export default function TestimonialsContent() {
  //   Variables
  const clients = personalInfo.testimonials;

  return (
    <div className="container mx-auto px-5">
      {/* Carousel */}
      <TestimonialsCarousel clients={clients} />
    </div>
  );
}
