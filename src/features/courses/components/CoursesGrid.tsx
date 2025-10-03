import { getCourses } from "@/shared/api/olp";
import { CourseCard } from "@/features/home/components/CourseCard";
import { Pagination } from "./Pagination";

type Props = {
  q?: string;
  category?: string;
  level?: string;
  page?: number;
};

export async function CoursesGrid({ q, category, level, page = 1 }: Props) {
  // const data = await getCourses({ q, category, level, page, limit: 12 });
  const data = {
    items: Array.from({ length: 12 }).map((_, i) => ({
      id: String(i + 1 + (page - 1) * 12),
      title: `Sample Course ${i + 1 + (page - 1) * 12}`,
      slug: `sample-course-${i + 1 + (page - 1) * 12}`,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0",
      level: "Beginner",
      certificationType: "Certificate",
      price: 199,
    })),
    total: 60,
    page,
    pageSize: 12,
  };

  const totalPages = Math.max(1, Math.ceil((data.total ?? 0) / data.pageSize));

  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing{" "}
            <span className="text-foreground font-medium">
              {data.items.length}
            </span>{" "}
            of
            <span className="text-foreground font-medium">
              {" "}
              {data.total}
            </span>{" "}
            results
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((c) => (
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

        <div className="mt-10">
          <Pagination currentPage={data.page} totalPages={totalPages} />
        </div>
      </div>
    </section>
  );
}
