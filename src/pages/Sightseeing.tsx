import { MapPin } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import jaisalmerWalkImg from "@/assets/activities/jaisalmer-walk.jpg";
import shoppingImg from "@/assets/activities/shopping-jaisalmer.jpg";
import eveningLakeImg from "@/assets/activities/evening-lake.jpg";
import jewelsImg from "@/assets/activities/jewels-jaisalmer.jpg";
import padharoImg from "@/assets/activities/padharo-cultural.jpg";
import indoPakImg from "@/assets/activities/indo-pak-border.jpg";
import tukTukSunsetImg from "@/assets/activities/tuk-tuk-sunset.jpg";
import cyclingImg from "@/assets/activities/cycling-jaisalmer.jpg";
import scootyImg from "@/assets/activities/scooty-jaisalmer.jpg";
import bikeTripImg from "@/assets/activities/bike-trip-jaisalmer.jpg";
import jaisalmerFortImg from "@/assets/activities/jaisalmer-fort.jpg";
import tukTukImg from "@/assets/activities/tuk-tuk.jpg";
import bulletRideImg from "@/assets/activities/bullet-ride.jpg";
import culturalDanceImg from "@/assets/activities/cultural-dance.jpg";

const activities: ServiceActivity[] = [
  {
    id: "morning-food-walk",
    title: "Morning Food Walk",
    description: "Walking tour exploring Jaisalmer attractions and famous food spots with local cuisines and special tea.",
    price: 1750,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 12:00 PM",
    details: [
      "Walking tour exploring Jaisalmer attractions in the morning",
      "Visit famous food spots and taste local cuisines",
      "Special tea from a famous tea stall",
      "Time to explore local markets",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 12:00 PM",
    ],
    image: sightseeingImg,
  },
  {
    id: "jaisalmer-walk",
    title: "Jaisalmer by Walk",
    description: "Walking tour through historic streets visiting Jaisalmer Fort, Patwon ki Haveli, Mandir Palace, and Gadisar Lake.",
    price: 1350,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 1:30 PM",
    details: [
      "Walking tour through historic streets of Jaisalmer",
      "Visit: Jaisalmer Fort, Patwon ki Haveli, Mandir Palace, Gadisar Lake, markets",
      "Learn about the history and culture from your guide",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 1:30 PM",
    ],
    image: jaisalmerWalkImg,
  },
  {
    id: "shopping",
    title: "Shopping in Jaisalmer",
    description: "Guided local market shopping tour. Discover textiles, handicrafts, jewellery, and camel leather products.",
    price: 1550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "9:00 AM – 2:00 PM",
    details: [
      "Guided local market shopping tour",
      "Discover textiles, handicrafts, jewellery, camel leather products",
      "Get the best deals with local guide",
      "Minimum 2 people required",
      "Start: 9:00 AM | End: 2:00 PM",
    ],
    image: shoppingImg,
  },
  {
    id: "evening-lake",
    title: "An Evening by the Lake",
    description: "Evening experience at Gadisar Lake with horse riding near cenotaphs, coffee, and 30-minute boating.",
    price: 1850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 8:30 PM",
    details: [
      "Evening experience at the beautiful Gadisar Lake",
      "Horse riding near cenotaphs and temples",
      "Coffee included",
      "30-minute boating on the lake",
      "Minimum 2 people required",
      "Start: 4:00 PM | End: 8:30 PM",
    ],
    image: eveningLakeImg,
  },
  {
    id: "city-tour",
    title: "Jaisalmer City Tour",
    description: "Explore historic landmarks: Jaisalmer Fort, Patwon ki Haveli, Mandir Palace, Vyas Chattri, Gadisar Lake.",
    price: 2450,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 2:00 PM",
    details: [
      "Explore historic landmarks of Jaisalmer",
      "Visit: Jaisalmer Fort, Patwon ki Haveli, Mandir Palace",
      "Visit: Vyas Chattri, Gadisar Lake",
      "Expert guided tour with history and culture",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 2:00 PM",
    ],
    image: sightseeingImg,
  },
  {
    id: "jewels-around",
    title: "Jewels Around Jaisalmer",
    description: "Visit War Memorial, Bada Bagh, Amar Sagar Jain Temple, Kuldhara Village, Jasairi Lake, and Sam Sand Dunes.",
    price: 2850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:30 PM",
    details: [
      "Visit surrounding attractions including:",
      "Jaisalmer War Memorial",
      "Bada Bagh (royal cenotaphs)",
      "Amar Sagar Jain Temple",
      "Kuldhara Village (abandoned ghost village)",
      "Jasairi Lake",
      "Sam Sand Dunes",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 7:30 PM",
    ],
    image: jewelsImg,
  },
  {
    id: "padharo",
    title: "Padharo Mhare Desh",
    description: "Full-day cultural exploration of Jaisalmer. Visit historical landmarks, hidden gems and desert landscapes.",
    price: 4050,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 8:00 PM",
    details: [
      "Full-day cultural exploration of Jaisalmer",
      "Visit historical landmarks and hidden gems",
      "Explore desert landscapes",
      "Complete immersive experience of the Golden City",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 8:00 PM",
    ],
    image: padharoImg,
  },
  {
    id: "indo-pak-border",
    title: "Indo-Pak Border Tour",
    description: "Visit Longewala Battlefield and Tanot Mata Temple. Learn about the 1971 Indo-Pak war history.",
    price: 4250,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:00 PM",
    details: [
      "Visit Longewala Battlefield from the 1971 Indo-Pak war",
      "Visit Tanot Mata Temple",
      "Learn about war history and see military exhibits",
      "Full day tour to the India-Pakistan border area",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 7:00 PM",
    ],
    image: indoPakImg,
  },
  {
    id: "tuk-tuk-city",
    title: "Tuk Tuk City Tour",
    description: "Explore Jaisalmer in a three-wheeler tuk-tuk. Visit the Fort, havelis, bazaars and landmarks.",
    price: 2250,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 1:00 PM",
    details: [
      "Explore Jaisalmer in a fun three-wheeler tuk-tuk",
      "Visit Jaisalmer Fort, havelis, bazaars and landmarks",
      "Unique and fun way to see the city",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 1:00 PM",
    ],
    image: tukTukImg,
  },
  {
    id: "tuk-tuk-sunset",
    title: "Magical Sunset in a Tuk Tuk",
    description: "Tuk-tuk ride to Bada Bagh for sunset. Explore cenotaphs and desert views with great photography.",
    price: 1150,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 7:30 PM",
    details: [
      "Tuk-tuk ride to Bada Bagh for sunset",
      "Explore royal cenotaphs and desert views",
      "Great photography opportunity",
      "Minimum 2 people required",
      "Start: 4:00 PM | End: 7:30 PM",
    ],
    image: tukTukSunsetImg,
  },
  {
    id: "cycling-tour",
    title: "Cycling Tour in Jaisalmer",
    description: "Eco-friendly sightseeing tour by bicycle. Explore landscapes, culture and hidden gems of Jaisalmer.",
    price: 1850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 2:30 PM",
    details: [
      "Eco-friendly sightseeing tour by bicycle",
      "Explore landscapes, culture and hidden gems",
      "Bicycle and guide provided",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 2:30 PM",
    ],
    image: cyclingImg,
  },
  {
    id: "scooty-tour",
    title: "Jaisalmer on a Scooty",
    description: "Self-drive scooter tour through city streets. Visit landmarks and markets at your own pace.",
    price: 2550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 1:00 PM",
    details: [
      "Self-drive scooter tour through city streets",
      "Visit landmarks and markets at your own pace",
      "Explore Jaisalmer independently",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 1:00 PM",
    ],
    image: scootyImg,
  },
  {
    id: "bike-trip",
    title: "Jaisalmer Bike Trip",
    description: "Motorbike tour exploring city and surroundings including Fort, Gadisar Lake, Bada Bagh, Kuldhara, and Sam Desert.",
    price: 3750,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:30 PM",
    details: [
      "Motorbike tour exploring city and surroundings",
      "Visit: Jaisalmer Fort, Patwon ki Haveli, Gadisar Lake",
      "Visit: Bada Bagh, Amar Sagar, Kuldhara, Jasairi Oasis, Sam Desert",
      "Full day adventure on two wheels",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 7:30 PM",
    ],
    image: bikeTripImg,
  },
  {
    id: "bullet-ride",
    title: "Bullet Ride to Tanot Longewala",
    description: "Royal Enfield ride through desert to border area. Visit Tanot Mata Temple, Longewala War Memorial, War Museum.",
    price: 5850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 7:00 PM",
    details: [
      "Royal Enfield ride through the desert to the border area",
      "Visit Tanot Mata Temple",
      "Visit Longewala War Memorial and War Museum",
      "Epic ride through the desert landscape",
      "Minimum 2 people required",
      "Start: 8:00 AM | End: 7:00 PM",
    ],
    image: bulletRideImg,
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
    details: [
      "Visit Jaisalmer Fort, havelis and Gadisar Lake",
      "Camel ride and cultural program at Sam dunes",
      "Visit Jaseri Oasis, Kuldhara village, Amar Sagar Temple",
      "2 nights accommodation included",
      "Minimum 2 people required",
    ],
    image: culturalDanceImg,
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
    details: [
      "City sightseeing and camel safari",
      "Visit Amar Sagar Temple, Kuldhara, Khaba Fort",
      "Tanot & Longewala border tour",
      "Jeep safari and cultural program",
      "3 nights accommodation included",
      "Minimum 2 people required",
    ],
    image: jaisalmerWalkImg,
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
    details: [
      "City sightseeing, camel safari and desert camping",
      "Visit Tanot, Longewala, War Memorial",
      "Jeep safari and cultural program at Sam dunes",
      "Visit Akal Fossil Park and Bada Bagh",
      "4 nights accommodation included",
      "Minimum 2 people required",
    ],
    image: jewelsImg,
  },
];

const Sightseeing = () => (
  <ServicePageLayout
    icon={<MapPin className="h-5 w-5 text-gold" />}
    navTitle="Sightseeing"
    heroImage={jaisalmerFortImg}
    heroSubtitle="Discover Jaisalmer"
    heroTitle="Sightseeing & Tours"
    heroDescription="Explore the Golden City through walking tours, tuk-tuk rides, bike trips, and multi-day cultural packages."
    activities={activities}
    bookingType="Sightseeing Tour"
  />
);

export default Sightseeing;
