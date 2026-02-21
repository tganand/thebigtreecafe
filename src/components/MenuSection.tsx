import { useState } from "react";
import { ChevronDown } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

interface MenuCategory {
  category: string;
  emoji: string;
  initialShow: number;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "Snacks",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Veg Pakora", price: "₹200" },
      { name: "Onion Pakora", price: "₹250" },
      { name: "Potato Pakora", price: "₹250" },
      { name: "Egg Pakora", price: "₹300" },
      { name: "Paneer Pakora", price: "₹350" },
      { name: "French Fries", price: "₹250" },
      { name: "Peanut Masala", price: "₹200" },
      { name: "Chilli Honey Potato", price: "₹300" },
    ],
  },
  {
    category: "Breakfast",
    emoji: "🟡",
    initialShow: 5,
    items: [
      { name: "Cookies with Tea", price: "₹200" },
      { name: "Paneer Prantha", price: "₹250" },
      { name: "Shahi Poha", price: "₹180" },
      { name: "Plain Prantha", price: "₹100" },
      { name: "Aloo Prantha", price: "₹200" },
      { name: "Gobhi Prantha", price: "₹200" },
      { name: "Plain Maggie", price: "₹100" },
      { name: "Veg. Maggie", price: "₹150" },
      { name: "Bread Omelete", price: "₹200" },
      { name: "Butter Toast", price: "₹200" },
      { name: "Butter Jam Toast (4 pcs.)", price: "₹200" },
      { name: "White Sauce Pasta", price: "₹250" },
      { name: "Red Sauce Pasta", price: "₹250" },
    ],
  },
  {
    category: "Omelette with Toast",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Plain Omelete", price: "₹200" },
      { name: "Tomato Omelete", price: "₹250" },
      { name: "Cheese Omelete", price: "₹250" },
      { name: "Masala Omelete", price: "₹200" },
      { name: "Onion Omelete", price: "₹200" },
      { name: "Veg. Omelete", price: "₹250" },
      { name: "Tomato Cheese Omelete", price: "₹250" },
      { name: "Garlic Onion Omelete", price: "₹200" },
      { name: "Boiled Egg (2 pcs.)", price: "₹150" },
      { name: "Egg Fried Toast", price: "₹250" },
      { name: "Scrambled Egg Toast", price: "₹250" },
      { name: "Egg Buji", price: "₹250" },
    ],
  },
  {
    category: "Indian Flavours",
    emoji: "🟡",
    initialShow: 5,
    items: [
      { name: "Palak Paneer", price: "₹300" },
      { name: "Matar Paneer", price: "₹350" },
      { name: "Kadai Paneer", price: "₹380" },
      { name: "Shahi Paneer", price: "₹350" },
      { name: "Paneer Butter Masala", price: "₹380" },
      { name: "Malai Kofta", price: "₹400" },
      { name: "Gatte Curry", price: "₹300" },
      { name: "Ker Sangri", price: "₹350" },
      { name: "Bhindi Masala", price: "₹200" },
      { name: "Baingan Masala", price: "₹200" },
      { name: "Mix Veg", price: "₹250" },
      { name: "Aloo Jeera", price: "₹200" },
      { name: "Curry Pakora", price: "₹300" },
      { name: "Dal Fry", price: "₹200" },
      { name: "Dal Tadka", price: "₹250" },
      { name: "Kaju Curry", price: "₹400" },
      { name: "Sev Tomato", price: "₹200" },
    ],
  },
  {
    category: "Chapati",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Plain Roti", price: "₹20" },
      { name: "Butter Roti", price: "₹30" },
      { name: "Plain Nan", price: "₹70" },
      { name: "Butter Nan", price: "₹100" },
      { name: "Garlic Nan", price: "₹150" },
      { name: "Cheese Nan", price: "₹180" },
      { name: "Cheese Garlic Nan", price: "₹200" },
    ],
  },
  {
    category: "Curd",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Plain Curd", price: "₹150" },
      { name: "Veg. Raita", price: "₹250" },
      { name: "Mix Fruit Raita", price: "₹300" },
      { name: "Banana Curd", price: "₹200" },
    ],
  },
  {
    category: "Desert",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Ghotua Traditional Sweet (2 pcs.)", price: "₹200" },
      { name: "Gulab Jamun (2 pcs.)", price: "₹200" },
      { name: "Churma", price: "₹200" },
      { name: "Suji Ka Halwa", price: "₹200" },
    ],
  },
  {
    category: "Hot Drinks",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Cup Black Tea", price: "₹50" },
      { name: "Masala Tea", price: "₹50" },
      { name: "Cup Milk Coffee", price: "₹100" },
      { name: "Pot Black Tea", price: "₹200" },
      { name: "Cup Black Coffee", price: "₹50" },
      { name: "Pot Black Coffee", price: "₹250" },
      { name: "Pot Milk Tea", price: "₹300" },
      { name: "Hot Milk (Glass)", price: "₹150" },
      { name: "Hot Chocolate", price: "₹200" },
      { name: "Cup Ginger Lemon Honey Tea", price: "₹100" },
      { name: "Pot Ginger Lemon Honey Tea", price: "₹300" },
      { name: "Mint Tea", price: "₹100" },
      { name: "Lemon Tea", price: "₹70" },
      { name: "Green Tea", price: "₹100" },
    ],
  },
  {
    category: "Cold Beverages",
    emoji: "🟡",
    initialShow: 5,
    items: [
      { name: "Jaisalmer Spl. Lassi Spl.", price: "₹300" },
      { name: "Jaisalmer Spl. Ice Cream", price: "₹250" },
      { name: "Sweet Lassi", price: "₹150" },
      { name: "Banana Lassi", price: "₹200" },
      { name: "Pineapple Shake", price: "₹200" },
      { name: "Mango Shake", price: "₹200" },
      { name: "Banana Shake", price: "₹250" },
      { name: "Orange Shake", price: "₹250" },
      { name: "Chocolate Milk Shake", price: "₹300" },
      { name: "Butter Milk", price: "₹100" },
      { name: "Cold Coffee", price: "₹300" },
      { name: "Cold Coffee with Ice Cream", price: "₹350" },
      { name: "Mineral Water", price: "₹30" },
      { name: "Coca-Cola / Pepsi / Limca / Fanta / Mazza", price: "₹100" },
      { name: "Plain Soda", price: "₹100" },
      { name: "Fresh Lemon Soda", price: "₹100" },
      { name: "Fresh Orange Juice", price: "₹300" },
      { name: "Diet Coke", price: "₹200" },
      { name: "Red Bull", price: "₹300" },
    ],
  },
  {
    category: "Fast Foods",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Veg. Chowmein", price: "₹200" },
      { name: "Paneer Chowmein", price: "₹250" },
      { name: "Manchurian Dry", price: "₹200" },
      { name: "Manchurian Gravy", price: "₹200" },
      { name: "Veg. Sandwich", price: "₹200" },
      { name: "Cheese Sandwich", price: "₹250" },
      { name: "Garlic Cheese Sandwich", price: "₹300" },
      { name: "Egg Sandwich", price: "₹300" },
      { name: "Tomato Cheese Sandwich", price: "₹300" },
      { name: "Chilli Paneer Dry", price: "₹300" },
      { name: "Chilli Paneer Gravy", price: "₹300" },
    ],
  },
  {
    category: "Pizza",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "TBT SP Pizza", price: "₹399" },
      { name: "Veg. Pizza", price: "₹350" },
      { name: "Onion Capsicum Pizza", price: "₹300" },
      { name: "Paneer Pizza", price: "₹399" },
      { name: "Chilli Paneer Pizza", price: "₹350" },
      { name: "Tomato Pizza", price: "₹250" },
      { name: "Make Your Own Pizza", price: "₹380" },
    ],
  },
  {
    category: "Soup",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Tomato Soup", price: "₹150" },
      { name: "Veg. Soup", price: "₹200" },
      { name: "Hot & Sour Soup", price: "₹200" },
      { name: "Manchow Soup", price: "₹250" },
    ],
  },
  {
    category: "Pancake",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Plain Pancake", price: "₹150" },
      { name: "Banana Pancake", price: "₹200" },
      { name: "Honey Pancake", price: "₹250" },
      { name: "Nutella Pancake", price: "₹300" },
      { name: "Chocolate Pancake", price: "₹250" },
      { name: "Lemon Pancake", price: "₹200" },
      { name: "Jam Pancake", price: "₹200" },
    ],
  },
  {
    category: "Salad",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Roasted Papad", price: "₹50" },
      { name: "Fried Papad", price: "₹150" },
      { name: "Masala Papad", price: "₹200" },
      { name: "Indian Green Salad", price: "₹200" },
      { name: "Tomato Salad", price: "₹150" },
      { name: "Onion Salad", price: "₹100" },
      { name: "Fruit Salad", price: "₹300" },
      { name: "Paneer Chilli", price: "₹250" },
    ],
  },
  {
    category: "Rice",
    emoji: "🟡",
    initialShow: 4,
    items: [
      { name: "Plain Rice", price: "₹150" },
      { name: "Jeera Rice", price: "₹200" },
      { name: "Veg Pulao", price: "₹250" },
      { name: "Fried Rice", price: "₹250" },
      { name: "Curd Rice", price: "₹200" },
      { name: "Tomato Rice", price: "₹250" },
      { name: "Veg. Biryani", price: "₹200" },
      { name: "Lemon Rice", price: "₹250" },
      { name: "Egg Biryani", price: "₹300" },
      { name: "Egg Fried Rice", price: "₹300" },
    ],
  },
  {
    category: "Thali",
    emoji: "🟡",
    initialShow: 3,
    items: [
      { name: "Rajasthani Spl. Thali", price: "₹650", desc: "3 Veg, Dal, Rice, Chapati, Papad, Sweet" },
      { name: "Marwadi Spl. Thali", price: "₹850", desc: "4 Veg, Dal, Rice, Chapati, Salad, Sweet, Papad" },
      { name: "Jaisalmer Spl. Thali", price: "₹1100", desc: "Desert Beans, Gatta Curry, Dal Tadka, Jeera Rice, Butter Paneer, Jaisalmer Special Lassi, Green Salad, Traditional Jaisalmer Sweet, Fried Papad, Mix Veg, Butter Chapati" },
    ],
  },
];

