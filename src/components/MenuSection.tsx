import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";

const menuItems = [
  {
    category: "Signature Dishes",
    items: [
      { name: "Rajasthani Thali", price: "₹350", desc: "A royal spread of dal bati churma, gatte ki sabzi, papad & more" },
      { name: "Laal Maas", price: "₹420", desc: "Fiery Rajasthani mutton curry with mathania chillies" },
      { name: "Dal Baati Churma", price: "₹280", desc: "Classic baked wheat balls with lentils & sweet churma" },
    ],
  },
  {
    category: "Light Bites",
    items: [
      { name: "Paneer Tikka", price: "₹220", desc: "Chargrilled cottage cheese with desert spices" },
      { name: "Mirchi Vada", price: "₹120", desc: "Stuffed chilli fritters, a Jaisalmer street favorite" },
      { name: "Pyaaz Kachori", price: "₹90", desc: "Crispy onion-filled pastry with tangy chutney" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Masala Chai", price: "₹60", desc: "Spiced tea brewed the traditional way in a kulhad" },
      { name: "Thandai", price: "₹120", desc: "Chilled almond & saffron milk, a royal refreshment" },
      { name: "Filter Coffee", price: "₹80", desc: "South Indian style drip coffee" },
    ],
  },
];

const images = [food1, food2, food3];

const MenuSection = () => {
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

        <div className="grid md:grid-cols-3 gap-12">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 pb-3 border-b border-primary/30">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-accent text-xl font-medium text-foreground">
                        {item.name}
                      </h4>
                      <span className="font-body text-sm font-bold text-primary ml-2 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
