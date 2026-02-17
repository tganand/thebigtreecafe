import { Navbar, HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import { ContactSection, Footer } from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
