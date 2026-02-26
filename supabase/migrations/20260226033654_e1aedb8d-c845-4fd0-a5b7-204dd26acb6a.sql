-- Create storage bucket for menu images
INSERT INTO storage.buckets (id, name, public)
VALUES ('menu-images', 'menu-images', true);

-- Allow public read access
CREATE POLICY "Menu images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'menu-images');

-- Allow anyone to upload menu images (edge function)
CREATE POLICY "Allow upload menu images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'menu-images');

CREATE POLICY "Allow update menu images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'menu-images');