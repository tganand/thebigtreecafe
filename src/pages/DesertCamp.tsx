import { Tent } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import specialEventsImg from "@/assets/activities/special-events.jpg";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";

const activities: ServiceActivity[] = [
  {
    id: "casa-nomada",
    title: "Casa Nomada Desert Camp",
    description: "Budget-friendly desert camp with camel ride, traditional welcome, Rajasthani dance & music, and Swiss tent stay.",
    price: 1950,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 11:00 AM next day",
    details: ["Swiss tent", "Camel ride", "Dance & music", "Veg dinner & breakfast", "42 km from Jaisalmer"],
    image: desertCampImg,
  },
  {
    id: "retreat-camp",
    title: "The Retreat Desert Camp",
    description: "Mid-range luxury camp with better amenities. Camel ride, sunset views, folk dance & music, and luxury Swiss tent.",
    price: 3900,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 11:00 AM next day",
    details: ["Luxury Swiss tent", "Sunset views", "Cultural program", "Veg dinner & breakfast", "42 km from Jaisalmer"],
    image: camelSafariImg,
  },
  {
    id: "mirage-camp",
    title: "The Mirage Desert Camp",
    description: "Premium luxury desert camp experience. Fine dining, cultural performance, and well-appointed luxury tents.",
    price: 5250,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 11:00 AM next day",
    details: ["Premium luxury", "Fine dining", "Cultural dance", "Luxury tents", "36.7 km from Jaisalmer"],
    image: specialEventsImg,
  },
  {
    id: "el-grande",
    title: "El Grande Desert Camp",
    description: "Ultra-luxury desert camp with jeep safari, swimming pool, premium accommodation, and fine dining experience.",
    price: 14500,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 11:00 AM next day",
    details: ["Ultra-luxury", "Swimming pool", "Jeep safari", "Premium dining", "38 km from Jaisalmer"],
    image: exoticToursImg,
  },
];

const DesertCamp = () => (
  <ServicePageLayout
    icon={<Tent className="h-5 w-5 text-gold" />}
    navTitle="Desert Camp"
    heroImage={desertCampImg}
    heroSubtitle="Camp Under the Stars"
    heroTitle="Desert Camp Packages"
    heroDescription="Experience the magic of Thar with our curated desert camp packages — from budget Swiss tents to ultra-luxury stays."
    activities={activities}
    bookingType="Desert Camp"
  />
);

export default DesertCamp;
