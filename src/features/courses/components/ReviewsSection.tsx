import Image from "next/image";
import { StarIcon } from "lucide-react";

type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
};

type ReviewsSectionProps = {
  reviews: Review[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <div className="bg-muted rounded-lg  p-6">
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <Image
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              width={40}
              height={40}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-foreground">{review.name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-secondary fill-secondary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
