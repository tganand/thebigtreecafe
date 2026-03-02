import { useState } from "react";
import { menuData } from "@/data/menuData";
import CategoryCard from "@/components/MenuCategoryCard";

const INITIAL_CATEGORIES = 3;

const MenuSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? menuData : menuData.slice(0, INITIAL_CATEGORIES);

  return (
    <section id="menu" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 font-accent text-lg uppercase tracking-[0.25em] text-primary">Our Menu</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Flavors of Rajasthan</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-muted-foreground md:text-base">
            Freshly crafted dishes, drinks, and signature thalis — now with dedicated visuals for every category.
          </p>
          <div className="mx-auto mt-5 h-0.5 w-20 bg-primary" />
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            16 Categories
          </span>
          <span className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Vegetarian & Egg Options
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCategories.map((section) => (
            <CategoryCard key={section.category} section={section} />
          ))}
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full border border-primary/30 bg-primary px-8 py-3 font-accent text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
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
