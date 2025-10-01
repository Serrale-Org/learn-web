import HomePage from "@/features/home/HomePage";

export default function Home({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  return <HomePage searchParams={searchParams} />;
}
