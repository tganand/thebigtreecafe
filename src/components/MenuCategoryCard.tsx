import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { MenuCategory } from "@/data/menuData";
import { menuCategoryImages } from "@/data/menuCategoryImages";

const CategoryCard = ({ section }: { section: MenuCategory }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = section.items.length > section.initialShow;
  const visibleItems = expanded ? section.items : section.items.slice(0, section.initialShow);
  const imageUrl = menuCategoryImages[section.imageKey];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-card/95 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
      <div className="relative h-52 overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={`${section.category} dishes`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-primary" />
            Chef selection
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground">
            <span className="mr-2">{section.emoji}</span>
            {section.category}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <div className="space-y-2.5">
          {visibleItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline gap-1">
                <span className="font-accent text-base text-foreground">{item.name}</span>
                <span className="mx-1 mb-1 flex-1 border-b border-dotted border-muted-foreground/40" />
                <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 font-body text-xs font-bold text-primary">
                  {item.price}
                </span>
              </div>
              {item.desc && <p className="mt-0.5 pl-1 font-body text-xs text-muted-foreground">{item.desc}</p>}
            </div>
          ))}
        </div>

        {hasMore && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 font-accent text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            {expanded ? "Show Less" : `Show More (${section.items.length - section.initialShow})`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </article>
  );
};

export default CategoryCard;
