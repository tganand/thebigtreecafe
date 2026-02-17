const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-sand-gradient">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          A Taste of the Golden City
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
          Nestled in the heart of Jaisalmer, The Big Tree Cafe sits beneath a
          centuries-old tree that has witnessed the ebb and flow of desert life.
          Our cafe is a haven where travelers and locals come together to share
          stories over steaming cups of masala chai and hearty Rajasthani meals.
        </p>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          Every dish is crafted with love, using traditional recipes passed down
          through generations, celebrating the rich culinary heritage of
          Rajasthan's Golden City.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
