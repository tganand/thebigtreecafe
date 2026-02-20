import { useRef, useState, useEffect, useCallback } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [
  { src: gallery1, alt: "Authentic Rajasthani Thali" },
  { src: gallery2, alt: "Outdoor seating under the big tree at sunset" },
  { src: gallery3, alt: "Masala chai served in earthen cups" },
  { src: gallery4, alt: "Jaisalmer fort view from the cafe terrace" },
  { src: gallery5, alt: "Rajasthani folk musicians performing" },
];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActive = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const centerX = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(centerX - elCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => container.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const scrollTo = (i: number) => {
    const el = itemRefs.current[i];
    const container = scrollRef.current;
    if (!el || !container) return;
    const targetScroll = el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
          Moments
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Life at The Big Tree
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </div>

      {/* Horizontal scrollable gallery */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-[calc(50vw-110px)] md:px-[calc(50vw-150px)] pb-6 scrollbar-hide snap-x snap-mandatory items-center"
        style={{ scrollPaddingInline: "calc(50vw - 110px)" }}
      >
        {images.map((img, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              onClick={() => scrollTo(i)}
              className="flex-none snap-center cursor-pointer"
              style={{
                width: isActive ? "220px" : "180px",
                transition: "width 0.4s ease",
              }}
            >
              <div
                style={{
                  aspectRatio: "9/16",
                  transition: "filter 0.4s ease, transform 0.4s ease, opacity 0.4s ease",
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                  transform: isActive ? "scale(1)" : "scale(0.88)",
                  opacity: isActive ? 1 : 0.5,
                }}
                className="w-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? "24px" : "8px",
              height: "8px",
              backgroundColor:
                i === activeIndex
                  ? "hsl(var(--primary))"
                  : "hsl(var(--muted-foreground) / 0.4)",
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
