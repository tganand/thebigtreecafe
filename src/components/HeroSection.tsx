import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { TreePine } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-desert-brown/90 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreePine className="h-6 w-6 text-gold" />
          <span className="font-display text-xl font-bold text-gold">The Big Tree Cafe</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Menu", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm tracking-widest uppercase text-gold-light/80 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="The Big Tree Cafe ambiance in Jaisalmer"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <TreePine className="h-12 w-12 text-gold mx-auto mb-4" />
        <p className="font-accent text-lg md:text-xl tracking-[0.3em] uppercase text-gold-light mb-4">
          Jaisalmer
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold-light mb-6 leading-tight">
          The Big Tree<br />Cafe
        </h1>
        <p className="font-accent text-xl md:text-2xl text-gold-light/80 max-w-xl mx-auto mb-8">
          Authentic Rajasthani flavors under the golden desert sky
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
