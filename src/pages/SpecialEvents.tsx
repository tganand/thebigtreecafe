import { PartyPopper } from "lucide-react";
import ServicePageLayout, { ServiceActivity } from "@/components/ServicePageLayout";
import specialEventsImg from "@/assets/activities/special-events.jpg";
import dinnerDunesImg from "@/assets/activities/dinner-dunes.jpg";
import camelSunsetImg from "@/assets/activities/camel-sunset.jpg";
import gadisarLakeImg from "@/assets/activities/gadisar-lake.jpg";
import culturalDanceImg from "@/assets/activities/cultural-dance.jpg";
import holiFestivalImg from "@/assets/activities/holi-festival.jpg";
import newYearDesertImg from "@/assets/activities/new-year-desert.jpg";
import newYearSamImg from "@/assets/activities/new-year-sam.jpg";
import diwaliDesertImg from "@/assets/activities/diwali-desert.jpg";
import preWeddingImg from "@/assets/activities/pre-wedding-shoot.jpg";
import newYearJaisalmerImg from "@/assets/activities/new-year-jaisalmer.jpg";
import honeymoonDunesImg from "@/assets/activities/honeymoon-dunes.jpg";
import honeymoonJaisalmerImg from "@/assets/activities/honeymoon-jaisalmer.jpg";
import luxuryNightImg from "@/assets/activities/luxury-night-dunes.jpg";
import christmasDunesImg from "@/assets/activities/christmas-dunes.jpg";

