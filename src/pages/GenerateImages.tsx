import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  "snacks", "breakfast", "omelette", "indian-flavours", "chapati", "curd",
  "desert", "hot-drinks", "cold-beverages", "fast-foods", "pizza", "soup",
  "pancake", "salad", "rice", "thali",
];

const GenerateImages = () => {
  const [status, setStatus] = useState<Record<string, string>>({});
  const [generating, setGenerating] = useState(false);
  const [current, setCurrent] = useState("");

  const generateOne = async (cat: string) => {
    setCurrent(cat);
    setStatus((prev) => ({ ...prev, [cat]: "generating..." }));
    try {
      const { data, error } = await supabase.functions.invoke("generate-menu-images", {
        body: { category: cat },
      });
      if (error) throw error;
      const url = data?.results?.[cat];
      setStatus((prev) => ({ ...prev, [cat]: url || "done (no url)" }));
    } catch (e: any) {
      setStatus((prev) => ({ ...prev, [cat]: `error: ${e.message}` }));
    }
  };

  const generateAll = async () => {
    setGenerating(true);
    for (const cat of categories) {
      await generateOne(cat);
      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 2000));
    }
    setGenerating(false);
    setCurrent("");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">
          Generate Menu Category Images
        </h1>
        <p className="text-muted-foreground mb-6">
          This will generate AI images for each menu category and upload them to storage.
          It takes ~30 seconds per image.
        </p>
        <button
          onClick={generateAll}
          disabled={generating}
          className="mb-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50"
        >
          {generating ? `Generating: ${current}...` : "Generate All Images"}
        </button>

        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-4 p-3 bg-card rounded-lg border border-border">
              <span className="font-accent text-lg w-40">{cat}</span>
              <span className="text-sm text-muted-foreground flex-1 truncate">
                {status[cat] || "pending"}
              </span>
              {status[cat]?.startsWith("http") && (
                <img src={status[cat]} alt={cat} className="w-16 h-16 object-cover rounded" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
