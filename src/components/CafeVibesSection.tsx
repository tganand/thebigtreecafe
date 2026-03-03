import { useEffect, useRef, useState } from "react";
import cafe1 from "@/assets/cafe-1.png";
import cafe2 from "@/assets/cafe-2.png";
import cafe3 from "@/assets/cafe-3.png";
import cafe4 from "@/assets/cafe-4.png";
import cafe5 from "@/assets/cafe-5.png";
import cafe6 from "@/assets/cafe-6.png";

const cafeImages = [
  { src: cafe1, alt: "Guest enjoying thali with a view", caption: "Rooftop Dining" },
  { src: cafe2, alt: "Panoramic rooftop seating area", caption: "Panoramic Views" },
  { src: cafe3, alt: "Sunset from the cafe terrace", caption: "Golden Sunsets" },
  { src: cafe4, alt: "Guest in traditional attire at the cafe", caption: "Cultural Vibes" },
  { src: cafe5, alt: "Jaisalmer fort golden hour view", caption: "Fort Views" },
  { src: cafe6, alt: "Colorful cushions with city panorama", caption: "Chill Corners" },
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Our Space
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Feel the Vibe
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-body text-sm md:text-base">
            Colorful cushions, golden sunsets, panoramic views of Jaisalmer — this is where memories are made.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-5" />
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {cafeImages.map((img, i) => {
            const isVisible = visibleItems.has(i);
            // Alternate tall/wide cards for visual interest
            const isLarge = i === 0 || i === 3;
            return (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                data-index={i}
                className={`relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer
                  ${isLarge ? "row-span-2" : ""}
                `}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div className={`w-full ${isLarge ? "aspect-[3/4]" : "aspect-square"} overflow-hidden rounded-2xl md:rounded-3xl`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-6">
                  <p className="text-white font-display text-lg md:text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
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
