import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PageHeader = ({
  title,
  subtitle,
}: { title: string; subtitle?: string }) => (
  <div className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-3"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

type GalleryItem = {
  src: string;
  title: string;
  category: string;
  description: string;
};

const categories = [
  "All",
  "Awareness",
  "Training",
  "Team",
  "Outreach",
  "Events",
];

const galleryItems: GalleryItem[] = [
  {
    src: "/assets/snapchat-847966840-019d4f5c-4194-72ae-8b29-1624330cdd15.jpg",
    title: "PUZ Program Photo",
    category: "Events",
    description:
      "Pur Umeed Zindagi program -- Indus Hospital & Health Network.",
  },
  {
    src: "/assets/snapchat-1948415730-019d4f5c-443f-701e-bf5a-86238153fcc8.jpg",
    title: "PUZ Program Photo",
    category: "Events",
    description:
      "Pur Umeed Zindagi program -- Indus Hospital & Health Network.",
  },
  {
    src: "/assets/img-20260326-wa0053-019d4f54-c37f-73d8-8021-1ef555c6a95c.jpg",
    title: "PUZ Program Activity",
    category: "Events",
    description:
      "Pur Umeed Zindagi program activity -- Indus Hospital & Health Network.",
  },
  {
    src: "/assets/img-20260326-wa0054-019d4f54-c3ba-722f-87dc-c6a4ea3aa52c.jpg",
    title: "PUZ Program Activity",
    category: "Events",
    description:
      "Pur Umeed Zindagi program activity -- Indus Hospital & Health Network.",
  },
  {
    src: "/assets/generated/gallery-awareness-session.dim_800x500.jpg",
    title: "Mental Health Awareness Session",
    category: "Awareness",
    description:
      "Healthcare workers conducting mental health awareness training with community members.",
  },
  {
    src: "/assets/generated/gallery-community-outreach.dim_800x500.jpg",
    title: "Community Outreach Program",
    category: "Outreach",
    description:
      "PUZ team reaching out to rural communities across Sindh and Balochistan.",
  },
  {
    src: "/assets/generated/gallery-training-workshop.dim_800x500.jpg",
    title: "MHO Training Workshop",
    category: "Training",
    description:
      "Specialized psychiatric training workshop for Mental Health Officers (MHOs).",
  },
  {
    src: "/assets/generated/gallery-team-photo.dim_800x500.jpg",
    title: "PUZ Program Team",
    category: "Team",
    description:
      "The dedicated team of mental health professionals at Pur Umeed Zindagi.",
  },
  {
    src: "/assets/generated/gallery-counseling-session.dim_800x500.jpg",
    title: "Patient Counseling Session",
    category: "Outreach",
    description:
      "One-on-one counseling session at a primary healthcare clinic in rural Sindh.",
  },
  {
    src: "/assets/generated/gallery-mental-health-day.dim_800x500.jpg",
    title: "World Mental Health Day",
    category: "Events",
    description:
      "Annual World Mental Health Day event organized by PUZ at Indus Hospital.",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      <PageHeader
        title="Program Gallery"
        subtitle="Glimpses of our work across Pakistan"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background:
                    selectedCategory === cat ? "oklch(35% 0.2 145)" : "white",
                  color:
                    selectedCategory === cat ? "white" : "oklch(40% 0.04 145)",
                  border:
                    selectedCategory === cat
                      ? "1px solid oklch(35% 0.2 145)"
                      : "1px solid oklch(88% 0.03 145)",
                  boxShadow:
                    selectedCategory === cat
                      ? "0 4px 12px oklch(35% 0.2 145 / 0.3)"
                      : "0 1px 3px oklch(60% 0.02 145 / 0.08)",
                }}
                data-ocid="gallery.tab"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden border cursor-pointer card-hover"
                  style={{
                    borderColor: "oklch(88% 0.03 145)",
                    boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                  }}
                  onClick={() => setLightboxItem(item)}
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "16/10" }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: "oklch(20% 0.1 145 / 0.5)" }}
                    >
                      <ZoomIn className="w-10 h-10 text-white" />
                    </div>
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "oklch(35% 0.2 145)" }}
                    >
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3
                      className="font-semibold text-base mb-1"
                      style={{ color: "oklch(20% 0.06 145)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "oklch(10% 0.05 145 / 0.92)" }}
            onClick={() => setLightboxItem(null)}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxItem.src}
                alt={lightboxItem.title}
                className="w-full object-cover"
                style={{ maxHeight: "65vh" }}
              />
              <div className="p-5">
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  {lightboxItem.title}
                </h3>
                <p className="text-sm" style={{ color: "oklch(50% 0.04 145)" }}>
                  {lightboxItem.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white"
                style={{ background: "oklch(25% 0.12 145 / 0.7)" }}
                data-ocid="gallery.close_button"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
