import { Projects } from "../_types/projects";

export const INITIAL_PROJECTS_DATA: Projects = [
  {
    id: 1,
    title: "Business Dashboard",
    badges: [
      { id: 1, title: "Next.js", variant: "next-default" },
      { id: 2, title: "TypeScript", variant: "typescript-default" },
      { id: 3, title: "React Query", variant: "react-default" },
    ],
    description:
      "A dashboard for managing business operations and analytics in real time.",
    purpose:
      "Enables businesses to track key metrics and performance efficiently.",
    solutation: "Developed with scalable technology stack and tailored UI.",
    IncreasedEfficiencyPercentage: 35,
    accuracyPercentage: 97,
    summary:
      "A powerful dashboard for managing business operations and analytics in real time.",
    siteLink: "https://dashboard-demo.com",
    repoLink: "https://github.com/example/business-dashboard",
    isACollaborator: false,
    collaborationRole: null,
    slug: "business-dashboard",
    mainImage: {
      id: 1001,
      alternativeText: "Screenshot of project dashboard",
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    subImage: {
      id: 1002,
      alternativeText: "Dashboard mobile view",
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=50",
    },
    projectGallary: [
      {
        id: 1003,
        alternativeText: "Dashboard analytics graphs",
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      },
    ],
    collaborations: [],
  },
  {
    id: 2,
    title: "Creative Landing",
    badges: [
      { id: 1, title: "Tailwind CSS", variant: "tailwind-default" },
      { id: 2, title: "React", variant: "react-default" },
      { id: 3, title: "Zod", variant: "ZOD" },
    ],
    description: "Landing page built for creativity and conversion.",
    purpose: "To increase signups through compelling design.",
    solutation: "Used modern component libraries and strong brand visuals.",
    IncreasedEfficiencyPercentage: 20,
    accuracyPercentage: 100,
    summary:
      "Stunning landing page optimized for conversions using responsive and modern design.",
    siteLink: "https://creativelanding.com",
    repoLink: "https://github.com/example/creative-landing",
    isACollaborator: true,
    collaborationRole: "Frontend Developer",
    slug: "creative-landing",
    mainImage: {
      id: 2001,
      alternativeText: "Landing page screenshot",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    subImage: {
      id: 2002,
      alternativeText: "Landing on mobile",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=50",
    },
    projectGallary: [
      {
        id: 2003,
        alternativeText: "Sign-up form screenshot",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      },
    ],
    collaborations: [
      {
        id: 1,
        iconVariant: "designer",
        title: "Design",
        description: "Led the design system and developed component library.",
      },
    ],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    badges: [
      { id: 1, title: "NextAuth", variant: "NextAuth" },
      { id: 2, title: "Salla", variant: "salla" },
      { id: 3, title: "Bootstrap", variant: "tailwind-default" },
    ],
    description: "A scalable e-commerce site for diverse product needs.",
    purpose: "To support secure, international online sales for businesses.",
    solutation:
      "Implemented with modern authentication and payment integrations.",
    IncreasedEfficiencyPercentage: 45,
    accuracyPercentage: 99,
    summary:
      "A scalable e-commerce site supporting multiple payment methods and internationalization.",
    siteLink: "https://ecommerce-platform.com",
    repoLink: "https://github.com/example/ecommerce-platform",
    isACollaborator: false,
    collaborationRole: null,
    slug: "ecommerce-platform",
    mainImage: {
      id: 3001,
      alternativeText: "Ecommerce platform UI",
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    subImage: {
      id: 3002,
      alternativeText: "Ecommerce checkout screenshot",
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=50",
    },
    projectGallary: [
      {
        id: 3003,
        alternativeText: "Mobile product page",
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      },
    ],
    collaborations: [],
  },
];
