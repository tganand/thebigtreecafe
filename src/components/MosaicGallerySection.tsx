import { useState, useEffect, useRef, useCallback } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const ALL_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, food1, food2, food3];

const SLOTS = [
  { top: "2%", left: "5%", w: "30%", h: "45%", rotate: "-3deg", z: 3 },
  { top: "8%", left: "38%", w: "25%", h: "35%", rotate: "2deg", z: 2 },
  { top: "0%", left: "68%", w: "28%", h: "48%", rotate: "-2deg", z: 4 },
  { top: "52%", left: "10%", w: "26%", h: "40%", rotate: "3deg", z: 2 },
  { top: "48%", left: "40%", w: "22%", h: "42%", rotate: "-4deg", z: 5 },
  { top: "55%", left: "66%", w: "30%", h: "38%", rotate: "2deg", z: 3 },
];

const AUTO_INTERVAL = 3000;
const IDLE_DELAY = 3000;

const MosaicGallerySection = () => {
  // Each slot gets an image index
  const [slotImages, setSlotImages] = useState(() =>
    SLOTS.map((_, i) => i % ALL_IMAGES.length)
  );
  const [changingSlot, setChangingSlot] = useState<number | null>(null);
  const nextSlotToChange = useRef(0);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPaused = useRef(false);

  const getNextImageForSlot = useCallback((currentImg: number) => {
    return (currentImg + 1) % ALL_IMAGES.length;
  }, []);

  const changeNextSlot = useCallback(() => {
    if (isPaused.current) return;
    const slot = nextSlotToChange.current;
    setChangingSlot(slot);

    // After fade-out (400ms), swap image
    setTimeout(() => {
      setSlotImages((prev) => {
        const next = [...prev];
        next[slot] = getNextImageForSlot(prev[slot]);
        return next;
      });
      // After swap, fade back in
      setTimeout(() => setChangingSlot(null), 50);
    }, 400);

    nextSlotToChange.current = (slot + 1) % SLOTS.length;
  }, [getNextImageForSlot]);

  const startAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(changeNextSlot, AUTO_INTERVAL);
  }, [changeNextSlot]);

  const stopAuto = useCallback(() => {
    if (autoTimer.current) {
      clearInterval(autoTimer.current);
      autoTimer.current = null;
    }
  }, []);

  const handleInteraction = useCallback(() => {
    isPaused.current = true;
    stopAuto();
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      isPaused.current = false;
      startAuto();
    }, IDLE_DELAY);
  }, [stopAuto, startAuto]);

  useEffect(() => {
    startAuto();
    return () => {
      stopAuto();
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [startAuto, stopAuto]);

  return (
    <section
      className="py-24 bg-background overflow-hidden"
      onPointerDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Glimpses
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Visual Journey
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="relative w-full" style={{ paddingBottom: "90%" }}>
          {SLOTS.map((slot, i) => {
            const isChanging = changingSlot === i;
            return (
              <div
                key={i}
                className="absolute rounded-2xl overflow-hidden shadow-xl border-2 border-background cursor-pointer"
                style={{
                  top: slot.top,
                  left: slot.left,
                  width: slot.w,
                  height: slot.h,
                  zIndex: slot.z,
                  transform: `rotate(${slot.rotate})`,
                  opacity: isChanging ? 0 : 1,
                  scale: isChanging ? "0.92" : "1",
                  transition: "opacity 0.4s ease, scale 0.4s ease",
                }}
                onClick={handleInteraction}
              >
                <img
                  src={ALL_IMAGES[slotImages[i]]}
                  alt={`Cafe moment ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MosaicGallerySection;
