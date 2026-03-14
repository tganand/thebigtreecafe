import { PartyPopper } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import specialEventsImg from "@/assets/activities/special-events.jpg";
import camelSafariImg from "@/assets/activities/camel-safari.jpg";
import desertCampImg from "@/assets/activities/desert-camp.jpg";
import exoticToursImg from "@/assets/activities/exotic-tours.jpg";
import sightseeingImg from "@/assets/activities/sightseeing.jpg";
import adventureImg from "@/assets/activities/adventure.jpg";
import jeepSafariImg from "@/assets/activities/jeep-safari.jpg";

const imgs = [specialEventsImg, camelSafariImg, desertCampImg, exoticToursImg, sightseeingImg, adventureImg, jeepSafariImg];

const activities: ServiceActivity[] = [
  {
    id: "dinner-dunes",
    title: "Dinner on the Dunes",
    description: "Dining experience on sand dunes with camel ride, private dance & music, Khaba Fort visit, and à la carte dinner.",
    price: 6550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 10:00 PM",
    details: ["Dune dining", "Camel ride", "Dance & music", "Khaba Fort"],
    image: imgs[0],
  },
  {
    id: "picnic-oasis",
    title: "Picnic by the Oasis",
    description: "Picnic near a natural oasis with transfers, Kuldhara village visit, camel ride, snacks, and karaoke session.",
    price: 3750,
    priceLabel: "/person",
    minPeople: 2,
    duration: "3:00 PM – 8:00 PM",
    details: ["Natural oasis", "Kuldhara village", "Karaoke", "Beer/wine included"],
    image: imgs[1],
  },
  {
    id: "honeymoon-dunes",
    title: "Honeymoon on the Dunes",
    description: "Romantic desert safari with private dance & music, dinner & breakfast on dunes, and private tent overnight.",
    price: 14500,
    priceLabel: "/couple",
    fixedPrice: true,
    duration: "4:00 PM – 10:00 AM next day",
    details: ["Private tent", "Romantic dinner", "Dance & music", "Khaba & oasis visit"],
    image: imgs[2],
  },
  {
    id: "honeymoon-jaisalmer",
    title: "Honeymoon in Jaisalmer",
    description: "2 Nights / 3 Days honeymoon tour with city hotel + luxury camp, camel ride, jeep safari, wine and candle-light dinner.",
    price: 19500,
    priceLabel: "/couple",
    fixedPrice: true,
    duration: "2 Nights / 3 Days",
    details: ["City hotel + camp", "Candle-light dinner", "Wine included", "Jeep safari"],
    image: imgs[3],
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Shoot",
    description: "2-day pre-wedding photography tour at Gadisar Lake, sand dunes, and Bada Bagh with camel ride and dune dinner.",
    price: 64500,
    priceLabel: "/couple",
    fixedPrice: true,
    duration: "1:00 PM – 8:00 PM next day",
    details: ["2-day shoot", "Gadisar Lake", "Sand dunes", "Bada Bagh"],
    image: imgs[4],
  },
  {
    id: "desert-festival",
    title: "The Desert Festival Odyssey",
    description: "Attend famous Desert Festival with boating, sightseeing, camel & jeep safari, horse races, and multi-stay experience.",
    price: 13500,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4 Days / 3 Nights",
    details: ["Desert Festival", "Horse & camel races", "Jeep safari", "Fort & camp stays"],
    image: imgs[5],
  },
  {
    id: "diwali-desert",
    title: "Diwali in the Desert",
    description: "Celebrate Diwali with a local desert village. Puja ceremony, diyas, fireworks, village stay and camel ride.",
    price: 3150,
    priceLabel: "/person",
    duration: "4:00 PM – 10:00 AM next day",
    details: ["Diwali puja", "Fireworks", "Village stay", "Camel ride"],
    image: imgs[6],
  },
  {
    id: "christmas-dunes",
    title: "Christmas amidst the Dunes",
    description: "Christmas celebration in Thar Desert with jeep ride, camel safari, cultural program, fireworks and overnight stay.",
    price: 3250,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: ["Christmas prayer", "Fireworks", "Cultural program", "Under the stars"],
    image: imgs[0],
  },
  {
    id: "new-year-dunes",
    title: "New Year at the Dunes",
    description: "Camel safari with sunset, cultural dance & music, bonfire, fireworks and overnight stay under stars.",
    price: 3950,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: ["Bonfire", "Fireworks", "Cultural program", "Under the stars"],
    image: imgs[1],
  },
  {
    id: "new-year-jaisalmer",
    title: "New Year in Jaisalmer",
    description: "2-day New Year celebration tour with city + luxury desert camp, local sightseeing, camel ride, and jeep safari.",
    price: 12500,
    priceLabel: "/person",
    duration: "2 Nights / 3 Days",
    details: ["City + camp stay", "Sightseeing", "Camel & jeep safari", "Cultural program"],
    image: imgs[2],
  },
  {
    id: "new-year-sam",
    title: "New Year in Sam",
    description: "New Year celebration at Sam Sand Dunes camp. Tilak ceremony, cultural program, fireworks, camel & jeep safari.",
    price: 4050,
    priceLabel: "/person",
    duration: "4:00 PM – 1:00 AM",
    details: ["Sam Sand Dunes", "Tilak ceremony", "Fireworks & party", "Camel & jeep safari"],
    image: imgs[3],
  },
  {
    id: "new-year-budget",
    title: "New Year on a Budget",
    description: "Budget New Year desert experience with camel & jeep safari, cultural program, fireworks, bonfire, and overnight stay.",
    price: 4550,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: ["Budget friendly", "Camel & jeep safari", "Fireworks & bonfire", "Veg buffet"],
    image: imgs[4],
  },
  {
    id: "holi-jaisalmer",
    title: "Holi in Jaisalmer",
    description: "Celebrate Holi like a local — play with colors, visit Fort and temples, jeep ride to oasis, and camel ride.",
    price: 4450,
    priceLabel: "/person",
    duration: "8:30 AM – 11:30 AM next day",
    details: ["Play with colors", "Fort & temples", "Jeep ride to oasis", "Camel ride"],
    image: imgs[5],
  },
  {
    id: "luxury-night-dunes",
    title: "Luxury Night in the Dunes",
    description: "Luxury overnight stay on dunes with jeep safari, camel ride, private dance & music, dinner under the stars.",
    price: 19550,
    priceLabel: "/person",
    duration: "3:00 PM – 11:00 AM next day",
    details: ["Luxury four-poster bed", "Private program", "Desert dinner", "Jeep safari"],
    image: imgs[6],
  },
];

const SpecialEvents = () => (
  <ServicePageLayout
    icon={<PartyPopper className="h-5 w-5 text-gold" />}
    navTitle="Special Events"
    heroImage={specialEventsImg}
    heroSubtitle="Celebrate in the Desert"
    heroTitle="Special Events"
    heroDescription="From romantic honeymoons to festival celebrations — create unforgettable memories in the Thar Desert."
    activities={activities}
    bookingType="Special Event"
  />
);

export default SpecialEvents;
