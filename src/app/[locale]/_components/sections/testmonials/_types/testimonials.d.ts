type TestimonialItem = {
  id: number | string;
  rate: number;
  name: {
    ar: string;
    en: string;
  };
  comment: {
    ar: string;
    en: string;
  };
  jobTitle: string;
  customerProfileImage: {
    url: string;
  };
};

type Testimonials = {
  testimonialItem: TestimonialItem[];
};