const activities: ServiceActivity[] = [
  {
    id: "dinner-dunes",
    title: "Dinner on the Dunes",
    description: "Dining experience on sand dunes with camel ride, private dance & music, Khaba Fort visit, and à la carte dinner.",
    price: 6550,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4:00 PM – 10:00 PM",
    details: [
      "Dining experience on sand dunes in the Thar Desert",
      "Camel ride included",
      "Private dance and music program",
      "Visit Khaba Fort and a natural oasis",
      "À la carte dinner in the desert",
      "Minimum 2 people required",
      "Start: ~4:00 PM | End: ~10:00 PM (same day)",
    ],
    image: dinnerDunesImg,
  },
  {
    id: "picnic-oasis",
    title: "Picnic by the Oasis",
    description: "Picnic near a natural oasis with transfers, Kuldhara village visit, camel ride, snacks, and karaoke session.",
    price: 3750,
    priceLabel: "/person",
    minPeople: 2,
    duration: "3:00 PM – 8:00 PM",
    details: [
      "Picnic near a natural oasis in the desert",
      "Transfers from Jaisalmer included",
      "Visit Kuldhara village",
      "Short camel ride included",
      "Snacks + beer or wine included",
      "Karaoke session and cultural dance/music program",
      "Minimum 2 people required",
      "Start: ~3:00 PM | End: ~8:00 PM (same day)",
    ],
    image: gadisarLakeImg,
  },
  {
    id: "honeymoon-dunes",
    title: "Honeymoon on the Dunes",
    description: "Romantic desert safari with private dance & music, dinner & breakfast on dunes, and private tent overnight.",
    price: 14500,
    priceLabel: "/couple",
    fixedPrice: true,
    duration: "4:00 PM – 10:00 AM next day",
    details: [
      "Romantic desert safari experience for couples",
      "Pick-up and drop from Jaisalmer",
      "Visit Khaba Fort and natural oasis",
      "Camel ride through the dunes",
      "Private dance and music program",
      "Dinner + breakfast on the dunes",
      "Overnight stay in a private desert tent",
      "Start: ~4:00 PM | End: ~10:00 AM (next day)",
    ],
    image: honeymoonDunesImg,
  },
  {
    id: "honeymoon-jaisalmer",
    title: "Honeymoon in Jaisalmer",
    description: "2 Nights / 3 Days honeymoon tour with city hotel + luxury camp, camel ride, jeep safari, wine and candle-light dinner.",
    price: 19500,
    priceLabel: "/couple",
    fixedPrice: true,
    duration: "2 Nights / 3 Days",
    details: [
      "2 Nights / 3 Days honeymoon tour",
      "Stay in city hotel + luxury desert camp",
      "Camel ride and jeep safari",
      "Vegetarian meals included",
      "Bottle of wine and candle-light dinner",
      "Cultural dance and music program",
      "Start: ~10:00 AM | End: ~10:00 AM (third day)",
    ],
    image: honeymoonJaisalmerImg,
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Shoot",
    description: "2-day pre-wedding photography tour at Gadisar Lake, sand dunes, and Bada Bagh with camel ride and dune dinner.",
    price: 64500,
    priceLabel: "/couple",
    fixedPrice: true,
    duration: "1:00 PM – 8:00 PM next day",
    details: [
      "2-day pre-wedding photography tour",
      "Photo shoots at Gadisar Lake, sand dunes, and Bada Bagh",
      "Camel ride included",
      "Dinner on the dunes",
      "Scenic desert locations for stunning photos",
      "Start: ~1:00 PM | End: ~8:00 PM (next day)",
    ],
    image: preWeddingImg,
  },
  {
    id: "desert-festival",
    title: "The Desert Festival Odyssey",
    description: "Attend famous Desert Festival with boating, sightseeing, camel & jeep safari, horse races, and multi-stay experience.",
    price: 13500,
    priceLabel: "/person",
    minPeople: 2,
    duration: "4 Days / 3 Nights",
    details: [
      "Attend famous Desert Festival of Jaisalmer",
      "Boating and sightseeing tour",
      "Camel safari and jeep safari",
      "Horse and camel races",
      "Stay: fort, city hotel, and desert camp",
      "Minimum 2 people required",
      "Start: ~10:00 AM | End: ~11:00 AM (4th day)",
    ],
    image: culturalDanceImg,
  },
  {
    id: "diwali-desert",
    title: "Diwali in the Desert",
    description: "Celebrate Diwali with a local desert village. Puja ceremony, diyas, fireworks, village stay and camel ride.",
    price: 3150,
    priceLabel: "/person",
    duration: "4:00 PM – 10:00 AM next day",
    details: [
      "Celebrate Diwali with a local desert village",
      "Puja ceremony and lighting diyas",
      "Fireworks celebration",
      "Local meal included",
      "Village stay overnight",
      "Camel ride next day",
      "Start: ~4:00 PM | End: ~10:00 AM (next day)",
    ],
    image: diwaliDesertImg,
  },
  {
    id: "christmas-dunes",
    title: "Christmas amidst the Dunes",
    description: "Christmas celebration in Thar Desert with jeep ride, camel safari, cultural program, fireworks and overnight stay.",
    price: 3250,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: [
      "Christmas celebration in the Thar Desert",
      "Jeep ride and camel safari",
      "Visit Khaba Fort and natural oasis",
      "Cultural dance and music program",
      "Fireworks and Christmas prayer",
      "Overnight stay under the stars",
      "Start: ~1:30 PM | End: ~11:00 AM (next day)",
    ],
    image: christmasDunesImg,
  },
  {
    id: "new-year-dunes",
    title: "New Year at the Dunes",
    description: "Camel safari with sunset, cultural dance & music, bonfire, fireworks and overnight stay under stars.",
    price: 3950,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: [
      "Camel safari in the desert",
      "Sunset view on the dunes",
      "Cultural dance and music program",
      "Bonfire and fireworks celebration",
      "Overnight stay under the stars",
      "Start: ~1:30 PM | End: ~11:00 AM (next day)",
    ],
    image: newYearDesertImg,
  },
  {
    id: "new-year-jaisalmer",
    title: "New Year in Jaisalmer",
    description: "2-day New Year celebration tour with city + luxury desert camp, local sightseeing, camel ride, and jeep safari.",
    price: 12500,
    priceLabel: "/person",
    duration: "2 Nights / 3 Days",
    details: [
      "2-day New Year celebration tour",
      "Stay in city + luxury desert camp",
      "Local sightseeing tour",
      "Camel ride and jeep safari",
      "Cultural dance and music program",
      "Start: ~3:00 PM | End: ~11:00 AM (third day)",
    ],
    image: newYearJaisalmerImg,
  },
  {
    id: "new-year-sam",
    title: "New Year in Sam",
    description: "New Year celebration at Sam Sand Dunes camp. Tilak ceremony, cultural program, fireworks, camel & jeep safari.",
    price: 4050,
    priceLabel: "/person",
    duration: "4:00 PM – 1:00 AM",
    details: [
      "New Year celebration at Sam Sand Dunes desert camp",
      "Tilak ceremony on arrival",
      "Cultural dance and music program",
      "Fireworks and party",
      "Camel ride and jeep safari",
      "Arrival: ~4:00 PM | End: ~1:00 AM (same night)",
    ],
    image: desertCampImg,
  },
  {
    id: "new-year-budget",
    title: "New Year on a Budget",
    description: "Budget New Year desert experience with camel & jeep safari, cultural program, fireworks, bonfire, and overnight stay.",
    price: 4550,
    priceLabel: "/person",
    duration: "1:30 PM – 11:00 AM next day",
    details: [
      "Budget New Year desert experience",
      "Camel safari + jeep safari",
      "Cultural dance and music program",
      "Fireworks and bonfire celebration",
      "Vegetarian buffet dinner included",
      "Overnight stay on the dunes",
      "Start: ~1:30 PM | End: ~11:00 AM (next day)",
    ],
    image: camelSunsetImg,
  },
  {
    id: "holi-jaisalmer",
    title: "Holi in Jaisalmer",
    description: "Celebrate Holi like a local — play with colors, visit Fort and temples, jeep ride to oasis, and camel ride.",
    price: 4450,
    priceLabel: "/person",
    duration: "8:30 AM – 11:30 AM next day",
    details: [
      "Celebrate Holi festival like a local",
      "Play with colors in a fun, festive atmosphere",
      "Visit Jaisalmer Fort and temples",
      "Lunch included",
      "Jeep ride to oasis and Khaba",
      "Camel ride in the desert",
      "Start: ~8:30 AM | End: ~11:30 AM (next day)",
    ],
    image: holiFestivalImg,
  },
  {
    id: "luxury-night-dunes",
    title: "Luxury Night in the Dunes",
    description: "Luxury overnight stay on dunes with jeep safari, camel ride, private dance & music, dinner under the stars.",
    price: 19550,
    priceLabel: "/person",
    duration: "3:00 PM – 11:00 AM next day",
    details: [
      "Luxury overnight stay on the dunes",
      "Jeep safari and camel ride included",
      "Private dance and music program",
      "Dinner under the stars",
      "Sleep on a luxury four-poster bed in the desert",
      "Start: ~3:00 PM | End: ~11:00 AM (next day)",
    ],
    image: specialEventsImg,
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
