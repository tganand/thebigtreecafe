import { Compass } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import exoticToursImg from "@/assets/activities/exotic-tours.webp";
import breakfastPeacocksImg from "@/assets/activities/breakfast-peacocks.webp";
import culinaryTourImg from "@/assets/activities/culinary-tour.webp";
import jaisalmerFortImg from "@/assets/activities/jaisalmer-fort.webp";
import desertNightCampImg from "@/assets/activities/desert-night-camp.webp";
import templeTrailImg from "@/assets/activities/temple-trail.webp";
import villageTourImg from "@/assets/activities/village-tour.webp";
import desertNationalParkImg from "@/assets/activities/desert-national-park.webp";
import akalFossilParkImg from "@/assets/activities/akal-fossil-park.webp";
import ecoFarmStayImg from "@/assets/activities/eco-farm-stay.webp";
import dekhoJaisalmerImg from "@/assets/activities/dekho-jaisalmer.webp";
import ghumoJaisalmerImg from "@/assets/activities/ghumo-jaisalmer.webp";
import jaisalmerWalkImg from "@/assets/activities/jaisalmer-walk.webp";
import jewelsImg from "@/assets/activities/jewels-jaisalmer.webp";

const activities: ServiceActivity[] = [
  {
    id: "breakfast-peacocks",
    title: "Breakfast with the Peacocks",
    description: "Sunrise breakfast at Khaba Fort surrounded by peacocks and peahens. Unique desert morning experience.",
    price: 2850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "5:00 AM – 10:00 AM",
    details: [
      "Sunrise breakfast experience at Khaba Fort in the Thar Desert",
      "Enjoy breakfast surrounded by peacocks and peahens",
      "Food options: sandwiches, eggs, fruits or traditional Indian breakfast",
      "Unique sunrise desert experience",
      "Minimum 2 people required",
      "Start: ~5:00 AM | End: ~10:00 AM (same day)",
    ],
    image: breakfastPeacocksImg,
  },
  {
    id: "culinary-tour",
    title: "Culinary Tour",
    description: "Full-day food exploration of Jaisalmer. Taste local street food, dine at selected restaurants, and enjoy home dining.",
    price: 4950,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 8:00 PM",
    details: [
      "Full-day food exploration of Jaisalmer",
      "Taste local street food from famous vendors",
      "Dine at selected local restaurants",
      "Local home dining experience included",
      "Minimum 2 people required",
      "Start: ~8:00 AM | End: ~8:00 PM (same day)",
    ],
    image: culinaryTourImg,
  },
  {
    id: "haunted-trail",
    title: "Haunted Trail",
    description: "Night tour exploring haunted locations — ghost villages Kuldhara and Khaba, cemeteries, and spooky desert areas.",
    price: 3550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "11:30 PM – 3:00 AM",
    details: [
      "Night tour exploring haunted locations in Jaisalmer",
      "Visit ghost villages like Kuldhara and Khaba",
      "Explore cemeteries, cremation grounds, and spooky desert areas",
      "Designed for thrill seekers",
      "Minimum 2 people required",
      "Start: ~11:30 PM | End: ~3:00 AM (same night)",
    ],
    image: desertNightCampImg,
  },
  {
    id: "temple-trail",
    title: "Temple Trail",
    description: "Spiritual journey to historic Hindu and Jain temples over 400 years old. Learn about religious traditions.",
    price: 6450,
    priceLabel: "/person",
    minPeople: 2,
    duration: "6:30 AM – 8:30 PM",
    details: [
      "Spiritual journey to historic Hindu and Jain temples",
      "Learn about religious traditions and local culture",
      "Visit temples that are over 400 years old",
      "Cultural and spiritual exploration",
      "Minimum 2 people required",
      "Start: ~6:30 AM | End: ~8:30 PM (same day)",
    ],
    image: templeTrailImg,
  },
  {
    id: "village-tour",
    title: "Village Tour",
    description: "Experience rural village life in the Thar Desert. Interact with villagers, explore farms, and enjoy a camel ride.",
    price: 3550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 10:00 AM next day",
    details: [
      "Experience rural village life in the Thar Desert",
      "Interact with villagers and explore farms",
      "Stay in a local home",
      "Short camel ride included",
      "Minimum 2 people required",
      "Start: ~8:00 AM | End: ~10:00 AM (next day)",
    ],
    image: villageTourImg,
  },
  {
    id: "desert-national-park",
    title: "Trip to Desert National Park",
    description: "Wildlife excursion with jeep ride, bird watching, desert ecosystem exploration, camel ride, dinner and stay.",
    price: 4650,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 11:00 AM next day",
    details: [
      "Wildlife excursion inside Desert National Park",
      "Jeep ride with guide for wildlife spotting",
      "Bird watching and desert ecosystem exploration",
      "Camel ride, dinner and desert stay included",
      "Minimum 2 people required",
      "Start: ~8:00 AM | End: ~11:00 AM (next day)",
    ],
    image: desertNationalParkImg,
  },
  {
    id: "akal-fossil-park",
    title: "Trip to Akal Wood Fossil Park",
    description: "Visit prehistoric fossil park with ancient tree fossils. Learn about the geological history of the desert.",
    price: 2650,
    priceLabel: "/person",
    minPeople: 2,
    duration: "9:30 AM – 1:00 PM",
    details: [
      "Visit prehistoric fossil park with ancient tree fossils",
      "Learn about geological history of the desert",
      "Travel by jeep or AC car with guide",
      "Minimum 2 people required",
      "Start: ~9:30 AM | End: ~1:00 PM (same day)",
    ],
    image: akalFossilParkImg,
  },
  {
    id: "eco-farm-stay",
    title: "Eco-Farm Stay",
    description: "Stay in an eco-resort deep in the desert. Traditional mud house, local meals, bonfire and farm experience.",
    price: 4050,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 11:00 AM next day",
    details: [
      "Stay in an eco-resort deep in the desert",
      "Traditional mud house accommodation",
      "Enjoy local meals, bonfire and farm experience",
      "Lake nearby attracts birds and wildlife",
      "Minimum 2 people required",
      "Arrival recommended: ~4:00 PM | Checkout: ~11:00 AM next day",
    ],
    image: ecoFarmStayImg,
  },
];

const ExoticTours = () => (
  <ServicePageLayout
    icon={<Compass className="h-5 w-5 text-gold" />}
    navTitle="Exotic Tours"
    heroImage={exoticToursImg}
    heroSubtitle="Unique Experiences"
    heroTitle="Exotic Tours in Jaisalmer"
    heroDescription="From breakfast with peacocks to haunted night trails — discover the extraordinary side of Jaisalmer."
    activities={activities}
    bookingType="Exotic Tour"
  />
);

export default ExoticTours;
