import { getCourses } from "@/shared/api/olp";
import { CourseCard } from "./CourseCard";
import { sampleCourses } from "@/features/courses/data/sampleCourses";
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

const sampleItems: CourseListItem[] = sampleCourses.map((c) => ({
  id: c.id,
  title: c.title,
  slug: c.slug,
  thumbnailUrl: c.thumbnailUrl,
  level: c.level,
  certificationType: c.certificationType,
  price: c.price,
}));

export async function CourseGrid({ q }: { q?: string }) {
  // const data = await getCourses({ q, limit: 9 });
  let items: CourseListItem[] = (sampleItems ?? []).map(
    (c: CourseListItem) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      thumbnailUrl: c.thumbnailUrl,
      level: c.level,
      certificationType: c.certificationType,
    })
  );

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
          {items.slice(0, 6).map((c) => (
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
