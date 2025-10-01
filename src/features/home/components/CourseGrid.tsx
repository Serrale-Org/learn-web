import { getCourses } from "@/shared/api/olp";
import { CourseCard } from "./CourseCard";
import Link from "next/link";

export type CourseListItem = {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl?: string;
  level?: string;
  certificationType?: string;
  price?: number;
};

const sampleItems: CourseListItem[] = [
  {
    id: "1",
    title: "Web Development",
    slug: "web-development",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 100,
  },
  {
    id: "2",
    title: "UI/UX Design",
    slug: "uiux-design",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1602064172250-43f8909056c7?q=80&w=957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 200,
  },
  {
    id: "3",
    title: "Digital Marketing",
    slug: "digital-marketing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 300,
  },
  {
    id: "4",
    title: "Data Analytics",
    slug: "data-analytics",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 250,
  },
  {
    id: "5",
    title: "Graphic Design",
    slug: "graphic-design",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1716471330501-b443b15a716f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 400,
  },
  {
    id: "6",
    title: "Video Editing",
    slug: "video-editing",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    level: "Beginner",
    certificationType: "Certificate",
    price: 300,
  },
];

export async function CourseGrid({ q }: { q?: string }) {
  const data = await getCourses({ q, limit: 9 });
  let items: CourseListItem[] = (data?.items ?? []).map((c: any) => ({
    id: c.id,
    title: c.title,
    slug: c.slug,
    thumbnailUrl: c.thumbnailUrl,
    level: c.level,
    certificationType: c.certificationType,
  }));

  if (!items?.length) items = sampleItems;

  return (
    <section className="w-full mt-10 bg-primary-foreground">
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <h2 className="text-4xl font-medium tracking-tight">
              Explore Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Dive into our wide range of courses and discover the ideal course
              to match your interests and goals.
            </p>
          </div>
          <div>
            <Link
              href="/courses"
              className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-14 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <CourseCard
              key={c.id}
              title={c.title}
              slug={c.slug}
              thumbnailUrl={c.thumbnailUrl}
              level={c.level}
              certificationType={c.certificationType}
              price={c.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
