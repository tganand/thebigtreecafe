import { useScrollReveal } from "@/hooks/useScrollReveal";
import routardCover from "@/assets/routard-cover.png";
import routardReview from "@/assets/routard-review.jpeg";
import { BookOpen, ArrowRight } from "lucide-react";

const FeaturedInSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const bookImg = useScrollReveal("fade-up", 0.2);
  const arrow = useScrollReveal("fade-up", 0.35);
  const reviewImg = useScrollReveal("fade-up", 0.3);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <p ref={heading.ref} style={heading.style} className="font-accent text-sm md:text-lg tracking-[0.25em] uppercase text-primary">
              Featured In
            </p>
          </div>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
            Le Routard Travel Guide
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Recognized by France's most iconic travel guidebook — Le Routard recommends The Big Tree Café for its stunning views, warm hospitality, and authentic cuisine.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* Desktop & Tablet: side by side with curved arrow */}
        <div className="hidden sm:flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
          <div ref={bookImg.ref} style={bookImg.style} className="flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 bg-card">
              <img
                src={routardCover}
                alt="Le Routard India travel guide book cover"
                className="w-48 md:w-56 lg:w-64 h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Curved Arrow */}
          <div ref={arrow.ref} style={arrow.style} className="flex-shrink-0 hidden md:flex flex-col items-center gap-1">
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-primary">
              <path
                d="M5 50 C 20 50, 30 5, 50 5 C 60 5, 70 10, 75 20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                fill="none"
                strokeLinecap="round"
              />
              <polygon points="72,14 78,22 70,22" fill="currentColor" />
            </svg>
            <span className="font-accent text-xs text-primary tracking-widest uppercase">Our Review</span>
          </div>

          <div ref={reviewImg.ref} style={reviewImg.style} className="flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 bg-card p-3 md:p-4">
              <img
                src={routardReview}
                alt="Le Routard review of The Big Tree Café — praised for stunning fortress views and authentic vegetarian cuisine"
                className="w-64 md:w-80 lg:w-96 h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="sm:hidden flex flex-col items-center gap-6">
          <div ref={bookImg.ref} style={bookImg.style}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 bg-card">
              <img
                src={routardCover}
                alt="Le Routard India travel guide book cover"
                className="w-52 h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <span className="font-accent text-xs tracking-widest uppercase">What they wrote about us</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          <div ref={reviewImg.ref} style={reviewImg.style}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 bg-card p-3">
              <img
                src={routardReview}
                alt="Le Routard review of The Big Tree Café"
                className="w-full max-w-xs h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
