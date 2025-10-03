import Image from "next/image";

type CourseCardProps = {
  title: string;
  slug: string;
  thumbnailUrl?: string;
  level?: string;
  certificationType?: string;
  price?: number;
};

export function CourseCard({
  title,
  slug,
  thumbnailUrl,
  level,
  certificationType,
  price,
}: CourseCardProps) {
  return (
    <a href={`/courses/${slug}`} className="">
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={title}
          className="w-full aspect-video object-cover rounded-lg"
          width={320}
          height={180}
        />
      ) : (
        <div className="w-full h-40 bg-neutral-100" />
      )}
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-xl line-clamp-2 tracking-tight">
            {title}
          </h3>
          {price && (
            <span className=" text-xl font-semibold tracking-tight">
              Br {price}
            </span>
          )}
        </div>
        <div className="text-sm text-neutral-500 flex items-center gap-2">
          {level && <span className="uppercase">{level}</span>}
          {certificationType && (
            <span className="px-1.5 py-0.5 rounded bg-neutral-100">
              {certificationType}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
