import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "The best meal I had in Jaisalmer! The Rajasthani thali was incredible and the view of the fort at sunset was absolutely magical. Will definitely be back.",
  },
  {
    name: "James Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Hidden gem! We stumbled upon The Big Tree Cafe and it turned out to be the highlight of our Rajasthan trip. Authentic food, warm people, and an atmosphere like no other.",
  },
  {
    name: "Ananya Gupta",
    location: "Delhi, India",
    rating: 5,
    text: "The masala chai here is the best I've ever had, and I've traveled all over India. The folk music in the evening made the experience truly unforgettable.",
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    text: "Sitting under that ancient tree with fairy lights and a hot meal – this is what travel memories are made of. A must-visit in Jaisalmer!",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-primary text-primary" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Guest Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary/40 mb-3" />
              <Stars count={t.rating} />
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                "{t.text}"
              </p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
