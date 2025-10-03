import CourseDetailsPage from "@/features/courses/CourseDetailsPage";

export default function Course({ params }: { params: { slug: string } }) {
  return <CourseDetailsPage slug={params.slug} />;
}
