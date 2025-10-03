"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const sp = useSearchParams();

  function goTo(page: number) {
    const usp = new URLSearchParams(sp.toString());
    usp.set("page", String(page));
    router.push(`/courses?${usp.toString()}`);
  }

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => hasPrev && goTo(currentPage - 1)}
        className="px-3 py-1.5 rounded-md border disabled:opacity-50"
        disabled={!hasPrev}
      >
        Prev
      </button>
      <span className="text-sm text-muted-foreground">
        Page <span className="text-foreground">{currentPage}</span> of
        <span className="text-foreground"> {totalPages}</span>
      </span>
      <button
        onClick={() => hasNext && goTo(currentPage + 1)}
        className="px-3 py-1.5 rounded-md border disabled:opacity-50"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
