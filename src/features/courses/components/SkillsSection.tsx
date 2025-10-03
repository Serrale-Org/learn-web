import { CheckCircleIcon } from "lucide-react";

type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="">
      <h2 className="text-3xl text-balance font-semibold mb-6">
        Master These Skills <span className="text-secondary">with Us</span>
      </h2>

      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
