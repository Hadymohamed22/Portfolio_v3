"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import TestimonialBox from "./testimonial-box";

export default function TestimonialsCarousel() {
  // Translation
  const locale = useLocale();

  // Variables
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Carousel
      className="relative"
      opts={{
        direction: dir,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
      <CarouselContent className="-ms-6 md:-ml-8 py-14 items-stretch">
        <CarouselItem className="ps-6 md:pl-8 md:basis-1/2 lg:basis-1/3 flex">
          <TestimonialBox
            comment="This is a fantastic service. The developer was professional and exceeded my expectations. Highly recommended!"
            username="John Doe"
            jobTitle="CEO, ExampleCorp"
            starsNum={5}
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
        </CarouselItem>
        <CarouselItem className="ps-3 md:basis-1/2 lg:basis-1/3 flex">
          <TestimonialBox
            comment="Working with Hady was a breeze. The project was delivered on time and the results were outstanding."
            username="Sara Lee"
            jobTitle="Product Manager, TechFlow"
            starsNum={5}
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </CarouselItem>
        <CarouselItem className="ps-3 md:basis-1/2 lg:basis-1/3 flex">
          <TestimonialBox
            comment="Professional, attentive, and highly skilled. I look forward to collaborating again."
            username="Ali Hassan"
            jobTitle="Freelancer"
            starsNum={4}
            image="https://randomuser.me/api/portraits/men/55.jpg"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute top-5 inset-s-5" />
      <CarouselNext className="absolute top-5 inset-s-26" />
    </Carousel>
  );
}
