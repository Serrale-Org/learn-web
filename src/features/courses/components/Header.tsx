import { FiltersBar } from "./FiltersBar";

export function CoursesHeader({ q }: { q?: string }) {
  return (
    <section className="w-full pt-14 max-w-7xl mx-auto px-4">
      <div className="w-full p-20 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
          Our <span className="text-primary">Courses</span>
        </h1>
        <p className="text-muted-foreground mt-3 text-lg max-w-2xl">
          Explore a variety of industry-relevant courses designed to help you
          grow skills and earn certificates.
        </p>
        <div className="mt-8 max-w-xl">
          <FiltersBar initialQuery={q} />
        </div>
      </div>
    </section>
  );
}
