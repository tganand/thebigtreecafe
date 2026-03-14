import { Compass } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";
import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import specialEventsImg from "@/assets/activities/special-events.jpg";
import adventureImg from "@/assets/activities/adventure.jpg";

const imgs = [exoticToursImg, camelSafariImg, sightseeingImg, desertCampImg, specialEventsImg, adventureImg];

const activities: ServiceActivity[] = [
  {
    id: "breakfast-peacocks",
    title: "Breakfast with the Peacocks",
    description: "Sunrise breakfast at Khaba Fort surrounded by peacocks and peahens. Unique desert morning experience.",
    price: 2850,
    priceLabel: "/person",
    minPeople: 2,
    duration: "5:00 AM – 10:00 AM",
    details: ["Khaba Fort", "Peacocks & peahens", "Sunrise breakfast", "Desert experience"],
    image: imgs[0],
  },
  {
    id: "culinary-tour",
    title: "Culinary Tour",
    description: "Full-day food exploration of Jaisalmer. Taste local street food, dine at selected restaurants, and enjoy home dining.",
    price: 4950,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 8:00 PM",
    details: ["Street food", "Restaurant dining", "Home dining", "Local vendors"],
    image: imgs[1],
  },
  {
    id: "haunted-trail",
    title: "Haunted Trail",
    description: "Night tour exploring haunted locations — ghost villages Kuldhara and Khaba, cemeteries, and spooky desert areas.",
    price: 3550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "11:30 PM – 3:00 AM",
    details: ["Ghost villages", "Kuldhara & Khaba", "Night tour", "Thrill seekers"],
    image: imgs[2],
  },
  {
    id: "temple-trail",
    title: "Temple Trail",
    description: "Spiritual journey to historic Hindu and Jain temples over 400 years old. Learn about religious traditions.",
    price: 6450,
    priceLabel: "/person",
    minPeople: 2,
    duration: "6:30 AM – 8:30 PM",
    details: ["Hindu & Jain temples", "400+ years old", "Spiritual journey", "Cultural exploration"],
    image: imgs[3],
  },
  {
    id: "village-tour",
    title: "Village Tour",
    description: "Experience rural village life in the Thar Desert. Interact with villagers, explore farms, and enjoy a camel ride.",
    price: 3550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 10:00 AM next day",
    details: ["Village life", "Farm exploration", "Local home stay", "Camel ride"],
    image: imgs[4],
  },
  {
    id: "desert-national-park",
    title: "Trip to Desert National Park",
    description: "Wildlife excursion with jeep ride, bird watching, desert ecosystem exploration, camel ride, dinner and stay.",
    price: 4650,
    priceLabel: "/person",
    minPeople: 2,
    duration: "8:00 AM – 11:00 AM next day",
    details: ["Wildlife spotting", "Bird watching", "Jeep ride", "Desert stay"],
    image: imgs[5],
  },
  {
    id: "akal-fossil-park",
    title: "Trip to Akal Wood Fossil Park",
    description: "Visit prehistoric fossil park with ancient tree fossils. Learn about the geological history of the desert.",
    price: 2650,
    priceLabel: "/person",
    minPeople: 2,
    duration: "9:30 AM – 1:00 PM",
    details: ["Prehistoric fossils", "Geological history", "Guided tour", "Jeep/AC car"],
    image: imgs[0],
  },
  {
    id: "eco-farm-stay",
    title: "Eco-Farm Stay",
    description: "Stay in an eco-resort deep in the desert. Traditional mud house, local meals, bonfire and farm experience.",
    price: 4050,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 11:00 AM next day",
    details: ["Mud house", "Eco-resort", "Bonfire", "Farm experience", "Lake nearby"],
    image: imgs[3],
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