const images = [food1, food2, food3];

const CategoryCard = ({ section }: { section: MenuCategory }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = section.items.length > section.initialShow;
  const visibleItems = expanded ? section.items : section.items.slice(0, section.initialShow);

  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-primary/10">
      <h3 className="font-display text-2xl font-semibold text-foreground mb-5 pb-3 border-b border-primary/30">
        {section.emoji} {section.category}
      </h3>
      <div className="space-y-3">
        {visibleItems.map((item) => (
          <div key={item.name} className="flex justify-between items-start gap-2">
            <div className="flex-1 min-w-0">
              <span className="font-accent text-base text-foreground">{item.name}</span>
              {item.desc && (
                <p className="font-body text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              )}
            </div>
            <span className="font-body text-sm font-bold text-primary shrink-0">{item.price}</span>
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-primary font-accent text-sm font-semibold hover:underline transition-all"
        >
          {expanded ? "Show Less" : `Show More (${section.items.length - section.initialShow})`}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
};

const INITIAL_CATEGORIES = 3;

const MenuSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? menuData : menuData.slice(0, INITIAL_CATEGORIES);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
            Our Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flavors of Rajasthan
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {images.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt="Delicious food at The Big Tree Cafe"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((section) => (
            <CategoryCard key={section.category} section={section} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-primary text-primary-foreground font-accent text-base font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-md"
            >
              Show Full Menu
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
