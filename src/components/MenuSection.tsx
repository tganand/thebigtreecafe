import { useState } from "react";
import { menuData } from "@/data/menuData";
import CategoryCard from "@/components/MenuCategoryCard";

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
