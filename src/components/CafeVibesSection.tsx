import { useEffect, useRef, useState } from "react";
import cafe1 from "@/assets/cafe-1.png";
import cafe2 from "@/assets/cafe-2.png";
import cafe3 from "@/assets/cafe-3.png";
import cafe4 from "@/assets/cafe-4.png";
import cafe5 from "@/assets/cafe-5.png";
import cafe6 from "@/assets/cafe-6.png";

const cafeImages = [
  { src: cafe1, alt: "Guest enjoying thali with a view", caption: "Rooftop Dining" },
  { src: cafe6, alt: "Colorful cushions with city panorama", caption: "Chill Corners" },
  { src: cafe2, alt: "Panoramic rooftop seating area", caption: "Panoramic Views" },
  { src: cafe5, alt: "Jaisalmer fort golden hour view", caption: "Fort Views" },
  { src: cafe4, alt: "Guest in traditional attire at the cafe", caption: "Cultural Vibes" },
  { src: cafe3, alt: "Sunset from the cafe terrace", caption: "Golden Sunsets" },
];

const CafeVibesSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">Our Space</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Feel the Vibe</h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-body text-sm md:text-base">
            Colorful cushions, golden sunsets, panoramic views of Jaisalmer — this is where memories are made.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-5" />
        </div>

        {/* Balanced grid: tight spacing, no awkward gaps on mobile */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-items-center">
          {cafeImages.map((img, i) => {
            const isVisible = visibleItems.has(i);
            return (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                data-index={i}
                className="relative group overflow-hidden rounded-2xl md:rounded-3xl w-full max-w-sm aspect-[4/3]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.45s ease ${i * 0.07}s, transform 0.45s ease ${i * 0.07}s`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                  <p className="text-white font-display text-xs sm:text-sm md:text-base font-semibold">
                    {img.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CafeVibesSection;
