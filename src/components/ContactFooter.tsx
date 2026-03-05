import { MapPin, Phone, Clock, TreePine } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);
  const { containerRef, getItemStyle } = useStaggerReveal(3, "slide-up", 0.1, 0.15);

  return (
    <section id="contact" className="py-24 bg-sand-gradient">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Visit Us
          </p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Way
          </h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 text-center">
          <div style={getItemStyle(0)} className="p-8 rounded-lg bg-card border border-border">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="font-body text-muted-foreground text-sm">
              Near Jain Temples, Khejer Para,<br />
              Manak Chowk, Dhoondha Para,<br />
              Jaisalmer 345001, India
            </p>
          </div>
          <div style={getItemStyle(1)} className="p-8 rounded-lg bg-card border border-border">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Hours</h3>
            <p className="font-body text-muted-foreground text-sm">
              Mon – Sun<br />
              6:00 AM – 11:00 PM<br />
              Open all days
            </p>
          </div>
          <div style={getItemStyle(2)} className="p-8 rounded-lg bg-card border border-border">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Contact</h3>
            <p className="font-body text-muted-foreground text-sm">
              <a href="tel:+919610601931" className="hover:text-primary transition-colors">+91 96106 01931</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footer = useScrollReveal("fade-up", 0);

  return (
    <footer className="py-10 bg-desert-brown text-gold-light/70">
      <div ref={footer.ref} style={footer.style} className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TreePine className="h-5 w-5 text-gold" />
          <span className="font-display text-lg font-bold text-gold">The Big Tree Cafe</span>
        </div>
        <p className="font-body text-xs tracking-widest uppercase">
          Jaisalmer, Rajasthan &middot; Est. 2020
        </p>
      </div>
    </footer>
  );
};

export { ContactSection, Footer };
