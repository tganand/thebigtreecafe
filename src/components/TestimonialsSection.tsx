import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const localTestimonials = [
  { name: "Burner", stars: 5, text: "This chow mein was an absolute delight. The noodles were stir-fried to perfection with a lovely smoky aroma, and each bite was packed with flavor. The vegetables were crisp and fresh, and the seasoning was excellent." },
  { name: "Julie Baxter", stars: 5, text: "Great little rooftop café. Gorgeous sunset views, friendly service, and delicious, freshly prepared thali. Only drawback is the multitude of people that come just for the sunset and take a million selfies." },
  { name: "Rebecca K", stars: 5, text: "Really tasty food and friendly service. You can sit in the shade with AC and enjoy an amazing view of the desert. We came here multiple times during our stay in Fort Jaisalmer. Highly recommend!" },
  { name: "Deyana Stoeva", stars: 5, text: "We visited this place twice during our stay – for lunch and dinner – and can absolutely recommend it. The view from the fort is gorgeous, and the heartwarming welcome from the owner adds to the entire experience." },
  { name: "Andrea Bednarik", stars: 4, text: "Really good food. Had the thali for 650 INR and it was really worth the money (but it takes time, be prepared). It's huge, delicious and heavy. The service was great." },
  { name: "Giacomo Giorgianni", stars: 5, text: "Great place for lunch but especially for dinner. The food is really good and the owner is a very friendly and chatty person. We came back twice during our short stay in Jaisalmer." },
  { name: "Bhim Makana", stars: 5, text: "The reputation is well established. The terrace at the top of the fort is very pleasant no matter the time of day. The drinks including Jaisalmer special lassi are delicious. Breakfast was also great." },
  { name: "Игорь Пархоменко", stars: 5, text: "A very pleasant place where you can enjoy a stunning sunrise with a cup of masala chai or end the day with traditional local Indian food while taking in a beautiful view of the city." },
  { name: "Ashish Gupta", stars: 5, text: "The environment is really peaceful and the sunset view was really great from here. Food was also good and I enjoyed it while watching the sunset." },
  { name: "John Stiver", stars: 5, text: "Incredible Rajasthani thali and very friendly service with a sunset view." },
  { name: "Bhavana J", stars: 5, text: "Great place with good views. Food is really good. Worth the price. Would totally recommend." },
  { name: "Vismay SM", stars: 5, text: "This restaurant is an absolute gem, especially for the view. Watching the sky change colors while enjoying the food was easily the highlight of the visit." },
  { name: "Wendysue Burton", stars: 5, text: "This café serves the most delicious and authentic dishes. Dilip's recommendations were a treat." },
  { name: "Arshia Gupta", stars: 4, text: "The atmosphere was amazing, the view impeccable, and the owner friendly. The drinks were average, but it's a great place to sit and enjoy the vibe." },
  { name: "Ujjwal Choudhary", stars: 5, text: "Big Tree Café is an absolute gem. The ambiance is vibrant and relaxing. The experience was exceptional thanks to the warm hospitality." },
  { name: "Isaac Moore", stars: 5, text: "Had an amazing experience here! It's a lovely family-run restaurant with such a warm and welcoming atmosphere. The staff were incredibly kind and friendly, which made us feel right at home. The food was all vegetarian but the flavours were unreal. Very well priced for the quality. What really made it special was the stunning view over the city especially during sunset. Highly recommend!" },
  { name: "Naomi Moore", stars: 5, text: "The Big Tree Cafe is a lovely little gem! Family run by a lovely gentleman and his sons. There is a little wait for the food as it is all cooked fresh to order, and is amazing!! Genuine home cooking and totally worth the little wait. The view is also amazing, and the service was lovely and so warm. They showed us the best spot to see the sunset. Would highly recommend!" },
];

