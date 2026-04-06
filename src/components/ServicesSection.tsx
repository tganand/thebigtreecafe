import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import desertSafariImg from "@/assets/services/desert-safari.jpg";
import hotelRoomImg from "@/assets/services/hotel-room.jpg";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import adventureImg from "@/assets/activities/adventure.jpg";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";
import specialEventsImg from "@/assets/activities/special-events.jpg";

const services = [
  {
    title: "Desert Safari",
    subtitle: "Explore the Thar Desert",
    description: "Camel safaris, overnight camping, and multi-day expeditions across the golden dunes of Rajasthan.",
    image: desertSafariImg,
    link: "/desert-safari",
    buttonText: "Explore Safaris",
  },
  {
    title: "Desert Camp",
    subtitle: "Camp Under the Stars",
    description: "From budget Swiss tents to ultra-luxury camps — experience the magic of sleeping in the Thar Desert.",
    image: desertCampImg,
    link: "/desert-camp",
    buttonText: "View Camps",
  },
  {
    title: "Adventure",
    subtitle: "Thrill & Adrenaline",
    description: "Quad biking, jeep safaris, parasailing, paramotoring, and more — get your adrenaline pumping.",
    image: adventureImg,
    link: "/adventure",
    buttonText: "Explore Activities",
  },
  {
    title: "Sightseeing",
    subtitle: "Discover Jaisalmer",
    description: "Walking tours, tuk-tuk rides, bike trips, and multi-day cultural packages to explore the Golden City.",
    image: sightseeingImg,
    link: "/sightseeing",
    buttonText: "View Tours",
  },
  {
    title: "Exotic Tours",
    subtitle: "Unique Experiences",
    description: "Breakfast with peacocks, haunted trails, culinary tours, and eco-farm stays — the extraordinary side of Jaisalmer.",
    image: exoticToursImg,
    link: "/exotic-tours",
    buttonText: "Explore Tours",
  },
  {
    title: "Special Events",
    subtitle: "Celebrate in the Desert",
    description: "Honeymoons, festivals, New Year celebrations, and private desert parties under the starlit sky.",
    image: specialEventsImg,
    link: "/special-events",
    buttonText: "View Events",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);

  return (
    <section id="services" className="py-24 bg-sand-gradient">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Our Services
          </p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beyond the Table
          </h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                <p className="font-accent text-xs tracking-[0.2em] uppercase text-gold-light/80 mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-white/70 mb-3 max-w-sm line-clamp-2">
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
