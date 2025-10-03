import CoursesPage from "@/features/courses/CoursesPage";

export default function Courses({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    category?: string;
    level?: string;
    page?: string;
  };
}) {
  return <CoursesPage searchParams={searchParams} />;
}
