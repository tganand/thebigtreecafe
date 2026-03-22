import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const divider = useScrollReveal("zoom-in", 0.15);
  const para1 = useScrollReveal("fade-up", 0.25);
  const para2 = useScrollReveal("fade-up", 0.4);
  const para3 = useScrollReveal("fade-up", 0.55);

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
      </div>
    </section>
  );
};

export default AboutSection;
