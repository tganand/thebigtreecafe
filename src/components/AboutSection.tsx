import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const divider = useScrollReveal("zoom-in", 0.15);
  const para1 = useScrollReveal("fade-up", 0.25);
  const para2 = useScrollReveal("fade-up", 0.4);

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
          Nestled in the heart of Jaisalmer, The Big Tree Cafe sits beneath a
          centuries-old tree that has witnessed the ebb and flow of desert life.
          Our cafe is a haven where travelers and locals come together to share
          stories over steaming cups of masala chai and hearty Rajasthani meals.
        </p>
        <p
          className="font-body text-lg text-muted-foreground leading-relaxed"
          style={{ opacity: para2.isVisible ? 1 : 0, transform: para2.isVisible ? "translate3d(0,0,0)" : "translate3d(0,40px,0)", transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s" }}
        >
          Every dish is crafted with love, using traditional recipes passed down
          through generations, celebrating the rich culinary heritage of
          Rajasthan's Golden City.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
