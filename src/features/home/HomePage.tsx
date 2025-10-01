import { Suspense } from "react";
import { Hero } from "./components/Hero";
import { CourseGrid } from "./components/CourseGrid";
import { Header } from "./components/Header";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { TrustedBrands } from "./components/TrustedBrands";
import { CategoryExplorer } from "./components/CategoryExplorer";
import { TestimonialsStrip } from "./components/TestimonialsStrip";
import { FAQ } from "./components/FAQ";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const q = searchParams?.q;
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <CategoryExplorer />
        <Suspense>
          <CourseGrid q={q} />
        </Suspense>
        <TestimonialsStrip />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
