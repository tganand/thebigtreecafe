import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const MenuSection = lazy(() => import("@/components/MenuSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const SpecialSection = lazy(() => import("@/components/SpecialSection"));
const FeaturedInSection = lazy(() => import("@/components/FeaturedInSection"));
const CafeVibesSection = lazy(() => import("@/components/CafeVibesSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WorkawaySection = lazy(() => import("@/components/WorkawaySection"));
const Footer = lazy(() =>
  import("@/components/ContactFooter").then((m) => ({ default: m.Footer }))
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={null}>
          <ExperienceSection />
          <GallerySection />
          <MenuSection />
          <CafeVibesSection />
          <SpecialSection />
          <TestimonialsSection />
          <FeaturedInSection />
          <ServicesSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
