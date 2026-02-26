import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const categoryPrompts: Record<string, string> = {
  snacks: "Professional food photography of Indian snacks like pakoras and french fries on a rustic plate, warm golden sunset lighting, wooden table, top-down view, appetizing crispy golden presentation",
  breakfast: "Professional food photography of Indian breakfast spread with parathas, poha, and toast, warm golden morning lighting, rustic wooden table, top-down view, appetizing presentation",
  omelette: "Professional food photography of fluffy golden omelette with toast on a ceramic plate, warm lighting, rustic wooden table, top-down view, appetizing breakfast presentation",
  "indian-flavours": "Professional food photography of rich Indian curries like paneer butter masala and dal in brass bowls, warm golden lighting, rustic wooden table, top-down view, vibrant colors",
  chapati: "Professional food photography of fresh Indian breads - roti, naan, and garlic naan stacked on a plate, warm golden lighting, rustic wooden table, top-down view, soft fluffy texture",
  curd: "Professional food photography of Indian raita and curd in ceramic bowls garnished with herbs, warm golden lighting, rustic wooden table, top-down view, creamy white texture",
  desert: "Professional food photography of Indian desserts like gulab jamun and halwa in brass bowls, warm golden lighting, rustic wooden table, top-down view, rich syrupy presentation",
  "hot-drinks": "Professional food photography of masala chai and coffee in traditional cups with steam rising, warm golden lighting, rustic wooden table, cozy atmosphere, Indian cafe style",
  "cold-beverages": "Professional food photography of colorful Indian lassi and milkshakes in tall glasses with condensation, warm golden lighting, rustic wooden table, refreshing tropical presentation",
  "fast-foods": "Professional food photography of Indo-Chinese fast food like chowmein and manchurian on plates, warm golden lighting, rustic wooden table, top-down view, sizzling presentation",
  pizza: "Professional food photography of freshly baked vegetarian pizza with melted cheese and colorful toppings, warm golden lighting, rustic wooden table, top-down view, stretchy cheese",
  soup: "Professional food photography of hot steaming soup in a ceramic bowl with garnish, warm golden lighting, rustic wooden table, top-down view, comforting presentation",
  pancake: "Professional food photography of stacked fluffy pancakes with honey and banana toppings, warm golden lighting, rustic wooden table, top-down view, dripping syrup",
  salad: "Professional food photography of fresh colorful Indian salad with papad on a plate, warm golden lighting, rustic wooden table, top-down view, vibrant fresh presentation",
  rice: "Professional food photography of fragrant Indian biryani and jeera rice in brass vessels, warm golden lighting, rustic wooden table, top-down view, steaming aromatic presentation",
  thali: "Professional food photography of a complete Rajasthani thali with multiple dishes, dal, rice, chapati, and sweets in a traditional brass plate, warm golden lighting, rustic wooden table, top-down view, grand feast presentation",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { category } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // If "all" is passed, generate all categories
    const categoriesToGenerate = category === "all" 
      ? Object.keys(categoryPrompts) 
      : [category];

    const results: Record<string, string> = {};

    for (const cat of categoriesToGenerate) {
      const prompt = categoryPrompts[cat];
      if (!prompt) {
        results[cat] = "unknown category";
        continue;
      }

      console.log(`Generating image for: ${cat}`);

      const aiResponse = await fetch(
        "https://ai.gateway.lovable.dev/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-image",
            messages: [{ role: "user", content: prompt }],
            modalities: ["image", "text"],
          }),
        }
      );

      if (!aiResponse.ok) {
        const errText = await aiResponse.text();
        console.error(`AI error for ${cat}:`, aiResponse.status, errText);
        results[cat] = `error: ${aiResponse.status}`;
        continue;
      }

      const aiData = await aiResponse.json();
      const imageUrl = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

      if (!imageUrl) {
        results[cat] = "no image returned";
        continue;
      }

      // Extract base64 data
      const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, "");
      const binaryData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));

      // Upload to storage
      const fileName = `${cat}.png`;
      const { error: uploadError } = await supabase.storage
        .from("menu-images")
        .upload(fileName, binaryData, {
          contentType: "image/png",
          upsert: true,
        });

      if (uploadError) {
        console.error(`Upload error for ${cat}:`, uploadError);
        results[cat] = `upload error: ${uploadError.message}`;
        continue;
      }

      const { data: publicUrlData } = supabase.storage
        .from("menu-images")
        .getPublicUrl(fileName);

      results[cat] = publicUrlData.publicUrl;
      console.log(`Done: ${cat} -> ${publicUrlData.publicUrl}`);
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
