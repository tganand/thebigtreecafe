import React from "react";
import { motion } from "motion/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import priyaImg from "@/assets/avatars/priya.jpg";
import jamesImg from "@/assets/avatars/james.jpg";
import ananyaImg from "@/assets/avatars/ananya.jpg";
import marcoImg from "@/assets/avatars/marco.jpg";
import rajeshImg from "@/assets/avatars/rajesh.jpg";
import sophieImg from "@/assets/avatars/sophie.jpg";
import meeraImg from "@/assets/avatars/meera.jpg";
import tomImg from "@/assets/avatars/tom.jpg";
import arjunImg from "@/assets/avatars/arjun.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mumbai, India",
    text: "The best meal I had in Jaisalmer! The Rajasthani thali was incredible and the view of the fort at sunset was absolutely magical. Will definitely be back.",
    image: priyaImg,
  },
  {
    name: "James Mitchell",
    role: "London, UK",
    text: "Hidden gem! We stumbled upon The Big Tree Cafe and it turned out to be the highlight of our Rajasthan trip. Authentic food, warm people, and an atmosphere like no other.",
    image: jamesImg,
  },
  {
    name: "Ananya Gupta",
    role: "Delhi, India",
    text: "The masala chai here is the best I've ever had, and I've traveled all over India. The folk music in the evening made the experience truly unforgettable.",
    image: ananyaImg,
  },
  {
    name: "Marco Rossi",
    role: "Milan, Italy",
    text: "Sitting under that ancient tree with fairy lights and a hot meal – this is what travel memories are made of. A must-visit in Jaisalmer!",
    image: marcoImg,
  },
  {
    name: "Rajesh Kumar",
    role: "Jaipur, India",
    text: "Every time I visit Jaisalmer, The Big Tree Cafe is my first stop. The dal baati churma is just like home cooking. Love the rooftop vibes!",
    image: rajeshImg,
  },
  {
    name: "Sophie Laurent",
    role: "Paris, France",
    text: "A magical place where time stands still. The ambiance under the tree at night with candles and music is something you won't find anywhere else in Rajasthan.",
    image: sophieImg,
  },
  {
    name: "Meera Patel",
    role: "Ahmedabad, India",
    text: "Came here for breakfast and stayed till dinner! The pancakes are fluffy, the coffee is strong, and the staff treats you like family. Absolutely loved it.",
    image: meeraImg,
  },
  {
    name: "Tom Walker",
    role: "Sydney, Australia",
    text: "Best sunset views paired with incredible food. The laal maas was spicy perfection. This cafe alone is worth the trip to Jaisalmer.",
    image: tomImg,
  },
  {
    name: "Arjun Reddy",
    role: "Hyderabad, India",
    text: "The vibe here is unmatched – live music, fairy lights, and the most genuine Rajasthani hospitality. The thali is a must-try for every foodie!",
    image: arjunImg,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({
  className,
  testimonials: items,
  duration = 10,
}: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {items.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-border bg-card shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  "{text}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-display text-sm font-semibold text-foreground tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="font-body text-xs text-muted-foreground leading-5">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p
            ref={heading.ref}
            style={heading.style}
            className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4"
          >
            Guest Reviews
          </p>
          <h2
            ref={title.ref as React.RefObject<HTMLHeadingElement>}
            style={title.style}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            What People Say
          </h2>
          <div
            ref={divider.ref}
            style={divider.style}
            className="w-16 h-0.5 bg-primary mx-auto"
          />
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
