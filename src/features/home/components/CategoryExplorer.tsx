type Category = { key: string; name: string; desc: string; image: string };
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories: Category[] = [
  {
    key: "data",
    name: "Data Analytics",
    desc: "Master modern data workflows and tools",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: "marketing",
    name: "Marketing",
    desc: "Learn content and growth strategies",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: "uiux",
    name: "UI/UX",
    desc: "Design delightful, usable experiences",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function CategoryExplorer() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className=" flex justify-between items-center">
        <h2 className="text-4xl max-w-2xl text-balance font-medium tracking-tight">
          Start Exploring: Find Your Perfect{" "}
          <span className="text-primary">Category</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-sm">
          Dive into our wide range of categories and discover the ideal course
          to match your interests and goals.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link
            key={c.key}
            href={`/?q=${encodeURIComponent(c.name)}`}
            className="rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start gap-5 justify-between h-52">
              <div className="h-full flex-1 rounded-lg overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-end flex-col h-full justify-between flex-1 ">
                <div>
                  <h3 className="font-semibold mb-1 text-xl line-clamp-2 leading-8">
                    {c.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">{c.desc}</p>
                </div>

                <span className="inline-flex items-center justify-center size-14 bg-primary text-primary-foreground rounded-full border border-border">
                  <ArrowUpRightIcon className="size-6" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
