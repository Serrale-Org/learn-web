import { Suspense } from "react";
import { Header } from "@/features/home/components/Header";
import { Footer } from "@/features/home/components/Footer";
import { CoursesGrid } from "./components/CoursesGrid";
import { FAQ } from "../home/components/FAQ";
import { CTA } from "../home/components/CTA";
import { CoursesHeader } from "./components/Header";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    category?: string;
    level?: string;
    page?: string;
  };
}) {
  const q = await searchParams?.q;
  const category = searchParams?.category;
  const level = searchParams?.level;
  const page = Number(searchParams?.page || 1);

  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <CoursesHeader q={q} />
        <Suspense>
          <CoursesGrid q={q} category={category} level={level} page={page} />
        </Suspense>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
