import { Bike } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import adventureImg from "@/assets/activities/adventure.jpg";
import jeepSafariImg from "@/assets/activities/jeep-safari.jpg";
import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";

const activities: ServiceActivity[] = [
  {
    id: "quad-biking",
    title: "Quad Biking",
    description: "ATV quad bike ride on Sam Sand Dunes. Explore the dunes on a powerful 4×4 quad bike with great photo ops.",
    price: 3250,
    priceLabel: "/person/ride",
    duration: "~10 minutes | 8 AM – 6 PM",
    details: ["4×4 ATV", "Sam Sand Dunes", "Adrenaline rush", "Desert photos"],
    image: adventureImg,
  },
  {
    id: "jeep-safari",
    title: "Jeep Safari",
    description: "Ride across dunes in an open 4×4 jeep. Thrilling dune-bashing experience with friends or family.",
    price: 1050,
    priceLabel: "/person",
    duration: "~30 minutes | 6 AM – 8 PM",
    details: ["Open 4×4 jeep", "Dune bashing", "Popular activity", "Family friendly"],
    image: jeepSafariImg,
  },
  {
    id: "fortuner-safari",
    title: "Fortuner Safari",
    description: "Luxury dune-bashing in a Toyota Fortuner SUV. Includes hotel pickup, camel ride, welcome drink and water.",
    price: 3750,
    priceLabel: "/person",
    duration: "~30 minutes ride",
    details: ["Toyota Fortuner", "Hotel pickup & drop", "Camel ride", "Welcome drink"],
    image: jeepSafariImg,
  },
  {
    id: "parasailing",
    title: "Parasailing",
    description: "Fly high above the Thar Desert for a bird's-eye view of dunes, villages, and desert landscape.",
    price: 850,
    priceLabel: "/person",
    duration: "~4-5 minutes | 7 AM – 7 PM",
    details: ["Bird's-eye view", "Safety area", "Desert panorama", "Quick thrill"],
    image: camelSafariImg,
  },
  {
    id: "paramotoring",
    title: "Paramotoring",
    description: "Advanced flying experience over the desert landscape. Perfect for aerial photos and videos.",
    price: 4450,
    priceLabel: "/person",
    duration: "~10-15 minutes | 7 AM – 7 PM",
    details: ["Extended flight", "Aerial photos", "Desert landscape", "Advanced flying"],
    image: adventureImg,
  },
  {
    id: "boating",
    title: "Boating",
    description: "Relaxing boat ride at Gadisar Lake with scenic views of temples, ghats and historic architecture.",
    price: 400,
    priceLabel: "/boat",
    fixedPrice: true,
    duration: "~30 minutes | 7 AM – 6 PM",
    details: ["Gadisar Lake", "Temples & ghats", "Family friendly", "Scenic views"],
    image: sightseeingImg,
  },
];

const Adventure = () => (
  <ServicePageLayout
    icon={<Bike className="h-5 w-5 text-gold" />}
    navTitle="Adventure"
    heroImage={adventureImg}
    heroSubtitle="Thrill & Adrenaline"
    heroTitle="Adventure Activities"
    heroDescription="Get your adrenaline pumping with quad biking, jeep safaris, parasailing, and more in the Thar Desert."
    activities={activities}
    bookingType="Adventure Activity"
  />
);

export default Adventure;
