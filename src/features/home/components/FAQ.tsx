"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type QA = { q: string; a: string };

const qas: QA[] = [
  {
    q: "How do I enroll in a course?",
    a: "Click 'Browse courses', select a course, and hit Enroll.",
  },
  {
    q: "Is financial aid available?",
    a: "We offer occasional scholarships and discounts.",
  },
  {
    q: "What happens if I miss a class?",
    a: "All lessons are self-paced. Rewatch anytime.",
  },
  {
    q: "What is the course duration?",
    a: "Most courses are 2–6 weeks, self-paced.",
  },
  {
    q: "Can I interact with other learners?",
    a: "Yes, via discussions and community pods (coming soon).",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 py-20">
      <div>
        <h2 className="text-4xl font-medium tracking-tight mb-3 text-balance">
          Need Help? Check Our <span className="text-primary">FAQs</span>
        </h2>
        <p className="text-muted-foreground text-lg  mb-6 text-balance">
          Find answers to common questions in our FAQs to guide you through your
          learning experience.
        </p>
        <Link
          href="#contact"
          className="px-5 py-3 rounded-md bg-secondary text-secondary-foreground inline-block font-semibold"
        >
          Contact
        </Link>
      </div>
      <div className="divide-y divide-border">
        {qas.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={item.q} className="py-6">
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span className=" text-xl">{item.q}</span>
                <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
              </button>
              {isOpen && (
                <div className="text-muted-foreground mt-3">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
