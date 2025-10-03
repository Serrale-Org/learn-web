import { Header } from "@/features/home/components/Header";
import { Footer } from "@/features/home/components/Footer";
import { FAQ } from "@/features/home/components/FAQ";
import { CTA } from "@/features/home/components/CTA";
import { CourseHero } from "./components/CourseHero";
import { SkillsSection } from "./components/SkillsSection";
import { TeacherSection } from "./components/TeacherSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { AboutSection } from "./components/AboutSection";

type CourseDetailsPageProps = {
  slug: string;
};

// Mock course data - replace with actual API call
const getCourseData = (slug: string) => {
  return {
    id: "1",
    title: "UI/UX Design",
    slug: slug,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1602064172250-43f8909056c7?q=80&w=957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: "32.00",
    rating: 4.8,
    reviewCount: 120,
    description:
      "Learn the fundamentals of UI/UX design and create stunning user interfaces that users love.",
    longDescription:
      "This comprehensive course covers everything you need to know about UI/UX design. From understanding user psychology to creating wireframes and prototypes, you'll learn the complete design process. Our hands-on approach ensures you'll have a portfolio-ready project by the end of the course.",
    skills: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Figma & Adobe XD",
      "User Testing & Iteration",
      "Design Systems & Components",
    ],
    teacher: {
      name: "Neil Cannon",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0",
      rating: 4.8,
      reviewCount: 120,
      bio: "Senior UI/UX Designer with 8+ years of experience at leading tech companies. Passionate about creating intuitive and beautiful user experiences.",
    },
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
        comment:
          "I learned so much from this course. The design principles are explained in a way that's easy to understand.",
      },
      {
        id: "3",
        name: "Michael",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0",
        rating: 5,
        comment:
          "Great hands-on approach. The projects helped me build a strong portfolio.",
      },
    ],
  };
};

export default function CourseDetailsPage({ slug }: CourseDetailsPageProps) {
  const course = getCourseData(slug);

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
            <ReviewsSection reviews={course.reviews} />
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
