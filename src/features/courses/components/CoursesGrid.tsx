import { CourseCard } from "@/features/home/components/CourseCard";
import { Pagination } from "./Pagination";
import { sampleCourses } from "@/features/courses/data/sampleCourses";

type Props = {
  q?: string;
  category?: string;
  level?: string;
  page?: number;
};

export async function CoursesGrid({ q, category, level, page = 1 }: Props) {
  const pageSize = 12;
  const filtered = sampleCourses.filter((c) => {
    const qOk = q ? c.title.toLowerCase().includes(q.toLowerCase()) : true;
    const levelOk = level
      ? (c.level || "").toLowerCase() === level.toLowerCase()
      : true;
    return qOk && levelOk;
  });
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  const data = { items, total: filtered.length, page, pageSize };

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
