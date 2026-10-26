"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import person1 from "@/assest/person1.png";
import person2 from "@/assest/person2.png";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical. Every Detail Was Perfectly Planned - The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michaele Chen",
    location: "Singapore",
    photo: person1,
  },
  {
    quote:
      "Staye Allyss Adventures Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Staye Allyss",
    location: "New York, USA",
    photo: person2,
  },
  {
    quote:
      "The Patagonia Trek Was The Adventure Of A Lifetime. Seamless Organization, Stunning Landscapes, And A Team That Truly Cared About Every Traveler.",
    name: "Amara Okafor",
    location: "London, UK",
    photo: person2,
  },
  {
    quote:
      "From The First Booking To The Final Day, Everything Was Flawless. The Attention To Detail Made Our Honeymoon Absolutely Perfect.",
    name: "Marco Rossi",
    location: "Rome, Italy",
    photo: person1,
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <Card className="h-full gap-0 rounded-sm py-0 shadow-none ring-foreground/10">
      <div className="flex h-full">
        <CardContent className="flex flex-1 flex-col justify-between p-6">
          <p className="text-sm leading-relaxed font-bold text-foreground">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-6">
            <p className="text-sm font-medium text-[#00c2cb]">
              &mdash; {testimonial.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              &mdash; {testimonial.location}
            </p>
          </div>
        </CardContent>
        <Image
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-40 shrink-0 object-cover"
        />
      </div>
    </Card>
  );
}

export function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = [
    testimonials[start % testimonials.length],
    testimonials[(start + 1) % testimonials.length],
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl tracking-tight text-foreground md:text-5xl">
              What Travelers Say
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => setStart((s) => (s - 1 + testimonials.length) % testimonials.length)}
              className="flex size-11 items-center justify-center rounded-full ring-1 ring-foreground/15 text-foreground transition-colors hover:bg-foreground/5"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => setStart((s) => (s + 1) % testimonials.length)}
              className="flex size-11 items-center justify-center rounded-full ring-1 ring-foreground/15 text-foreground transition-colors hover:bg-foreground/5"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
