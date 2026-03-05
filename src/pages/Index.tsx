import { lazy, Suspense } from "react";
import { Navbar, HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const MenuSection = lazy(() => import("@/components/MenuSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const SpecialSection = lazy(() => import("@/components/SpecialSection"));
const CafeVibesSection = lazy(() => import("@/components/CafeVibesSection"));
const ContactFooterModule = lazy(() =>
  import("@/components/ContactFooter").then((m) => ({
    default: () => (
      <>
        <m.ContactSection />
      </>
    ),
  }))
);
const Footer = lazy(() =>
  import("@/components/ContactFooter").then((m) => ({ default: m.Footer }))
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={null}>
          <ExperienceSection />
          <GallerySection />
          <CafeVibesSection />
          <MenuSection />
          <SpecialSection />
          <TestimonialsSection />
          <ContactFooterModule />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
