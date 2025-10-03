type AboutSectionProps = {
  description: string;
};

export function AboutSection({ description }: AboutSectionProps) {
  return (
    <div className="rounded-lg h-fit">
      <h2 className="text-2xl font-semibold mb-3">
        About the <span className="text-secondary">Course</span>
      </h2>

      <p className="text-muted-foreground leading-relaxed line-clamp-4">
        {description}
      </p>
    </div>
  );
}
