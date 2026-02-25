

## Plan: Generate 16 Category Images + Redesign Menu Section

### What will change

1. **Create a Supabase Edge Function** (`generate-menu-images`) that calls the Lovable AI image generation model (`google/gemini-2.5-flash-image`) to generate one food image per category. Each prompt will request warm, golden-toned food photography matching the website's desert/sunset aesthetic.

2. **Create a helper page or script trigger** to generate all 16 images one by one, upload them to Supabase Storage, and store their public URLs. The 16 categories are: Snacks, Breakfast, Omelette with Toast, Indian Flavours, Chapati, Curd, Desert, Hot Drinks, Cold Beverages, Fast Foods, Pizza, Soup, Pancake, Salad, Rice, Thali.

3. **Remove the 3 food images** at the top of the menu section (the `food-1.jpg`, `food-2.jpg`, `food-3.jpg` grid).

4. **Redesign `MenuSection.tsx`** with a premium card layout:
   - Each category card gets a header image (from generated images stored in Supabase Storage)
   - Better category-specific emojis (🥘, 🍕, ☕, etc.)
   - Classic menu-style dotted separators between item name and price
   - Warm, soft card styling matching the booking dialog aesthetic
   - Smooth expand/collapse for items

5. **Add an `image` field** to the `MenuCategory` interface pointing to the Supabase Storage URL for each category.

### Technical Details

- **Image generation**: Edge function using `google/gemini-2.5-flash-image` via `https://ai.gateway.lovable.dev/v1/chat/completions` with `modalities: ["image", "text"]`
- **Storage**: Images saved to a Supabase Storage bucket (e.g., `menu-images`)
- **Prompt template**: "Professional food photography of [category description], warm golden sunset lighting, rustic wooden table, top-down view, appetizing presentation, Indian restaurant style"
- **Fallback**: Category cards will show a gradient placeholder if the image hasn't loaded yet
- **The 3 old food images** (`food-1.jpg`, `food-2.jpg`, `food-3.jpg`) and their imports will be removed from MenuSection

### Prerequisites

- Supabase must be connected (for edge function + storage)
- Lovable Cloud must be enabled (for `LOVABLE_API_KEY`)

### File changes

| File | Action |
|------|--------|
| `supabase/functions/generate-menu-images/index.ts` | Create - edge function to generate and store images |
| `src/components/MenuSection.tsx` | Rewrite - remove 3 top images, add category header images, redesign cards |
| `src/pages/Index.tsx` | Minor - may need to trigger image generation once |

