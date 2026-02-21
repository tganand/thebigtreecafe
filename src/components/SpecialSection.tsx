import { Clock, MapPin, Star, Heart } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "Open All Day",
    desc: "From sunrise breakfast to late-night chai, we're here 7 AM – 11 PM every day.",
  },
  {
    icon: MapPin,
    title: "Heart of Jaisalmer",
    desc: "Located near the iconic Jaisalmer Fort, with stunning desert views from our terrace.",
  },
  {
    icon: Star,
    title: "Top Rated",
    desc: "Loved by travellers from 50+ countries. Rated 4.8 on Google with 1000+ reviews.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every dish is prepared fresh using traditional recipes passed down through generations.",
  },
];

const SpecialSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Why Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Makes Us Special
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            More than just a cafe — The Big Tree is a destination where culture, cuisine, and community come together under the golden Rajasthani sky.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 text-center shadow-md border border-primary/10 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
