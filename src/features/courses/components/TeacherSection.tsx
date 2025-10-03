import Image from "next/image";
import { StarIcon } from "lucide-react";

type Teacher = {
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  bio: string;
};

type TeacherSectionProps = {
  teacher: Teacher;
};

export function TeacherSection({ teacher }: TeacherSectionProps) {
  return (
    <div className="rounded-lg border border-border p-6 bg-muted h-fit">
      <h2 className="text-2xl font-semibold mb-3">Course Teacher</h2>

      <div className="space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 text-secondary fill-secondary" />
          <span className="text-sm text-muted-foreground">
            {teacher.rating} ({teacher.reviewCount} reviews)
          </span>
        </div>

        {/* Bio */}
        <p className="text-muted-foreground leading-relaxed">{teacher.bio}</p>

        {/* Teacher Info */}
        <div className="flex items-center gap-3 pt-3">
          <Image
            src={teacher.avatar}
            alt={teacher.name}
            className="w-12 h-12 rounded-full object-cover"
            width={48}
            height={48}
          />
          <div>
            <h3 className="font-semibold text-foreground">{teacher.name}</h3>
            <p className="text-sm text-muted-foreground">Course Instructor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
