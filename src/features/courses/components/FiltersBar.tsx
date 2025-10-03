"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const categories = [
  { key: "dev", label: "Development" },
  { key: "design", label: "Design" },
  { key: "marketing", label: "Marketing" },
  { key: "data", label: "Data" },
];

const levels = [
  { key: "beginner", label: "Beginner" },
  { key: "intermediate", label: "Intermediate" },
  { key: "advanced", label: "Advanced" },
];

export function FiltersBar({ initialQuery }: { initialQuery?: string }) {
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState(initialQuery ?? "");
  const activeCategory = sp.get("category") ?? "";
  const activeLevel = sp.get("level") ?? "";

  function update(params: Record<string, string | null>) {
    const usp = new URLSearchParams(sp.toString());
    Object.entries(params).forEach(([k, v]) => {
      if (v === null || v === "") usp.delete(k);
      else usp.set(k, String(v));
    });
    usp.delete("page");
    router.push(`/courses?${usp.toString()}`);
  }

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          update({ q });
        }}
        className="flex items-center gap-2"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search courses..."
          className="flex-1 border border-neutral-200 rounded-md px-3 py-2 bg-transparent outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-primary text-secondary-foreground"
        >
          Search
        </button>
      </form>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {categories.map((c) => {
          const isActive = activeCategory === c.key;
          return (
            <button
              key={c.key}
              onClick={() => update({ category: isActive ? null : c.key })}
              className={`px-3 py-1.5 rounded-full border text-sm ${
                isActive
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "border-border text-foreground"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {levels.map((l) => {
          const isActive = activeLevel === l.key;
          return (
            <button
              key={l.key}
              onClick={() => update({ level: isActive ? null : l.key })}
              className={`px-3 py-1.5 rounded-full border text-sm ${
                isActive
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "border-border text-foreground"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
