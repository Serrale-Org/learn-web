"use client";

import Dialog from "@/shared/components/Dialog";
import { useRouter } from "next/navigation";

type Props = {
  course: {
    slug: string;
    title: string;
    price?: string;
    thumbnailUrl?: string;
  };
};

export default function EnrollDialog({ course }: Props) {
  const router = useRouter();
  return (
    <Dialog
      title="Join to Unlock Your Learning Journey"
      description="Gain access to course content, quizzes, and more by enrolling in this course."
      primaryAction={() => {
        const usp = new URLSearchParams();
        usp.set("slug", course.slug);
        usp.set("title", course.title);
        if (course.price) usp.set("price", course.price);
        if (course.thumbnailUrl) usp.set("thumb", course.thumbnailUrl);
        router.push(`/payment?${usp.toString()}`);
      }}
      secondaryAction={() => {}}
      primaryActionText="Unlock Now"
      secondaryActionText="Cancel"
      trigger={
        <span className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold  hover:bg-primary/90 transition-colors">
          Enroll Now
        </span>
      }
      open={false}
    />
  );
}
