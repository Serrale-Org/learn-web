"use client";

import { useState } from "react";

type SearchBarProps = {
  initialQuery?: string;
  onSearch: (q: string) => void;
};

export function SearchBar({ initialQuery = "", onSearch }: SearchBarProps) {
  const [value, setValue] = useState(initialQuery);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value.trim());
      }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search courses..."
          className="flex-1 border border-neutral-200 rounded-md px-3 py-2 bg-transparent outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-black text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}
