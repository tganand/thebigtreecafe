import { MapPin, Phone, Clock, UtensilsCrossed } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const divider = useScrollReveal("zoom-in", 0.15);
  const para1 = useScrollReveal("fade-up", 0.25);
  const para2 = useScrollReveal("fade-up", 0.4);
  const para3 = useScrollReveal("fade-up", 0.55);
  const info = useScrollReveal("fade-up", 0.65);

  return (
    <section id="about" className="py-24 bg-sand-gradient">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p
          ref={heading.ref}
          style={heading.style}
          className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4"
        >
          Our Story
        </p>
        <h2
          ref={divider.ref as React.RefObject<HTMLHeadingElement>}
          style={divider.style}
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8"
        >
          A Taste of the Golden City
        </h2>
        <div
          ref={para1.ref}
          style={{ ...para1.style, transformOrigin: "center" }}
          className="w-16 h-0.5 bg-primary mx-auto mb-8"
        />
        <p
          ref={para2.ref as React.RefObject<HTMLParagraphElement>}
          style={para2.style}
          className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
        >
          The Big Tree Cafe & Restaurant is a popular cafe in Jaisalmer located near Jaisalmer Fort.
          Known as one of the best cafes in Jaisalmer, we offer delicious food, a peaceful atmosphere,
          and beautiful rooftop views. Whether you are looking for a cafe in Jaisalmer or a restaurant
          near Jaisalmer Fort, we provide a great experience for tourists and locals alike.
        </p>
        <p
          ref={para2.ref as React.RefObject<HTMLParagraphElement>}
          style={para2.style}
          className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
        >
          Nestled in the heart of Jaisalmer's majestic Golden Fort, The Big Tree Cafe & Restaurant
          sits beneath a centuries-old tree that has witnessed the ebb and flow of desert life.
          Our café is a haven where travelers and locals come together to share stories over
          steaming cups of masala chai, hearty Rajasthani thalis, and dishes that carry the
          soul of this ancient land.
        </p>
        <p
          ref={para3.ref as React.RefObject<HTMLParagraphElement>}
          style={para3.style}
          className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
        >
          We take immense pride in serving authentic Rajasthani traditional food — from rich
          dal baati churma and fiery laal maas to delicate kachori and hand-rolled chapatis.
          Every dish is crafted by our experienced chefs using time-honoured recipes passed
          down through generations, prepared in a spotlessly clean and hygienic kitchen with
          the freshest local ingredients.
        </p>
        <p
          ref={para3.ref as React.RefObject<HTMLParagraphElement>}
          style={para3.style}
          className="font-body text-lg text-muted-foreground leading-relaxed"
        >
          Beyond food, we offer a real Rajasthani experience — breathtaking sunset views from
          our rooftop terrace, live folk music evenings, and the warmest desert hospitality that
          makes every guest feel like family. Whether you're here for a quick chai at sunrise or
          a royal dinner under the stars, The Big Tree promises an unforgettable taste of Rajasthan's
          Golden City.
        </p>

        {/* SEO-rich visible info block */}
        <div
          ref={info.ref}
          style={info.style}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left"
        >
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">Location &amp; Address</h3>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              The Big Tree Cafe and Restaurant is located near Jain Temples, Khejer Para,
              Manak Chowk, Dhoondha Para, Jaisalmer, Rajasthan 345001, India.
              We are situated inside the famous Jaisalmer Fort with stunning rooftop desert views.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">Opening Hours</h3>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Our The big tree cafe and resturant Open every day, Monday to Sunday, from 6:00 AM to 11:00 PM.
              Whether you want an early morning chai or a late dinner under the stars, we are here for you.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">Contact Us</h3>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Call or WhatsApp us at{" "}
              <a href="tel:+919251171605" className="text-primary hover:underline">+91 92511 71605</a>.
              Book a table, ask about our menu, or plan your visit to the best cafe in Jaisalmer.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="flex items-center gap-2 mb-3">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">Menu Highlights</h3>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Our menu features authentic Rajasthani thali, dal baati churma, laal maas, ker sangri,
              gatte ki sabzi, masala chai, fresh juices, wood-fired pizzas, pasta, pancakes, sandwiches,
              and a variety of Indian &amp; continental dishes — all freshly prepared with local ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
