import { MapPin, Phone, Clock, TreePine, ExternalLink, Instagram, Facebook } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const footer = useScrollReveal("fade-up", 0);

  return (
    <footer id="contact" className="py-16 bg-desert-brown text-gold-light/70">
      <div ref={footer.ref} style={footer.style} className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <TreePine className="h-7 w-7 text-gold" />
            <span className="font-display text-2xl font-bold text-gold">The Big Tree Cafe & Restaurant</span>
          </div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-light/50 mb-4">
            Jaisalmer, Rajasthan &middot; Est. 2020
          </p>
          <p className="font-body text-sm text-gold-light/40 max-w-md mx-auto leading-relaxed">
            A rooftop café & restaurant nestled in the golden fort city, serving authentic Rajasthani flavours with breathtaking desert views.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="rounded-2xl bg-gold-light/[0.04] border border-gold/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-primary" />
              <h4 className="font-display text-sm font-semibold text-gold">Hours</h4>
            </div>
            <div className="font-body text-xs leading-relaxed text-gold-light/60">
              <p>Mon – Sun</p>
              <p className="text-gold-light/80 font-medium">6:00 AM – 11:00 PM</p>
            </div>
          </div>

          <div className="rounded-2xl bg-gold-light/[0.04] border border-gold/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="h-4 w-4 text-primary" />
              <h4 className="font-display text-sm font-semibold text-gold">Call Us</h4>
            </div>
            <div className="font-body text-xs space-y-1.5">
              <a href="tel:+919251171605" className="block text-gold-light/60 hover:text-primary transition-colors">+91 92511 71605</a>
            </div>
          </div>

          <div className="rounded-2xl bg-gold-light/[0.04] border border-gold/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4 text-primary" />
              <h4 className="font-display text-sm font-semibold text-gold">Address</h4>
            </div>
            <p className="font-body text-xs leading-relaxed text-gold-light/60">
              Near Jain Temples, Khejer Para,<br />Manak Chowk, Jaisalmer 345001
            </p>
          </div>

          <a href="https://www.google.com/maps?q=26.91131982234425,70.91118548065123" target="_blank" rel="noopener noreferrer"
            className="rounded-2xl bg-primary/10 border border-primary/20 p-5 group hover:bg-primary/15 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <ExternalLink className="h-4 w-4 text-primary" />
              <h4 className="font-display text-sm font-semibold text-gold">Directions</h4>
            </div>
            <p className="font-body text-xs text-gold-light/60 mb-2">26.9113° N, 70.9112° E</p>
            <span className="font-body text-xs font-medium text-primary group-hover:underline underline-offset-2">Open in Google Maps →</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a href="https://www.instagram.com/the_big_tree8505_jaisalmer/" target="_blank" rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-gold-light/[0.08] border border-gold/15 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-colors">
            <Instagram className="h-5 w-5 text-gold-light/70 hover:text-primary" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61568547670539" target="_blank" rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-gold-light/[0.08] border border-gold/15 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-colors">
            <Facebook className="h-5 w-5 text-gold-light/70 hover:text-primary" />
          </a>
        </div>

        <div className="pt-8 border-t border-gold/10 text-center">
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-gold-light/30">
            &copy; {new Date().getFullYear()} The Big Tree Cafe & Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
