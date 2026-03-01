import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { MenuCategory } from "@/data/menuData";

const SUPABASE_URL = "https://carzmfqjhbgcewguaepy.supabase.co";

const CategoryCard = ({ section }: { section: MenuCategory }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const hasMore = section.items.length > section.initialShow;
  const visibleItems = expanded ? section.items : section.items.slice(0, section.initialShow);

  const imageUrl = `${SUPABASE_URL}/storage/v1/object/public/menu-images/${section.imageKey}.png`;

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl hover:border-primary/20">
      {/* Category Header Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
        {!imgError && (
          <img
            src={imageUrl}
            alt={section.category}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {/* Category title on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-2xl font-bold text-foreground drop-shadow-sm">
            <span className="mr-2">{section.emoji}</span>
            {section.category}
          </h3>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-5">
        <div className="space-y-2.5">
          {visibleItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-baseline gap-1">
                <span className="font-accent text-base text-foreground">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-muted-foreground/30 mx-1 mb-1" />
                <span className="font-body text-sm font-bold text-primary shrink-0">{item.price}</span>
              </div>
              {item.desc && (
                <p className="font-body text-xs text-muted-foreground mt-0.5 pl-1">{item.desc}</p>
              )}
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
    </div>
  );
};

export default CategoryCard;
