"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const items = [
  {
    name: "David W",
    quote: "Enabled me to stay current with professional courses.",
    avatar:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jidan D",
    quote: "Enhanced my capabilities and confidence at work.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily T",
    quote: "Helped me transition into a new role with practical skills.",
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mike M",
    quote: "Helped me transition into a new role with practical skills.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Paul T",
    quote: "Helped me transition into a new role with practical skills.",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TestimonialsStrip() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  return (
    <section className="w-full mt-10">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <div className="text-4xl font-medium tracking-tight max-w-2xl mx-auto text-balance">
            Our <span className="font-semibold text-secondary">250k+</span>{" "}
            Satisfied Student Say
          </div>
        </div>
        <div className="mt-14 py-3 border-y border-border -rotate-3">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((t) => (
                <div
                  key={t.name}
                  className="min-w-lg mr-6 basis-full md:basis-1/3"
                >
                  <div className="text-center bg-secondary/5 p-5 rounded-lg grid place-items-center h-full">
                    <div className="size-24 rounded-full overflow-hidden flex items-center justify-center mb-3 ">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-neutral-700 mb-3 text-lg text-balance">
                      “{t.quote}”
                    </p>
                    <div className=" text-neutral-600 text-lg font-semibold">
                      {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
