import { Project } from "../_types/projects";

export const INITIAL_PROJECTS_DATA: Project[] = [
  {
    id: "1",
    slug: "business-dashboard",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    alt: "Screenshot of project dashboard",
    title: "Business Dashboard",
    summary:
      "A powerful dashboard for managing business operations and analytics in real time.",
    techStack: [
      { variant: "Next.js", title: "Next.js" },
      { variant: "TypeScript", title: "TypeScript" },
      { variant: "React Query", title: "React Query" },
    ],
  },
  {
    id: "2",
    slug: "creative-landing",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Landing page screenshot",
    title: "Creative Landing",
    summary:
      "Stunning landing page optimized for conversions using responsive and modern design.",
    techStack: [
      { variant: "Tailwind CSS", title: "Tailwind" },
      { variant: "react", title: "React" },
      { variant: "ZOD", title: "Zod" },
    ],
  },
  {
    id: "3",
    slug: "ecommerce-platform",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    alt: "Ecommerce platform UI",
    title: "E-commerce Platform",
    summary:
      "A scalable e-commerce site supporting multiple payment methods and internationalization.",
    techStack: [
      { variant: "NextAuth", title: "NextAuth" },
      { variant: "salla", title: "Salla" },
      { variant: "bootstrap", title: "Bootstrap" },
    ],
  },
];
