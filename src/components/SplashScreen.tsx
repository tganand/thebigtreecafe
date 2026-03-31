import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(onComplete, 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.1 } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, hsl(20 35% 7%) 0%, hsl(20 30% 12%) 100%)" }}
      >
        {/* Radial glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(30 80% 50% / 0.4), transparent 70%)" }}
        />

        <div className="relative flex flex-col items-center">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="The Big Tree Cafe & Restaurant"
            className="w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: phase === "hold" ? [1, 1.05, 1] : 1,
              rotate: 0,
            }}
            transition={{
              opacity: { duration: 0.6, ease: "easeOut" },
              scale: { duration: phase === "hold" ? 1.5 : 0.7, ease: "easeInOut", repeat: phase === "hold" ? Infinity : 0 },
              rotate: { duration: 0.6, ease: "easeOut" },
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            className="font-accent text-sm md:text-base tracking-[0.3em] uppercase mt-4"
            style={{ color: "hsl(38 75% 65%)" }}
          >
            Jaisalmer
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
            className="h-[1px] w-32 mt-3 origin-center"
            style={{ background: "linear-gradient(90deg, transparent, hsl(30 80% 50% / 0.6), transparent)" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
