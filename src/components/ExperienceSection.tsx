import { Star, Music2, Sunset, UtensilsCrossed } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Sunset,
    title: "Desert Sunsets",
    description:
      "Watch the sky turn gold over the Thar Desert from our open-air terrace, a view that simply cannot be found anywhere else in Jaisalmer.",
  },
  {
    icon: UtensilsCrossed,
    title: "Rajasthani Cuisine",
    description:
      "From hearty Dal Baati Churma to fiery Laal Maas, every dish is prepared with traditional recipes and locally sourced spices.",
  },
  {
    icon: Music2,
    title: "Folk Music Evenings",
    description:
      "On select evenings, local folk artists perform live under the canopy of stars, bringing the culture of Rajasthan alive.",
  },
  {
    icon: Star,
    title: "Warm Hospitality",
    description:
      "At The Big Tree Cafe, every guest is family. Our team ensures you leave with a full heart and stories to take home.",
  },
];

const ExperienceSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);
  const { containerRef, getItemStyle } = useStaggerReveal(features.length, "flip-up", 0.1, 0.12);

  return (
    <section id="experience" className="py-24 bg-sand-gradient">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Why Visit Us
          </p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Experience
          </h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div ref={containerRef} className="grid sm:grid-cols-2 gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              style={getItemStyle(i)}
              className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="flex-none w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
