import { useState, useMemo } from "react";
import { menuData, type MenuTag } from "@/data/menuData";
import CategoryCard from "@/components/MenuCategoryCard";

type FilterKey = "all" | MenuTag;

const FILTERS: { key: FilterKey; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "🍽️" },
  { key: "veg", label: "Veg", emoji: "🥬" },
  { key: "egg", label: "Non-Veg & Eggs", emoji: "🥚" },
  { key: "drinks", label: "Drinks", emoji: "☕" },
  { key: "quick-bites", label: "Quick Bites", emoji: "⚡" },
];

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredCategories = useMemo(() => {
    if (activeFilter === "all") return menuData;
    return menuData.filter((cat) => cat.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="menu" className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 font-accent text-lg uppercase tracking-[0.25em] text-primary">Our Menu</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Flavors of Rajasthan</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-muted-foreground md:text-base">
            Freshly crafted dishes, drinks, and signature thalis — tap a filter to explore.
          </p>
          <div className="mx-auto mt-5 h-0.5 w-20 bg-primary" />
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full border px-5 py-2 font-accent text-sm font-semibold uppercase tracking-wider transition-all duration-200
                ${
                  activeFilter === f.key
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
                }`}
            >
              <span className="mr-1.5">{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Category count */}
        <p className="mb-6 text-center font-body text-sm text-muted-foreground">
          Showing {filteredCategories.length} categor{filteredCategories.length === 1 ? "y" : "ies"}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((section) => (
            <CategoryCard key={section.category} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
