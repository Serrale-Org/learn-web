import { Header } from "@/features/home/components/Header";
import { Footer } from "@/features/home/components/Footer";
import { FAQ } from "@/features/home/components/FAQ";
import { CTA } from "@/features/home/components/CTA";
import { CourseHero } from "./components/CourseHero";
import { SkillsSection } from "./components/SkillsSection";
import { TeacherSection } from "./components/TeacherSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { AboutSection } from "./components/AboutSection";

import { getCourseBySlug } from "./data/sampleCourses";
import { getInstructorForSlug } from "./data/instructors";

type CourseDetailsPageProps = {
  slug: string;
};

export default function CourseDetailsPage({ slug }: CourseDetailsPageProps) {
  const base = getCourseBySlug(slug);
  const course = {
    id: base?.id || "-",
    title: base?.title || "Course",
    slug,
    thumbnailUrl: base?.thumbnailUrl,
    level: base?.level,
    certificationType: base?.certificationType,
    price: String(base?.price ?? "0.00"),
    rating: base?.rating ?? 4.8,
    reviewCount: base?.reviewCount ?? 120,
    description:
      base?.description ||
      "Learn the fundamentals of this course and build real-world skills.",
    longDescription:
      (base?.description || "") +
      " This comprehensive course takes you from basics to confident practice with hands-on exercises.",
    skills: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Figma & Adobe XD",
      "User Testing & Iteration",
      "Design Systems & Components",
    ],
    teacher: (() => {
      const inst = getInstructorForSlug(slug);
      return {
        name: inst.name,
        avatar: inst.avatar,
        rating: base?.rating ?? inst.rating,
        reviewCount: base?.reviewCount ?? inst.reviewCount,
        bio: inst.bio,
      };
    })(),
    reviews: [
      {
        id: "1",
        name: "James",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 5,
        comment:
          "Excellent course! The instructor explains everything clearly and the projects are very practical.",
      },
      {
        id: "2",
        name: "Emily",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 5,
        comment: "I learned so much from this course. Very easy to follow.",
      },
      {
        id: "3",
        name: "Michael",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 5,
        comment: "Great hands-on approach with practical exercises.",
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <CourseHero course={course} />

        <div className="w-full max-w-7xl mx-auto px-4 py-14 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillsSection skills={course.skills} />
            <TeacherSection teacher={course.teacher} />
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ReviewsSection />
            <AboutSection description={course.longDescription} />
          </div>
        </div>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
