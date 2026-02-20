import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [
  { src: gallery1, alt: "Authentic Rajasthani Thali" },
  { src: gallery2, alt: "Outdoor seating under the big tree at sunset" },
  { src: gallery3, alt: "Masala chai served in earthen cups" },
  { src: gallery4, alt: "Jaisalmer fort view from the cafe terrace" },
  { src: gallery5, alt: "Rajasthani folk musicians performing" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="font-accent text-lg tracking-[0.25em] uppercase text-primary mb-4">
          Moments
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Life at The Big Tree
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </div>

      {/* Horizontal scrollable gallery */}
      <div className="flex gap-5 overflow-x-auto px-6 md:px-12 pb-6 scrollbar-hide snap-x snap-mandatory">
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-none w-[320px] md:w-[420px] snap-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[240px] md:h-[300px] object-cover rounded-3xl shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-center font-body text-xs tracking-widest uppercase text-muted-foreground mt-6">
        Swipe to explore →
      </p>
    </section>
  );
};

export default GallerySection;
