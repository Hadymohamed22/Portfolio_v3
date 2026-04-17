import React from "react";
import TestimonialsCarousel from "./testimonials-carousel";
import getTestimonials from "../_actions/get-testimonials.action";
import { getLocale } from "next-intl/server";

export default async function TestimonialsContent() {
  // Translations
  const locale = await getLocale();

  //   Variables
  const INITIAL_CLIENTS_VALUE: TestimonialItem[] = [
    {
      id: crypto.randomUUID(),
      comment:
        "This is a fantastic service. The developer was professional and exceeded my expectations. Highly recommended!",
      name: "John Doe",
      jobTitle: "CEO, ExampleCorp",
      rate: 5,
      customerProfileImage: {
        url: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: crypto.randomUUID(),
      comment:
        "Working with Hady was a breeze. The project was delivered on time and the results were outstanding.",
      name: "Sara Lee",
      jobTitle: "Product Manager, TechFlow",
      rate: 5,
      customerProfileImage: {
        url: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    },
    {
      id: crypto.randomUUID(),
      comment:
        "Professional, attentive, and highly skilled. I look forward to collaborating again.",
      name: "Ali Hassan",
      jobTitle: "Freelancer",
      rate: 4,
      customerProfileImage: {
        url: "https://randomuser.me/api/portraits/men/55.jpg",
      },
    },
  ];

  const clients = await getTestimonials(locale);

  return (
    <div className="container mx-auto px-5">
      {/* Carousel */}
      <TestimonialsCarousel
        clients={
          clients.ok ? clients.data.testimonialItem : INITIAL_CLIENTS_VALUE
        }
      />
    </div>
  );
}
