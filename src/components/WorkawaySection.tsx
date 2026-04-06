import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Backpack, Heart, Coffee, Utensils, BedDouble } from "lucide-react";

const WorkawaySection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);
  const content = useScrollReveal("fade-up", 0.3);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            For Travellers
          </p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workaway with Us
          </h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div ref={content.ref} style={content.style} className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-lg shadow-primary/5">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Backpack className="h-8 w-8 text-primary" />
            <Heart className="h-6 w-6 text-destructive fill-destructive" />
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Free Food & Stay for Foreigners
          </h3>

          <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Are you a foreign traveller looking for an authentic Indian experience? Join us at The Big Tree Cafe & Restaurant through our Workaway program! Help us a few hours a day and enjoy <strong className="text-foreground">free food and free accommodation</strong> during your stay in Jaisalmer. It's a wonderful way to experience Rajasthani culture, make lifelong friends, and create unforgettable memories in the Golden City.
          </p>

          <div className="flex items-center justify-center gap-8 mb-8 text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <Utensils className="h-6 w-6 text-primary" />
              <span className="font-body text-xs font-medium">Free Food</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BedDouble className="h-6 w-6 text-primary" />
              <span className="font-body text-xs font-medium">Free Stay</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="font-body text-xs font-medium">Great Vibes</span>
            </div>
          </div>

          <a
            href="https://wa.me/919251171605?text=Hi!%20I'm%20interested%20in%20the%20Workaway%20program%20at%20The%20Big%20Tree%20Cafe."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-semibold px-8 py-4 text-base transition-all hover:scale-105 shadow-lg"
          >
            <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact for Workaway
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkawaySection;
