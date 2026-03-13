import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import desertSafariImg from "@/assets/services/desert-safari.jpg";
import hotelRoomImg from "@/assets/services/hotel-room.jpg";

const services = [
  {
    title: "Desert Safari",
    subtitle: "Explore the Thar Desert",
    description: "Experience the magic of Rajasthan's golden dunes with our curated desert adventures — camel rides, jeep safaris, and camping under the stars.",
    image: desertSafariImg,
    link: "/desert-safari",
    buttonText: "Explore Activities",
  },
  {
    title: "Heritage Rooms",
    subtitle: "Stay in the Golden Fort",
    description: "Rest in beautifully appointed rooms with traditional Rajasthani décor, stunning fort views, and warm desert hospitality.",
    image: hotelRoomImg,
    link: "/hotel-rooms",
    buttonText: "View Rooms",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);

  return (
    <section className="py-24 bg-sand-gradient">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Our Services
          </p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beyond the Table
          </h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => navigate(service.link)}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] text-left border-0 bg-transparent p-0 cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-light/80 mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/70 mb-4 max-w-sm">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold group-hover:text-gold-light transition-colors">
                  {service.buttonText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
