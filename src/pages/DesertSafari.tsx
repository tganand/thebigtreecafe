import { TreePine } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import jeepSafariImg from "@/assets/activities/jeep-safari.jpg";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import adventureImg from "@/assets/activities/adventure.jpg";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";
import specialEventsImg from "@/assets/activities/special-events.jpg";

const imgs = [camelSafariImg, jeepSafariImg, desertCampImg, sightseeingImg, adventureImg, exoticToursImg, specialEventsImg];

const activities: ServiceActivity[] = [
  {
    id: "sunrise-camel",
    title: "Half-Day Sunrise Camel Safari",
    description: "Enjoy a magical sunrise over the Thar dunes with breakfast served in the desert. Perfect for photography lovers.",
    price: 2350,
    priceLabel: "/person",
    duration: "5:00 AM – 11:00 AM",
    details: ["Sunrise in desert", "Breakfast included", "Expert guide", "Photo stops"],
    image: imgs[0],
  },
  {
    id: "sunset-camel",
    title: "Half-Day Sunset Camel Safari",
    description: "Camel ride through sand dunes with a stunning sunset and wood-fire dinner cooked by local guides.",
    price: 2450,
    priceLabel: "/person",
    duration: "1:30 PM – 9:30 PM",
    details: ["Sunset views", "Wood-fire dinner", "Camel ride", "Sand dunes"],
    image: imgs[1],
  },
  {
    id: "one-day-camel",
    title: "One Day Camel Safari",
    description: "Full day desert experience with breakfast, lunch and dinner freshly cooked in the desert. Sunset on the dunes.",
    price: 2750,
    priceLabel: "/person",
    duration: "6:30 AM – 9:30 PM",
    minPeople: 2,
    details: ["Full day ride", "All meals included", "Sunset on dunes", "Tree shade rest"],
    image: imgs[0],
  },
  {
    id: "overnight-4a",
    title: "Overnight Camel Safari – 4A",
    description: "Non-touristic off-track desert route. Explore desert landscapes, huts, temples, flora & fauna. Sleep under the stars.",
    price: 3650,
    priceLabel: "/person",
    duration: "6:30 AM – 11:00 AM next day",
    details: ["Off-track route", "Sleep under stars", "Warm bedding", "Desert exploration"],
    image: imgs[2],
  },
  {
    id: "overnight-4b",
    title: "Overnight Camel Safari – 4B",
    description: "Experience nomadic desert life. Ride across scrublands, fields, rocky areas and dunes. Spot local wildlife.",
    price: 4150,
    priceLabel: "/person",
    duration: "6:30 AM – 5:30 PM next day",
    details: ["Nomadic experience", "Wildlife spotting", "Sleep under stars", "Varied terrain"],
    image: imgs[3],
  },
  {
    id: "overnight-4c",
    title: "Overnight Camel Safari – 4C",
    description: "Raw desert experience on non-touristic routes through farms, rocky areas and dunes. Sleep under the stars.",
    price: 2950,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: ["Non-touristic route", "Farms & dunes", "Flora & fauna", "Star sleeping"],
    image: imgs[4],
  },
  {
    id: "overnight-4d",
    title: "Overnight Camel Safari – 4D",
    description: "Off-beat desert safari through dunes and scrublands. Pass mud houses and temples. Overnight under stars.",
    price: 3650,
    priceLabel: "/person",
    duration: "1:30 PM – 5:30 PM next day",
    details: ["Off-beat route", "Mud houses & temples", "Scrublands", "Star sleeping"],
    image: imgs[5],
  },
  {
    id: "camping",
    title: "Camping in the Desert",
    description: "Camel ride across farms, dunes and rocky landscapes. Camp in a desert tent with warm bedding among sand dunes.",
    price: 3450,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: ["Desert tent", "Warm bedding", "Camel ride", "Rocky landscapes"],
    image: imgs[2],
  },
  {
    id: "real-desert",
    title: "Real Desert Safari",
    description: "2 nights / 3 days experience. First night under the stars, second in luxury camp. Cultural dance & music.",
    price: 7950,
    priceLabel: "/person",
    duration: "2 Nights / 3 Days",
    details: ["2 nights", "Luxury camp", "Cultural program", "Sunrise & sunset"],
    image: imgs[6],
  },
  {
    id: "live-entertainment",
    title: "Camel Safari with Live Entertainment",
    description: "Camel ride to dunes with sunset, Rajasthani folk dance and music, and interaction with local gypsy community.",
    price: 3650,
    priceLabel: "/person",
    duration: "1:30 PM – 9:30 PM",
    details: ["Folk dance & music", "Sunset experience", "Gypsy community", "Camel ride"],
    image: imgs[5],
  },
  {
    id: "dance-music-overnight",
    title: "Camel Safari with Dance & Music",
    description: "Camel ride with sunset view, live Rajasthani dance & music performance, and overnight stay under star-lit sky.",
    price: 4450,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: ["Live performance", "Sunset view", "Overnight stay", "Star-lit sky"],
    image: imgs[6],
  },
  {
    id: "cultural-program",
    title: "Camel Safari with Cultural Program",
    description: "Camel ride in dunes with traditional Rajasthani folk dance & music, welcome ceremony and dinner.",
    price: 3450,
    priceLabel: "/person",
    duration: "3:00 PM – 10:30 PM",
    details: ["Cultural show", "Traditional welcome", "Desert dinner", "Camp seating"],
    image: imgs[3],
  },
  {
    id: "non-touristic",
    title: "Non-Touristic Desert Safari",
    description: "2 Nights / 3 Days through scrublands, farms and dunes. Camp under starry sky with traditional open-fire meals.",
    price: 2450,
    priceLabel: "/person/night",
    nights: 2,
    duration: "2 Nights / 3 Days",
    details: ["Off-track route", "Open-fire meals", "Starry camping", "2 nights"],
    image: imgs[4],
  },
  {
    id: "into-thar",
    title: "Into The Thar Desert Safari",
    description: "3 Nights / 4 Days deep desert exploration. Camel rides across dunes and rocky landscapes with traditional meals.",
    price: 2350,
    priceLabel: "/person/night",
    nights: 3,
    duration: "3 Nights / 4 Days",
    details: ["Deep exploration", "Rocky landscapes", "Traditional meals", "3 nights"],
    image: imgs[0],
  },
  {
    id: "thar-desert",
    title: "Thar Desert Safari",
    description: "4 Nights / 5 Days long camel expedition. Camp each night under the stars with sunset and sunrise views.",
    price: 2250,
    priceLabel: "/person/night",
    nights: 4,
    duration: "4 Nights / 5 Days",
    details: ["Long expedition", "Sunrise & sunset", "Star camping", "4 nights"],
    image: imgs[1],
  },
  {
    id: "nomad-experience",
    title: "The Nomad Experience",
    description: "5 Nights / 6 Days immersive desert experience. Camel rides across dunes and rocky terrain with traditional meals.",
    price: 2150,
    priceLabel: "/person/night",
    nights: 5,
    duration: "5 Nights / 6 Days",
    details: ["Immersive experience", "Desert camping", "Traditional meals", "5 nights"],
    image: imgs[2],
  },
  {
    id: "exploring-thar",
    title: "Exploring the Thar",
    description: "6 Nights / 7 Days deep exploration of Thar landscapes. Camping under starry sky with open-fire meals.",
    price: 2050,
    priceLabel: "/person/night",
    nights: 6,
    duration: "6 Nights / 7 Days",
    details: ["Deep exploration", "Starry camping", "Open-fire meals", "6 nights"],
    image: imgs[3],
  },
  {
    id: "thar-compass",
    title: "Thar by the Compass",
    description: "7 Nights / 8 Days extensive desert journey across multiple terrains. Camp under the stars each night.",
    price: 1950,
    priceLabel: "/person/night",
    nights: 7,
    duration: "7 Nights / 8 Days",
    details: ["Extensive journey", "Multiple terrains", "Star camping", "7 nights"],
    image: imgs[4],
  },
  {
    id: "multi-day",
    title: "Multi-Day Camel Safari",
    description: "Fully customizable safari from 3 days to 22 days. Jeep support and drinking water included. Flexible schedule.",
    price: 2150,
    priceLabel: "/person/night",
    nights: 2,
    minPeople: 2,
    duration: "Min 3 Days / 2 Nights",
    details: ["Fully customizable", "Jeep support", "Up to 22 days", "Flexible timing"],
    image: imgs[6],
  },
];

const DesertSafari = () => (
  <ServicePageLayout
    icon={<TreePine className="h-5 w-5 text-gold" />}
    navTitle="Desert Safari"
    heroImage={camelSafariImg}
    heroSubtitle="Explore the Thar Desert"
    heroTitle="Desert Safari Adventures"
    heroDescription="Choose from our curated desert experiences — from half-day camel rides to multi-day expeditions across the Thar."
    activities={activities}
    bookingType="Desert Safari"
  />
);

export default DesertSafari;