const internationalTestimonials = [
  { name: "Fabiano Medeiros Magalhaes", stars: 5, text: "o melhor por do Sol do mundo, excelente café e ótimo atendimento, garçom de primeira qualidade, sorbha kumar" },
  { name: "しゅきこれたん", stars: 5, text: "おいしかったし小さい子供がお手伝いしててめっちゃ可愛かった！オレンジジュースが破格のおいしさ！" },
  { name: "Louis Yanchal", stars: 5, text: "店員さんもフレンドリーで食事も美味しく景色もよく、とてもリラックスして過ごせました\nひとりでインドに来て不安ですがここなら安心です。" },
  { name: "Marzena Sztuka", stars: 5, text: "Miejsce magiczne- bardzo dobre jedzenie; smaki , zapachy, kolory i pièkne widoki" },
  { name: "Marcin Drągowski", stars: 5, text: "Super miejsce, polecam. Można pojeść lokalnych potraw i poczuć cudowny klimat i spotkać się z życzliwością 😊" },
  { name: "Monika Drągowska", stars: 5, text: "Wspaniale miejsce, żeby zjeść lokalnie, zrelaksować się i poczu chillout. Gorąco polecam 😍🥰" },
  { name: "Mateusz Jaśkiewicz", stars: 5, text: "Uwielbiam tu wracać. Świetna kuchnia, piękny widok oraz wspaniali właściciele i obsługa ❤️ do zobaczenia!" },
  { name: "H T", stars: 5, text: "景色良かったです。\n日本語喋れる人で楽しかったです！" },
  { name: "Alexia Ruiz", stars: 5, text: "Très bons moments dans ce petit café où l'on peut avoir une vue extraordinaire et un coucher de soleil magnifique. De plus c'est très bon et les propriétaires sont adorables, mention spécial au petit garçon qui sert les clients et qui est vraiment un rayon de soleil ☀️" },
  { name: "Julia Sander", stars: 5, text: "Wir haben uns sehr willkommen hier gefühlt.. Der Besitzer ist wirklich sehr höflich und auch sein Neffe macht super Service. Das Essen hat auch echt lecker geschmeckt und man sitzt sehr sehr gemütlich und hat einen tollen Blick." },
  { name: "You Naga", stars: 5, text: "とても眺めがよく気持ちいい場所でした。店主の方は、大変優しくしてくれて感謝でいっぱいです。ジャイサルメールをまた訪れたいと思いました。" },
  { name: "Ambre D'Hervilly", stars: 5, text: "Super vue sur la ville de nuit, le coucher du soleil doit probablement y être incroyable. Nous avons dîner ici et c'était très bon, bien que le service était un peu long." },
];

const buildReviewMix = (local: typeof localTestimonials, international: typeof internationalTestimonials) => {
  const totalSlots = 30;

  return Array.from({ length: totalSlots }, (_, index) => {
    const isInternationalSlot = index % 10 < 7;

    if (isInternationalSlot) {
      return international[index % international.length];
    }

    return local[index % local.length];
  });
};

const testimonials = buildReviewMix(localTestimonials, internationalTestimonials);

const colSize = Math.ceil(testimonials.length / 3);
const firstColumn = testimonials.slice(0, colSize);
const secondColumn = testimonials.slice(colSize, colSize * 2);
const thirdColumn = testimonials.slice(colSize * 2);

const avatarColors = [
  "bg-primary/20 text-primary",
  "bg-accent/20 text-accent",
  "bg-gold/20 text-gold-dark",
  "bg-terracotta/20 text-terracotta",
  "bg-secondary text-secondary-foreground",
];

const getInitials = (name: string) => {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getAvatarColor = (name: string) => avatarColors[name.length % avatarColors.length];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${i < count ? "fill-primary text-primary" : "text-border"}`}
      />
    ))}
  </div>
);

const TestimonialsColumn = ({
  className,
  testimonials: items,
  duration = 10,
}: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {items.map(({ text, name, stars }, i) => (
            <div
              className="p-8 rounded-3xl border border-border bg-card shadow-lg shadow-primary/10 max-w-xs w-full"
              key={i}
            >
              <StarRating count={stars} />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                "{text}"
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-display text-sm font-bold ${getAvatarColor(name)}`}>
                  {getInitials(name)}
                </div>
                <div className="flex flex-col">
                  <div className="font-display text-sm font-semibold text-foreground tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="font-body text-xs text-muted-foreground leading-5">
                    Google Review
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const TestimonialsSection = () => {
  const heading = useScrollReveal("blur-in", 0);
  const title = useScrollReveal("fade-up", 0.1);
  const divider = useScrollReveal("zoom-in", 0.2);

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p ref={heading.ref} style={heading.style} className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Guest Reviews
          </p>
          <h2 ref={title.ref as React.RefObject<HTMLHeadingElement>} style={title.style} className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <div ref={divider.ref} style={divider.style} className="w-16 h-0.5 bg-primary mx-auto" />
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
