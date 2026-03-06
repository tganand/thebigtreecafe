import { MapPin, Phone, Clock, TreePine } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { LocationMap } from "@/components/LocationMap";

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
  const mapReveal = useScrollReveal("slide-up", 0.2);
  const rightReveal = useScrollReveal("slide-up", 0.3);

  return (
    <footer className="py-12 bg-desert-brown text-gold-light/70">
      <div ref={footer.ref} style={footer.style} className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left: Map */}
          <div ref={mapReveal.ref as React.RefObject<HTMLDivElement>} style={mapReveal.style} className="flex-shrink-0">
            <LocationMap />
          </div>

          {/* Center: Branding */}
          <div className="text-center flex-1 pt-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <TreePine className="h-6 w-6 text-gold" />
              <span className="font-display text-xl font-bold text-gold">The Big Tree Cafe</span>
            </div>
            <p className="font-body text-xs tracking-widest uppercase mb-6">
              Jaisalmer, Rajasthan &middot; Est. 2020
            </p>
            <p className="font-body text-xs text-gold-light/50 max-w-xs mx-auto leading-relaxed">
              A rooftop café nestled in the golden fort city, serving fresh flavours with a view of ancient Jain temples.
            </p>
          </div>

          {/* Right: Quick Info */}
          <div ref={rightReveal.ref as React.RefObject<HTMLDivElement>} style={rightReveal.style} className="flex-shrink-0 w-full md:w-auto">
            <div className="space-y-5">
              <div>
                <h4 className="font-display text-sm font-semibold text-gold mb-2">Opening Hours</h4>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="font-body text-xs leading-relaxed">
                    <p>Mon – Sun</p>
                    <p>6:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold mb-2">Get in Touch</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="tel:+919610601931" className="font-body text-xs hover:text-primary transition-colors">
                      +91 96106 01931
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="https://wa.me/916377598501" target="_blank" rel="noopener noreferrer" className="font-body text-xs hover:text-primary transition-colors">
                      +91 63775 98501 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold mb-2">Address</h4>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="font-body text-xs leading-relaxed">
                    Near Jain Temples, Khejer Para,<br />
                    Manak Chowk, Jaisalmer 345001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gold/10 text-center">
          <p className="font-body text-[10px] tracking-widest uppercase text-gold-light/40">
            &copy; {new Date().getFullYear()} The Big Tree Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { ContactSection, Footer };
