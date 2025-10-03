"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials as items } from "../data/testimonials";

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
        <div className="mt-14 py-3 border-y border-border rotate-2">
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
