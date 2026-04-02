import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const GreenHeader = ({
  title,
  subtitle,
}: { title: string; subtitle?: string }) => (
  <div className="py-16 green-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-white mb-3"
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

const regions = [
  {
    id: "karachi",
    name: "Karachi",
    color: "oklch(58% 0.2 200)",
    sites: [
      {
        name: "KC (Korangi Campus)",
        address: "Indus Hospital, Korangi Campus, Karachi",
      },
      { name: "Baba Island", address: "Baba Island Health Facility, Karachi" },
    ],
  },
  {
    id: "sindh",
    name: "Sindh",
    color: "oklch(58% 0.22 145)",
    sites: [
      {
        name: "CHB (Chandka Medical)",
        address: "Chandka Medical College Hospital, Larkana",
      },
      { name: "Makli", address: "Makli Health Facility, Thatta" },
      { name: "Matli", address: "Matli District Hospital, Badin" },
      { name: "Khorwah", address: "Khorwah Health Center, Sindh" },
      { name: "Shadi Large", address: "Shadi Large, Sindh" },
      { name: "Sehwan", address: "Sehwan Health Facility, Sindh" },
    ],
  },
  {
    id: "balochistan",
    name: "Balochistan",
    color: "oklch(75% 0.18 60)",
    sites: [
      {
        name: "Saranana (PCP)",
        address: "Saranana Primary Care Program, Balochistan",
      },
      {
        name: "Nokundi (PCP)",
        address: "Nokundi Primary Care Program, Balochistan",
      },
    ],
  },
  {
    id: "punjab",
    name: "Punjab",
    color: "oklch(70% 0.18 300)",
    sites: [
      { name: "Gurmani", address: "Gurmani Health Facility, Punjab" },
      {
        name: "Recep Tayyip Erdogan Hospital",
        address: "Recep Tayyip Erdogan Hospital, Punjab",
      },
      { name: "Rajanpur", address: "Rajanpur District Hospital, Punjab" },
      { name: "Samundari", address: "Samundari Health Center, Faisalabad" },
      { name: "Kot Addu", address: "Kot Addu Hospital, Muzaffargarh" },
    ],
  },
];

export default function Regions() {
  const [active, setActive] = useState("karachi");
  const activeRegion = regions.find((r) => r.id === active)!;

  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="Regions & Sites"
        subtitle="17+ active sites across 4 regions of Pakistan"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-3 mb-10" data-ocid="regions.tab">
            {regions.map((r) => (
              <button
                type="button"
                key={r.id}
                onClick={() => setActive(r.id)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all"
                style={{
                  background:
                    active === r.id ? r.color : "oklch(14% 0.045 145)",
                  borderColor:
                    active === r.id ? r.color : "oklch(22% 0.06 145)",
                  color: active === r.id ? "white" : "oklch(82% 0.02 145)",
                }}
                data-ocid="regions.tab"
              >
                {r.name} ({r.sites.length} sites)
              </button>
            ))}
          </div>

          {/* Sites Grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: activeRegion.color }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                {activeRegion.name} Region
              </h2>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "oklch(17% 0.05 145)",
                  color: "oklch(68% 0.025 145)",
                }}
              >
                {activeRegion.sites.length} sites
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeRegion.sites.map((site, i) => (
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-2xl p-6 border card-hover"
                  style={{
                    background: "oklch(14% 0.045 145)",
                    borderColor: "oklch(22% 0.06 145)",
                  }}
                  data-ocid={`regions.item.${i + 1}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${activeRegion.color}20` }}
                    >
                      <MapPin
                        className="w-5 h-5"
                        style={{ color: activeRegion.color }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base mb-1"
                        style={{ color: "oklch(96% 0.005 145)" }}
                      >
                        {site.name}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "oklch(68% 0.025 145)" }}
                      >
                        {site.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 green-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {regions.map((r) => (
              <div key={r.id}>
                <div className="text-3xl font-bold text-white">
                  {r.sites.length}
                </div>
                <div className="text-white/80 text-sm">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
