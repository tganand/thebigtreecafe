import { Bike } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import quadBikingImg from "@/assets/activities/quad-biking.jpg";
import jeepSafariImg from "@/assets/activities/jeep-safari.jpg";
import parasailingImg from "@/assets/activities/parasailing-new.jpg";
import paramotoringImg from "@/assets/activities/paramotoring.jpg";
import gadisarLakeImg from "@/assets/activities/gadisar-lake.jpg";
import fortunerSafariImg from "@/assets/activities/fortuner-safari.jpg";

const activities: ServiceActivity[] = [
  {
    id: "quad-biking",
    title: "Quad Biking",
    description: "ATV quad bike ride on Sam Sand Dunes. Explore the dunes on a powerful 4×4 quad bike with great photo ops.",
    price: 3250,
    priceLabel: "/person/ride",
    duration: "~10 minutes | 8 AM – 6 PM",
    details: [
      "ATV quad bike ride on Sam Sand Dunes",
      "Designed for adventure lovers who want an adrenaline rush",
      "Explore the dunes on a powerful 4×4 quad bike",
      "Great opportunity for desert photos after the ride",
      "Duration: ~10 minutes",
      "Available time: 8:00 AM – 6:00 PM",
    ],
    image: quadBikingImg,
  },
  {
    id: "jeep-safari",
    title: "Jeep Safari",
    description: "Ride across dunes in an open 4×4 jeep. Thrilling dune-bashing experience with friends or family.",
    price: 1050,
    priceLabel: "/person",
    duration: "~30 minutes | 6 AM – 8 PM",
    details: [
      "Ride across sand dunes in an open 4×4 jeep",
      "One of the most popular desert adventure activities",
      "Thrilling dune-bashing experience with friends or family",
      "Duration: ~30 minutes",
      "Available time: 6:00 AM – 8:00 PM",
    ],
    image: jeepSafariImg,
  },
  {
    id: "fortuner-safari",
    title: "Fortuner Safari",
    description: "Luxury dune-bashing in a Toyota Fortuner SUV. Includes hotel pickup, camel ride, welcome drink and water.",
    price: 3750,
    priceLabel: "/person",
    duration: "~30 minutes ride",
    details: [
      "Luxury dune-bashing experience in a Toyota Fortuner SUV",
      "Windows can stay closed to avoid sand",
      "Includes hotel pickup and drop-off",
      "Includes camel ride, welcome drink, and bottled water",
      "Duration: ~30 minutes total ride",
    ],
    image: fortunerSafariImg,
  },
  {
    id: "parasailing",
    title: "Parasailing",
    description: "Fly high above the Thar Desert for a bird's-eye view of dunes, villages, and desert landscape.",
    price: 850,
    priceLabel: "/person",
    duration: "~4-5 minutes | 7 AM – 7 PM",
    details: [
      "Fly high above the Thar Desert for a bird's-eye view",
      "See dunes, villages, and desert landscape from the air",
      "Conducted in a designated safety area",
      "Duration: ~4–5 minutes",
      "Available time: 7:00 AM – 7:00 PM",
    ],
    image: parasailingImg,
  },
  {
    id: "paramotoring",
    title: "Paramotoring",
    description: "Advanced flying experience over the desert landscape. Perfect for aerial photos and videos.",
    price: 4450,
    priceLabel: "/person",
    duration: "~10-15 minutes | 7 AM – 7 PM",
    details: [
      "Advanced version of parasailing with more freedom to explore",
      "Fly further into the desert landscape",
      "Perfect for aerial photos and videos",
      "Duration: ~10–15 minutes",
      "Available time: 7:00 AM – 7:00 PM",
    ],
    image: parasailingImg,
  },
  {
    id: "boating",
    title: "Boating",
    description: "Relaxing boat ride at Gadisar Lake with scenic views of temples, ghats and historic architecture.",
    price: 400,
    priceLabel: "/boat",
    fixedPrice: true,
    duration: "~30 minutes | 7 AM – 6 PM",
    details: [
      "Relaxing boat ride at Gadisar Lake",
      "Enjoy scenic views of temples, ghats and historic architecture",
      "Suitable for couples, families and groups",
      "Duration: ~30 minutes",
      "Available time: 7:00 AM – 6:00 PM",
    ],
    image: gadisarLakeImg,
  },
];

const Adventure = () => (
  <ServicePageLayout
    icon={<Bike className="h-5 w-5 text-gold" />}
    navTitle="Adventure"
    heroImage={quadBikingImg}
    heroSubtitle="Thrill & Adrenaline"
    heroTitle="Adventure Activities"
    heroDescription="Get your adrenaline pumping with quad biking, jeep safaris, parasailing, and more in the Thar Desert."
    activities={activities}
    bookingType="Adventure Activity"
  />
);

export default Adventure;
