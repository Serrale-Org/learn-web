import Image from "next/image";
import Link from "next/link";
import { PlusIcon, StarIcon } from "lucide-react";
import EnrollDialog from "./EnrollDialog";

type Course = {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl?: string;
  level?: string;
  certificationType?: string;
  price?: string;
  rating: number;
  reviewCount: number;
  description: string;
};

type CourseHeroProps = {
  course: Course;
};

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="w-full bg-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-4">
          <div className="flex items-center space-x-2  text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-foreground">
              Course
            </Link>
            <span>/</span>
            <span className="text-secondary">{course.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-lg">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(course.rating)
                        ? "text-secondary fill-secondary"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {course.rating} ({course.reviewCount} reviews)
              </span>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {course.title.split(" ").map((word, index) =>
                  index === 0 ? (
                    word
                  ) : (
                    <span key={index} className="text-secondary">
                      {" "}
                      {word}
                    </span>
                  )
                )}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl">
              {course.description}
            </p>

            {/* CTA and Price */}
            <div className="flex items-center justify-between">
              <EnrollDialog
                course={{
                  slug: course.slug,
                  title: course.title,
                  price: course.price,
                  thumbnailUrl: course.thumbnailUrl,
                }}
              />
              <div className="text-2xl font-semibold tracking-tight text-foreground">
                Br {course.price}
              </div>
            </div>
          </div>

          {/* Course Image */}
          <div className="relative">
            {course.thumbnailUrl && (
              <Image
                src={course.thumbnailUrl}
                alt={course.title}
                className="w-full aspect-video object-cover rounded-lg"
                width={600}
                height={400}
              />
            )}
            {/* Overlay with course count */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-2 flex items-center gap-2">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                <PlusIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">20+ Courses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
