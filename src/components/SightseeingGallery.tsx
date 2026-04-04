import React, { useState } from "react";
import { Camera, X } from "lucide-react";
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
import img7 from "@/assets/gallery/sightseeing-7.jpg";

const items = [
  { title: "Golden Fort View", image: img1, className: "absolute top-10 left-[20%] rotate-[-5deg]" },
  { title: "City Heritage", image: img2, className: "absolute top-40 left-[25%] rotate-[-7deg]" },
  { title: "Desert Landscape", image: img3, className: "absolute top-5 left-[40%] rotate-[8deg]" },
  { title: "Scenic Beauty", image: img4, className: "absolute top-32 left-[55%] rotate-[10deg]" },
  { title: "Ancient Temple", image: img5, className: "absolute top-20 right-[35%] rotate-[2deg]" },
  { title: "Village Life", image: img6, className: "absolute top-24 left-[45%] rotate-[-7deg]" },
  { title: "Desert Camels", image: img7, className: "absolute top-8 left-[30%] rotate-[4deg]" },
];

const SightseeingGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Attractive CTA Button */}
      <div className="flex justify-center my-12">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="group relative overflow-hidden rounded-full px-8 py-4 font-display text-lg font-bold shadow-lg border-2 border-primary/30 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          animate={{
            boxShadow: [
              "0 0 0 0 hsla(var(--primary), 0.4)",
              "0 0 0 12px hsla(var(--primary), 0)",
              "0 0 0 0 hsla(var(--primary), 0)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <Camera className="h-5 w-5" />
            Explore Sightseeing Gallery
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
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
              className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>

            <DraggableCardContainer className="flex-1 flex items-center justify-center overflow-hidden">
              <p className="absolute top-8 left-0 right-0 text-center font-display text-3xl md:text-5xl font-bold text-foreground z-10">
                Jaisalmer Sightseeing
              </p>
              <p className="absolute top-20 md:top-24 left-0 right-0 text-center font-body text-sm md:text-base text-muted-foreground z-10 px-4">
                Drag the cards around — explore Jaisalmer where every journey becomes a story.
              </p>

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
