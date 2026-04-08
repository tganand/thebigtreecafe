import { useState } from "react";
const heroBg = "/hero-bg.jpg";
import { TreePine, Menu, X } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-desert-brown/90 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <TreePine className="h-6 w-6 text-gold" />
          <span className="font-cursive text-lg md:text-xl font-bold text-gold leading-tight">The Big Tree Cafe & Restaurant</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", href: "/#home" },
            { label: "About", href: "/#about" },
            { label: "Services", href: "/#services" },
            { label: "Reviews", href: "/#reviews" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm tracking-widest uppercase text-gold-light/80 hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-gold" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-desert-brown/95 backdrop-blur-sm border-t border-gold/10 px-6 py-4 space-y-3">
          {[
            { label: "Home", href: "/#home" },
            { label: "About", href: "/#about" },
            { label: "Services", href: "/#services" },
            { label: "Reviews", href: "/#reviews" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-sm tracking-widest uppercase text-gold-light/80 hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const icon = useScrollReveal("zoom-in", 0.2);
  const subtitle = useScrollReveal("blur-in", 0.35);
  const heading = useScrollReveal("fade-up", 0.5);
  const desc = useScrollReveal("fade-up", 0.7);
  const buttons = useScrollReveal("fade-up", 0.9);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Best cafe in Jaisalmer rooftop view at The Big Tree Cafe & Restaurant"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-6">
        <div ref={icon.ref} style={icon.style}>
          <TreePine className="h-12 w-12 text-gold mx-auto mb-4" />
        </div>
        <p ref={subtitle.ref as React.RefObject<HTMLParagraphElement>} style={subtitle.style} className="font-accent text-lg md:text-xl tracking-[0.3em] uppercase text-gold-light mb-4">
          Jaisalmer
        </p>
        <h1 ref={heading.ref as React.RefObject<HTMLHeadingElement>} style={heading.style} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold-light mb-6 leading-tight">
          The Big Tree Cafe
        </h1>
        <p ref={desc.ref as React.RefObject<HTMLParagraphElement>} style={desc.style} className="font-accent text-xl md:text-2xl text-gold-light/80 max-w-xl mx-auto mb-4">
          Best Cafe and Restaurant in Jaisalmer
        </p>
        <p ref={desc.ref as React.RefObject<HTMLParagraphElement>} style={desc.style} className="font-accent text-base md:text-lg text-gold-light/60 max-w-lg mx-auto mb-8">
          Authentic Rajasthani flavors under the golden desert sky
        </p>
        <div ref={buttons.ref} style={buttons.style} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setBookingOpen(true)}
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/80 transition-colors"
          >
            Book a Table
          </button>
          <a
            href="#menu"
            className="px-8 py-3 border border-gold-light text-gold-light font-body text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light/10 transition-colors"
          >
            Explore Menu
          </a>
        </div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export { Navbar, HeroSection };
