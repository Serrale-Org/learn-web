import { testimonials } from "@/features/home/data/testimonials";

export type Instructor = {
  name: string;
  avatar: string;
  title: string;
  bio: string;
  rating: number;
  reviewCount: number;
};

export const instructors: Instructor[] = [
  {
    name: "Abebe Wondimu",
    avatar: testimonials[0].avatar,
    title: "Senior Instructor",
    bio: "Experienced trainer focused on practical, job-ready skills.",
    rating: 4.8,
    reviewCount: 120,
  },
  {
    name: "Hanna Tesfaye",
    avatar: testimonials[1].avatar,
    title: "Lead Coach",
    bio: "Design and communication expert with real-world projects.",
    rating: 4.9,
    reviewCount: 200,
  },
  {
    name: "Lulit Alemu",
    avatar: testimonials[2].avatar,
    title: "Program Mentor",
    bio: "Guides learners through hands-on exercises and portfolio work.",
    rating: 4.7,
    reviewCount: 95,
  },
  {
    name: "Mulugeta Bekele",
    avatar: testimonials[3].avatar,
    title: "Technical Instructor",
    bio: "Helps learners master tools and modern workflows.",
    rating: 4.6,
    reviewCount: 80,
  },
  {
    name: "Yared Kebede",
    avatar: testimonials[4].avatar,
    title: "Industry Advisor",
    bio: "Focuses on employability and client-ready deliverables.",
    rating: 4.8,
    reviewCount: 140,
  },
];

export function getInstructorForSlug(slug: string) {
  const idx = Math.abs(hashString(slug)) % instructors.length;
  return instructors[idx];
}

function hashString(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
