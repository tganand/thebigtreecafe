import React, { useState } from "react";
import { Camera, X, Sparkles, Images } from "lucide-react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { motion, AnimatePresence } from "motion/react";

import img1 from "@/assets/gallery/sightseeing-1.jpg";
import img2 from "@/assets/gallery/sightseeing-2.jpg";
import img3 from "@/assets/gallery/sightseeing-3.jpg";
import img4 from "@/assets/gallery/sightseeing-4.jpg";
import img5 from "@/assets/gallery/sightseeing-5.jpg";
import img6 from "@/assets/gallery/sightseeing-6.jpg";

const items = [
  { title: "Kuldhara Heritage", image: img1, className: "absolute top-[28%] left-[5%] md:left-[15%] rotate-[-5deg]" },
  { title: "Ancient Ruins", image: img2, className: "absolute top-[35%] left-[15%] md:left-[25%] rotate-[-7deg]" },
  { title: "Desert Doorway", image: img3, className: "absolute top-[25%] left-[30%] md:left-[38%] rotate-[8deg]" },
  { title: "Village Art", image: img4, className: "absolute top-[38%] left-[42%] md:left-[52%] rotate-[5deg]" },
  { title: "Desert Explorers", image: img5, className: "absolute top-[26%] right-[15%] md:right-[25%] rotate-[2deg]" },
  { title: "Panoramic Views", image: img6, className: "absolute top-[32%] left-[25%] md:left-[42%] rotate-[-4deg]" },
];

const SightseeingGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Premium CTA Button */}
      <div className="flex justify-center my-14">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative overflow-hidden rounded-2xl cursor-pointer border-0 bg-transparent p-0"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Animated glow border */}
          <motion.div
            className="absolute -inset-[2px] rounded-2xl opacity-75 blur-sm"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--gold, 43 96% 56%)), hsl(var(--primary)))",
            }}
            animate={{
              background: [
                "linear-gradient(0deg, hsl(var(--primary)), hsl(43 96% 56%), hsl(var(--primary)))",
                "linear-gradient(120deg, hsl(var(--primary)), hsl(43 96% 56%), hsl(var(--primary)))",
                "linear-gradient(240deg, hsl(var(--primary)), hsl(43 96% 56%), hsl(var(--primary)))",
                "linear-gradient(360deg, hsl(var(--primary)), hsl(43 96% 56%), hsl(var(--primary)))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute -inset-3 rounded-3xl border-2 border-primary/30"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Inner card */}
          <div className="relative flex items-center gap-4 rounded-2xl bg-card px-8 py-5 md:px-10 md:py-6 shadow-xl border border-border/50">
            {/* Icon container */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-md"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                <Images className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>

            {/* Text */}
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg md:text-xl font-bold text-foreground">
                  Explore Gallery
                </span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              </div>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                See real moments from our sightseeing tours
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              className="ml-2 text-primary"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* Fullscreen Gallery Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>

            {/* Title area - above the cards */}
            <div className="pt-6 pb-2 px-4 text-center z-20 relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Jaisalmer Sightseeing
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground mt-2">
                Drag the cards around — explore Jaisalmer where every journey becomes a story.
              </p>
            </div>

            {/* Cards area - takes remaining space */}
            <DraggableCardContainer className="flex-1 relative overflow-hidden">
              {items.map((item) => (
                <DraggableCardBody key={item.title} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SightseeingGallery;
