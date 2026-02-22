import { useRef, useState, useEffect, useCallback } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const BASE_IMAGES = [
  { src: gallery1, alt: "Pasta with Jaisalmer fort view" },
  { src: gallery2, alt: "Rooftop seating at sunset with city lights" },
  { src: gallery3, alt: "Guests enjoying sunset at the terrace" },
  { src: gallery4, alt: "Chai with a view of Jaisalmer" },
  { src: gallery5, alt: "Rooftop dining area with fort view" },
];

// Triple the images for infinite loop illusion
const images = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];
const TOTAL = BASE_IMAGES.length;

const ITEM_W = 200;
const GAP = 16;

const AUTO_SCROLL_INTERVAL = 3000; // ms between auto-scrolls
const USER_IDLE_DELAY = 3000; // ms after manual scroll to resume auto

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(TOTAL);
  const isJumping = useRef(false);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const userIdleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isUserScrolling = useRef(false);

  const getItemCenter = (i: number) => {
    const el = itemRefs.current[i];
    if (!el) return 0;
    return el.offsetLeft + el.offsetWidth / 2;
  };

  const scrollTo = useCallback((i: number) => {
    const el = itemRefs.current[i];
    const container = scrollRef.current;
    if (!el || !container) return;
    const targetScroll = el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, []);

  const autoScrollNext = useCallback(() => {
    if (isUserScrolling.current) return;
    setActiveIndex((prev) => {
      const next = prev + 1;
      scrollTo(next);
      return prev; // actual update happens via scroll listener
    });
  }, [scrollTo]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    autoScrollTimer.current = setInterval(autoScrollNext, AUTO_SCROLL_INTERVAL);
  }, [autoScrollNext]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  }, []);

  const handleUserInteraction = useCallback(() => {
    isUserScrolling.current = true;
    stopAutoScroll();
    if (userIdleTimer.current) clearTimeout(userIdleTimer.current);
    userIdleTimer.current = setTimeout(() => {
      isUserScrolling.current = false;
      startAutoScroll();
    }, USER_IDLE_DELAY);
  }, [stopAutoScroll, startAutoScroll]);

  const updateActive = useCallback(() => {
    const container = scrollRef.current;
    if (!container || isJumping.current) return;
    const centerX = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(centerX - elCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);

    if (closest <= 1) {
      const targetI = closest + TOTAL;
      isJumping.current = true;
      const targetScroll = getItemCenter(targetI) - container.clientWidth / 2;
      container.scrollLeft = targetScroll;
      setActiveIndex(targetI);
      setTimeout(() => { isJumping.current = false; }, 50);
    } else if (closest >= images.length - 2) {
      const targetI = closest - TOTAL;
      isJumping.current = true;
      const targetScroll = getItemCenter(targetI) - container.clientWidth / 2;
      container.scrollLeft = targetScroll;
      setActiveIndex(targetI);
      setTimeout(() => { isJumping.current = false; }, 50);
    }
  }, []);

  // Init scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const raf = requestAnimationFrame(() => {
      const el = itemRefs.current[TOTAL];
      if (el) {
        container.scrollLeft = el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2;
      }
      startAutoScroll();
    });
    return () => {
      cancelAnimationFrame(raf);
      stopAutoScroll();
      if (userIdleTimer.current) clearTimeout(userIdleTimer.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  // Scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActive, { passive: true });
    return () => container.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  // Detect manual interaction
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onTouch = () => handleUserInteraction();
    const onWheel = () => handleUserInteraction();
    const onPointerDown = () => handleUserInteraction();
    container.addEventListener("touchstart", onTouch, { passive: true });
    container.addEventListener("wheel", onWheel, { passive: true });
    container.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      container.removeEventListener("touchstart", onTouch);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("pointerdown", onPointerDown);
    };
  }, [handleUserInteraction]);

  const activeBase = activeIndex % TOTAL;

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

      {/* Horizontal looping gallery */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory items-center"
        style={{ gap: `${GAP}px`, paddingInline: "calc(50vw - 100px)" }}
      >
        {images.map((img, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              onClick={() => scrollTo(i)}
              className="flex-none snap-center cursor-pointer"
              style={{ width: `${ITEM_W}px` }}
            >
              <div
                className="w-full rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: "9/16",
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                  transform: isActive ? "scale(1)" : "scale(0.88)",
                  opacity: isActive ? 1 : 0.5,
                  transition: "filter 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
                }}
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

      {/* Dot indicators — only for base set */}
      <div className="flex justify-center gap-2 mt-6">
        {BASE_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              // scroll to the nearest copy in the middle set
              const target = TOTAL + i;
              scrollTo(target);
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeBase ? "24px" : "8px",
              height: "8px",
              backgroundColor:
                i === activeBase
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
