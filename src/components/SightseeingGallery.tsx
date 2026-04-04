import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";

import img1 from "@/assets/gallery/sightseeing-1.jpg";
import img2 from "@/assets/gallery/sightseeing-2.jpg";
import img3 from "@/assets/gallery/sightseeing-3.jpg";
import img4 from "@/assets/gallery/sightseeing-4.jpg";
import img5 from "@/assets/gallery/sightseeing-5.jpg";
import img6 from "@/assets/gallery/sightseeing-6.jpg";

const galleryImages = [
  { src: img1, alt: "Tourists reading Kuldhara heritage sign", caption: "Kuldhara Heritage" },
  { src: img2, alt: "Explorers walking through ancient ruins", caption: "Ancient Ruins" },
  { src: img3, alt: "Tourists posing in a desert doorway", caption: "Desert Doorway" },
  { src: img4, alt: "Visitors with traditional wall art", caption: "Village Art" },
  { src: img5, alt: "Travelers on desert fort steps", caption: "Desert Explorers" },
  { src: img6, alt: "Panoramic view from historic site", caption: "Panoramic Views" },
];

const SightseeingGallery = () => {
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
    <div className="py-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Camera className="h-5 w-5 text-primary" />
          <p className="font-accent text-sm tracking-[0.25em] uppercase text-primary">Gallery</p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Real Moments from Our Tours
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {galleryImages.map((img, i) => {
          const isVisible = visibleItems.has(i);
          return (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className="relative group overflow-hidden rounded-2xl md:rounded-3xl w-full aspect-[4/3]"
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
  );
};

export default SightseeingGallery;
