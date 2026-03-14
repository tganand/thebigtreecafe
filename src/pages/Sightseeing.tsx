import { MapPin } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import jeepSafariImg from "@/assets/activities/jeep-safari.jpg";
import adventureImg from "@/assets/activities/adventure.jpg";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import specialEventsImg from "@/assets/activities/special-events.jpg";

const imgs = [sightseeingImg, camelSafariImg, jeepSafariImg, adventureImg, exoticToursImg, desertCampImg, specialEventsImg];

const activities: ServiceActivity[] = [
  {
    id: "morning-food-walk",
    title: "Morning Food Walk",
    description: "Walking tour exploring Jaisalmer attractions and famous food spots with local cuisines and special tea.",
    price: 1750,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 12:00 PM",
    details: ["Local cuisines", "Famous tea stall", "Walking tour", "Market exploration"],
    image: imgs[0],
  },
  {
    id: "jaisalmer-walk",
    title: "Jaisalmer by Walk",
    description: "Walking tour through historic streets visiting Jaisalmer Fort, Patwon ki Haveli, Mandir Palace, and Gadisar Lake.",
    price: 1350,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 1:30 PM",
    details: ["Fort visit", "Patwon ki Haveli", "Mandir Palace", "Gadisar Lake"],
    image: imgs[1],
  },
  {
    id: "shopping",
    title: "Shopping in Jaisalmer",
    description: "Guided local market shopping tour. Discover textiles, handicrafts, jewellery, and camel leather products.",
    price: 1550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "9:00 AM – 2:00 PM",
    details: ["Textiles", "Handicrafts", "Jewellery", "Camel leather"],
    image: imgs[2],
  },
  {
    id: "evening-lake",
    title: "An Evening by the Lake",
    description: "Evening experience at Gadisar Lake with horse riding near cenotaphs, coffee, and 30-minute boating.",
    price: 1850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 8:30 PM",
    details: ["Horse riding", "Boating", "Coffee included", "Cenotaphs & temples"],
    image: imgs[3],
  },
  {
    id: "city-tour",
    title: "Jaisalmer City Tour",
    description: "Explore historic landmarks: Jaisalmer Fort, Patwon ki Haveli, Mandir Palace, Vyas Chattri, Gadisar Lake.",
    price: 2450,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 2:00 PM",
    details: ["Fort & Havelis", "Mandir Palace", "Vyas Chattri", "Gadisar Lake"],
    image: imgs[4],
  },
  {
    id: "jewels-around",
    title: "Jewels Around Jaisalmer",
    description: "Visit War Memorial, Bada Bagh, Amar Sagar Jain Temple, Kuldhara Village, Jasairi Lake, and Sam Sand Dunes.",
    price: 2850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:30 PM",
    details: ["War Memorial", "Bada Bagh", "Kuldhara Village", "Sam Sand Dunes"],
    image: imgs[5],
  },
  {
    id: "padharo",
    title: "Padharo Mhare Desh",
    description: "Full-day cultural exploration of Jaisalmer. Visit historical landmarks, hidden gems and desert landscapes.",
    price: 4050,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 8:00 PM",
    details: ["Full day tour", "Historical landmarks", "Hidden gems", "Desert landscapes"],
    image: imgs[6],
  },
  {
    id: "indo-pak-border",
    title: "Indo-Pak Border Tour",
    description: "Visit Longewala Battlefield and Tanot Mata Temple. Learn about the 1971 Indo-Pak war history.",
    price: 4250,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:00 PM",
    details: ["Longewala Battlefield", "Tanot Mata Temple", "War history", "Full day tour"],
    image: imgs[0],
  },
  {
    id: "tuk-tuk-city",
    title: "Tuk Tuk City Tour",
    description: "Explore Jaisalmer in a three-wheeler tuk-tuk. Visit the Fort, havelis, bazaars and landmarks.",
    price: 2250,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 1:00 PM",
    details: ["Tuk-tuk ride", "Fort & havelis", "Local bazaars", "Fun experience"],
    image: imgs[1],
  },
  {
    id: "tuk-tuk-sunset",
    title: "Magical Sunset in a Tuk Tuk",
    description: "Tuk-tuk ride to Bada Bagh for sunset. Explore cenotaphs and desert views with great photography.",
    price: 1150,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 7:30 PM",
    details: ["Bada Bagh sunset", "Cenotaphs", "Tuk-tuk ride", "Photography"],
    image: imgs[2],
  },
  {
    id: "cycling-tour",
    title: "Cycling Tour in Jaisalmer",
    description: "Eco-friendly sightseeing tour by bicycle. Explore landscapes, culture and hidden gems of Jaisalmer.",
    price: 1850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 2:30 PM",
    details: ["Eco-friendly", "Bicycle tour", "Hidden gems", "Cultural exploration"],
    image: imgs[3],
  },
  {
    id: "scooty-tour",
    title: "Jaisalmer on a Scooty",
    description: "Self-drive scooter tour through city streets. Visit landmarks and markets at your own pace.",
    price: 2550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 1:00 PM",
    details: ["Self-drive", "Own pace", "Landmarks", "Markets"],
    image: imgs[4],
  },
  {
    id: "bike-trip",
    title: "Jaisalmer Bike Trip",
    description: "Motorbike tour exploring city and surroundings including Fort, Gadisar Lake, Bada Bagh, Kuldhara, and Sam Desert.",
    price: 3750,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:30 PM",
    details: ["Motorbike tour", "Fort & Lake", "Bada Bagh", "Sam Desert"],
    image: imgs[5],
  },
  {
    id: "bullet-ride",
    title: "Bullet Ride to Tanot Longewala",
    description: "Royal Enfield ride through desert to border area. Visit Tanot Mata Temple, Longewala War Memorial, War Museum.",
    price: 5850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:00 PM",
    details: ["Royal Enfield", "Border area", "War Memorial", "Temple visit"],
    image: imgs[6],
  },
  {
    id: "nanha-jaisalmer",
    title: "Nanha Jaisalmer",
    description: "2 Nights / 3 Days package. Visit Fort, havelis, Gadisar Lake, camel ride, cultural program, Kuldhara village.",
    price: 4425,
    priceLabel: "/person/night",
    nights: 2,
    minPeople: 2,
    duration: "2 Nights / 3 Days",
    details: ["Fort & havelis", "Camel ride", "Cultural program", "Kuldhara village"],
    image: imgs[0],
  },
  {
    id: "dekho-jaisalmer",
    title: "Dekho Jaisalmer",
    description: "3 Nights / 4 Days city sightseeing with camel safari, Tanot & Longewala border tour, and jeep safari.",
    price: 3850,
    priceLabel: "/person/night",
    nights: 3,
    minPeople: 2,
    duration: "3 Nights / 4 Days",
    details: ["City sightseeing", "Camel safari", "Border tour", "Jeep safari"],
    image: imgs[1],
  },
  {
    id: "ghumo-jaisalmer",
    title: "Ghumo Jaisalmer",
    description: "4 Nights / 5 Days comprehensive tour with city sightseeing, camel safari, desert camping, and Tanot Longewala.",
    price: 3640,
    priceLabel: "/person/night",
    nights: 4,
    minPeople: 2,
    duration: "4 Nights / 5 Days",
    details: ["Comprehensive tour", "Desert camping", "Tanot Longewala", "Akal Fossil Park"],
    image: imgs[2],
  },
];

const Sightseeing = () => (
  <ServicePageLayout
    icon={<MapPin className="h-5 w-5 text-gold" />}
    navTitle="Sightseeing"
    heroImage={sightseeingImg}
    heroSubtitle="Discover Jaisalmer"
    heroTitle="Sightseeing & Tours"
    heroDescription="Explore the Golden City through walking tours, tuk-tuk rides, bike trips, and multi-day cultural packages."
    activities={activities}
    bookingType="Sightseeing Tour"
  />
);

export default Sightseeing;
