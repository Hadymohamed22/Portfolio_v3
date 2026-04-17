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

type Props = {
  clients: TestimonialItem[];
};

export default function TestimonialsCarousel({ clients = [] }: Props) {
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
        {clients.map((client) => (
          <CarouselItem
            key={client.id}
            className="ps-6 md:pl-8 md:basis-1/2 lg:basis-1/3 flex"
          >
            <TestimonialBox
              comment={client.comment}
              username={client.name}
              jobTitle={client.jobTitle}
              starsNum={client.rate}
              image={client.customerProfileImage.url}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-5 inset-s-5" />
      <CarouselNext className="absolute top-5 inset-s-26" />
    </Carousel>
  );
}
