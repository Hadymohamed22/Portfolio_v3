type TestimonialItem = {
  id: number | string;
  rate: number;
  name: string;
  comment: string;
  jobTitle: string;
  customerProfileImage: {
    url: string;
  };
};

type Testimonials = {
  testimonialItem: TestimonialItem[];
};
