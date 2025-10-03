export type SampleCourse = {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl?: string;
  level?: string;
  certificationType?: string;
  price?: number;
  description?: string;
  rating?: number;
  reviewCount?: number;
};

export const sampleCourses: SampleCourse[] = [
  {
    id: "1",
    title: "Customer Handling & Support",
    slug: "customer-handling-support",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1758876202189-0fbc277dfed9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 149,
    description:
      "Builds professional soft skills in communication, empathy, and conflict resolution.",
    rating: 4.7,
    reviewCount: 85,
  },
  {
    id: "2",
    title: "Sales & Call Operator Training",
    slug: "sales-call-operator-training",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1758519290802-516e99b4688a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 159,
    description:
      "Focused on outbound/inbound calls, persuasion, and CRM tools.",
    rating: 4.6,
    reviewCount: 64,
  },
  {
    id: "3",
    title: "Copywriting",
    slug: "copywriting",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1612831199117-a3aa88c5badc?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 129,
    description: "Teaches persuasive writing for ads, sales, and web content.",
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "4",
    title: "Content Creation (Canva + AI)",
    slug: "content-creation-canva-ai",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1730890802243-ed276ffebb79?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 139,
    description: "Hands-on with modern design + automation for real-world use.",
    rating: 4.7,
    reviewCount: 73,
  },
  {
    id: "5",
    title: "Virtual Assistance",
    slug: "virtual-assistance",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1601342550031-d6df73676153?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 129,
    description:
      "Covers scheduling, research, client communication, and task management.",
    rating: 4.6,
    reviewCount: 52,
  },
  {
    id: "6",
    title: "AI for Everyday Tasks",
    slug: "ai-for-everyday-tasks",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1677691820099-a6e8040aa077?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 119,
    description:
      "Practical AI for email drafting, data handling, and automation.",
    rating: 4.7,
    reviewCount: 91,
  },
  {
    id: "7",
    title: "Documentation & Proposal Writing",
    slug: "documentation-proposal-writing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1758874572310-dca7e1a5f603?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 139,
    description:
      "Essential for NGOs, startups, and freelancers to win funding/projects.",
    rating: 4.5,
    reviewCount: 38,
  },
  {
    id: "8",
    title: "Digital Marketing",
    slug: "digital-marketing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1633114073219-8c81a6bdb356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 149,
    description: "Covers SEO, social media, ads, and analytics for SMEs.",
    rating: 4.6,
    reviewCount: 104,
  },
  {
    id: "9",
    title: "Web Development",
    slug: "web-development",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1600&auto=format&fit=crop",
    level: "Beginner",
    certificationType: "Certificate",
    price: 199,
    description: "Full-stack fundamentals to build and deploy modern web apps.",
    rating: 4.8,
    reviewCount: 210,
  },
  {
    id: "10",
    title: "UI/UX Design",
    slug: "uiux-design",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1602064172250-43f8909056c7?q=80&w=1600&auto=format&fit=crop",
    level: "Beginner",
    certificationType: "Certificate",
    price: 179,
    description: "User research, wireframing, prototyping, and design systems.",
    rating: 4.9,
    reviewCount: 320,
  },
];

export function getCourseBySlug(slug: string) {
  return sampleCourses.find((c) => c.slug === slug);
}
