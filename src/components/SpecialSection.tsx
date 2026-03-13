import { Clock, MapPin, Star, Heart } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Clock, title: "Open All Day", desc: "From sunrise breakfast to late-night chai, we're here 6 AM – 11 PM every day." },
  { icon: MapPin, title: "Heart of Jaisalmer", desc: "Located inside the iconic Jaisalmer Fort, with stunning desert views from our rooftop terrace." },
  { icon: Star, title: "Top Rated", desc: "Loved by travellers from 50+ countries. Rated 4.8 on Google with 1000+ reviews." },
  { icon: Heart, title: "Made with Love", desc: "Every dish is prepared fresh using traditional Rajasthani recipes in a clean, hygienic kitchen." },
];

const SpecialSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);
  const desc = useScrollReveal("fade-up", 0.3);
  const { containerRef, getItemStyle } = useStaggerReveal(highlights.length, "rotate-in", 0.1, 0.12);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">Why Us</p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">What Makes Us Special</h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p ref={desc.ref as React.RefObject<HTMLParagraphElement>} style={desc.style} className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            More than just a restaurant — The Big Tree Cafe & Restaurant is a destination where culture, cuisine, and community come together under the golden Rajasthani sky.
          </p>
        </div>
        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <div key={item.title} style={getItemStyle(i)} className="bg-card rounded-2xl p-8 text-center shadow-md border border-primary/10 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
