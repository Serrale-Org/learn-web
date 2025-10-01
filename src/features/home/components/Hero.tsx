import { BadgeCheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full bg-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-balance">
              Empowering your skills for a brighter future{" "}
            </h1>
            <p className=" text-muted-foreground text-lg text-balance">
              Practical, bite-sized courses in digital, creative, and career
              skills. Finish a course, earn a certificate, and turn your skills
              into income on SERRALE.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#courses"
                className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium"
              >
                Browse courses
              </Link>
              <Link
                href="#how"
                className="px-5 py-3 rounded-md border border-border font-medium"
              >
                How it works
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <AvatarStack />
              <div className="space-y-0.5">
                <RatingStars fullStars={4.9} totalStars={5} />
                <p className="text-sm text-muted-foreground">
                  Trusted by 1,200+ learners
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-neutral-200 bg-white aspect-square shadow-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1732453147369-3144a7cd4b47?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
                alt="Learning preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 ring-2 ring-offset-4 ring-primary  rounded-lg -right-4 hidden md:block">
              <div className="rounded-lg border border-border bg-primary-foreground shadow-sm px-3 py-2">
                <span className="flex items-center gap-2">
                  <BadgeCheckIcon className="w-4 h-4" />
                  <span className="text-sm">New courses weekly</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full border-2 border-white inline-flex items-center justify-center text-sm font-semibold text-white"
      style={{ backgroundColor: bg }}
    >
      {initials}
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-4">
      <Avatar initials="AM" bg="#2563EB" />
      <Avatar initials="KB" bg="#16A34A" />
      <Avatar initials="LT" bg="#DB2777" />
      <Avatar initials="YS" bg="#F59E0B" />
      <Avatar initials="AB" bg="#EF4444" />
    </div>
  );
}

function RatingStars({
  fullStars,
  totalStars,
}: {
  fullStars: number;
  totalStars: number;
}) {
  const safeTotal =
    Number.isFinite(totalStars) && totalStars > 0 ? Math.floor(totalStars) : 5;
  const safeRating =
    Number.isFinite(fullStars) && fullStars >= 0 ? fullStars : 0;
  const filledCount = Math.min(safeTotal, Math.max(0, Math.floor(safeRating)));
  const emptyCount = Math.max(0, safeTotal - filledCount);

  return (
    <div
      className="flex items-center gap-2"
      aria-label={`Rating ${safeRating}/${safeTotal}`}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: filledCount }).map((_, index) => (
          <StarIcon key={`f-${index}`} className="w-5 h-5 text-amber-500" />
        ))}
        {Array.from({ length: emptyCount }).map((_, index) => (
          <StarIcon key={`e-${index}`} className="w-5 h-5 text-neutral-300" />
        ))}
      </div>
      <span className="text-muted-foreground text-sm leading-none">
        ({safeRating.toFixed(1)})
      </span>
    </div>
  );
}
