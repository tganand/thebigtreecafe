import { useEffect, useRef, useState, useCallback } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "blur-in"
  | "slide-up"
  | "rotate-in"
  | "spring-up";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const TRANSFORM_MAP: Record<RevealVariant, { from: string; to: string }> = {
  "fade-up": {
    from: "translate3d(0, 60px, 0) scale(0.97)",
    to: "translate3d(0, 0, 0) scale(1)",
  },
  "fade-down": {
    from: "translate3d(0, -60px, 0) scale(0.97)",
    to: "translate3d(0, 0, 0) scale(1)",
  },
  "fade-left": {
    from: "translate3d(-80px, 0, 0)",
    to: "translate3d(0, 0, 0)",
  },
  "fade-right": {
    from: "translate3d(80px, 0, 0)",
    to: "translate3d(0, 0, 0)",
  },
  "zoom-in": {
    from: "scale(0.8)",
    to: "scale(1)",
  },
  "zoom-out": {
    from: "scale(1.15)",
    to: "scale(1)",
  },
  "flip-up": {
    from: "perspective(1000px) rotateX(15deg) translate3d(0, 40px, 0)",
    to: "perspective(1000px) rotateX(0deg) translate3d(0, 0, 0)",
  },
  "blur-in": {
    from: "translate3d(0, 30px, 0) scale(0.98)",
    to: "translate3d(0, 0, 0) scale(1)",
  },
  "slide-up": {
    from: "translate3d(0, 100px, 0)",
    to: "translate3d(0, 0, 0)",
  },
  "rotate-in": {
    from: "rotate(-3deg) translate3d(0, 50px, 0) scale(0.96)",
    to: "rotate(0deg) translate3d(0, 0, 0) scale(1)",
  },
  "spring-up": {
    from: "translate3d(0, 80px, 0) scale(0.9)",
    to: "translate3d(0, 0, 0) scale(1)",
  },
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  variant: RevealVariant = "fade-up",
  delay: number = 0,
  options?: UseScrollRevealOptions
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } = options || {};

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const transforms = TRANSFORM_MAP[variant];
  const isBlur = variant === "blur-in";

  // Before JS hydrates, content is fully visible (SEO-friendly).
  // After hydration, animations kick in.
  const style: React.CSSProperties = !hasHydrated
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? transforms.to : transforms.from,
        filter: isBlur ? (isVisible ? "blur(0px)" : "blur(8px)") : undefined,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s${isBlur ? `, filter 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s` : ""}`,
        willChange: "opacity, transform",
      };

  return { ref, style, isVisible };
}

/** Hook for staggered children reveals */
export function useStaggerReveal(
  count: number,
  variant: RevealVariant = "fade-up",
  baseDelay: number = 0,
  stagger: number = 0.1,
  options?: UseScrollRevealOptions
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.08, rootMargin = "0px 0px -30px 0px", once = true } = options || {};

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const getItemStyle = useCallback(
    (index: number): React.CSSProperties => {
      if (!hasHydrated) return {};

      const transforms = TRANSFORM_MAP[variant];
      const delay = baseDelay + index * stagger;
      const isBlur = variant === "blur-in";

      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? transforms.to : transforms.from,
        filter: isBlur ? (isVisible ? "blur(0px)" : "blur(8px)") : undefined,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s${isBlur ? `, filter 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s` : ""}`,
        willChange: "opacity, transform",
      };
    },
    [hasHydrated, isVisible, variant, baseDelay, stagger]
  );

  return { containerRef, getItemStyle, isVisible };
}
